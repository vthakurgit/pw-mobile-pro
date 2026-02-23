/**
 * Tooly Mobile App - Multi-Apps Access and Functionality Validation
 * This test suite covers the Timer App, Notes App & Scanner access and functionality within the Tooly Mobile App.
 * This test is directly recorded for the Tooly Mobile App over Appetize.
 * @author Vinay Thakur
 */

import { test, expect } from "@appetize/playwright";

test.describe("Tooly Mobile App Testing", () => {
  test("Accessing Timer App & Notes App within Tooly Mobile App", async ({
    session,
  }) => {
    test.slow(); // Marking the test as slow due to multiple app interactions and potential delays in mobile app responses

    test.step("Timer App functionality", async ({}) => {
      // Tap on "Click to Begin" button
      await session.tap({
        element: {
          attributes: {
            "resource-id": "com.amplifyr.tooly:id/pb_timer",
          },
        },
      });

      // Tap on "0" value within minute section to set timer for 1 minute
      await session.tap({
        element: {
          attributes: {
            "resource-id": "android:id/numberpicker_input",
            path: "/2/0/0/0/0/1/0/0/1/2/1/1",
          },
        },
      });

      // Type "5" to set timer for 5 minute
      await session.type("5");

      // Click on "OK" button to start the timer
      await session.tap({
        element: {
          attributes: {
            text: "OK",
            class: "android.widget.Button",
            "resource-id": "android:id/button1",
          },
        },
      });

      // Validate that timer is set for 5 minutes
      await expect(session).toHaveElement({
        attributes: {
          "resource-id": "android:id/numberpicker_input",
          path: "/2/0/0/0/0/1/0/0/1/2/1/1",
          text: "5",
        },
      });
    });
  });
});
