module.exports = [
  {
    "type": "heading",
    "id": "SectionVersion",
    "defaultValue": '<div style="position: fixed; padding: 20px 0 10px 10px; z-index: 1000; ' +
    'background-color: #414141; top: 0; left: 0; width: 100%; border-bottom: 1px solid #646464;"> ' + 
    '<details><summary>Any Cockpit APP_VERSION_NO</summary>' + 
    '<ul style="text-transform: none; font-weight: normal; font-size: 14px;"><li>&nbsp;</li>' + 
    'APP_VERSION_LOG' + 
    '<li>&nbsp;</li><li><a href=\"https://derivat3.github.io/pebble-watchface-any-cockpit/\">More information</a></li></ul></details></div>'
  },
  {
    "type": "text",
    "id": "SectionHeader",
    "defaultValue": ""
  },

  {
    "type": "text",
    "defaultValue": '<a href="https://derivat3.github.io/pebble-watchface-any-cockpit/themes/list" style="box-shadow: 5px 5px 10px 0 rgba(0,0,0,.4); display: block; font-weight: bold; text-align: center; text-decoration: none; font-size: 18px; font-weight: normal; background-color: transparent; border: 1px solid #41EA15; color: #41EA15; border-radius: 4px; padding: 10px 20px;">Check out the new Themes Page!</a>'
  },

  // TODO: VARIATIONS
  {
    "type": "section",
    "items": [
      {
        "id": "SectionVariations",
        "type": "heading",
        "defaultValue": '<h2>Variations</h2>'
      },
      {
        "id": "SectionVariations_1",
        "type": "radiogroup",
        "label": "Mode:",
        "messageKey": "VariationAction",
        "defaultValue": "save",
        "options": [
          {
            "label": "Save",
            "value": "save"
          },
          {
            "label": "Save Watchface",
            "value": "saveWf"
          },
          {
            "label": "Load",
            "value": "load"
          },
          {
            "label": "Load Preset",
            "value": "preset"
          }
        ]
      },
      {
        "id": "SectionVariations_2",
        "type": "slider",
        "messageKey": "VariationSlot",
        "defaultValue": 1,
        "label": "Memory Slot",
        "description": "",
        "min": 1,
        "max": 10,
        "step": 1
      },
      {
        "type": "submit",
        "id": "SectionVariationsSubmit",
        "defaultValue": "OK"
      }
    ]
  },
  {
    "id": "SectionVariations_3",
    "type": "text",
    "defaultValue": "<br>"
  },

  // TODO: CLOCK-FACE
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "id": "SectionClockFace",
        "defaultValue": "<h2><img width=\"25\" height=\"25\" src='data:image/png;base64,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' /> Clock Face</h2>"
      },
      {
        "id": "SectionClockFace_1",
        "type": "color",
        "messageKey": "BackgroundColor",
        "defaultValue": "0xFFFFFF",
        "label": "Background Color"
      },
      {
        "id": "SectionClockFace_2",
        "type": "toggle",
        "messageKey": "FacePaintOver",
        "label": "Over-Paint Minutes + Hours",
        "defaultValue": false
      },
      {
        "id": "SectionClockFace_3",
        "type": "select",
        "messageKey": "FaceNoteLeft",
        "defaultValue": "hidden",
        "label": "Note Left",
        "options": [
          {
            "label": "Hidden",
            "value": "hidden"
          },
          {
            "label": "Second > 04",
            "value": "secL"
          },
          {
            "label": "Second > 4",
            "value": "secS"
          },
          {
            "label": "Minute > 06",
            "value": "minL"
          },
          {
            "label": "Minute > 6",
            "value": "minS"
          },
          {
            "label": "Hour > 02",
            "value": "houL"
          },
          {
            "label": "Hour > 02 pm",
            "value": "houL_"
          },
          {
            "label": "Hour > 2",
            "value": "houS"
          },
          {
            "label": "Hour > 2 pm",
            "value": "houS_"
          },
          {
            "label": "Time > 02:30",
            "value": "timS1"
          },
          {
            "label": "Time > 02:30 pm",
            "value": "timS1_"
          },
          {
            "label": "Time > 2:30",
            "value": "timS2"
          },
          {
            "label": "Time > 2:30 pm",
            "value": "timS2_"
          },
          {
            "label": "Time > 02:30:45",
            "value": "timL1"
          },
          {
            "label": "Time > 02:30:45 pm",
            "value": "timL1_"
          },
          {
            "label": "Time > 2:30:45",
            "value": "timL2"
          },
          {
            "label": "Time > 2:30:45 pm",
            "value": "timL2_"
          },
          {
            "label": "Day > 04",
            "value": "dayL"
          },
          {
            "label": "Day > 4",
            "value": "dayS"
          },
          {
            "label": "Weekday > Sun",
            "value": "wdaS"
          },
          {
            "label": "Weekday > Sunday",
            "value": "wdaL"
          },
          {
            "label": "Month > Oct",
            "value": "monS"
          },
          {
            "label": "Month > October",
            "value": "monL"
          },
          {
            "label": "Year > 19",
            "value": "yeaS"
          },
          {
            "label": "Year > 2019",
            "value": "yeaL"
          },
          {
            "label": "Date > 04/28/19",
            "value": "datU"
          },
          {
            "label": "Date > 04/28",
            "value": "datS1"
          },
          {
            "label": "Date > 28.04.19",
            "value": "datE"
          },
          {
            "label": "Date > 28.04.",
            "value": "datS2"
          },
          {
            "label": "Date > 28.4",
            "value": "datS3"
          },
          {
            "label": "Date > 28 Apr",
            "value": "datS4"
          },
          {
            "label": "Date > Apr 28",
            "value": "datS5"
          },
          {
            "label": "Date > Sun 28",
            "value": "datS6"
          },
          {
            "label": "Calendar Week > 4",
            "value": "cweS"
          },
          {
            "label": "Calendar Week > 04",
            "value": "cweL"
          },
          {
            "label": "Calendar Week > W04",
            "value": "cweU"
          },
          {
            "label": "Calendar Week > KW 4",
            "value": "cweG"
          },
          {
            "label": "Battery > 90%",
            "value": "bat"
          },
        ]
      },
      {
        "id": "SectionClockFace_4",
        "type": "select",
        "messageKey": "FaceNoteRight",
        "defaultValue": "dayS",
        "label": "Note Right",
        "options": [
          {
            "label": "Hidden",
            "value": "hidden"
          },
          {
            "label": "Second > 04",
            "value": "secL"
          },
          {
            "label": "Second > 4",
            "value": "secS"
          },
          {
            "label": "Minute > 06",
            "value": "minL"
          },
          {
            "label": "Minute > 6",
            "value": "minS"
          },
          {
            "label": "Hour > 02",
            "value": "houL"
          },
          {
            "label": "Hour > 02 pm",
            "value": "houL_"
          },
          {
            "label": "Hour > 2",
            "value": "houS"
          },
          {
            "label": "Hour > 2 pm",
            "value": "houS_"
          },
          {
            "label": "Time > 02:30",
            "value": "timS1"
          },
          {
            "label": "Time > 02:30 pm",
            "value": "timS1_"
          },
          {
            "label": "Time > 2:30",
            "value": "timS2"
          },
          {
            "label": "Time > 2:30 pm",
            "value": "timS2_"
          },
          {
            "label": "Time > 02:30:45",
            "value": "timL1"
          },
          {
            "label": "Time > 02:30:45 pm",
            "value": "timL1_"
          },
          {
            "label": "Time > 2:30:45",
            "value": "timL2"
          },
          {
            "label": "Time > 2:30:45 pm",
            "value": "timL2_"
          },
          {
            "label": "Day > 04",
            "value": "dayL"
          },
          {
            "label": "Day > 4",
            "value": "dayS"
          },
          {
            "label": "Weekday > Sun",
            "value": "wdaS"
          },
          {
            "label": "Weekday > Sunday",
            "value": "wdaL"
          },
          {
            "label": "Month > Oct",
            "value": "monS"
          },
          {
            "label": "Month > October",
            "value": "monL"
          },
          {
            "label": "Year > 19",
            "value": "yeaS"
          },
          {
            "label": "Year > 2019",
            "value": "yeaL"
          },
          {
            "label": "Date > 04/28/19",
            "value": "datU"
          },
          {
            "label": "Date > 04/28",
            "value": "datS1"
          },
          {
            "label": "Date > 28.04.19",
            "value": "datE"
          },
          {
            "label": "Date > 28.04.",
            "value": "datS2"
          },
          {
            "label": "Date > 28.4",
            "value": "datS3"
          },
          {
            "label": "Date > 28 Apr",
            "value": "datS4"
          },
          {
            "label": "Date > Apr 28",
            "value": "datS5"
          },
          {
            "label": "Date > Sun 28",
            "value": "datS6"
          },
          {
            "label": "Calendar Week > 4",
            "value": "cweS"
          },
          {
            "label": "Calendar Week > 04",
            "value": "cweL"
          },
          {
            "label": "Calendar Week > W04",
            "value": "cweU"
          },
          {
            "label": "Calendar Week > KW 4",
            "value": "cweG"
          },
          {
            "label": "Battery > 90%",
            "value": "bat"
          },
        ]
      },
    ]
  },
  // TODO: .    MINUTE STROKES
  {
    "type": "section",
    "items": [
      {
        "type": "text",
        "id": "SectionClockFace_5",
        "defaultValue": "&nbsp;&#x25B6;&nbsp;&nbsp; Minute Strokes"
      },
      {
        "id": "SectionClockFace_5_1",
        "type": "color",
        "messageKey": "FaceMinuteColor",
        "defaultValue": "0x000000",
        "label": "Minute Color"
      },
      {
        "id": "SectionClockFace_5_2",
        "type": "slider",
        "messageKey": "FaceMinuteLength",
        "defaultValue": 8,
        "label": "Minute Length",
        "description": "",
        "min": 0,
        "max": 100,
        "step": 1
      },
      {
        "id": "SectionClockFace_5_3",
        "type": "slider",
        "messageKey": "FaceMinuteThickness",
        "defaultValue": 1,
        "label": "Minute Thickness (Rand. max)",
        "description": "",
        "min": 0,
        "max": 5,
        "step": 1
      },
      {
        "id": "SectionClockFace_5_4",
        "type": "slider",
        "messageKey": "FaceMinuteOffset",
        "defaultValue": 0,
        "label": "Minute Offset",
        "description": "",
        "min": 0,
        "max": 200,
        "step": 1
      },
      {
        "id": "SectionClockFace_5Hide",
        "type": "heading",
        "defaultValue": '<center style="background-color: #414141; padding: 10px; margin: -13px; border-radius: 0 0 4px 4px; z-index: 1; position: relative;">&#x25B2;</center>'
      },
    ]
  },
  // TODO: .    HOUR STROKES
  {
    "type": "section",
    "items": [
      {
        "type": "text",
        "id": "SectionClockFace_6",
        "defaultValue": "&nbsp;&#x25B6;&nbsp;&nbsp; Hour Strokes"
      },
      {
        "id": "SectionClockFace_6_1",
        "type": "color",
        "messageKey": "FaceHourColor",
        "defaultValue": "0x000000",
        "label": "Hour Color"
      },
      {
        "id": "SectionClockFace_6_2",
        "type": "slider",
        "messageKey": "FaceHourLength",
        "defaultValue": 20,
        "label": "Hour Length",
        "description": "",
        "min": 0,
        "max": 100,
        "step": 1
      },
      {
        "id": "SectionClockFace_6_3",
        "type": "slider",
        "messageKey": "FaceHourThickness",
        "defaultValue": 3,
        "label": "Hour Thickness (Rand. max)",
        "description": "",
        "min": 0,
        "max": 30,
        "step": 1
      },
      {
        "id": "SectionClockFace_6_4",
        "type": "slider",
        "messageKey": "FaceHourOffset",
        "defaultValue": 0,
        "label": "Hour Offset",
        "description": "",
        "min": 0,
        "max": 200,
        "step": 1
      },
      {
        "id": "SectionClockFace_6Hide",
        "type": "heading",
        "defaultValue": '<center style="background-color: #414141; padding: 10px; margin: -13px; border-radius: 0 0 4px 4px; z-index: 1; position: relative;">&#x25B2;</center>'
      },
    ]
  },
  // TODO: .    CARDINAL STROKES
  {
    "type": "section",
    "items": [
      {
        "type": "text",
        "id": "SectionClockFace_7",
        "defaultValue": "&nbsp;&#x25B6;&nbsp;&nbsp; Cardinal Strokes"
      },
      {
        "id": "SectionClockFace_7_1",
        "type": "color",
        "messageKey": "FaceCardinalColor",
        "defaultValue": "0x000000",
        "label": "Cardinal Color"
      },
      {
        "id": "SectionClockFace_7_2",
        "type": "slider",
        "messageKey": "FaceCardinalLength",
        "defaultValue": 20,
        "label": "Cardinal Length",
        "description": "",
        "min": 0,
        "max": 100,
        "step": 1
      },
      {
        "id": "SectionClockFace_7_3",
        "type": "slider",
        "messageKey": "FaceCardinalThickness",
        "defaultValue": 3,
        "label": "Cardinal Thickness (Rand. max)",
        "description": "",
        "min": 0,
        "max": 30,
        "step": 1
      },
      {
        "id": "SectionClockFace_7_4",
        "type": "slider",
        "messageKey": "FaceCardinalOffset",
        "defaultValue": 0,
        "label": "Cardinal Offset",
        "description": "",
        "min": 0,
        "max": 200,
        "step": 1
      },
      {
        "id": "SectionClockFace_7Hide",
        "type": "heading",
        "defaultValue": '<center style="background-color: #414141; padding: 10px; margin: -13px; border-radius: 0 0 4px 4px; z-index: 1; position: relative;">&#x25B2;</center>'
      },
    ]
  },
  {
    "type": "text",
    "id": "SectionClockFace_8",
    "defaultValue": "<br>"
  },

  // TODO: CLOCK-HANDS
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "id": "SectionClockHands",
        "defaultValue": "<h2><img width=\"25\" height=\"25\" src='data:image/png;base64,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' /> Clock Hands</h2>"
      },
      {
        "type": "toggle",
        "id": "SectionClockHands_1",
        "messageKey": "ShowSecondTick",
        "label": "Show Second Tick",
        "defaultValue": false
      },
    ]
  },
  // TODO: .    HOUR
  {
    "type": "section",
    "items": [
      {
        "type": "text",
        "id": "SectionClockHands_2",
        "defaultValue": "&nbsp;&#x25B6;&nbsp;&nbsp; Hour"
      },
      {
        "type": "color",
        "id": "SectionClockHands_2_1",
        "messageKey": "HandHourColor",
        "defaultValue": "0x000000",
        "label": "Hour Color"
      },
      {
        "type": "slider",
        "id": "SectionClockHands_2_2",
        "messageKey": "HandHourLength",
        "defaultValue": 35,
        "label": "Hour Length",
        "description": "",
        "min": 0,
        "max": 50,
        "step": 1
      },
      {
        "type": "slider",
        "id": "SectionClockHands_2_3",
        "messageKey": "HandHourThickness",
        "defaultValue": 8,
        "label": "Hour Thickness (Rand. max)",
        "description": "",
        "min": 0,
        "max": 30,
        "step": 1
      },
      {
        "id": "SectionClockHands_2Hide",
        "type": "heading",
        "defaultValue": '<center style="background-color: #414141; padding: 10px; margin: -13px; border-radius: 0 0 4px 4px; z-index: 1; position: relative;">&#x25B2;</center>'
      },
    ]
  },
  // TODO: .    MINUTE
  {
    "type": "section",
    "items": [
      {
        "type": "text",
        "id": "SectionClockHands_3",
        "defaultValue": "&nbsp;&#x25B6;&nbsp;&nbsp; Minute"
      },
      {
        "type": "color",
        "id": "SectionClockHands_3_1",
        "messageKey": "HandMinuteColor",
        "defaultValue": "0x000000",
        "label": "Minute Color"
      },
      {
        "type": "slider",
        "id": "SectionClockHands_3_2",
        "messageKey": "HandMinuteLength",
        "defaultValue": 60,
        "label": "Minute Length",
        "description": "",
        "min": 0,
        "max": 100,
        "step": 1
      },
      {
        "type": "slider",
        "id": "SectionClockHands_3_3",
        "messageKey": "HandMinuteThickness",
        "defaultValue": 6,
        "label": "Minute Thickness (Rand. max)",
        "description": "",
        "min": 0,
        "max": 30,
        "step": 1
      },
      {
        "id": "SectionClockHands_3Hide",
        "type": "heading",
        "defaultValue": '<center style="background-color: #414141; padding: 10px; margin: -13px; border-radius: 0 0 4px 4px; z-index: 1; position: relative;">&#x25B2;</center>'
      },
    ]
  },
  // TODO: .    SECOND
  {
    "type": "section",
    "items": [
      {
        "type": "text",
        "id": "SectionClockHands_4",
        "defaultValue": "&nbsp;&#x25B6;&nbsp;&nbsp; Second"
      },
      {
        "type": "color",
        "id": "SectionClockHands_4_1",
        "messageKey": "HandSecondColor",
        "defaultValue": "0x000000",
        "label": "Second Color"
      },
      {
        "type": "slider",
        "id": "SectionClockHands_4_2",
        "messageKey": "HandSecondLength",
        "defaultValue": 70,
        "label": "Second Length",
        "description": "",
        "min": 0,
        "max": 100,
        "step": 1
      },
      {
        "type": "slider",
        "id": "SectionClockHands_4_3",
        "messageKey": "HandSecondThickness",
        "defaultValue": 1,
        "label": "Second Thickness (Rand. max)",
        "description": "",
        "min": 0,
        "max": 5,
        "step": 1
      },
      {
        "id": "SectionClockHands_4Hide",
        "type": "heading",
        "defaultValue": '<center style="background-color: #414141; padding: 10px; margin: -13px; border-radius: 0 0 4px 4px; z-index: 1; position: relative;">&#x25B2;</center>'
      },
    ]
  },
  {
    "type": "text",
    "id": "SectionClockHands_5",
    "defaultValue": "<br>"
  },

  // TODO: CALENDAR
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "id": "SectionCalendar",
        "defaultValue": "<h2><img width=\"25\" height=\"25\" src='data:image/png;base64,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' /> Calendar</h2>"
      },
      {
        "type": "toggle",
        "id": "SectionCalendar_1",
        "messageKey": "CalendarEnabled",
        "label": "Enable Calendar",
        "defaultValue": false
      },
      {
        "type": "toggle",
        "id": "SectionCalendar_2",
        "messageKey": "CalendarForceFetchData",
        "label": "Manual Refresh Data",
        "defaultValue": false
      },
    ]
  },
  // TODO: .    CREDENTIALS
  {
    "type": "section",
    "items": [
      {
        "type": "text",
        "id": "SectionCalendar_3",
        "defaultValue": "&nbsp;&#x25B6;&nbsp;&nbsp; Credentials"
      },
      {
        "type": "input",
        "id": "SectionCalendar_3_1",
        "messageKey": "CalendarId",
        "defaultValue": "",
        "label": "Public Calendar Id",
        "attributes": {
          "placeholder": "eg: xxxxxxxxxxxxxxx@group.calendar.google.com",
          "limit": 60,
          "type": "email"
        }
      },
      {
        "type": "input",
        "id": "SectionCalendar_3_2",
        "messageKey": "GoogleApiKey",
        "defaultValue": "",
        "label": "Google Api Key",
        "attributes": {
          "placeholder": "eg: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          "limit": 60,
          "type": "text"
        }
      },
      {
        "type": "text",
        "id": "SectionCalendar_3_3",
        "defaultValue": "<strong>&#x25B6; &nbsp;<em><a href=\"https://derivat3.github.io/pebble-watchface-any-cockpit/howto/index.html#how-to-setup-google-calendar-credentials\">How do I create my calendar credentials?</a></em></strong>"
      },
      {
        "id": "SectionCalendar_3Hide",
        "type": "heading",
        "defaultValue": '<center style="background-color: #414141; padding: 10px; margin: -13px; border-radius: 0 0 4px 4px; z-index: 1; position: relative;">&#x25B2;</center>'
      },
    ]
  },
  // TODO: .    STYLING
  {
    "type": "section",
    "items": [
      {
        "type": "text",
        "id": "SectionCalendar_4",
        "defaultValue": "&nbsp;&#x25B6;&nbsp;&nbsp; Styling"
      },
      {
        "type": "color",
        "id": "SectionCalendar_4_1",
        "messageKey": "NextDateColor",
        "defaultValue": "0x0000AA",
        "label": "Next Date Color"
      },
      {
        "type": "color",
        "id": "SectionCalendar_4_2",
        "messageKey": "ActiveDateColor",
        "defaultValue": "0xFF0000",
        "label": "Active Date Color"
      },
      {
        "type": "color",
        "id": "SectionCalendar_4_3",
        "messageKey": "InactiveDateColor",
        "defaultValue": "0xAAAAAA",
        "label": "Inactive Date Color"
      },
      {
        "type": "slider",
        "id": "SectionCalendar_4_4",
        "messageKey": "DateThickness",
        "defaultValue": 23,
        "label": "Date Thickness",
        "description": "",
        "min": 0,
        "max": 100,
        "step": 1
      },
      {
        "type": "slider",
        "id": "SectionCalendar_4_5",
        "messageKey": "DateOffset",
        "defaultValue": 0,
        "label": "Date Offset",
        "description": "",
        "min": 0,
        "max": 200,
        "step": 1
      },
      {
        "id": "SectionCalendar_4Hide",
        "type": "heading",
        "defaultValue": '<center style="background-color: #414141; padding: 10px; margin: -13px; border-radius: 0 0 4px 4px; z-index: 1; position: relative;">&#x25B2;</center>'
      },
    ]
  },
  // TODO: .    ALERTS
  {
    "type": "section",
    "items": [
      {
        "type": "text",
        "id": "SectionCalendar_5",
        "defaultValue": "&nbsp;&#x25B6;&nbsp;&nbsp; Alerts"
      },
      {
        "type": "select",
        "id": "SectionCalendar_5_1",
        "messageKey": "NotificationTextMinute",
        "defaultValue": "30",
        "label": "Date Notes",
        "options": [
          {
            "label": "Hide Notes",
            "value": "0"
          },
          {
            "label": "1 Minute ahead",
            "value": "1"
          },
          {
            "label": "2 Minutes ahead",
            "value": "2"
          },
          {
            "label": "3 Minutes ahead",
            "value": "3"
          },
          {
            "label": "5 Minutes ahead",
            "value": "5"
          },
          {
            "label": "10 Minutes ahead",
            "value": "10"
          },
          {
            "label": "30 Minutes ahead",
            "value": "30"
          },
          {
            "label": "1 Hour ahead",
            "value": "60"
          },
          {
            "label": "2 Hour ahead",
            "value": "120"
          },
          {
            "label": "3 Hour ahead",
            "value": "180"
          },
          {
            "label": "Unlimited",
            "value": "900"
          },
        ]
      },
      {
        "type": "color",
        "id": "SectionCalendar_5_2",
        "messageKey": "DateTitleColor",
        "defaultValue": "0xFFFFFF",
        "label": "Bezel: Text Color"
      },
      {
        "type": "color",
        "id": "SectionCalendar_5_4",
        "messageKey": "DateBorderColor",
        "defaultValue": "0xFFFFFF",
        "label": "Bezel: Border Color"
      },
      {
        "type": "select",
        "id": "SectionCalendar_5_3",
        "messageKey": "NotificationCounter",
        "defaultValue": "10",
        "label": "Date Counter",
        "options": [
          {
            "label": "No Counter",
            "value": "0"
          },
          {
            "label": "1 Minute",
            "value": "1"
          },
          {
            "label": "2 Minutes",
            "value": "2"
          },
          {
            "label": "3 Minutes",
            "value": "3"
          },
          {
            "label": "5 Minutes",
            "value": "5"
          },
          {
            "label": "10 Minutes",
            "value": "10"
          },
          {
            "label": "30 Minutes",
            "value": "30"
          },
          {
            "label": "60 Minutes",
            "value": "60"
          }
        ]
      },
      {
        "type": "toggle",
        "id": "SectionCalendar_5_5",
        "messageKey": "NotificationPulse",
        "label": "Counter Vibration",
        "defaultValue": false
      },   
      {
        "id": "SectionCalendar_5Hide",
        "type": "heading",
        "defaultValue": '<center style="background-color: #414141; padding: 10px; margin: -13px; border-radius: 0 0 4px 4px; z-index: 1; position: relative;">&#x25B2;</center>'
      },
    ]
  },
  {
    "type": "text",
    "id": "SectionCalendar_6",
    "defaultValue": "<br>"
  },

  // TODO: SHAKE EVENTS
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "id": "SectionShakeEvents",
        "defaultValue": "<h2><img width=\"25\" height=\"25\" src='data:image/png;base64,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' /> Shake Events</h2>"
      },      
      {
        "type": "radiogroup",
        "id": "SectionShakeEvents_1",
        "messageKey": "ShakeEventType",
        "defaultValue": "none",
        "label": "Type:",
        "options": [
          {
            "label": "None",
            "value": "none"
          },
          {
            "label": "Show calendar date notes",
            "value": "cal"
          },
          {
            "label": "Trigger random generator",
            "value": "rand"
          },
          {
            "label": "Step through watchfaces",
            "value": "step"
          }
        ]
      },
      {
        "type": "slider",
        "id": "SectionShakeEvents_2",
        "messageKey": "ShakeEventStart",
        "defaultValue": 1,
        "label": "Watchface Step Start",
        "description": "",
        "min": 1,
        "max": 10,
        "step": 1
      },
      {
        "type": "slider",
        "id": "SectionShakeEvents_3",
        "messageKey": "ShakeEventStop",
        "defaultValue": 10,
        "label": "Watchface Step Stop",
        "description": "",
        "min": 1,
        "max": 10,
        "step": 1
      },
      {
        "id": "SectionShakeEventsHide",
        "type": "heading",
        "defaultValue": '<center style="background-color: #414141; padding: 10px; margin: -13px; border-radius: 0 0 4px 4px; z-index: 1; position: relative;">&#x25B2;</center>'
      },
    ]
  },
  {
    "type": "text",
    "id": "SectionShakeEvents_4",
    "defaultValue": "<br>"
  },

  // TODO: CUSTOM VALUES
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "id": "SectionCustomVar",
        "defaultValue": "<h2><img width=\"25\" height=\"25\" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAABg2lDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rw2Ecx1+GJqMpDg4O3zROm2Zq4aBMGrWkmTJctu9+qW2+fb+T5KpcFSUufh34C7gqZ6WIlJwcnIkL+vp8t9WW7PP0eT6v5/08n0/P83nAFsmqOaPBC7l8QQ8HA8pcdF6xv9CAgzbcDMdUQxudng5R0z7vqbPirceqVfvcv+ZIJA0V6pqER1RNLwhPCIdWC5rFO8IdaiaWED4TdutyQeE7S4+X+NXidIm/LdYj4TGwtQkr6SqOV7Ga0XPC8nJcueyKWr6P9ZKWZH52RmK3eBcGYYIEUJhknDH89DMksx8PPvpkRY18bzF/imXJVWXWWENniTQZCtJbhRWpnpSYEj0pI8ua1f+/fTVSA75S9ZYAND6b5nsP2LfhZ8s0v45M8+cY6p/gMl/JXz6EwQ/Rtyqa6wCcG3B+VdHiu3CxCZ2PWkyPFaV6cVsqBW+n0BqF9htoXij1rLzPyQNE1uWrrmFvH3rlvHPxF5efZ/yTnfJfAAAACXBIWXMAAAsTAAALEwEAmpwYAAADiklEQVRoge2aPYyUVRSG36O7wGKw0IAQGkFMdhMLE37UGKxYkBhDYaeGoEY6CBRQSEMhhVbEisRgYSEdjdktSTZZWP5iREw0xqyJRGGXwh+Q1YXlsZgz7OHLzsx373z8bPjeZDL355z3vGfmzr33u3ekGjVq1KjxCMBSHYAVkhZ7ddzMqFbSnTgmabVXb5jZ5XsRZDMwBlznbvRVHmw2Zl8h1nXgFDBYVYADtMb9TCziQCf/tkMRGJB0QVKvN81IGpP0m6R/JX1oZje7zKFV7F5Jn0taJGmlpFckPe7d05JeNLMfcsn3h0/pD6C/CtGZWvpdQxP72tk/1oFvIJSPmtmP3UvMg8f+IjQNtLKVOie2NJR/yRVVIcZDeWlLK3VOLOK/PC2VImpoOz+kJDavUCc231AnVhbAW8D3/trbwfag210EXq5aS7vAQ2FBfLukjwFfh/3dyhZ2/cC02x0pyf1O0DOUkkuR6Fwg2pLg9xTwq/sdn6PfgBPefxFYVJL39aDnbEouRaIrgWhdou9rwIz77ij07fH2KeCFBM71QU/eYwywALgdiJ7N4Djkvn81/YEBTwhgdyLfqqBnhsZGOVnUS9yNJRkcPcBp9x8BFobhPZzB92RB04ZUgl3ApUBwKlVE4HoO+Nt5vvH3CeCZTL6xoOsSsDPFeSo4nwHW5IgIfNsLn/QbXXCtcU1NTM1lV2Yd68kVEfCTpObZyLS6e1IwzT74pgHYWRiKo7kq/Hcx7jx/+vsFYGEm38nCUNyVSrChMHySJw/nOeb+P9OY1Sa9fjiDqzh5rM8R1Ev30/0O950BXvW2bd52G9iayNf9dO9ElwPR2kTf54Fr7vtJoe+ot08AyxI41wU9v6foKRKdDUQpW6pe4Lz7fQcsKPQvYfZ3N0zjcLQMb9xSnWln22lWvBrKT5cJ7vhU0lpJtyRtN7Pp2Glm1yS959WtkvaX5I0arra0UufE4vH14pZW0QG2Sdrj1c/M7Nu57MxsRNKXXv0Y2FiCvvQBbRVr1B0APZI2SfpKjW/rYAeXfWocgpqkN4HRqu4CKk3MzG5JKr2umNmkpHer1NBEfTQw31AnJilrb1cxooa2k0zKOrYqW051WB3KXa1j8f7pAx7wNZKk90NT27uxR/PizwM8jFe1H1UVZJDGxfbDcLm+qYx/zt8hlkt6wqv36+8Q/5jZlXsRp0aNGjVqzGv8DyHyekrNUmhiAAAAAElFTkSuQmCC' /> Custom Values</h2>"
      },
      {
        "type": "input",
        "id": "SectionCustomVarHidden",
        "messageKey": "CustomVarCV",
        "defaultValue": "",
        "label": "CV Object",
        "attributes": {
          "placeholder": "empty",
          "type": "text"
        }
      },
      {
        "type": "toggle",
        "id": "SectionCustomVar_1", // CustomVarDisabled
        "label": "Disabled",
        "description": "Will also be set on Errors",
        "defaultValue": false
      },
      {
        "type": "text",
        "id": "SectionCustomVar_2",
        "defaultValue": "Custom Value 1"
      },
      {
        "id": "SectionCustomVar_3", // CustomVarSlot
        "type": "slider",
        "defaultValue": 1,
        "label": "",
        "description": "",
        "min": 1,
        "max": 10,
        "step": 1
      },
    ]
  },
  // TODO: .    STATIC VARIABLES
  {
    "type": "section",
    "items": [
      {
        "type": "text",
        "id": "SectionCustomVar_4",
        "defaultValue": "&nbsp;&#x25B6;&nbsp;&nbsp; Static Variables"
      },
      {
        "type": "text",
        "id": "SectionCustomVar_4_1",
        "defaultValue": "Variable: _lon_<br><div style=\"color: #A4A4A4; font-size: 15px; padding-top: 10px;\">Longitude fetched by your phone</div>"
      },
      {
        "type": "text",
        "id": "SectionCustomVar_4_2",
        "defaultValue": "Variable: _lat_<br><div style=\"color: #A4A4A4; font-size: 15px; padding-top: 10px;\">Latitude fetched by your phone</div>"
      },
      {
        "type": "text",
        "id": "SectionCustomVar_4_3",
        "defaultValue": "Variable: _cV#S1_"
      },
      {
        "type": "input",
        "id": "SectionCustomVar_4_4", // CustomVarVariableS1
        "defaultValue": "",
        "label": " ",
        "attributes": {
          "placeholder": "optional: [string]",
          "type": "text"
        }
      },
      {
        "type": "text",
        "id": "SectionCustomVar_4_5",
        "defaultValue": "Variable: _cV#S2_"
      },
      {
        "type": "input",
        "id": "SectionCustomVar_4_6", // CustomVarVariableS2
        "defaultValue": "",
        "label": " ",
        "attributes": {
          "placeholder": "optional: [string]",
          "type": "text"
        }
      },
      {
        "type": "text",
        "id": "SectionCustomVar_4_7",
        "defaultValue": "Variable: _cV#S3_"
      },
      {
        "type": "input",
        "id": "SectionCustomVar_4_8", // CustomVarVariableS3
        "defaultValue": "",
        "label": " ",
        "attributes": {
          "placeholder": "optional: [string]",
          "type": "text"
        }
      },
      {
        "id": "SectionCustomVar_4Hide",
        "type": "heading",
        "defaultValue": '<center style="background-color: #414141; padding: 10px; margin: -13px; border-radius: 0 0 4px 4px; z-index: 1; position: relative;">&#x25B2;</center>'
      },
    ]
  },
  // TODO: .    REQUEST SETTINGS
  {
    "type": "section",
    "items": [
      {
        "type": "text",
        "id": "SectionCustomVar_5",
        "defaultValue": "&nbsp;&#x25B6;&nbsp;&nbsp; Request / Source"
      },
      {
        "type": "input",
        "id": "SectionCustomVar_5_1", // CustomVarUrl
        "defaultValue": "",
        "label": "Request GET-Url / Source",
        "description": "Optional with placeholders: _cV6_, _cV2S1_ ...",
        "attributes": {
          "placeholder": "optional: [string,json,_placeholder_]",
          "type": "text"
        }
      },
      {
        "type": "input",
        "id": "SectionCustomVar_5_2", // CustomVarHeaderKey
        "defaultValue": "",
        "label": "Header Key",
        "attributes": {
          "placeholder": "eg. API_KEY",
          "limit": 60,
          "type": "text"
        }
      },
      {
        "type": "input",
        "id": "SectionCustomVar_5_3", // CustomVarHeaderValue
        "defaultValue": "",
        "label": "Header Value",
        "attributes": {
          "placeholder": "eg. XXXXXXXXXXXXXXXXXXXXXXX",
          "type": "text"
        }
      },
      {
        "type": "slider",
        "id": "SectionCustomVar_5_4", // CustomVarInterval
        "defaultValue": 60,
        "label": "Request Interval (min)",
        "description": "(0 will interpreted as 1)",
        "min": 0,
        "max": 1440,
        "step": 15
      },
      {
        "id": "SectionCustomVar_5Hide",
        "type": "heading",
        "defaultValue": '<center style="background-color: #414141; padding: 10px; margin: -13px; border-radius: 0 0 4px 4px; z-index: 1; position: relative;">&#x25B2;</center>'
      },
    ]
  },
  // TODO: .    RESPONSE VARIABLES
  {
    "type": "section",
    "items": [
      {
        "type": "text",
        "id": "SectionCustomVar_6",
        "defaultValue": "&nbsp;&#x25B6;&nbsp;&nbsp; Response Variables"
      },
      {
        "type": "text",
        "id": "SectionCustomVar_6_1",
        "defaultValue": "Raw Response: _cV#R0_"
      },
      {
        "type": "select",
        "id": "SectionCustomVar_6_2", // CustomVarSelectorType
        "description": "",
        "defaultValue": "get",
        "label": "Selector Type",
        "options": [
          {
            "label": "_.get()  ",
            "value": "get"
          },
          {
            "label": "_.find()  ",
            "value": "find"
          },
        ]
      },
      {
        "type": "text",
        "id": "SectionCustomVar_6_3",
        "defaultValue": "<details style=\" position: relative; z-index: 1; margin: 0 -10px; padding: 0 10px; top: -15px; border-top:10px solid #484848;\"><summary style=\"font-size:0;\"><span style=\"font-size:18px;\">Documentation: lodash.com/docs/    [more]</span></summary><br><div style=\"display:block; color: #cccccc; padding:10px; border-radius:4px; font-size: 14px; background-color: #414141;\"><div><div>_.get(): <a style=\"display:inline-block; float: right;\" href=\"https://lodash.com/docs/#get\">Open Documentation</a></div><br>items[3].key    ['items', '3', 'key']    sharePrice</div><br><br><div><div>_.find(): <a style=\"display:inline-block; float: right;\" href=\"https://lodash.com/docs/#find\">Open Documentation</a></div><br>{'country': 'USA'}    ['active', true]    active</div></div></details>"
      },
      {
        "type": "text",
        "id": "SectionCustomVar_6_4",
        "defaultValue": "Selector: _cV#R1_"
      },
      {
        "type": "input",
        "id": "SectionCustomVar_6_5", // CustomVarSelectorR1
        "defaultValue": "",
        "label": " ",
        "attributes": {
          "placeholder": "optional: [string,object,json, || ]",
          "limit": 60,
          "type": "text"
        }
      },
      {
        "type": "text",
        "id": "SectionCustomVar_6_6",
        "defaultValue": "Selector: _cV#R2_"
      },
      {
        "type": "input",
        "id": "SectionCustomVar_6_7", // CustomVarSelectorR2
        "defaultValue": "",
        "label": " ",
        "attributes": {
          "placeholder": "optional: [string,object,json, || ]",
          "limit": 60,
          "type": "text"
        }
      },
      {
        "type": "text",
        "id": "SectionCustomVar_6_8",
        "defaultValue": "Selector: _cV#R3_"
      },
      {
        "type": "input",
        "id": "SectionCustomVar_6_9", // CustomVarSelectorR3
        "defaultValue": "",
        "label": " ",
        "attributes": {
          "placeholder": "optional: [string,object,json, || ]",
          "limit": 60,
          "type": "text"
        }
      },
      {
        "id": "SectionCustomVar_6Hide",
        "type": "heading",
        "defaultValue": '<center style="background-color: #414141; padding: 10px; margin: -13px; border-radius: 0 0 4px 4px; z-index: 1; position: relative;">&#x25B2;</center>'
      },
    ]
  },
  // TODO: .    CUSTOM VALUE
  {
    "type": "section",
    "items": [
      {
        "type": "text",
        "id": "SectionCustomVar_7",
        "defaultValue": "&nbsp;&#x25B6;&nbsp;&nbsp; Custom Value"
      },
      {
        "type": "text",
        "id": "SectionCustomVar_7_1",
        "defaultValue": "Value: _cV#_"
      },
      {
        "type": "input",
        "id": "SectionCustomVar_7_2", // CustomVarValue
        "description": "Max. 200 chars with placeholders: _cV6_, _cV2S1_ ... + Exlusiv for this field: use _br_ vor line breaks!",
        "defaultValue": "",
        "label": " ",
        "attributes": {
          "placeholder": "optional: [string,_placeholder_]",
          "limit": 200,
          "type": "text"
        }
      },
      {
        "type": "input",
        "id": "SectionCustomVar_7_3", // CustomVarLabel
        "description": "Max. 10 chars with placeholders: _cV6_, _cV2S1_ ...",
        "defaultValue": "",
        "label": "Label",
        "attributes": {
          "placeholder": "optional: [string]",
          "limit": 10,
          "type": "text"
        }
      },
      {
        "id": "SectionCustomVar_7Hide",
        "type": "heading",
        "defaultValue": '<center style="background-color: #414141; padding: 10px; margin: -13px; border-radius: 0 0 4px 4px; z-index: 1; position: relative;">&#x25B2;</center>'
      },
    ]
  },
  // TODO: .    VALUE TUNING
  {
    "type": "section",
    "items": [
      {
        "type": "text",
        "id": "SectionCustomVar_8",
        "defaultValue": "&nbsp;&#x25B6;&nbsp;&nbsp; Custom Value Tuning"
      },
      {
        "type": "slider",
        "id": "SectionCustomVar_8_1", // CustomVarBase
        "defaultValue": 100,
        "label": "Base (max. Value)",
        "description": "",
        "min": 0,
        "max": 1000,
        "step": 1
      },
      {
        "type": "select",
        "id": "SectionCustomVar_8_2", // CustomVarFixOperator
        "defaultValue": "none",
        "label": "Value Fix: Operator",
        "description": "x = value operator variable -> (x = value * 100)",
        "options": [
          {
            "label": "None",
            "value": "none"
          },
          {
            "label": "*",
            "value": "*"
          },
          {
            "label": "/",
            "value": "/"
          },
          {
            "label": "+",
            "value": "+"
          },
          {
            "label": "-",
            "value": "-"
          },
        ]
      },
      {
        "type": "slider",
        "id": "SectionCustomVar_8_3", // CustomVarFixVariable
        "defaultValue": 100,
        "label": "Value Fix: Variable",
        "description": "x = value operator variable -> (x = value * 100)",
        "min": -1000,
        "max": 1000,
        "step": 1
      },
      {
        "type": "slider",
        "id": "SectionCustomVar_8_4", // CustomVarAlarmBefore
        "defaultValue": -1000,
        "label": "Alarm Before ...",
        "description": "",
        "min": -1000,
        "max": 1000,
        "step": 1
      },
      {
        "type": "slider",
        "id": "SectionCustomVar_8_5", // CustomVarAlarmAfter
        "defaultValue": 1000,
        "label": "Alarm After ...",
        "description": "",
        "min": -1000,
        "max": 1000,
        "step": 1
      },
      {
        "id": "SectionCustomVar_8Hide",
        "type": "heading",
        "defaultValue": '<center style="background-color: #414141; padding: 10px; margin: -13px; border-radius: 0 0 4px 4px; z-index: 1; position: relative;">&#x25B2;</center>'
      },
    ]
  },
  {
    "type": "text",
    "id": "SectionCustomVar_9",
    "defaultValue": "<br>"
  },

  // TODO: DASHBOARDS
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "id": "SectionDashboard",
        "defaultValue": "<h2><img width=\"25\" height=\"25\" src='data:image/png;base64,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' /> Dashboards</h2>"
      },
    ]
  },
  // TODO: .    DASHBOARD 1
  {
    "type": "section",
    "items": [
      {
        "type": "text",
        "id": "SectionDashboard_1",
        "defaultValue": "&nbsp;&#x25B6;&nbsp;&nbsp; 1. Rendered Dashboard"
      },
      {
        "type": "toggle",
        "id": "SectionDashboard_1_1",
        "messageKey": "Dashboard1Enabled",
        "label": "Enabled",
        "defaultValue": false
      },
      {
        "type": "select",
        "id": "SectionDashboard_1_2",
        "messageKey": "Dashboard1Content",
        "defaultValue": "bat",
        "label": "Content",
        "options": [
          {
            "label": "Hidden",
            "value": "hidden"
          },
          {
            "label": "Second > 04",
            "value": "secL"
          },
          {
            "label": "Second > 4",
            "value": "secS"
          },
          {
            "label": "Minute > 06",
            "value": "minL"
          },
          {
            "label": "Minute > 6",
            "value": "minS"
          },
          {
            "label": "Hour > 02",
            "value": "houL"
          },
          {
            "label": "Hour > 02 pm",
            "value": "houL_"
          },
          {
            "label": "Hour > 2",
            "value": "houS"
          },
          {
            "label": "Hour > 2 pm",
            "value": "houS_"
          },
          {
            "label": "Time > 02:30",
            "value": "timS1"
          },
          {
            "label": "Time > 02:30 pm",
            "value": "timS1_"
          },
          {
            "label": "Time > 2:30",
            "value": "timS2"
          },
          {
            "label": "Time > 2:30 pm",
            "value": "timS2_"
          },
          {
            "label": "Time > 02:30:45",
            "value": "timL1"
          },
          {
            "label": "Time > 02:30:45 pm",
            "value": "timL1_"
          },
          {
            "label": "Time > 2:30:45",
            "value": "timL2"
          },
          {
            "label": "Time > 2:30:45 pm",
            "value": "timL2_"
          },
          {
            "label": "Day > 04",
            "value": "dayL"
          },
          {
            "label": "Day > 4",
            "value": "dayS"
          },
          {
            "label": "Weekday > Sun",
            "value": "wdaS"
          },
          {
            "label": "Weekday > Sunday",
            "value": "wdaL"
          },
          {
            "label": "Month > Oct",
            "value": "monS"
          },
          {
            "label": "Month > October",
            "value": "monL"
          },
          {
            "label": "Year > 19",
            "value": "yeaS"
          },
          {
            "label": "Year > 2019",
            "value": "yeaL"
          },
          {
            "label": "Date > 04/28/19",
            "value": "datU"
          },
          {
            "label": "Date > 04/28",
            "value": "datS1"
          },
          {
            "label": "Date > 28.04.19",
            "value": "datE"
          },
          {
            "label": "Date > 28.04.",
            "value": "datS2"
          },
          {
            "label": "Date > 28.4",
            "value": "datS3"
          },
          {
            "label": "Date > 28 Apr",
            "value": "datS4"
          },
          {
            "label": "Date > Apr 28",
            "value": "datS5"
          },
          {
            "label": "Date > Sun 28",
            "value": "datS6"
          },
          {
            "label": "Calendar Week > 4",
            "value": "cweS"
          },
          {
            "label": "Calendar Week > 04",
            "value": "cweL"
          },
          {
            "label": "Calendar Week > W04",
            "value": "cweU"
          },
          {
            "label": "Calendar Week > KW 4",
            "value": "cweG"
          },
          {
            "label": "Battery > 90%",
            "value": "bat"
          },
          {
            "label": "cV1",
            "value": "cV1"
          },
          {
            "label": "cV2",
            "value": "cV2"
          },
          {
            "label": "cV3",
            "value": "cV3"
          },
          {
            "label": "cV4",
            "value": "cV4"
          },
          {
            "label": "cV5",
            "value": "cV5"
          },
          {
            "label": "cV6",
            "value": "cV6"
          },
          {
            "label": "cV7",
            "value": "cV7"
          },
          {
            "label": "cV8",
            "value": "cV8"
          },
          {
            "label": "cV9",
            "value": "cV9"
          },
          {
            "label": "cV10",
            "value": "cV10"
          },
        ]
      },
      {
        "type": "select",
        "id": "SectionDashboard_1_3",
        "messageKey": "Dashboard1Position",
        "defaultValue": "t",
        "label": "Position",
        "options": [
          {
            "label": "⨁  Top",
            "value": "t"
          },
          {
            "label": "⨁  Right",
            "value": "r"
          },
          {
            "label": "⨁  Bottom",
            "value": "b"
          },
          {
            "label": "⨁  Left",
            "value": "l"
          },
          {
            "label": " •   Center",
            "value": "c"
          },
          {
            "label": "⨂  TopLeft",
            "value": "tl"
          },
          {
            "label": "⨂  TopRight",
            "value": "tr"
          },
          {
            "label": "⨂  BottomRight",
            "value": "br"
          },
          {
            "label": "⨂  BottomLeft",
            "value": "bl"
          },
        ]
      },
      {
        "type": "select",
        "id": "SectionDashboard_1_4",
        "messageKey": "Dashboard1Type",
        "defaultValue": "bar",
        "label": "Type",
        "options": [
          {
            "label": "Cake",
            "value": "cake"
          },
          {
            "label": "Timer",
            "value": "timer"
          },
          {
            "label": "Badge",
            "value": "badge"
          },
          {
            "label": "Bar",
            "value": "bar"
          },
          {
            "label": "State",
            "value": "state"
          },
          {
            "label": "Text",
            "value": "text"
          },
          {
            "label": "Line Chart     (cVx only)",
            "value": "ch_l"
          },
          {
            "label": "Plane Chart  (cVx only)",
            "value": "ch_p"
          },
        ]
      },
      {
        "type": "color",
        "id": "SectionDashboard_1_5",
        "messageKey": "Dashboard1ColorPrimary",
        "defaultValue": "0x00AA00",
        "label": "Primary Color"
      },
      {
        "type": "color",
        "id": "SectionDashboard_1_6",
        "messageKey": "Dashboard1ColorSecondary",
        "defaultValue": "0xAAAAAA",
        "label": "Secondary Color"
      },
      {
        "type": "color",
        "id": "SectionDashboard_1_7",
        "messageKey": "Dashboard1ColorStroke",
        "defaultValue": "0xFFFFFF",
        "label": "Stroke Color"
      },
      {
        "type": "slider",
        "id": "SectionDashboard_1_8",
        "messageKey": "Dashboard1Offset",
        "defaultValue": 20,
        "label": "Offset",
        "description": "",
        "min": 0,
        "max": 200,
        "step": 1
      },
      {
        "type": "slider",
        "id": "SectionDashboard_1_9",
        "messageKey": "Dashboard1Scale",
        "defaultValue": 25,
        "label": "Size",
        "description": "",
        "min": 10,
        "max": 200,
        "step": 1
      },
      {
        "type": "toggle",
        "id": "SectionDashboard_1_10",
        "messageKey": "Dashboard1LabelEnabled",
        "label": "Show Label",
        "defaultValue": true
      },
      {
        "type": "toggle",
        "id": "SectionDashboard_1_11",
        "messageKey": "Dashboard1NumberEnabled",
        "label": "Show Value",
        "defaultValue": true
      },
      {
        "type": "select",
        "id": "SectionDashboard_1_12",
        "messageKey": "Dashboard1Alarm",
        "defaultValue": "none",
        "label": "Alarm",
        "options": [
          {
            "label": "None",
            "value": "none"
          },
          {
            "label": "Ring",
            "value": "ring"
          },
          {
            "label": "Value",
            "value": "value"
          },
          {
            "label": "Star",
            "value": "star"
          },
          {
            "label": "Flash",
            "value": "flash"
          },
        ]
      },
      {
        "id": "SectionDashboard_1Hide",
        "type": "heading",
        "defaultValue": '<center style="background-color: #414141; padding: 10px; margin: -13px; border-radius: 0 0 4px 4px; z-index: 1; position: relative;">&#x25B2;</center>'
      },
    ]
  },
  // TODO: .    DASHBOARD 2
  {
    "type": "section",
    "items": [
      {
        "type": "text",
        "id": "SectionDashboard_2",
        "defaultValue": "&nbsp;&#x25B6;&nbsp;&nbsp; 2. Rendered Dashboard"
      },
      {
        "type": "toggle",
        "id": "SectionDashboard_2_1",
        "messageKey": "Dashboard2Enabled",
        "label": "Enabled",
        "defaultValue": false
      },
      {
        "type": "select",
        "id": "SectionDashboard_2_2",
        "messageKey": "Dashboard2Content",
        "defaultValue": "houL",
        "label": "Content",
        "options": [
          {
            "label": "Hidden",
            "value": "hidden"
          },
          {
            "label": "Second > 04",
            "value": "secL"
          },
          {
            "label": "Second > 4",
            "value": "secS"
          },
          {
            "label": "Minute > 06",
            "value": "minL"
          },
          {
            "label": "Minute > 6",
            "value": "minS"
          },
          {
            "label": "Hour > 02",
            "value": "houL"
          },
          {
            "label": "Hour > 02 pm",
            "value": "houL_"
          },
          {
            "label": "Hour > 2",
            "value": "houS"
          },
          {
            "label": "Hour > 2 pm",
            "value": "houS_"
          },
          {
            "label": "Time > 02:30",
            "value": "timS1"
          },
          {
            "label": "Time > 02:30 pm",
            "value": "timS1_"
          },
          {
            "label": "Time > 2:30",
            "value": "timS2"
          },
          {
            "label": "Time > 2:30 pm",
            "value": "timS2_"
          },
          {
            "label": "Time > 02:30:45",
            "value": "timL1"
          },
          {
            "label": "Time > 02:30:45 pm",
            "value": "timL1_"
          },
          {
            "label": "Time > 2:30:45",
            "value": "timL2"
          },
          {
            "label": "Time > 2:30:45 pm",
            "value": "timL2_"
          },
          {
            "label": "Day > 04",
            "value": "dayL"
          },
          {
            "label": "Day > 4",
            "value": "dayS"
          },
          {
            "label": "Weekday > Sun",
            "value": "wdaS"
          },
          {
            "label": "Weekday > Sunday",
            "value": "wdaL"
          },
          {
            "label": "Month > Oct",
            "value": "monS"
          },
          {
            "label": "Month > October",
            "value": "monL"
          },
          {
            "label": "Year > 19",
            "value": "yeaS"
          },
          {
            "label": "Year > 2019",
            "value": "yeaL"
          },
          {
            "label": "Date > 04/28/19",
            "value": "datU"
          },
          {
            "label": "Date > 04/28",
            "value": "datS1"
          },
          {
            "label": "Date > 28.04.19",
            "value": "datE"
          },
          {
            "label": "Date > 28.04.",
            "value": "datS2"
          },
          {
            "label": "Date > 28.4",
            "value": "datS3"
          },
          {
            "label": "Date > 28 Apr",
            "value": "datS4"
          },
          {
            "label": "Date > Apr 28",
            "value": "datS5"
          },
          {
            "label": "Date > Sun 28",
            "value": "datS6"
          },
          {
            "label": "Calendar Week > 4",
            "value": "cweS"
          },
          {
            "label": "Calendar Week > 04",
            "value": "cweL"
          },
          {
            "label": "Calendar Week > W04",
            "value": "cweU"
          },
          {
            "label": "Calendar Week > KW 4",
            "value": "cweG"
          },
          {
            "label": "Battery > 90%",
            "value": "bat"
          },
          {
            "label": "cV1",
            "value": "cV1"
          },
          {
            "label": "cV2",
            "value": "cV2"
          },
          {
            "label": "cV3",
            "value": "cV3"
          },
          {
            "label": "cV4",
            "value": "cV4"
          },
          {
            "label": "cV5",
            "value": "cV5"
          },
          {
            "label": "cV6",
            "value": "cV6"
          },
          {
            "label": "cV7",
            "value": "cV7"
          },
          {
            "label": "cV8",
            "value": "cV8"
          },
          {
            "label": "cV9",
            "value": "cV9"
          },
          {
            "label": "cV10",
            "value": "cV10"
          },
        ]
      },
      {
        "type": "select",
        "id": "SectionDashboard_2_3",
        "messageKey": "Dashboard2Position",
        "defaultValue": "l",
        "label": "Position",
        "options": [
          {
            "label": "⨁  Top",
            "value": "t"
          },
          {
            "label": "⨁  Right",
            "value": "r"
          },
          {
            "label": "⨁  Bottom",
            "value": "b"
          },
          {
            "label": "⨁  Left",
            "value": "l"
          },
          {
            "label": " •   Center",
            "value": "c"
          },
          {
            "label": "⨂  TopLeft",
            "value": "tl"
          },
          {
            "label": "⨂  TopRight",
            "value": "tr"
          },
          {
            "label": "⨂  BottomRight",
            "value": "br"
          },
          {
            "label": "⨂  BottomLeft",
            "value": "bl"
          },
        ]
      },
      {
        "type": "select",
        "id": "SectionDashboard_2_4",
        "messageKey": "Dashboard2Type",
        "defaultValue": "cake",
        "label": "Type",
        "options": [
          {
            "label": "Cake",
            "value": "cake"
          },
          {
            "label": "Timer",
            "value": "timer"
          },
          {
            "label": "Badge",
            "value": "badge"
          },
          {
            "label": "Bar",
            "value": "bar"
          },
          {
            "label": "State",
            "value": "state"
          },
          {
            "label": "Text",
            "value": "text"
          },
          {
            "label": "Line Chart     (cVx only)",
            "value": "ch_l"
          },
          {
            "label": "Plane Chart  (cVx only)",
            "value": "ch_p"
          },
        ]
      },
      {
        "type": "color",
        "id": "SectionDashboard_2_5",
        "messageKey": "Dashboard2ColorPrimary",
        "defaultValue": "0x0000AA",
        "label": "Primary Color"
      },
      {
        "type": "color",
        "id": "SectionDashboard_2_6",
        "messageKey": "Dashboard2ColorSecondary",
        "defaultValue": "0xFFFFFF",
        "label": "Secondary Color"
      },
      {
        "type": "color",
        "id": "SectionDashboard_2_7",
        "messageKey": "Dashboard2ColorStroke",
        "defaultValue": "0x0000AA",
        "label": "Stroke Color"
      },
      {
        "type": "slider",
        "id": "SectionDashboard_2_8",
        "messageKey": "Dashboard2Offset",
        "defaultValue": 20,
        "label": "Offset",
        "description": "",
        "min": 0,
        "max": 200,
        "step": 1
      },
      {
        "type": "slider",
        "id": "SectionDashboard_2_9",
        "messageKey": "Dashboard2Scale",
        "defaultValue": 25,
        "label": "Size",
        "description": "",
        "min": 10,
        "max": 200,
        "step": 1
      },
      {
        "type": "toggle",
        "id": "SectionDashboard_2_10",
        "messageKey": "Dashboard2LabelEnabled",
        "label": "Show Label",
        "defaultValue": true
      },
      {
        "type": "toggle",
        "id": "SectionDashboard_2_11",
        "messageKey": "Dashboard2NumberEnabled",
        "label": "Show Value",
        "defaultValue": true
      },
      {
        "type": "select",
        "id": "SectionDashboard_2_12",
        "messageKey": "Dashboard2Alarm",
        "defaultValue": "none",
        "label": "Alarm",
        "options": [
          {
            "label": "None",
            "value": "none"
          },
          {
            "label": "Ring",
            "value": "ring"
          },
          {
            "label": "Value",
            "value": "value"
          },
          {
            "label": "Star",
            "value": "star"
          },
          {
            "label": "Flash",
            "value": "flash"
          },
        ]
      },
      {
        "id": "SectionDashboard_2Hide",
        "type": "heading",
        "defaultValue": '<center style="background-color: #414141; padding: 10px; margin: -13px; border-radius: 0 0 4px 4px; z-index: 1; position: relative;">&#x25B2;</center>'
      },
    ]
  },
  // TODO: .    DASHBOARD 3
  {
    "type": "section",
    "items": [
      {
        "type": "text",
        "id": "SectionDashboard_3",
        "defaultValue": "&nbsp;&#x25B6;&nbsp;&nbsp; 3. Rendered Dashboard"
      },
      {
        "type": "toggle",
        "id": "SectionDashboard_3_1",
        "messageKey": "Dashboard3Enabled",
        "label": "Enabled",
        "defaultValue": false
      },
      {
        "type": "select",
        "id": "SectionDashboard_3_2",
        "messageKey": "Dashboard3Content",
        "defaultValue": "wdaS",
        "label": "Content",
        "options": [
          {
            "label": "Hidden",
            "value": "hidden"
          },
          {
            "label": "Second > 04",
            "value": "secL"
          },
          {
            "label": "Second > 4",
            "value": "secS"
          },
          {
            "label": "Minute > 06",
            "value": "minL"
          },
          {
            "label": "Minute > 6",
            "value": "minS"
          },
          {
            "label": "Hour > 02",
            "value": "houL"
          },
          {
            "label": "Hour > 02 pm",
            "value": "houL_"
          },
          {
            "label": "Hour > 2",
            "value": "houS"
          },
          {
            "label": "Hour > 2 pm",
            "value": "houS_"
          },
          {
            "label": "Time > 02:30",
            "value": "timS1"
          },
          {
            "label": "Time > 02:30 pm",
            "value": "timS1_"
          },
          {
            "label": "Time > 2:30",
            "value": "timS2"
          },
          {
            "label": "Time > 2:30 pm",
            "value": "timS2_"
          },
          {
            "label": "Time > 02:30:45",
            "value": "timL1"
          },
          {
            "label": "Time > 02:30:45 pm",
            "value": "timL1_"
          },
          {
            "label": "Time > 2:30:45",
            "value": "timL2"
          },
          {
            "label": "Time > 2:30:45 pm",
            "value": "timL2_"
          },
          {
            "label": "Day > 04",
            "value": "dayL"
          },
          {
            "label": "Day > 4",
            "value": "dayS"
          },
          {
            "label": "Weekday > Sun",
            "value": "wdaS"
          },
          {
            "label": "Weekday > Sunday",
            "value": "wdaL"
          },
          {
            "label": "Month > Oct",
            "value": "monS"
          },
          {
            "label": "Month > October",
            "value": "monL"
          },
          {
            "label": "Year > 19",
            "value": "yeaS"
          },
          {
            "label": "Year > 2019",
            "value": "yeaL"
          },
          {
            "label": "Date > 04/28/19",
            "value": "datU"
          },
          {
            "label": "Date > 04/28",
            "value": "datS1"
          },
          {
            "label": "Date > 28.04.19",
            "value": "datE"
          },
          {
            "label": "Date > 28.04.",
            "value": "datS2"
          },
          {
            "label": "Date > 28.4",
            "value": "datS3"
          },
          {
            "label": "Date > 28 Apr",
            "value": "datS4"
          },
          {
            "label": "Date > Apr 28",
            "value": "datS5"
          },
          {
            "label": "Date > Sun 28",
            "value": "datS6"
          },
          {
            "label": "Calendar Week > 4",
            "value": "cweS"
          },
          {
            "label": "Calendar Week > 04",
            "value": "cweL"
          },
          {
            "label": "Calendar Week > W04",
            "value": "cweU"
          },
          {
            "label": "Calendar Week > KW 4",
            "value": "cweG"
          },
          {
            "label": "Battery > 90%",
            "value": "bat"
          },
          {
            "label": "cV1",
            "value": "cV1"
          },
          {
            "label": "cV2",
            "value": "cV2"
          },
          {
            "label": "cV3",
            "value": "cV3"
          },
          {
            "label": "cV4",
            "value": "cV4"
          },
          {
            "label": "cV5",
            "value": "cV5"
          },
          {
            "label": "cV6",
            "value": "cV6"
          },
          {
            "label": "cV7",
            "value": "cV7"
          },
          {
            "label": "cV8",
            "value": "cV8"
          },
          {
            "label": "cV9",
            "value": "cV9"
          },
          {
            "label": "cV10",
            "value": "cV10"
          },
        ]
      },
      {
        "type": "select",
        "id": "SectionDashboard_3_3",
        "messageKey": "Dashboard3Position",
        "defaultValue": "r",
        "label": "Position",
        "options": [
          {
            "label": "⨁  Top",
            "value": "t"
          },
          {
            "label": "⨁  Right",
            "value": "r"
          },
          {
            "label": "⨁  Bottom",
            "value": "b"
          },
          {
            "label": "⨁  Left",
            "value": "l"
          },
          {
            "label": " •   Center",
            "value": "c"
          },
          {
            "label": "⨂  TopLeft",
            "value": "tl"
          },
          {
            "label": "⨂  TopRight",
            "value": "tr"
          },
          {
            "label": "⨂  BottomRight",
            "value": "br"
          },
          {
            "label": "⨂  BottomLeft",
            "value": "bl"
          },
        ]
      },
      {
        "type": "select",
        "id": "SectionDashboard_3_4",
        "messageKey": "Dashboard3Type",
        "defaultValue": "badge",
        "label": "Type",
        "options": [
          {
            "label": "Cake",
            "value": "cake"
          },
          {
            "label": "Timer",
            "value": "timer"
          },
          {
            "label": "Badge",
            "value": "badge"
          },
          {
            "label": "Bar",
            "value": "bar"
          },
          {
            "label": "State",
            "value": "state"
          },
          {
            "label": "Text",
            "value": "text"
          },
          {
            "label": "Line Chart     (cVx only)",
            "value": "ch_l"
          },
          {
            "label": "Plane Chart  (cVx only)",
            "value": "ch_p"
          },
        ]
      },
      {
        "type": "color",
        "id": "SectionDashboard_3_5",
        "messageKey": "Dashboard3ColorPrimary",
        "defaultValue": "0xFF0055",
        "label": "Primary Color"
      },
      {
        "type": "color",
        "id": "SectionDashboard_3_6",
        "messageKey": "Dashboard3ColorSecondary",
        "defaultValue": "0xFFFFFF",
        "label": "Secondary Color"
      },
      {
        "type": "color",
        "id": "SectionDashboard_3_7",
        "messageKey": "Dashboard3ColorStroke",
        "defaultValue": "0xFF0055",
        "label": "Stroke Color"
      },
      {
        "type": "slider",
        "id": "SectionDashboard_3_8",
        "messageKey": "Dashboard3Offset",
        "defaultValue": 20,
        "label": "Offset",
        "description": "",
        "min": 0,
        "max": 200,
        "step": 1
      },
      {
        "type": "slider",
        "id": "SectionDashboard_3_9",
        "messageKey": "Dashboard3Scale",
        "defaultValue": 25,
        "label": "Size",
        "description": "",
        "min": 10,
        "max": 200,
        "step": 1
      },
      {
        "type": "toggle",
        "id": "SectionDashboard_3_10",
        "messageKey": "Dashboard3LabelEnabled",
        "label": "Show Label",
        "defaultValue": true
      },
      {
        "type": "toggle",
        "id": "SectionDashboard_3_11",
        "messageKey": "Dashboard3NumberEnabled",
        "label": "Show Value",
        "defaultValue": true
      },
      {
        "type": "select",
        "id": "SectionDashboard_3_12",
        "messageKey": "Dashboard3Alarm",
        "defaultValue": "none",
        "label": "Alarm",
        "options": [
          {
            "label": "None",
            "value": "none"
          },
          {
            "label": "Ring",
            "value": "ring"
          },
          {
            "label": "Value",
            "value": "value"
          },
          {
            "label": "Star",
            "value": "star"
          },
          {
            "label": "Flash",
            "value": "flash"
          },
        ]
      },
      {
        "id": "SectionDashboard_3Hide",
        "type": "heading",
        "defaultValue": '<center style="background-color: #414141; padding: 10px; margin: -13px; border-radius: 0 0 4px 4px; z-index: 1; position: relative;">&#x25B2;</center>'
      },
    ]
  },
  // TODO: .    DASHBOARD 4
  {
    "type": "section",
    "items": [
      {
        "type": "text",
        "id": "SectionDashboard_4",
        "defaultValue": "&nbsp;&#x25B6;&nbsp;&nbsp; 4. Rendered Dashboard"
      },
      {
        "type": "toggle",
        "id": "SectionDashboard_4_1",
        "messageKey": "Dashboard4Enabled",
        "label": "Enabled",
        "defaultValue": false
      },
      {
        "type": "select",
        "id": "SectionDashboard_4_2",
        "messageKey": "Dashboard4Content",
        "defaultValue": "minL",
        "label": "Content",
        "options": [
          {
            "label": "Hidden",
            "value": "hidden"
          },
          {
            "label": "Second > 04",
            "value": "secL"
          },
          {
            "label": "Second > 4",
            "value": "secS"
          },
          {
            "label": "Minute > 06",
            "value": "minL"
          },
          {
            "label": "Minute > 6",
            "value": "minS"
          },
          {
            "label": "Hour > 02",
            "value": "houL"
          },
          {
            "label": "Hour > 02 pm",
            "value": "houL_"
          },
          {
            "label": "Hour > 2",
            "value": "houS"
          },
          {
            "label": "Hour > 2 pm",
            "value": "houS_"
          },
          {
            "label": "Time > 02:30",
            "value": "timS1"
          },
          {
            "label": "Time > 02:30 pm",
            "value": "timS1_"
          },
          {
            "label": "Time > 2:30",
            "value": "timS2"
          },
          {
            "label": "Time > 2:30 pm",
            "value": "timS2_"
          },
          {
            "label": "Time > 02:30:45",
            "value": "timL1"
          },
          {
            "label": "Time > 02:30:45 pm",
            "value": "timL1_"
          },
          {
            "label": "Time > 2:30:45",
            "value": "timL2"
          },
          {
            "label": "Time > 2:30:45 pm",
            "value": "timL2_"
          },
          {
            "label": "Day > 04",
            "value": "dayL"
          },
          {
            "label": "Day > 4",
            "value": "dayS"
          },
          {
            "label": "Weekday > Sun",
            "value": "wdaS"
          },
          {
            "label": "Weekday > Sunday",
            "value": "wdaL"
          },
          {
            "label": "Month > Oct",
            "value": "monS"
          },
          {
            "label": "Month > October",
            "value": "monL"
          },
          {
            "label": "Year > 19",
            "value": "yeaS"
          },
          {
            "label": "Year > 2019",
            "value": "yeaL"
          },
          {
            "label": "Date > 04/28/19",
            "value": "datU"
          },
          {
            "label": "Date > 04/28",
            "value": "datS1"
          },
          {
            "label": "Date > 28.04.19",
            "value": "datE"
          },
          {
            "label": "Date > 28.04.",
            "value": "datS2"
          },
          {
            "label": "Date > 28.4",
            "value": "datS3"
          },
          {
            "label": "Date > 28 Apr",
            "value": "datS4"
          },
          {
            "label": "Date > Apr 28",
            "value": "datS5"
          },
          {
            "label": "Date > Sun 28",
            "value": "datS6"
          },
          {
            "label": "Calendar Week > 4",
            "value": "cweS"
          },
          {
            "label": "Calendar Week > 04",
            "value": "cweL"
          },
          {
            "label": "Calendar Week > W04",
            "value": "cweU"
          },
          {
            "label": "Calendar Week > KW 4",
            "value": "cweG"
          },
          {
            "label": "Battery > 90%",
            "value": "bat"
          },
          {
            "label": "cV1",
            "value": "cV1"
          },
          {
            "label": "cV2",
            "value": "cV2"
          },
          {
            "label": "cV3",
            "value": "cV3"
          },
          {
            "label": "cV4",
            "value": "cV4"
          },
          {
            "label": "cV5",
            "value": "cV5"
          },
          {
            "label": "cV6",
            "value": "cV6"
          },
          {
            "label": "cV7",
            "value": "cV7"
          },
          {
            "label": "cV8",
            "value": "cV8"
          },
          {
            "label": "cV9",
            "value": "cV9"
          },
          {
            "label": "cV10",
            "value": "cV10"
          },
        ]
      },
      {
        "type": "select",
        "id": "SectionDashboard_4_3",
        "messageKey": "Dashboard4Position",
        "defaultValue": "b",
        "label": "Position",
        "options": [
          {
            "label": "⨁  Top",
            "value": "t"
          },
          {
            "label": "⨁  Right",
            "value": "r"
          },
          {
            "label": "⨁  Bottom",
            "value": "b"
          },
          {
            "label": "⨁  Left",
            "value": "l"
          },
          {
            "label": " •   Center",
            "value": "c"
          },
          {
            "label": "⨂  TopLeft",
            "value": "tl"
          },
          {
            "label": "⨂  TopRight",
            "value": "tr"
          },
          {
            "label": "⨂  BottomRight",
            "value": "br"
          },
          {
            "label": "⨂  BottomLeft",
            "value": "bl"
          },
        ]
      },
      {
        "type": "select",
        "id": "SectionDashboard_4_4",
        "messageKey": "Dashboard4Type",
        "defaultValue": "timer",
        "label": "Type",
        "options": [
          {
            "label": "Cake",
            "value": "cake"
          },
          {
            "label": "Timer",
            "value": "timer"
          },
          {
            "label": "Badge",
            "value": "badge"
          },
          {
            "label": "Bar",
            "value": "bar"
          },
          {
            "label": "State",
            "value": "state"
          },
          {
            "label": "Text",
            "value": "text"
          },
          {
            "label": "Line Chart     (cVx only)",
            "value": "ch_l"
          },
          {
            "label": "Plane Chart  (cVx only)",
            "value": "ch_p"
          },
        ]
      },
      {
        "type": "color",
        "id": "SectionDashboard_4_5",
        "messageKey": "Dashboard4ColorPrimary",
        "defaultValue": "0x555555",
        "label": "Primary Color"
      },
      {
        "type": "color",
        "id": "SectionDashboard_4_6",
        "messageKey": "Dashboard4ColorSecondary",
        "defaultValue": "0xFFFFFF",
        "label": "Secondary Color"
      },
      {
        "type": "color",
        "id": "SectionDashboard_4_7",
        "messageKey": "Dashboard4ColorStroke",
        "defaultValue": "0x000000",
        "label": "Stroke Color"
      },
      {
        "type": "slider",
        "id": "SectionDashboard_4_8",
        "messageKey": "Dashboard4Offset",
        "defaultValue": 20,
        "label": "Offset",
        "description": "",
        "min": 0,
        "max": 200,
        "step": 1
      },
      {
        "type": "slider",
        "id": "SectionDashboard_4_9",
        "messageKey": "Dashboard4Scale",
        "defaultValue": 25,
        "label": "Size",
        "description": "",
        "min": 10,
        "max": 200,
        "step": 1
      },
      {
        "type": "toggle",
        "id": "SectionDashboard_4_10",
        "messageKey": "Dashboard4LabelEnabled",
        "label": "Show Label",
        "defaultValue": true
      },
      {
        "type": "toggle",
        "id": "SectionDashboard_4_11",
        "messageKey": "Dashboard4NumberEnabled",
        "label": "Show Value",
        "defaultValue": true
      },
      {
        "type": "select",
        "id": "SectionDashboard_4_12",
        "messageKey": "Dashboard4Alarm",
        "defaultValue": "none",
        "label": "Alarm",
        "options": [
          {
            "label": "None",
            "value": "none"
          },
          {
            "label": "Ring",
            "value": "ring"
          },
          {
            "label": "Value",
            "value": "value"
          },
          {
            "label": "Star",
            "value": "star"
          },
          {
            "label": "Flash",
            "value": "flash"
          },
        ]
      },
      {
        "id": "SectionDashboard_4Hide",
        "type": "heading",
        "defaultValue": '<center style="background-color: #414141; padding: 10px; margin: -13px; border-radius: 0 0 4px 4px; z-index: 1; position: relative;">&#x25B2;</center>'
      },
    ]
  },
  {
    "type": "text",
    "id": "SectionDashboard_5",
    "defaultValue": "<br>"
  },

  // TODO: RANDOM GENERATOR
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "id": "SectionRandom",
        "defaultValue": "<h2><img width=\"25\" height=\"25\" src='data:image/png;base64,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' /> Random Generator</h2>"
      },
      {
        "id": "SectionRandom_1",
        "type": "toggle",
        "messageKey": "RandomEnabled",
        "label": "Enable Random Generator",
        "defaultValue": false
      },
      {
        "id": "SectionRandom_2",
        "type": "radiogroup",
        "messageKey": "RandomTrigger",
        "label": "Trigger:",
        "defaultValue": "hour",
        "options": [
          {
            "label": "Update on Minute",
            "value": "minute"
          },
          {
            "label": "Update on Hour",
            "value": "hour"
          },
          {
            "label": "Update on Shake",
            "value": "shake"
          }
        ]
      },
      {
        "id": "SectionRandom_3",
        "type": "text",
        "defaultValue": "<br>Random Elements:"
      },
      {
        "id": "SectionRandom_4",
        "type": "toggle",
        "messageKey": "RandomElementBackground",
        "label": "Background Color",
        "defaultValue": false
      },
      {
        "id": "SectionRandom_5",
        "type": "toggle",
        "messageKey": "RandomElementFaceColor",
        "label": "Face Color",
        "defaultValue": false
      },
      {
        "id": "SectionRandom_6",
        "type": "toggle",
        "messageKey": "RandomElementFaceStyle",
        "label": "Face Style",
        "defaultValue": true
      },
      {
        "id": "SectionRandom_7",
        "type": "toggle",
        "messageKey": "RandomElementHandColor",
        "label": "Hand Color",
        "defaultValue": false
      },
      {
        "id": "SectionRandom_8",
        "type": "toggle",
        "messageKey": "RandomElementHandStyle",
        "label": "Hand Style",
        "defaultValue": false
      },
      {
        "id": "SectionRandomHide",
        "type": "heading",
        "defaultValue": '<center style="background-color: #414141; padding: 10px; margin: -13px; border-radius: 0 0 4px 4px; z-index: 1; position: relative;">&#x25B2;</center>'
      },
    ]
  },
  {
    "type": "text",
    "id": "SectionRandom_9",
    "defaultValue": "<br>"
  },
  // TODO: BACKUP
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "id": "SectionBackup",
        "defaultValue": "<h2><img width=\"25\" height=\"25\" src='data:image/png;base64,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' /> Backup / Themes</h2>"
      },
      {
        "type": "input",
        "id": "SectionBackupHidden",
        "messageKey": "BackupScreenshot",
        "defaultValue": "",
        "label": "Screenshot",
        "attributes": {
          "placeholder": "empty",
          "type": "text"
        }
      },
      {
        "id": "SectionBackup_1",
        "type": "toggle",
        "messageKey": "BackupIncludeWatchface",
        "label": "Include Watchface",
        "description": "Useful to import/export customVars only",
        "defaultValue": true
      },
      {
        "id": "SectionBackup_2",
        "type": "toggle",
        "messageKey": "BackupIncludeCalendar",
        "label": "Include Calendar Credentials",
        "description": "Be aware not to share private credentials by accidentally enable this setting",
        "defaultValue": false
      },
      {
        "id": "SectionBackup_3",
        "type": "toggle",
        "messageKey": "BackupIncludeCVars",
        "label": "Include Custom Variables",
        "description": "Be aware not to share private credentials by accidentally enable this setting",
        "defaultValue": false
      },
    ]
  },
  // TODO: .    BACKUP EXPORT
  {
    "type": "section",
    "items": [
      {
        "type": "text",
        "id": "SectionBackup_4",
        "defaultValue": "&nbsp;&#x25B6;&nbsp;&nbsp; Export"
      },
      {
        "type": "text",
        "id": "SectionBackup_4_1",
        "description": "",
        "defaultValue": ""
      },
      {
        "id": "SectionBackup_4_2",
        "type": "radiogroup",
        "label": "Export as:",
        "messageKey": "BackupExportType",
        "defaultValue": "html",
        "options": [
          {
            "label": "HTML File",
            "value": "html"
          },
          {
            "label": "SVG File",
            "value": "svg"
          },
          {
            "label": "JSON File",
            "value": "jsonF"
          },
          {
            "label": "JSON Object",
            "value": "jsonO"
          },
        ]
      },
      {
        "type": "input",
        "id": "SectionBackup_4_3",
        "messageKey": "BackupName",
        "defaultValue": "",
        "label": "Filename",
        "attributes": {
          "placeholder": "optional",
          "type": "text"
        }
      },
      {
        "type": "button",
        "id": "SectionBackup_4_4",
        "messageKey": "BackupExport",
        "primary": false,
        "defaultValue": "Export",
        "description": "No remote webservice is involved! Tasks are handled locally on your phone. If you want to share this backup double check the backup include toggles for your privacy!"
      },
      {
        "type": "text",
        "id": "SectionBackup_4_5",
        "defaultValue": ""
      },
      {
        "id": "SectionBackup_4Hide",
        "type": "heading",
        "defaultValue": '<center style="background-color: #414141; padding: 10px; margin: -13px; border-radius: 0 0 4px 4px; z-index: 1; position: relative;">&#x25B2;</center>'
      },
    ]
  },
  // TODO: .    BACKUP IMPORT
  {
    "type": "section",
    "items": [
      {
        "type": "text",
        "id": "SectionBackup_5",
        "defaultValue": "&nbsp;&#x25B6;&nbsp;&nbsp; Import"
      },
      {
        "type": "text",
        "id": "SectionBackup_5_1",
        "defaultValue": '<a href="https://derivat3.github.io/pebble-watchface-any-cockpit/themes/list" style="box-shadow: 5px 5px 10px 0 rgba(0,0,0,.4); display: block; font-weight: bold; text-align: center; text-decoration: none; font-size: 18px; font-weight: normal; background-color: transparent; border: 1px solid #41EA15; color: #41EA15; border-radius: 4px; padding: 10px 20px;">Find new Themes here!</a>'
      },
      {
        "type": "text",
        "id": "SectionBackup_5_2",
        "defaultValue": '<small style="font-size:12px;">HowTo Import a Backup:<ol><li>1. Copy the settings from the HTML, SVG or JSON backup file</li><li>    - Open HTML backups with any browser</li><li>    - Open JSON backups with any editor</li><li>2. Paste the settings in the input field</li><li>3. Click on LOAD BACKUP</li><li>4. Save the watchface</li></ol></small>'
      },
      {
        "type": "input",
        "id": "SectionBackup_5_3",
        "messageKey": "BackupConfig",
        "defaultValue": "",
        "label": "Settings ",
        "attributes": {
          "placeholder": "JSON or settings from SVG or HTML file",
          "type": "text"
        }
      },
      {
        "type": "button",
        "id": "SectionBackup_5_4",
        "messageKey": "BackupImport",
        "primary": false,
        "defaultValue": "Load Backup"
      },
      {
        "id": "SectionBackup_5Hide",
        "type": "heading",
        "defaultValue": '<center style="background-color: #414141; padding: 10px; margin: -13px; border-radius: 0 0 4px 4px; z-index: 1; position: relative;">&#x25B2;</center>'
      }
    ]
  },
  {
    "type": "text",
    "defaultValue": "<br><br><br>"
  },

  // Ko-fi
  {
    "type": "text",
    "defaultValue": "<center><span style='background-color: #00B9FE; xline-height: 20px; xvertical-align:bottom; color: #ffffff; border-radius: 100px; padding: 10px 20px 10px 15px;'><a style='color: #ffffff; text-decoration:none;'href='https://ko-fi.com/sesio'><img style='vertical-align:middle;' height='24' src='data:image/gif;base64,R0lGODlhPAAnAPcAAHt7e1JSUiIiInd3dxISEjAwMFdXVwMDAwsLC2pqavX19aWlpYyMjF5eXg8PD5KSkj09PX9/fyUlJWhoaPb29vv7+6CgoDg4OHNzc9HR0TQ0NGNjY/n5+WdnZ/39/SoqKnV1dZmZmb+/v+Xl5bq6uiYmJggICBEREfDw8FlZWSEhIevr69vb28rKytfX12xsbFVVVQwMDIuLi2RkZBkZGTY2NpycnBoaGpqamnl5eU9PTwcHB0hISDMzM+Hh4S8vL2VLTMdkZ9ljZ+lhZrljZlRCQwUFBSkpKenp6bGxsScjI3FxceFiZh8dHSAdHeJiZ9djaIeHhxQUFP///46OjstkZxIREaOjozs7Ox4eHnFRUsVkaK6uru7u7rFjZcLCwt5iZ91jZ0dHR5WVlfRfZPNfZEVFRT4+PpGRkdBkaM9kaB0dHalhZLW1tXZTVEtLSxYVFfhdY1paWqJgYm9vb1BQUDUuLjQtLUJCQsfHx5NdX8jIyNVjaNRjZ+3t7QAAACklJbKystjY2BcXF+RhZ+fn5+Pj4yIfH9tjZ5xfYc/Pz0BAQFFAQexgZrm5uRkXGG5QUZ6ent3d3dTU1GBgYIWFhZeXl/9cYiZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySZFySH5BAEAAJgALAAAAAA8ACcAAAj/ADEJ/EOwoMGDCBMqVCiwocOHCBJcWUCxosWLGDNqxHiFQQMHBx4+nDClpMmTKFOqXMmypAILF/6IxPTHQsubOHOezKABwcM/C3QKHZqSQgeZDYESXXrSwwMMIUSM8JDSwwaHSpkyJSHTBMETAFCgpKAhadCWFVi0IOFipQsSLVhUaLkAqUMCMiicZIE0q8oKIWgYrGFDgUsbNQzewDFXZd2ZO2oooOrBg5iBZ1P6+HAASBAhQ4gUMXIECZISRooQGSIkCJADH3w4tisSBtWSSWT6bYpFiZBLwIMzuVHiSBMmwYNDUQLh9snHMzEdiHK7ghSamU16YHCgyqU438Nf/+rj4ESf5MmrHGBQub2HK7RFHkBiEgt2lVkgAQeP/tKWIMHxlxwkN7hXGXzRDcRFSR6kcB9KXfzhhXj7UWghf3Gw8YcfBiKYICYYMDjAgyd98Qci/SUnYIXigfHHFx3GJxIWlI1Boklc/FGGiiwKuGJwZfzBRYwfYtLcFB6gcWNJivyhRo9QYlhhHFX8kQGRH+bA4BJLTqHAH2wEyGKK/SXyBwVYRvdHGybB0OUUKmhBoZQWigceEE4Y+J6MDpmAwm01dOkBCFb4SCZ4dMZhwgB6ejjTHyFUNgUFDrzpwx+JHFpncnr84UOjfGJiQgInXRHSbgx6oMMdUPIYnoCPAP8hqXuOYiUGByfZ9+YUefyhR5Su7qeFEV8giWR7tUqnwhXOTbFHX9lp58EAB5yX4o/g9WEEo7O29yxNfxxwxBgcNOuHCmZVhSQHdjhBiJ3BXsJEDHaUS5mBScgQiCD2SsrgZek2da8kTjiB3KbCIeDEp93q2V5KIywSUsAMGnubIYc8Yi2ZfZigBMP3OuzwS4+I5NesxiJZyAdG/JoiIzHcYUi/x4rsniIJxDDxT2dRZnHNCrzwhx1xCMjEHTHogUIFKDtswwwdzDCDDkqEitmxP/vMoCOPxBDmJYkgAEcbc93WcHsmFmnyAj63nXJ7SBRxQBFAGAFEIeVmXTOyVqt2ybbeblscCQIIMMa02yInq3ZNiGf9cGUKTPZ2yA5H0nd0L2DduHPuAW6xw26qLdIOktzrec2eU27gJDuL7hAPTQPusOM24+H6owbQt/nsuxuoQAOXq22EDpVYcMUVxieP/PLGM++882PQUfLtiy9k/UImUD9TQAA7'/><span style='position: relative; bottom:0px;'>&nbsp;&nbsp;&nbsp;You can support me on Ko-fi</span></a></span><br><br><span style='font-size:14px;'>https://ko-fi.com/sesio</span></center><br><br>"
  },

  // PATREON
  // {
  //   "type": "text",
  //   "defaultValue": "<center><span style='background-color: #E35945; xline-height: 20px; xvertical-align:bottom; color: #ffffff; border-radius: 100px; padding: 10px 20px 10px 15px;'><a style='color: #ffffff; text-decoration:none;'href='https://www.patreon.com/sesio'><img style='vertical-align:middle;' height='24' src='data:image/gif;base64,R0lGODlhPAA5APEAAAAAAP///yZFySZFySH5BAEAAAIALAAAAAA8ADkAAALYjI+iy+0PY0M0yCtqxUwf7niihY1gN5qSCqYuCbHl+8ZiS9OPHOV+eLv4hpNgb/hDeVZI4oJXbCYzRqB0Cn1enVnqNtn9cqtKsS5rJqLTOa9mxz6TFXH50lo3rfP6uZv/tgcY6Dd4E2a4gZiYsMhI4shI5zcpWflmY/lHwWRYttEJ+MkZmheFWcqGBypUB3c3k5aJGvt1BItzlZpwouW0+9E7ittKLHzJ29t1zHzK2gy9ShpN7UtbHb2MrUy5zW3sLawdXvtMLt59XnytnsveXj4N724+f1EAADs='/><span style='position: relative; bottom:0px;'>&nbsp;&nbsp;&nbsp;You can support me on Patreon</span></a></span><br><br><span style='font-size:14px;'>https://www.patreon.com/sesio</span></center><br><br>"
  // },

  {
    "type": "text",
    "defaultValue": "<br><br>"
  },
  // SAVE BUTTON
  {
    "type": "submit",
    "id": "SectionFixedSubmit",
    "defaultValue": "OK"
  },
];