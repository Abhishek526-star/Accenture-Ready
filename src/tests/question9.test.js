// src/tests/question9.test.js - Question 9: Tab Switcher & Badge

export const question9Tests = [
  {
    id: "q9_t1",
    name: "[HTML] Tab badge #badge-messages exists inside #tab-btn-messages",
    testFn: async ({ document, assert }) => {
      const badge = document.getElementById("badge-messages");
      assert(badge !== null, "Badge with id='badge-messages' must exist in HTML", "<span id='badge-messages'>...</span>", badge);
    }
  },
  {
    id: "q9_t2",
    name: "[HTML] Mark all read button #mark-read-btn exists",
    testFn: async ({ document, assert }) => {
      const btn = document.getElementById("mark-read-btn");
      assert(btn !== null, "Button with id='mark-read-btn' must exist in HTML", "<button id='mark-read-btn'>...", btn);
    }
  },
  {
    id: "q9_t3",
    name: "[CSS] Inactive tab panels are hidden while active panel is displayed",
    testFn: async ({ document, assert }) => {
      const panels = document.querySelectorAll(".tab-panel");
      assert(panels.length >= 2, "At least 2 tab panels must exist");
      const activePanel = document.querySelector(".tab-panel.active");
      assert(activePanel !== null, "An active tab panel must exist");
      const style = window.getComputedStyle(activePanel);
      assert(style.display !== "none", "Active tab panel must be visible", "not none", style.display);
    }
  },
  {
    id: "q9_t4",
    name: "[JavaScript] Clicking a tab switches the active tab and corresponding panel",
    testFn: async ({ document, assert }) => {
      const tabs = document.querySelectorAll(".tab-btn");
      assert(tabs.length >= 2, "At least 2 tab buttons must exist");

      const targetTab = tabs[1];
      targetTab.click();

      assert(targetTab.classList.contains("active"), "Clicked tab should have .active class", "active", targetTab.className);
      assert(targetTab.getAttribute("aria-selected") === "true", "Clicked tab should have aria-selected='true'", "true", targetTab.getAttribute("aria-selected"));
    }
  },
  {
    id: "q9_t5",
    name: "[JavaScript] Marking all read clears or hides the message notification badge",
    testFn: async ({ document, assert }) => {
      const markReadBtn = document.getElementById("mark-read-btn");
      const badge = document.getElementById("badge-messages");
      assert(markReadBtn && badge, "Mark read button and badge must exist");

      markReadBtn.click();

      const isCleared = badge.style.display === "none" || badge.textContent.trim() === "0" || badge.classList.contains("hidden");
      assert(isCleared, "Badge should be hidden or display '0' when marked read", "cleared", badge.textContent);
    }
  }
];
