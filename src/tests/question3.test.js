// src/tests/question3.test.js - Question 3: Password Validator

export const question3Tests = [
  {
    id: "q3_t1",
    name: "[HTML] Special character requirement #rule-special exists in checklist",
    testFn: async ({ document, assert }) => {
      const rule = document.getElementById("rule-special");
      assert(rule !== null, "List item with id='rule-special' must exist in HTML", "<li id='rule-special'>...</li>", rule);
      assert(rule.textContent.toLowerCase().includes("special"), "Rule should mention special characters", "special", rule.textContent);
    }
  },
  {
    id: "q3_t2",
    name: "[HTML] Password toggle button #toggle-password exists",
    testFn: async ({ document, assert }) => {
      const btn = document.getElementById("toggle-password");
      assert(btn !== null, "Button with id='toggle-password' must exist in HTML", "<button id='toggle-password'>Show</button>", btn);
    }
  },
  {
    id: "q3_t3",
    name: "[CSS] Strength bar #strength-bar has transition styling",
    testFn: async ({ document, assert }) => {
      const bar = document.getElementById("strength-bar");
      assert(bar !== null, "#strength-bar must exist");
      const style = window.getComputedStyle(bar);
      assert(style.height !== "auto" && parseInt(style.height, 10) > 0, "#strength-bar must have defined height", "> 0px", style.height);
    }
  },
  {
    id: "q3_t4",
    name: "[JavaScript] Requirement checklist updates classes on input",
    testFn: async ({ document, assert }) => {
      const password = document.getElementById("password-input");
      const ruleLength = document.getElementById("rule-length");
      const ruleUpper = document.getElementById("rule-upper");
      assert(password && ruleLength && ruleUpper, "Password input and rule elements must exist");

      // Enter a password with uppercase but short length (< 8)
      password.value = "Abc";
      password.dispatchEvent(new Event("input", { bubbles: true }));

      assert(ruleUpper.classList.contains("valid"), "Uppercase rule should be marked .valid when uppercase is present");
      assert(!ruleLength.classList.contains("valid"), "Length rule should NOT be marked .valid when length < 8");
    }
  },
  {
    id: "q3_t5",
    name: "[JavaScript] Strength progress bar reflects criteria completion percentage",
    testFn: async ({ document, assert }) => {
      const password = document.getElementById("password-input");
      const bar = document.getElementById("strength-bar");
      assert(password && bar, "Password input and strength bar must exist");

      // Full criteria password: 8+ chars, upper, lower, number, special
      password.value = "P@ssw0rd123";
      password.dispatchEvent(new Event("input", { bubbles: true }));

      assert(bar.style.width === "100%" || bar.classList.contains("strong"), "Strength bar should reflect 100% or strong on valid password", "100%", bar.style.width);
    }
  },
  {
    id: "q3_t6",
    name: "[JavaScript] Toggle button toggles password input type and button text",
    testFn: async ({ document, assert }) => {
      const password = document.getElementById("password-input");
      const toggleBtn = document.getElementById("toggle-password");
      assert(password && toggleBtn, "Elements must exist");

      assert(password.type === "password", "Initial input type should be password", "password", password.type);
      toggleBtn.click();
      assert(password.type === "text", "After click, input type should be text", "text", password.type);
      assert(toggleBtn.textContent.trim().toLowerCase().includes("hide"), "Toggle button text should change to Hide", "Hide", toggleBtn.textContent.trim());

      toggleBtn.click();
      assert(password.type === "password", "After second click, input type should be password again", "password", password.type);
    }
  }
];
