// src/tests/question7.test.js - Question 7: Responsive Drawer

export const question7Tests = [
  {
    id: "q7_t1",
    name: "[HTML] Drawer toggle button #drawer-toggle exists in navigation",
    testFn: async ({ document, assert }) => {
      const toggle = document.getElementById("drawer-toggle");
      assert(toggle !== null, "Button with id='drawer-toggle' must exist in HTML", "<button id='drawer-toggle'>...", toggle);
    }
  },
  {
    id: "q7_t2",
    name: "[HTML] Drawer close button #drawer-close exists inside drawer header",
    testFn: async ({ document, assert }) => {
      const closeBtn = document.getElementById("drawer-close");
      assert(closeBtn !== null, "Button with id='drawer-close' must exist in HTML", "<button id='drawer-close'>✕</button>", closeBtn);
    }
  },
  {
    id: "q7_t3",
    name: "[CSS] Drawer #side-drawer positioned off-canvas with transition",
    testFn: async ({ document, assert }) => {
      const drawer = document.getElementById("side-drawer");
      assert(drawer !== null, "#side-drawer must exist");
      const style = window.getComputedStyle(drawer);
      assert(style.position === "fixed" || drawer.style.position === "fixed", "Drawer should have fixed position", "fixed", style.position);
    }
  },
  {
    id: "q7_t4",
    name: "[JavaScript] Clicking toggle button opens drawer and sets aria-expanded='true'",
    testFn: async ({ document, assert }) => {
      const toggle = document.getElementById("drawer-toggle");
      const drawer = document.getElementById("side-drawer");
      assert(toggle && drawer, "Toggle and drawer must exist");

      toggle.click();

      assert(drawer.classList.contains("open"), "Drawer should have .open class when toggled", "open", drawer.className);
      assert(toggle.getAttribute("aria-expanded") === "true", "Toggle aria-expanded should be 'true'", "true", toggle.getAttribute("aria-expanded"));
    }
  },
  {
    id: "q7_t5",
    name: "[JavaScript] Clicking close button or backdrop closes the drawer",
    testFn: async ({ document, assert }) => {
      const closeBtn = document.getElementById("drawer-close");
      const drawer = document.getElementById("side-drawer");
      const toggle = document.getElementById("drawer-toggle");
      assert(closeBtn && drawer, "Close button and drawer must exist");

      closeBtn.click();

      assert(!drawer.classList.contains("open"), "Drawer should not have .open class after close click", "not open", drawer.className);
      assert(toggle.getAttribute("aria-expanded") === "false", "Toggle aria-expanded should be 'false'", "false", toggle.getAttribute("aria-expanded"));
    }
  },
  {
    id: "q7_t6",
    name: "[JavaScript] Pressing Escape key closes the drawer",
    testFn: async ({ document, assert }) => {
      const toggle = document.getElementById("drawer-toggle");
      const drawer = document.getElementById("side-drawer");
      toggle.click();
      assert(drawer.classList.contains("open"), "Drawer should be open");

      // Dispatch Escape keydown
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));

      assert(!drawer.classList.contains("open"), "Drawer should close when Escape key is pressed", "closed", drawer.className);
    }
  }
];
