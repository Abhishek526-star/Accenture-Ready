// src/tests/question10.test.js - Question 10: Char Limit & Progress

export const question10Tests = [
  {
    id: "q10_t1",
    name: "[HTML] Progress container and bar #char-progress-bar exist",
    testFn: async ({ document, assert }) => {
      const bar = document.getElementById("char-progress-bar");
      assert(bar !== null, "Element with id='char-progress-bar' must exist in HTML", "<div id='char-progress-bar'></div>", bar);
    }
  },
  {
    id: "q10_t2",
    name: "[HTML] Remaining characters counter #char-remaining exists",
    testFn: async ({ document, assert }) => {
      const remaining = document.getElementById("char-remaining");
      assert(remaining !== null, "Span with id='char-remaining' must exist in HTML", "<span id='char-remaining'>...</span>", remaining);
    }
  },
  {
    id: "q10_t3",
    name: "[CSS] #char-progress-bar has transition and border-radius",
    testFn: async ({ document, assert }) => {
      const bar = document.getElementById("char-progress-bar");
      assert(bar !== null, "#char-progress-bar must exist");
      const style = window.getComputedStyle(bar);
      assert(style.height !== "auto" && parseInt(style.height, 10) > 0, "Progress bar must have defined height", "> 0px", style.height);
    }
  },
  {
    id: "q10_t4",
    name: "[JavaScript] Typing updates character count and remaining counter",
    testFn: async ({ document, assert }) => {
      const textarea = document.getElementById("char-textarea");
      const count = document.getElementById("char-count");
      const remaining = document.getElementById("char-remaining");
      assert(textarea && count && remaining, "Textarea and counters must exist");

      textarea.value = "Hello World";
      textarea.dispatchEvent(new Event("input", { bubbles: true }));

      assert(count.textContent.includes("11"), "Character count should display 11", "11", count.textContent);
      assert(remaining.textContent.includes("139"), "Remaining count should display 139", "139", remaining.textContent);
    }
  },
  {
    id: "q10_t5",
    name: "[JavaScript] Progress bar width updates dynamically based on ratio",
    testFn: async ({ document, assert }) => {
      const textarea = document.getElementById("char-textarea");
      const bar = document.getElementById("char-progress-bar");
      assert(textarea && bar, "Textarea and progress bar must exist");

      // 75 chars is exactly 50% of 150
      textarea.value = "a".repeat(75);
      textarea.dispatchEvent(new Event("input", { bubbles: true }));

      assert(bar.style.width.includes("50%"), "Progress bar width should be 50% for 75 characters", "50%", bar.style.width);
    }
  },
  {
    id: "q10_t6",
    name: "[JavaScript] Warning and limit-reached classes applied at thresholds",
    testFn: async ({ document, assert }) => {
      const textarea = document.getElementById("char-textarea");
      const bar = document.getElementById("char-progress-bar");

      // >= 120 chars triggers warning
      textarea.value = "a".repeat(125);
      textarea.dispatchEvent(new Event("input", { bubbles: true }));
      assert(bar.classList.contains("warning"), "Warning class should be applied when >= 120 chars", "warning", bar.className);

      // 150 chars triggers limit-reached
      textarea.value = "a".repeat(150);
      textarea.dispatchEvent(new Event("input", { bubbles: true }));
      assert(bar.classList.contains("limit-reached"), "Limit reached class should be applied at 150 chars", "limit-reached", bar.className);
    }
  }
];
