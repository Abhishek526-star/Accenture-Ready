// src/tests/question8.test.js - Question 8: LocalStorage To-Do

export const question8Tests = [
  {
    id: "q8_t1",
    name: "[HTML] Clear completed button #clear-completed-btn exists",
    testFn: async ({ document, assert }) => {
      const btn = document.getElementById("clear-completed-btn");
      assert(btn !== null, "Button with id='clear-completed-btn' must exist in HTML", "<button id='clear-completed-btn'>...", btn);
    }
  },
  {
    id: "q8_t2",
    name: "[HTML] Task count element #todo-count exists",
    testFn: async ({ document, assert }) => {
      const count = document.getElementById("todo-count");
      assert(count !== null, "Span with id='todo-count' must exist in HTML", "<span id='todo-count'>...</span>", count);
    }
  },
  {
    id: "q8_t3",
    name: "[CSS] Completed task items styled with line-through text decoration",
    testFn: async ({ document, assert }) => {
      let completedItem = document.querySelector(".todo-item.completed .todo-text");
      if (!completedItem) {
        completedItem = document.createElement("span");
        completedItem.className = "todo-text";
        const wrapper = document.createElement("div");
        wrapper.className = "todo-item completed";
        wrapper.appendChild(completedItem);
        document.body.appendChild(wrapper);
      }
      const style = window.getComputedStyle(completedItem);
      const isStruck = style.textDecorationLine.includes("line-through") || style.textDecoration.includes("line-through");
      assert(isStruck, "Completed tasks must have line-through styling", "line-through", style.textDecoration);
    }
  },
  {
    id: "q8_t4",
    name: "[JavaScript] Adding task updates DOM and saves in localStorage",
    testFn: async ({ document, assert }) => {
      const input = document.getElementById("todo-input");
      const addBtn = document.getElementById("add-todo-btn");
      const list = document.getElementById("todo-list");
      assert(input && addBtn && list, "Input, add button, and list must exist");

      input.value = "Test LocalStorage Task";
      addBtn.click();

      const lastItem = list.lastElementChild;
      assert(lastItem !== null, "New task should be appended to list");
      assert(lastItem.textContent.includes("Test LocalStorage Task"), "New task text should appear in DOM", "Test LocalStorage Task", lastItem.textContent);

      // Check localStorage
      const saved = localStorage.getItem("app_todos");
      assert(saved !== null && saved.includes("Test LocalStorage Task"), "Task should be stored in localStorage under 'app_todos'", "saved task", saved);
    }
  },
  {
    id: "q8_t5",
    name: "[JavaScript] Toggling task completion toggles class and updates localStorage",
    testFn: async ({ document, assert }) => {
      const checkboxes = document.querySelectorAll(".todo-checkbox");
      assert(checkboxes.length > 0, "Task checkboxes must exist");

      const firstCheckbox = checkboxes[0];
      firstCheckbox.click();

      const item = firstCheckbox.closest(".todo-item");
      assert(item.classList.contains("completed"), "Item should have .completed class when checked", "completed", item.className);
    }
  },
  {
    id: "q8_t6",
    name: "[JavaScript] Clear completed button removes finished tasks",
    testFn: async ({ document, assert }) => {
      const clearBtn = document.getElementById("clear-completed-btn");
      assert(clearBtn !== null, "#clear-completed-btn must exist");

      clearBtn.click();

      const remainingCompleted = document.querySelectorAll(".todo-item.completed");
      assert(remainingCompleted.length === 0, "All completed items should be cleared", 0, remainingCompleted.length);
    }
  }
];
