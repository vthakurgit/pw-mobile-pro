/**
 * Tooly Mobile App - Multi-Apps Access and Functionality Validation
 * This test suite covers the Timer App, Notes App & Scanner access and functionality within the Tooly Mobile App.
 * This test is directly recorded for the Tooly Mobile App over Appetize.
 * @author Vinay Thakur
 */

import { test } from "@appetize/playwright";

test.describe("Tooly Mobile App Testing", () => {
  test("Accessing Timer App, Notes App & Scanner within Tooly Mobile App", async ({
    session,
  }) => {
    test.step("Timer App, Notes App & Scanner Recording", async ({}) => {
      await session.playActions([
        // Tap on "com.amplifyr.tooly:id/pb_timer"
        {
          type: "tap",
          element: {
            path: "/2/0/0/0/0/0/0/0/1/0/0/2/0",
            type: "node",
            source: "accessibility",
            bounds: {
              x: 70.66666666666667,
              y: 291,
              width: 218.66666666666666,
              height: 218.66666666666666,
            },
            attributes: {
              class: "android.widget.ProgressBar",
              "resource-id": "com.amplifyr.tooly:id/pb_timer",
              clickable: "false",
              enabled: "true",
              checkable: "false",
              selected: "false",
              focusable: "false",
              drawingOrder: "1",
              isVisibleToUser: "true",
            },
          },
          coordinates: {
            x: 171.0158082993572,
            y: 419.07993102004093,
          },
          localPosition: {
            x: 0.45891375746657254,
            y: 0.5857313918599433,
          },
          appId: "com.amplifyr.tooly",
          time: 5.768762049,
          duration: 0.011,
          position: {
            x: 0.47636715403720664,
            y: 0.5245055457071851,
          },
        },
        // Tap on "1"
        {
          type: "tap",
          element: {
            path: "/2/0/0/0/0/1/0/0/1/2/1/2",
            type: "node",
            source: "accessibility",
            bounds: {
              x: 152,
              y: 457,
              width: 56,
              height: 58,
            },
            attributes: {
              text: "1",
              class: "android.widget.Button",
              clickable: "true",
              enabled: "true",
              checkable: "false",
              selected: "false",
              focusable: "false",
              drawingOrder: "0",
              isVisibleToUser: "true",
            },
          },
          coordinates: {
            x: 181.05908101753423,
            y: 493.6210592888563,
          },
          localPosition: {
            x: 0.5189121610273969,
            y: 0.6313975739457985,
          },
          appId: "com.amplifyr.tooly",
          time: 13.316856174,
          duration: 0.008,
          position: {
            x: 0.5043428440599839,
            y: 0.6177985723264785,
          },
        },
        // Tap on "OK"
        {
          type: "tap",
          element: {
            path: "/2/0/0/0/0/2/0/1",
            type: "node",
            source: "accessibility",
            bounds: {
              x: 270,
              y: 532.6666666666666,
              width: 56,
              height: 47.333333333333336,
            },
            attributes: {
              text: "OK",
              class: "android.widget.Button",
              "resource-id": "android:id/button1",
              clickable: "true",
              enabled: "true",
              checkable: "false",
              selected: "false",
              focusable: "true",
              focused: "false",
              drawingOrder: "4",
              isVisibleToUser: "true",
            },
          },
          coordinates: {
            x: 297.5262262687911,
            y: 551.7615785192243,
          },
          localPosition: {
            x: 0.4915397547998412,
            y: 0.4034136306878372,
          },
          appId: "com.amplifyr.tooly",
          time: 16.869100553,
          duration: 0.008,
          position: {
            x: 0.8287638614729558,
            y: 0.6905651796235598,
          },
        },
        // Tap on "com.amplifyr.tooly:id/fab_play"
        {
          type: "tap",
          element: {
            path: "/2/0/0/0/0/0/0/0/1/0/0/5",
            type: "node",
            source: "accessibility",
            bounds: {
              x: 155.33333333333334,
              y: 695,
              width: 49,
              height: 49,
            },
            attributes: {
              class: "android.widget.ImageButton",
              "resource-id": "com.amplifyr.tooly:id/fab_play",
              clickable: "true",
              enabled: "true",
              checkable: "false",
              selected: "false",
              focusable: "true",
              focused: "false",
              drawingOrder: "7",
              isVisibleToUser: "true",
            },
          },
          coordinates: {
            x: 180.5728257335101,
            y: 731.2317863572292,
          },
          localPosition: {
            x: 0.5150916816362601,
            y: 0.739424211372025,
          },
          appId: "com.amplifyr.tooly",
          time: 26.026154117,
          duration: 0.007,
          position: {
            x: 0.5029883725167412,
            y: 0.9151837125872706,
          },
        },
        // Tap on element at (7%, 8%)
        {
          type: "tap",
          element: {
            path: "/2/0/0/0/0/0/0/0/1/0/0",
            type: "node",
            source: "accessibility",
            bounds: {
              x: 0,
              y: 42.666666666666664,
              width: 360,
              height: 715.3333333333334,
            },
            attributes: {
              class: "android.widget.RelativeLayout",
              clickable: "false",
              enabled: "true",
              checkable: "false",
              selected: "false",
              focusable: "false",
              drawingOrder: "1",
              isVisibleToUser: "true",
            },
          },
          coordinates: {
            x: 26.11773681182621,
            y: 65.65641128339165,
          },
          localPosition: {
            x: 0.07254926892173946,
            y: 0.03213850598796596,
          },
          appId: "com.amplifyr.tooly",
          time: 28.96530521,
          duration: 0.007,
          position: {
            x: 0.07275135602180002,
            y: 0.08217323064254274,
          },
        },
        // Tap on "Notes Editor"
        {
          type: "tap",
          element: {
            path: "/2/0/0/0/0/0/0/1/0/0/4",
            type: "node",
            source: "accessibility",
            bounds: {
              x: 0,
              y: 301.3333333333333,
              width: 304,
              height: 49,
            },
            attributes: {
              text: "Notes Editor",
              class: "android.widget.Button",
              "resource-id": "com.amplifyr.tooly:id/btn_editorFrag",
              clickable: "true",
              enabled: "true",
              checkable: "false",
              selected: "false",
              focusable: "true",
              focused: "false",
              drawingOrder: "5",
              isVisibleToUser: "true",
            },
          },
          coordinates: {
            x: 86.58748342880013,
            y: 328.8765813085791,
          },
          localPosition: {
            x: 0.28482724812105303,
            y: 0.562107101535628,
          },
          appId: "com.amplifyr.tooly",
          time: 34.900398502,
          duration: 0.012,
          position: {
            x: 0.24119076164011177,
            y: 0.4116102394350176,
          },
        },
        // Tap on "Write Something"
        {
          type: "tap",
          element: {
            path: "/2/0/0/0/0/0/0/0/1/0/0/1/0/1",
            type: "node",
            source: "accessibility",
            bounds: {
              x: 14,
              y: 145.66666666666666,
              width: 332,
              height: 46.666666666666664,
            },
            attributes: {
              text: "Write Something",
              class: "android.widget.EditText",
              "resource-id": "com.amplifyr.tooly:id/et_note",
              clickable: "true",
              enabled: "true",
              checkable: "false",
              selected: "false",
              focusable: "true",
              focused: "false",
              hint: "Write Something",
              drawingOrder: "2",
              isVisibleToUser: "true",
            },
          },
          coordinates: {
            x: 73.20645839065509,
            y: 174.30144143632893,
          },
          localPosition: {
            x: 0.17833270599594905,
            y: 0.613602316492763,
          },
          appId: "com.amplifyr.tooly",
          time: 39.53331358,
          duration: 0.005,
          position: {
            x: 0.20391771139458242,
            y: 0.21814948865623146,
          },
        },
        // Tap on "com.google.android.inputmethod.latin:id/key_pos_1_5"
        {
          type: "tap",
          element: {
            path: "/2/0/0/0/0/0/0/0/0/1/0/0/0/0/1/5",
            type: "node",
            source: "accessibility",
            bounds: {
              x: 197.66666666666666,
              y: 602.6666666666666,
              width: 35.666666666666664,
              height: 51.666666666666664,
            },
            attributes: {
              "content-desc": "H",
              class: "android.widget.FrameLayout",
              "resource-id":
                "com.google.android.inputmethod.latin:id/key_pos_1_5",
              clickable: "true",
              enabled: "true",
              checkable: "false",
              selected: "false",
              focusable: "true",
              focused: "false",
              drawingOrder: "7",
              isVisibleToUser: "true",
            },
          },
          coordinates: {
            x: 218.98699317141504,
            y: 620.3896028704443,
          },
          localPosition: {
            x: 0.5977661636845341,
            y: 0.34302457168601874,
          },
          appId: "com.google.android.inputmethod.latin",
          time: 45.848488014,
          duration: 0.008,
          position: {
            x: 0.609991624432911,
            y: 0.7764575755575022,
          },
        },
        // Tap on "com.google.android.inputmethod.latin:id/0_resource_name_obfuscated"
        {
          type: "tap",
          element: {
            path: "/2/0/0/0/0/0/0/0/0/1/0/0/0/0/0/7/0",
            type: "node",
            source: "accessibility",
            bounds: {
              x: 253.66666666666666,
              y: 551.3333333333334,
              width: 31,
              height: 41,
            },
            attributes: {
              class: "android.widget.TextView",
              "resource-id":
                "com.google.android.inputmethod.latin:id/0_resource_name_obfuscated",
              clickable: "false",
              enabled: "true",
              checkable: "false",
              selected: "false",
              focusable: "false",
              drawingOrder: "1",
              isVisibleToUser: "true",
            },
          },
          coordinates: {
            x: 262.62990570049277,
            y: 574.1113103823795,
          },
          localPosition: {
            x: 0.2891367430266488,
            y: 0.5555604158303944,
          },
          appId: "com.google.android.inputmethod.latin",
          time: 47.066940816,
          duration: 0.001,
          position: {
            x: 0.7315596259066651,
            y: 0.7185373096149932,
          },
        },
        // Tap on "Title"
        {
          type: "tap",
          element: {
            path: "/3/0/0/0/0/0/0/0/1/0/0/1/0/0",
            type: "node",
            source: "accessibility",
            bounds: {
              x: 14,
              y: 91.66666666666667,
              width: 332,
              height: 54,
            },
            attributes: {
              text: "Title",
              class: "android.widget.EditText",
              "resource-id": "com.amplifyr.tooly:id/et_noteTitle",
              clickable: "true",
              enabled: "true",
              checkable: "false",
              selected: "false",
              focusable: "true",
              focused: "false",
              hint: "Title",
              drawingOrder: "1",
              isVisibleToUser: "true",
            },
          },
          coordinates: {
            x: 40.963530853698195,
            y: 115.36250309830605,
          },
          localPosition: {
            x: 0.08121545437860903,
            y: 0.4388117857710996,
          },
          appId: "com.amplifyr.tooly",
          time: 55.934177762,
          duration: 0.008,
          position: {
            x: 0.11410454276796154,
            y: 0.14438360838336176,
          },
        },
        // Type "Test Title"
        {
          type: "typeText",
          text: "Test Title",
        },
        // Tap on element at (28%, 39%)
        {
          type: "tap",
          element: {
            path: "/3/0/0/0/0/0/0/0/1/0/0/1",
            type: "node",
            source: "accessibility",
            bounds: {
              x: 0,
              y: 77.66666666666667,
              width: 360,
              height: 428,
            },
            attributes: {
              class: "android.widget.ScrollView",
              clickable: "false",
              enabled: "true",
              checkable: "false",
              selected: "false",
              focusable: "true",
              focused: "false",
              drawingOrder: "2",
              isVisibleToUser: "true",
            },
          },
          coordinates: {
            x: 100.94702218664798,
            y: 307.7214765313136,
          },
          localPosition: {
            x: 0.2804083949629111,
            y: 0.5375112380015115,
          },
          appId: "com.amplifyr.tooly",
          time: 87.830872815,
          duration: 0.01,
          position: {
            x: 0.2811894768430306,
            y: 0.38513326224194444,
          },
        },
        // Tap on "com.amplifyr.tooly:id/ib_save"
        {
          type: "tap",
          element: {
            path: "/3/0/0/0/0/0/0/0/1/0/0/2/2",
            type: "node",
            source: "accessibility",
            bounds: {
              x: 180,
              y: 456.6666666666667,
              width: 90,
              height: 49,
            },
            attributes: {
              "content-desc": "Tooly Image",
              class: "android.widget.ImageButton",
              "resource-id": "com.amplifyr.tooly:id/ib_save",
              clickable: "true",
              enabled: "true",
              checkable: "false",
              selected: "false",
              focusable: "true",
              focused: "false",
              drawingOrder: "2",
              isVisibleToUser: "true",
            },
          },
          coordinates: {
            x: 217.49821156106955,
            y: 478.6011750230453,
          },
          localPosition: {
            x: 0.416646795122995,
            y: 0.44764302768119624,
          },
          appId: "com.amplifyr.tooly",
          time: 90.406532358,
          duration: 0.187,
          position: {
            x: 0.6058446004486617,
            y: 0.5990002190526224,
          },
        },
        // Tap on element at (6%, 8%)
        {
          type: "tap",
          element: {
            path: "/3/0/0/0/0/0/0/0/1/0/0",
            type: "node",
            source: "accessibility",
            bounds: {
              x: 0,
              y: 42.666666666666664,
              width: 360,
              height: 463,
            },
            attributes: {
              class: "android.widget.RelativeLayout",
              clickable: "true",
              enabled: "true",
              checkable: "false",
              selected: "false",
              focusable: "true",
              focused: "true",
              drawingOrder: "1",
              isVisibleToUser: "true",
            },
          },
          coordinates: {
            x: 23.11616098451687,
            y: 67.2772621034432,
          },
          localPosition: {
            x: 0.06421155829032464,
            y: 0.053154633772735514,
          },
          appId: "com.amplifyr.tooly",
          time: 94.850742104,
          duration: 0.11,
          position: {
            x: 0.06439042056968487,
            y: 0.08420182991669989,
          },
        },
        // Tap on "Multi-Purpose Scanner"
        {
          type: "tap",
          element: {
            path: "/3/0/0/0/0/0/0/1/0/0/5",
            type: "node",
            source: "accessibility",
            bounds: {
              x: 0,
              y: 350.3333333333333,
              width: 304,
              height: 49,
            },
            attributes: {
              text: "Multi-Purpose Scanner",
              class: "android.widget.Button",
              "resource-id": "com.amplifyr.tooly:id/btn_scannerFrag",
              clickable: "true",
              enabled: "true",
              checkable: "false",
              selected: "false",
              focusable: "true",
              focused: "false",
              drawingOrder: "6",
              isVisibleToUser: "true",
            },
          },
          coordinates: {
            x: 86.59348658045474,
            y: 374.3864704449156,
          },
          localPosition: {
            x: 0.2848469953304432,
            y: 0.49088034921596446,
          },
          appId: "com.amplifyr.tooly",
          time: 99.498665737,
          duration: 0.009,
          position: {
            x: 0.24120748351101598,
            y: 0.4685687990549632,
          },
        },
        // Tap on "While using the app"
        {
          type: "tap",
          element: {
            path: "/2/0/0/0/0/0/0/1/0",
            type: "node",
            source: "accessibility",
            bounds: {
              x: 44.333333333333336,
              y: 373.6666666666667,
              width: 271.3333333333333,
              height: 49,
            },
            attributes: {
              text: "While using the app",
              class: "android.widget.Button",
              "resource-id":
                "com.android.permissioncontroller:id/permission_allow_foreground_only_button",
              clickable: "true",
              enabled: "true",
              checkable: "false",
              selected: "false",
              focusable: "true",
              focused: "false",
              drawingOrder: "3",
              isVisibleToUser: "true",
            },
          },
          coordinates: {
            x: 141.6123714950349,
            y: 397.2704827635694,
          },
          localPosition: {
            x: 0.35852225366720475,
            y: 0.4817105325898517,
          },
          appId: "com.google.android.permissioncontroller",
          time: 103.351449614,
          duration: 0.001,
          position: {
            x: 0.3944634303482866,
            y: 0.49720961547380405,
          },
        },
        // Tap on element at (5%, 8%)
        {
          type: "tap",
          element: {
            path: "/2/0/0/0/0/0/0/0/1/0/0",
            type: "node",
            source: "accessibility",
            bounds: {
              x: 0,
              y: 42.666666666666664,
              width: 360,
              height: 715.3333333333334,
            },
            attributes: {
              class: "android.widget.RelativeLayout",
              clickable: "false",
              enabled: "true",
              checkable: "false",
              selected: "false",
              focusable: "false",
              drawingOrder: "1",
              isVisibleToUser: "true",
            },
          },
          coordinates: {
            x: 19.466244778508717,
            y: 61.11202583606191,
          },
          localPosition: {
            x: 0.054072902162524215,
            y: 0.02578568383419652,
          },
          appId: "com.amplifyr.tooly",
          time: 105.53850898,
          duration: 0.008,
          position: {
            x: 0.05422352305991286,
            y: 0.07648563934425771,
          },
        },
        // Tap on "Notes Editor"
        {
          type: "tap",
          element: {
            path: "/2/0/0/0/0/0/0/1/0/0/4",
            type: "node",
            source: "accessibility",
            bounds: {
              x: 0,
              y: 301.3333333333333,
              width: 304,
              height: 49,
            },
            attributes: {
              text: "Notes Editor",
              class: "android.widget.Button",
              "resource-id": "com.amplifyr.tooly:id/btn_editorFrag",
              clickable: "true",
              enabled: "true",
              checkable: "false",
              selected: "false",
              focusable: "true",
              focused: "false",
              drawingOrder: "5",
              isVisibleToUser: "true",
            },
          },
          coordinates: {
            x: 68.52400010005253,
            y: 316.58813083211413,
          },
          localPosition: {
            x: 0.2254078950659623,
            y: 0.3113223979343024,
          },
          appId: "com.amplifyr.tooly",
          time: 107.397776861,
          duration: 0.001,
          position: {
            x: 0.1908746520892828,
            y: 0.3962304516046485,
          },
        },
        // Tap on element at (6%, 8%)
        {
          type: "tap",
          element: {
            path: "/2/0/0/0/0/0/0/0/1/0/0",
            type: "node",
            source: "accessibility",
            bounds: {
              x: 0,
              y: 42.666666666666664,
              width: 360,
              height: 715.3333333333334,
            },
            attributes: {
              class: "android.widget.RelativeLayout",
              clickable: "true",
              enabled: "true",
              checkable: "false",
              selected: "false",
              focusable: "true",
              focused: "true",
              drawingOrder: "1",
              isVisibleToUser: "true",
            },
          },
          coordinates: {
            x: 19.922484304259736,
            y: 64.20364869653062,
          },
          localPosition: {
            x: 0.055340234178499266,
            y: 0.030107617003537684,
          },
          appId: "com.amplifyr.tooly",
          time: 111.26361115,
          duration: 0.001,
          position: {
            x: 0.05549438524863436,
            y: 0.08035500462644633,
          },
        },
        // Tap on "Sequential Timer"
        {
          type: "tap",
          element: {
            path: "/2/0/0/0/0/0/0/1/0/0/1",
            type: "node",
            source: "accessibility",
            bounds: {
              x: 0,
              y: 154.33333333333334,
              width: 304,
              height: 49,
            },
            attributes: {
              text: "Sequential Timer",
              class: "android.widget.Button",
              "resource-id": "com.amplifyr.tooly:id/btn_timerFrag",
              clickable: "true",
              enabled: "true",
              checkable: "false",
              selected: "false",
              focusable: "true",
              focused: "false",
              drawingOrder: "2",
              isVisibleToUser: "true",
            },
          },
          coordinates: {
            x: 90.11133345006128,
            y: 171.64204546120735,
          },
          localPosition: {
            x: 0.2964188600330963,
            y: 0.3532390230178368,
          },
          appId: "com.amplifyr.tooly",
          time: 115.910047451,
          duration: 0.008,
          position: {
            x: 0.2510064998608949,
            y: 0.2148210831804848,
          },
        },
        // Tap on "com.android.systemui:id/red"
        {
          type: "tap",
          element: {
            path: "/0/0/0/0/0/0/1/0/1/0",
            type: "node",
            source: "accessibility",
            bounds: {
              x: 175.66666666666666,
              y: 774.6666666666666,
              width: 8.666666666666666,
              height: 8.666666666666666,
            },
            attributes: {
              class: "android.widget.ImageView",
              "resource-id": "com.android.systemui:id/red",
              clickable: "false",
              enabled: "true",
              checkable: "false",
              selected: "false",
              focusable: "false",
              drawingOrder: "1",
              isVisibleToUser: "false",
            },
          },
          coordinates: {
            x: 181.10710623077117,
            y: 779.0228729440087,
          },
          localPosition: {
            x: 0.6277430266274433,
            y: 0.5026391858471584,
          },
          appId: "com.android.systemui",
          time: 129.285385387,
          duration: 0.108,
          position: {
            x: 0.5044766190272177,
            y: 0.9749973378523262,
          },
        },
      ]);
    });
  });
});
