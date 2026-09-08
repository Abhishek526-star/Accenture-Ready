// src/tests/question4.test.js - Question 4: Multi-Step Quiz

export const question4Tests = [
  {
    id: "q4_t1",
    name: "[HTML] Quiz progress container #quiz-progress and #progress-fill exist",
    testFn: async ({ document, assert }) => {
      const progress = document.getElementById("quiz-progress");
      const fill = document.getElementById("progress-fill");
      assert(progress !== null, "#quiz-progress must exist in HTML", "<div id='quiz-progress'>...</div>", progress);
      assert(fill !== null, "#progress-fill must exist in HTML", "<div id='progress-fill'></div>", fill);
    }
  },
  {
    id: "q4_t2",
    name: "[HTML] Previous button #prev-btn exists in wizard actions",
    testFn: async ({ document, assert }) => {
      const prevBtn = document.getElementById("prev-btn");
      assert(prevBtn !== null, "Button with id='prev-btn' must exist in HTML", "<button id='prev-btn'>Previous</button>", prevBtn);
    }
  },
  {
    id: "q4_t3",
    name: "[CSS] Inactive steps are hidden while active step is visible",
    testFn: async ({ document, assert }) => {
      const steps = document.querySelectorAll(".quiz-step");
      assert(steps.length >= 3, "At least 3 quiz steps must exist");
      const firstStep = steps[0];
      const secondStep = steps[1];
      assert(firstStep.classList.contains("active"), "Step 1 should be active initially");
      const secondStyle = window.getComputedStyle(secondStep);
      assert(secondStyle.display === "none", "Inactive step should have display: none", "none", secondStyle.display);
    }
  },
  {
    id: "q4_t4",
    name: "[JavaScript] Previous button is disabled on Step 1",
    testFn: async ({ document, assert }) => {
      const prevBtn = document.getElementById("prev-btn");
      assert(prevBtn !== null, "#prev-btn must exist");
      assert(prevBtn.disabled === true, "Previous button should be disabled on step 1", true, prevBtn.disabled);
    }
  },
  {
    id: "q4_t5",
    name: "[JavaScript] Selecting an option enables navigation to Step 2 and updates progress",
    testFn: async ({ document, assert }) => {
      const step1Option = document.querySelector(".quiz-step.active input[type='radio']");
      const nextBtn = document.getElementById("next-btn");
      const fill = document.getElementById("progress-fill");
      assert(step1Option && nextBtn, "Radio option and Next button must exist");

      step1Option.checked = true;
      step1Option.dispatchEvent(new Event("change", { bubbles: true }));
      nextBtn.click();

      const steps = document.querySelectorAll(".quiz-step");
      assert(steps[1].classList.contains("active"), "Step 2 should be active after clicking Next", "active", steps[1].className);
      assert(fill.style.width.includes("66") || parseInt(fill.style.width, 10) > 33, "Progress fill should advance on Step 2", ">33%", fill.style.width);
    }
  },
  {
    id: "q4_t6",
    name: "[JavaScript] Completing all steps displays final score inside #result-message",
    testFn: async ({ document, assert }) => {
      const resultMsg = document.getElementById("result-message");
      const nextBtn = document.getElementById("next-btn");
      const steps = document.querySelectorAll(".quiz-step");

      // Advance through remaining steps
      for (let i = 0; i < steps.length; i++) {
        const activeStep = document.querySelector(".quiz-step.active");
        if (activeStep) {
          const radio = activeStep.querySelector("input[type='radio']");
          if (radio) {
            radio.checked = true;
            radio.dispatchEvent(new Event("change", { bubbles: true }));
          }
          nextBtn.click();
        }
      }

      assert(resultMsg !== null, "#result-message must exist");
      assert(resultMsg.textContent.toLowerCase().includes("score") || resultMsg.textContent.includes("/"), "Final result message should show quiz score", "Score", resultMsg.textContent);
    }
  }
];
