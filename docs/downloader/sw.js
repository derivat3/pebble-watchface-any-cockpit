// Update version to invalidate cache and trigger PWA update
const CACHE_NAME = "string-receiver-v5";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    clients.claim().then(() => {
      // Sends a signal to the frontend that an update is available
      return self.clients.matchAll().then((clients) => {
        clients.forEach((client) => client.postMessage({ type: "MSG_VERSION_UPDATED" }));
      });
    }),
  );
});

// IndexedDB helper function for storing in the service worker
function saveToIndexedDB(text) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("SharedDataDB", 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("shared_strings")) {
        db.createObjectStore("shared_strings", { keyPath: "id" });
      }
    };

    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction("shared_strings", "readwrite");
      const store = transaction.objectStore("shared_strings");

      const putRequest = store.put({ id: "latest", text: text, timestamp: Date.now() });

      putRequest.onsuccess = () => resolve();
      putRequest.onerror = () => reject(putRequest.error);
    };

    request.onerror = () => reject(request.error);
  });
}

// Intercepting Share Requests (optimized for subfolders)
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  if (event.request.method === "POST" && url.pathname.endsWith("/incoming-share")) {
    event.respondWith(
      (async () => {
        try {
          const formData = await event.request.formData();

          const sharedTitle = formData.get('title') || '';
          const sharedText = formData.get('text') || '';
          const sharedUrl = formData.get('url') || '';

          // Directly finds the field with the most characters
          const finalLongText = [sharedText, sharedTitle, sharedUrl].reduce((a, b) => a.length > b.length ? a : b);

          await saveToIndexedDB(finalLongText);

          // Replaces only the end of the URL to keep /downloader/
          const redirectUrl = event.request.url.replace("incoming-share", "?shared=true");
          return Response.redirect(redirectUrl, 303);
        } catch (error) {
          console.error("Error processing shared string:", error);
          const errorUrl = event.request.url.replace("incoming-share", "?error=share-failed");
          return Response.redirect(errorUrl, 303);
        }
      })(),
    );
  }
});
