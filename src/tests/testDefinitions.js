// src/tests/testDefinitions.js
/**
 * Automated test suites for Questions 1 to 10.
 * Each test receives { document, window, helpers }.
 * Helpers include: assert(condition, message, expected, received), wait(ms)
 */

export const testSuites = {
  1: [
    {
      id: "q1_t1",
      name: "Initial counter displays 0",
      testFn: async ({ document, assert }) => {
        const counter = document.getElementById("counter");
        assert(counter !== null, "Element #counter must exist", "#counter element", counter);
        const val = counter.textContent.trim();
        assert(val === "0", "Initial counter value should be 0", "0", val);
      }
    },
    {
      id: "q1_t2",
      name: "Clicking Increment button increases counter to 1",
      testFn: async ({ document, assert }) => {
        const counter = document.getElementById("counter");
        const increment = document.getElementById("increment");
        assert(increment !== null, "Element #increment must exist", "#increment button", increment);
        increment.click();
        const val = counter.textContent.trim();
        assert(val === "1", "Counter should be 1 after one increment", "1", val);
      }
    },
    {
      id: "q1_t3",
      name: "Clicking Decrement button decreases counter back to 0",
      testFn: async ({ document, assert }) => {
        const counter = document.getElementById("counter");
        const decrement = document.getElementById("decrement");
        assert(decrement !== null, "Element #decrement must exist", "#decrement button", decrement);
        decrement.click();
        const val = counter.textContent.trim();
        assert(val === "0", "Counter should decrease back to 0", "0", val);
      }
    },
    {
      id: "q1_t4",
      name: "Counter cannot go below 0 and displays \"Minimum limit reached!\"",
      testFn: async ({ document, assert }) => {
        const counter = document.getElementById("counter");
        const decrement = document.getElementById("decrement");
        const message = document.getElementById("message");
        decrement.click();
        decrement.click();
        const val = counter.textContent.trim();
        assert(val === "0", "Counter cannot decrease below 0", "0", val);
        const msg = message ? message.textContent.trim() : "";
        assert(msg.includes("Minimum limit reached!"), "Status message should display 'Minimum limit reached!'", "Minimum limit reached!", msg);
      }
    },
    {
      id: "q1_t5",
      name: "Incrementing to 10 displays \"Maximum limit reached!\"",
      testFn: async ({ document, assert }) => {
        const counter = document.getElementById("counter");
        const increment = document.getElementById("increment");
        const message = document.getElementById("message");
        for (let i = 0; i < 10; i++) {
          increment.click();
        }
        const val = counter.textContent.trim();
        assert(val === "10", "Counter should reach 10", "10", val);
        const msg = message ? message.textContent.trim() : "";
        assert(msg.includes("Maximum limit reached!"), "Message at 10 should display 'Maximum limit reached!'", "Maximum limit reached!", msg);
      }
    },
    {
      id: "q1_t6",
      name: "Counter cannot exceed 10 upon further clicks",
      testFn: async ({ document, assert }) => {
        const counter = document.getElementById("counter");
        const increment = document.getElementById("increment");
        increment.click();
        increment.click();
        const val = counter.textContent.trim();
        assert(val === "10", "Counter cannot exceed 10", "10", val);
      }
    }
  ],

  2: [
    {
      id: "q2_t1",
      name: "Password under 8 characters displays error message in red",
      testFn: async ({ document, assert }) => {
        const pwd = document.getElementById("password");
        const msg = document.getElementById("validation-message");
        assert(pwd && msg, "#password and #validation-message must exist");
        pwd.value = "short";
        pwd.dispatchEvent(new Event("input", { bubbles: true }));
        assert(msg.textContent.trim().length > 0, "Error message must be shown for short password", "Error text", msg.textContent.trim());
        const color = window.getComputedStyle(msg).color;
        const isRed = color.includes("239") || color.includes("220") || color === "red" || color.includes("rgb(255, 0, 0)") || msg.classList.contains("error");
        assert(isRed, "Error message text should be red or have .error class", "red color", color);
      }
    },
    {
      id: "q2_t2",
      name: "Mismatched passwords display error in red",
      testFn: async ({ document, assert }) => {
        const pwd = document.getElementById("password");
        const confirm = document.getElementById("confirm-password");
        const msg = document.getElementById("validation-message");
        pwd.value = "SecretPassword123";
        confirm.value = "DifferentPassword456";
        pwd.dispatchEvent(new Event("input", { bubbles: true }));
        confirm.dispatchEvent(new Event("input", { bubbles: true }));
        const text = msg.textContent.toLowerCase();
        assert(text.includes("match"), "Error message should indicate mismatch", "Passwords do not match", msg.textContent.trim());
        const color = window.getComputedStyle(msg).color;
        const isRed = color.includes("239") || color.includes("220") || color === "red" || color.includes("rgb(255, 0, 0)") || msg.classList.contains("error");
        assert(isRed, "Mismatch error text should be red or have .error class", "red color", color);
      }
    },
    {
      id: "q2_t3",
      name: "Matching passwords >= 8 chars display \"Password Matched\" in green",
      testFn: async ({ document, assert }) => {
        const pwd = document.getElementById("password");
        const confirm = document.getElementById("confirm-password");
        const msg = document.getElementById("validation-message");
        pwd.value = "Accenture2026!";
        confirm.value = "Accenture2026!";
        pwd.dispatchEvent(new Event("input", { bubbles: true }));
        confirm.dispatchEvent(new Event("input", { bubbles: true }));
        assert(msg.textContent.includes("Password Matched"), "Should display 'Password Matched'", "Password Matched", msg.textContent.trim());
        const color = window.getComputedStyle(msg).color;
        const isGreen = color.includes("16, 185, 129") || color.includes("green") || color.includes("rgb(0, 128, 0)") || msg.classList.contains("success");
        assert(isGreen, "Success message text should be green or have .success class", "green color", color);
      }
    },
    {
      id: "q2_t4",
      name: "Dynamically updates when valid password is edited to mismatched",
      testFn: async ({ document, assert }) => {
        const confirm = document.getElementById("confirm-password");
        const msg = document.getElementById("validation-message");
        confirm.value = "AccentureChanged!";
        confirm.dispatchEvent(new Event("input", { bubbles: true }));
        assert(!msg.textContent.includes("Password Matched"), "Should no longer display 'Password Matched' when values differ", "Error message", msg.textContent.trim());
      }
    }
  ],

  3: [
    {
      id: "q3_t1",
      name: "Initial welcome message has \"bot-message\" class added",
      testFn: async ({ document, assert }) => {
        const welcome = document.getElementById("welcome-message");
        assert(welcome !== null, "#welcome-message must exist", "#welcome-message", welcome);
        assert(welcome.classList.contains("bot-message"), "Welcome message should have 'bot-message' class", "classList contains bot-message", welcome.className);
      }
    },
    {
      id: "q3_t2",
      name: "Sending user input appends message with \"user-message\" class",
      testFn: async ({ document, assert }) => {
        const chatInput = document.getElementById("chat-input");
        const sendBtn = document.getElementById("send-button");
        const chatWindow = document.getElementById("chat-window");
        chatInput.value = "Hello assistant";
        sendBtn.click();
        const userMsgs = chatWindow.querySelectorAll(".user-message");
        assert(userMsgs.length > 0, "A .user-message element should be added to chat window", "> 0 user messages", userMsgs.length);
        const lastUser = userMsgs[userMsgs.length - 1];
        assert(lastUser.textContent.includes("Hello assistant"), "User message should contain input text", "Hello assistant", lastUser.textContent);
      }
    },
    {
      id: "q3_t3",
      name: "User message has background #cfe2ff",
      testFn: async ({ document, assert }) => {
        const chatWindow = document.getElementById("chat-window");
        const userMsgs = chatWindow.querySelectorAll(".user-message");
        assert(userMsgs.length > 0, "User message should exist");
        const lastUser = userMsgs[userMsgs.length - 1];
        const bg = window.getComputedStyle(lastUser).backgroundColor;
        const isLightBlue = bg.includes("207, 226, 255") || bg.includes("#cfe2ff") || lastUser.style.backgroundColor === "#cfe2ff";
        assert(isLightBlue, "User message background must be #cfe2ff", "#cfe2ff or rgb(207, 226, 255)", bg);
      }
    },
    {
      id: "q3_t4",
      name: "Every user input produces an automated bot response",
      testFn: async ({ document, assert }) => {
        const chatWindow = document.getElementById("chat-window");
        const botMsgs = chatWindow.querySelectorAll(".bot-message");
        // At least welcome message + new bot response = 2
        assert(botMsgs.length >= 2, "A bot response with class .bot-message should be created for the user message", ">= 2 bot messages", botMsgs.length);
      }
    },
    {
      id: "q3_t5",
      name: "Chat input is cleared after sending message",
      testFn: async ({ document, assert }) => {
        const chatInput = document.getElementById("chat-input");
        assert(chatInput.value === "", "Input field should be cleared after message is sent", "empty string", chatInput.value);
      }
    }
  ],

  4: [
    {
      id: "q4_t1",
      name: "Initial character count is 0 and warning is empty",
      testFn: async ({ document, assert }) => {
        const charCount = document.getElementById("char-count");
        const warning = document.getElementById("warning-message");
        assert(charCount !== null, "#char-count must exist");
        assert(charCount.textContent.trim() === "0", "Initial count should be 0", "0", charCount.textContent.trim());
        assert(!warning || warning.textContent.trim() === "", "Warning message should initially be empty", "empty string", warning ? warning.textContent.trim() : "");
      }
    },
    {
      id: "q4_t2",
      name: "Character count updates dynamically on typing",
      testFn: async ({ document, assert }) => {
        const textInput = document.getElementById("text-input");
        const charCount = document.getElementById("char-count");
        textInput.value = "Accenture coding test";
        textInput.dispatchEvent(new Event("input", { bubbles: true }));
        assert(charCount.textContent.trim() === "21", "Count should equal input length (21)", "21", charCount.textContent.trim());
      }
    },
    {
      id: "q4_t3",
      name: "Displays \"Character limit reached!\" at 100 characters",
      testFn: async ({ document, assert }) => {
        const textInput = document.getElementById("text-input");
        const charCount = document.getElementById("char-count");
        const warning = document.getElementById("warning-message");
        textInput.value = "A".repeat(100);
        textInput.dispatchEvent(new Event("input", { bubbles: true }));
        assert(charCount.textContent.trim() === "100", "Count should be 100", "100", charCount.textContent.trim());
        assert(warning && warning.textContent.includes("Character limit reached!"), "Should display 'Character limit reached!'", "Character limit reached!", warning ? warning.textContent.trim() : "");
      }
    },
    {
      id: "q4_t4",
      name: "Warning disappears when characters drop below 100",
      testFn: async ({ document, assert }) => {
        const textInput = document.getElementById("text-input");
        const warning = document.getElementById("warning-message");
        textInput.value = "A".repeat(50);
        textInput.dispatchEvent(new Event("input", { bubbles: true }));
        assert(!warning || warning.textContent.trim() === "", "Warning should be empty below 100 characters", "empty string", warning ? warning.textContent.trim() : "");
      }
    }
  ],

  5: [
    {
      id: "q5_t1",
      name: "Existing task list renders initial items",
      testFn: async ({ document, assert }) => {
        const list = document.getElementById("task-list");
        assert(list !== null, "#task-list element must exist");
        assert(list.children.length >= 1, "Initial task list should have existing items", ">= 1", list.children.length);
      }
    },
    {
      id: "q5_t2",
      name: "Clicking Add Task appends new task item to list",
      testFn: async ({ document, assert }) => {
        const input = document.getElementById("task-input");
        const btn = document.getElementById("add-task-btn");
        const list = document.getElementById("task-list");
        const beforeCount = list.children.length;
        input.value = "Submit code changes";
        btn.click();
        assert(list.children.length === beforeCount + 1, "List item count should increase by 1", String(beforeCount + 1), String(list.children.length));
        const lastItem = list.children[list.children.length - 1];
        assert(lastItem.textContent.includes("Submit code changes"), "New item must contain task text", "Submit code changes", lastItem.textContent);
      }
    },
    {
      id: "q5_t3",
      name: "Input field is cleared after adding a task",
      testFn: async ({ document, assert }) => {
        const input = document.getElementById("task-input");
        assert(input.value === "", "Task input should be cleared after adding", "empty string", input.value);
      }
    },
    {
      id: "q5_t4",
      name: "Prevent adding empty or whitespace-only tasks",
      testFn: async ({ document, assert }) => {
        const input = document.getElementById("task-input");
        const btn = document.getElementById("add-task-btn");
        const list = document.getElementById("task-list");
        const beforeCount = list.children.length;
        input.value = "    ";
        btn.click();
        assert(list.children.length === beforeCount, "Should not add item when input is whitespace", String(beforeCount), String(list.children.length));
      }
    }
  ],

  6: [
    {
      id: "q6_t1",
      name: "Form submit prevents default browser reload",
      testFn: async ({ document, assert }) => {
        const form = document.getElementById("login-form");
        assert(form !== null, "#login-form must exist");
        let defaultPrevented = false;
        const evt = new Event("submit", { cancelable: true, bubbles: true });
        form.dispatchEvent(evt);
        assert(evt.defaultPrevented, "Form submission event should have preventDefault called", "defaultPrevented: true", "defaultPrevented: " + evt.defaultPrevented);
      }
    },
    {
      id: "q6_t2",
      name: "Shows \"Please enter all required fields.\" when inputs are empty",
      testFn: async ({ document, assert }) => {
        const form = document.getElementById("login-form");
        const username = document.getElementById("username");
        const password = document.getElementById("password");
        const status = document.getElementById("login-status");
        username.value = "";
        password.value = "";
        form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
        assert(status.textContent.includes("Please enter all required fields."), "Should show required fields warning", "Please enter all required fields.", status.textContent.trim());
      }
    },
    {
      id: "q6_t3",
      name: "Shows error when only username or password is entered",
      testFn: async ({ document, assert }) => {
        const form = document.getElementById("login-form");
        const username = document.getElementById("username");
        const password = document.getElementById("password");
        const status = document.getElementById("login-status");
        username.value = "user123";
        password.value = "";
        form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
        assert(status.textContent.includes("Please enter all required fields."), "Should show error if password is empty", "Please enter all required fields.", status.textContent.trim());
      }
    },
    {
      id: "q6_t4",
      name: "Shows \"Login successful!\" when both fields are provided",
      testFn: async ({ document, assert }) => {
        const form = document.getElementById("login-form");
        const username = document.getElementById("username");
        const password = document.getElementById("password");
        const status = document.getElementById("login-status");
        username.value = "accenture_user";
        password.value = "StrongP@ss1";
        form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
        assert(status.textContent.includes("Login successful!"), "Should display 'Login successful!'", "Login successful!", status.textContent.trim());
      }
    }
  ],

  7: [
    {
      id: "q7_t1",
      name: "All products initially visible",
      testFn: async ({ document, assert }) => {
        const items = document.querySelectorAll(".product-item");
        assert(items.length >= 4, "Should have multiple product items in list", ">= 4", items.length);
        for (const item of items) {
          assert(item.style.display !== "none", "Initial products must be visible", "not display: none", item.style.display);
        }
      }
    },
    {
      id: "q7_t2",
      name: "Searching \"phone\" shows Smartphone and hides Laptop",
      testFn: async ({ document, assert }) => {
        const input = document.getElementById("search-input");
        const items = Array.from(document.querySelectorAll(".product-item"));
        input.value = "phone";
        input.dispatchEvent(new Event("input", { bubbles: true }));
        const smartphone = items.find(i => i.textContent.includes("Smartphone"));
        const laptop = items.find(i => i.textContent.includes("Laptop"));
        assert(smartphone && smartphone.style.display !== "none", "Smartphone should be visible", "visible", smartphone ? smartphone.style.display : "null");
        assert(laptop && laptop.style.display === "none", "Laptop should be hidden", "display: none", laptop ? laptop.style.display : "null");
      }
    },
    {
      id: "q7_t3",
      name: "Search is case-insensitive (e.g. \"KEYBOARD\")",
      testFn: async ({ document, assert }) => {
        const input = document.getElementById("search-input");
        const items = Array.from(document.querySelectorAll(".product-item"));
        input.value = "KEYBOARD";
        input.dispatchEvent(new Event("input", { bubbles: true }));
        const keyboard = items.find(i => i.textContent.includes("Mechanical Keyboard"));
        const monitor = items.find(i => i.textContent.includes("4K Monitor"));
        assert(keyboard && keyboard.style.display !== "none", "Mechanical Keyboard should match uppercase search", "visible", keyboard ? keyboard.style.display : "null");
        assert(monitor && monitor.style.display === "none", "4K Monitor should be hidden", "display: none", monitor ? monitor.style.display : "null");
      }
    },
    {
      id: "q7_t4",
      name: "Clearing search input restores visibility of all products",
      testFn: async ({ document, assert }) => {
        const input = document.getElementById("search-input");
        const items = Array.from(document.querySelectorAll(".product-item"));
        input.value = "";
        input.dispatchEvent(new Event("input", { bubbles: true }));
        for (const item of items) {
          assert(item.style.display !== "none", "All products must be visible when search is empty", "visible", item.style.display);
        }
      }
    }
  ],

  8: [
    {
      id: "q8_t1",
      name: "Password initially hidden with type=\"password\" and \"Show Password\" button",
      testFn: async ({ document, assert }) => {
        const input = document.getElementById("password-input");
        const btn = document.getElementById("toggle-btn");
        assert(input !== null && btn !== null, "#password-input and #toggle-btn must exist");
        assert(input.type === "password", "Input should initially have type='password'", "password", input.type);
        assert(btn.textContent.trim() === "Show Password", "Button text should be 'Show Password'", "Show Password", btn.textContent.trim());
      }
    },
    {
      id: "q8_t2",
      name: "Clicking button reveals password and changes button to \"Hide Password\"",
      testFn: async ({ document, assert }) => {
        const input = document.getElementById("password-input");
        const btn = document.getElementById("toggle-btn");
        btn.click();
        assert(input.type === "text", "Input type should be 'text' after clicking Show Password", "text", input.type);
        assert(btn.textContent.trim() === "Hide Password", "Button label should update to 'Hide Password'", "Hide Password", btn.textContent.trim());
      }
    },
    {
      id: "q8_t3",
      name: "Clicking again hides password and restores \"Show Password\"",
      testFn: async ({ document, assert }) => {
        const input = document.getElementById("password-input");
        const btn = document.getElementById("toggle-btn");
        btn.click();
        assert(input.type === "password", "Input type should toggle back to 'password'", "password", input.type);
        assert(btn.textContent.trim() === "Show Password", "Button label should restore to 'Show Password'", "Show Password", btn.textContent.trim());
      }
    }
  ],

  9: [
    {
      id: "q9_t1",
      name: "Displays appropriate error for empty input",
      testFn: async ({ document, assert }) => {
        const input = document.getElementById("celsius-input");
        const btn = document.getElementById("convert-btn");
        const result = document.getElementById("result");
        assert(input && btn && result, "Required elements must exist");
        input.value = "";
        btn.click();
        const text = result.textContent.toLowerCase();
        assert(text.includes("valid") || text.includes("enter") || text.includes("error") || text.includes("temperature"), "Result should display invalid/empty input warning", "Please enter a valid temperature", result.textContent.trim());
      }
    },
    {
      id: "q9_t2",
      name: "Converts 0°C to 32°F correctly",
      testFn: async ({ document, assert }) => {
        const input = document.getElementById("celsius-input");
        const btn = document.getElementById("convert-btn");
        const result = document.getElementById("result");
        input.value = "0";
        btn.click();
        assert(result.textContent.includes("32"), "0°C should convert to 32°F", "Contains 32", result.textContent.trim());
      }
    },
    {
      id: "q9_t3",
      name: "Converts 100°C to 212°F correctly",
      testFn: async ({ document, assert }) => {
        const input = document.getElementById("celsius-input");
        const btn = document.getElementById("convert-btn");
        const result = document.getElementById("result");
        input.value = "100";
        btn.click();
        assert(result.textContent.includes("212"), "100°C should convert to 212°F", "Contains 212", result.textContent.trim());
      }
    },
    {
      id: "q9_t4",
      name: "Converts 25°C to 77°F correctly",
      testFn: async ({ document, assert }) => {
        const input = document.getElementById("celsius-input");
        const btn = document.getElementById("convert-btn");
        const result = document.getElementById("result");
        input.value = "25";
        btn.click();
        assert(result.textContent.includes("77"), "25°C should convert to 77°F", "Contains 77", result.textContent.trim());
      }
    }
  ],

  10: [
    {
      id: "q10_t1",
      name: "Initial theme is light and button label is \"Dark Mode\"",
      testFn: async ({ document, assert }) => {
        const container = document.getElementById("theme-container");
        const btn = document.getElementById("theme-toggle-btn");
        assert(container && btn, "#theme-container and #theme-toggle-btn must exist");
        assert(!container.classList.contains("dark-theme"), "Container should not initially have 'dark-theme' class", "no dark-theme class", container.className);
        assert(btn.textContent.trim() === "Dark Mode", "Button text should be 'Dark Mode'", "Dark Mode", btn.textContent.trim());
      }
    },
    {
      id: "q10_t2",
      name: "Clicking button applies \"dark-theme\" class and changes text to \"Light Mode\"",
      testFn: async ({ document, assert }) => {
        const container = document.getElementById("theme-container");
        const btn = document.getElementById("theme-toggle-btn");
        btn.click();
        assert(container.classList.contains("dark-theme"), "Container should now have 'dark-theme' class", "classList contains dark-theme", container.className);
        assert(btn.textContent.trim() === "Light Mode", "Button text should toggle to 'Light Mode'", "Light Mode", btn.textContent.trim());
      }
    },
    {
      id: "q10_t3",
      name: "Second click removes \"dark-theme\" class and restores \"Dark Mode\"",
      testFn: async ({ document, assert }) => {
        const container = document.getElementById("theme-container");
        const btn = document.getElementById("theme-toggle-btn");
        btn.click();
        assert(!container.classList.contains("dark-theme"), "Container should remove 'dark-theme' class on second click", "no dark-theme class", container.className);
        assert(btn.textContent.trim() === "Dark Mode", "Button text should restore to 'Dark Mode'", "Dark Mode", btn.textContent.trim());
      }
    }
  ]
};
