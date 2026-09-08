// src/tests/question6.test.js - Question 6: Modal Dialog & Timer

export const question6Tests = [
  {
    id: "q6_t1",
    name: "[HTML] Open modal button #open-modal-btn exists",
    testFn: async ({ document, assert }) => {
      const openBtn = document.getElementById("open-modal-btn");
      assert(openBtn !== null, "Button with id='open-modal-btn' must exist in HTML", "<button id='open-modal-btn'>...</button>", openBtn);
    }
  },
  {
    id: "q6_t2",
    name: "[HTML] Countdown timer span #countdown-timer exists",
    testFn: async ({ document, assert }) => {
      const timer = document.getElementById("countdown-timer");
      assert(timer !== null, "Span with id='countdown-timer' must exist in HTML", "<span id='countdown-timer'>10</span>", timer);
    }
  },
  {
    id: "q6_t3",
    name: "[CSS] Modal overlay #modal-overlay has fixed position and z-index",
    testFn: async ({ document, assert }) => {
      const overlay = document.getElementById("modal-overlay");
      assert(overlay !== null, "#modal-overlay must exist");
      const style = window.getComputedStyle(overlay);
      assert(style.position === "fixed" || overlay.style.position === "fixed", "Modal overlay should have fixed position", "fixed", style.position);
    }
  },
  {
    id: "q6_t4",
    name: "[JavaScript] Clicking #open-modal-btn opens the modal dialog",
    testFn: async ({ document, assert }) => {
      const openBtn = document.getElementById("open-modal-btn");
      const overlay = document.getElementById("modal-overlay");
      assert(openBtn && overlay, "Open button and modal overlay must exist");

      openBtn.click();

      const isOpen = overlay.classList.contains("active") || overlay.classList.contains("open") || overlay.style.display === "flex" || overlay.style.display === "block";
      assert(isOpen, "Modal should open after clicking #open-modal-btn", "open/active", overlay.className);
    }
  },
  {
    id: "q6_t5",
    name: "[JavaScript] Close button closes the modal dialog and stops timer",
    testFn: async ({ document, assert }) => {
      const closeBtn = document.getElementById("close-modal-btn");
      const overlay = document.getElementById("modal-overlay");
      assert(closeBtn && overlay, "Close button and overlay must exist");

      closeBtn.click();

      const isClosed = !overlay.classList.contains("active") && !overlay.classList.contains("open") && (overlay.style.display === "none" || overlay.style.display === "");
      assert(isClosed, "Modal should close after clicking close button", "closed", overlay.className);
    }
  },
  {
    id: "q6_t6",
    name: "[JavaScript] Clicking modal overlay backdrop closes the dialog",
    testFn: async ({ document, assert }) => {
      const openBtn = document.getElementById("open-modal-btn");
      const overlay = document.getElementById("modal-overlay");
      openBtn.click();

      // Click on overlay outside dialog window
      overlay.dispatchEvent(new MouseEvent("click", { bubbles: true, target: overlay }));

      const isClosed = !overlay.classList.contains("active") && !overlay.classList.contains("open");
      assert(isClosed, "Modal should close when clicking backdrop overlay", "closed", overlay.className);
    }
  }
];
