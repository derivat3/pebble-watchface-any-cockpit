// update version to invalidate cache and to trigger PWA update 
const CACHE_NAME = 'string-receiver-v4';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim().then(() => {
    // Sendet ein Signal an das Frontend, dass ein Update da ist
    return self.clients.matchAll().then(clients => {
      clients.forEach(client => client.postMessage({ type: 'MSG_VERSION_UPDATED' }));
    });
  }));
});

// IndexedDB Hilfsfunktion zum Speichern im Service Worker
function saveToIndexedDB(text) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('SharedDataDB', 1);
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('shared_strings')) {
        db.createObjectStore('shared_strings', { keyPath: 'id' });
      }
    };

    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction('shared_strings', 'readwrite');
      const store = transaction.objectStore('shared_strings');
      
      const putRequest = store.put({ id: 'latest', text: text, timestamp: Date.now() });
      
      putRequest.onsuccess = () => resolve();
      putRequest.onerror = () => reject(putRequest.error);
    };

    request.onerror = () => reject(request.error);
  });
}

// Intercepting des Share-Requests (optimiert fuer Unterordner)
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Reagiert, wenn der Pfad auf das Share-Ziel im Unterordner endet
  if (event.request.method === 'POST' && url.pathname.endsWith('/incoming-share')) {
    event.respondWith(
      (async () => {
        try {
          const formData = await event.request.formData();
          const sharedText = formData.get('text') || formData.get('title') || '';

          await saveToIndexedDB(sharedText);

          // Ersetzt nur den hinteren Teil der URL, damit /downloader/ erhalten bleibt
          const redirectUrl = event.request.url.replace('incoming-share', '?shared=true');
          return Response.redirect(redirectUrl, 303);
        } catch (error) {
          console.error('Fehler beim Verarbeiten des geteilten Strings:', error);
          const errorUrl = event.request.url.replace('incoming-share', '?error=share-failed');
          return Response.redirect(errorUrl, 303);
        }
      })()
    );
  }
});
