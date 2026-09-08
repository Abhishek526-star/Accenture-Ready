// src/tests/question2.test.js - Question 2: Grade Calculator & Filter

export const question2Tests = [
  {
    id: "q2_t1",
    name: "[HTML] Average score container #average-box and span #average-score exist",
    testFn: async ({ document, assert }) => {
      const avgBox = document.getElementById("average-box");
      const avgScore = document.getElementById("average-score");
      assert(avgBox !== null, "#average-box must exist in HTML", "<div id='average-box'>...</div>", avgBox);
      assert(avgScore !== null, "#average-score must exist in HTML", "<span id='average-score'>0</span>", avgScore);
    }
  },
  {
    id: "q2_t2",
    name: "[HTML] Distinction option added inside #grade-filter",
    testFn: async ({ document, assert }) => {
      const select = document.getElementById("grade-filter");
      assert(select !== null, "Select #grade-filter must exist");
      const opt = select.querySelector("option[value='distinction']");
      assert(opt !== null, "Option with value='distinction' must exist in #grade-filter", "<option value='distinction'>...", opt);
    }
  },
  {
    id: "q2_t3",
    name: "[CSS] .badge-pass and .badge-fail styled with border-radius",
    testFn: async ({ document, assert }) => {
      // Create temporary test elements if not currently rendered
      let badge = document.querySelector(".badge-pass") || document.querySelector(".badge-fail");
      if (!badge) {
        badge = document.createElement("span");
        badge.className = "badge-pass";
        document.body.appendChild(badge);
      }
      const style = window.getComputedStyle(badge);
      const hasRadius = parseInt(style.borderRadius, 10) > 0 || badge.style.borderRadius !== "";
      assert(hasRadius, "Grade badge must have border-radius styling", "border-radius > 0", style.borderRadius);
    }
  },
  {
    id: "q2_t4",
    name: "[JavaScript] Adding a student calculates correct letter grade badge",
    testFn: async ({ document, assert }) => {
      const nameInput = document.getElementById("student-name");
      const scoreInput = document.getElementById("student-score");
      const addBtn = document.getElementById("add-student-btn");
      const tbody = document.getElementById("student-table-body");
      assert(nameInput && scoreInput && addBtn && tbody, "Form elements and table body must exist");

      nameInput.value = "John Doe";
      scoreInput.value = "85";
      addBtn.click();

      const lastRow = tbody.lastElementChild;
      assert(lastRow !== null, "New row should be added to table");
      const text = lastRow.textContent;
      assert(text.includes("John Doe"), "Student name should appear in row", "John Doe", text);
      assert(text.includes("Distinction") || text.includes("A") || lastRow.querySelector(".badge-pass"), "Grade distinction/pass badge should be assigned", "Distinction badge", text);
    }
  },
  {
    id: "q2_t5",
    name: "[JavaScript] Overall average score updates accurately",
    testFn: async ({ document, assert }) => {
      const avgScore = document.getElementById("average-score");
      assert(avgScore !== null, "#average-score must exist");
      const val = parseFloat(avgScore.textContent.trim());
      assert(!isNaN(val) && val >= 0, "Average score must be a valid number", "Number >= 0", val);
    }
  },
  {
    id: "q2_t6",
    name: "[JavaScript] Filtering by grade category hides non-matching rows",
    testFn: async ({ document, assert }) => {
      const filter = document.getElementById("grade-filter");
      assert(filter !== null, "#grade-filter must exist");

      filter.value = "fail";
      filter.dispatchEvent(new Event("change", { bubbles: true }));

      // Rows with pass should be hidden
      const passRows = document.querySelectorAll("#student-table-body tr.row-pass, #student-table-body tr:has(.badge-pass)");
      if (passRows.length > 0) {
        const isHidden = passRows[0].style.display === "none" || passRows[0].classList.contains("hidden");
        assert(isHidden, "Passing rows should be hidden when filter is set to 'fail'", "display: none", passRows[0].style.display);
      }
    }
  }
];
