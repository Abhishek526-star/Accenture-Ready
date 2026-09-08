// src/tests/question5.test.js - Question 5: Product Grid Filter

export const question5Tests = [
  {
    id: "q5_t1",
    name: "[HTML] Sort dropdown #sort-select exists with price sorting options",
    testFn: async ({ document, assert }) => {
      const select = document.getElementById("sort-select");
      assert(select !== null, "Select with id='sort-select' must exist in HTML", "<select id='sort-select'>...", select);
      const lowOpt = select.querySelector("option[value='price-low']");
      const highOpt = select.querySelector("option[value='price-high']");
      assert(lowOpt !== null && highOpt !== null, "Sort options 'price-low' and 'price-high' must exist", "options present", { lowOpt, highOpt });
    }
  },
  {
    id: "q5_t2",
    name: "[HTML] Empty state element #empty-state exists in HTML",
    testFn: async ({ document, assert }) => {
      const emptyState = document.getElementById("empty-state");
      assert(emptyState !== null, "Element with id='empty-state' must exist in HTML", "<div id='empty-state'>...</div>", emptyState);
    }
  },
  {
    id: "q5_t3",
    name: "[CSS] #product-grid styled with grid layout",
    testFn: async ({ document, assert }) => {
      const grid = document.getElementById("product-grid");
      assert(grid !== null, "#product-grid must exist");
      const style = window.getComputedStyle(grid);
      assert(style.display === "grid" || grid.style.display === "grid", "#product-grid display should be grid", "grid", style.display);
    }
  },
  {
    id: "q5_t4",
    name: "[JavaScript] Clicking a category filter button filters visible cards",
    testFn: async ({ document, assert }) => {
      const elecBtn = document.querySelector(".category-btn[data-category='electronics']");
      assert(elecBtn !== null, "Electronics category button must exist");

      elecBtn.click();

      const cards = document.querySelectorAll(".product-card");
      cards.forEach((card) => {
        const cat = card.getAttribute("data-category");
        const isHidden = card.style.display === "none" || card.classList.contains("hidden");
        if (cat === "electronics") {
          assert(!isHidden, "Electronics card should be visible", "visible", card.style.display);
        } else {
          assert(isHidden, "Non-electronics card should be hidden", "hidden", card.style.display);
        }
      });
    }
  },
  {
    id: "q5_t5",
    name: "[JavaScript] Search input filters cards matching product title",
    testFn: async ({ document, assert }) => {
      const allBtn = document.querySelector(".category-btn[data-category='all']");
      if (allBtn) allBtn.click();

      const searchInput = document.getElementById("search-input");
      assert(searchInput !== null, "#search-input must exist");

      searchInput.value = "Headphones";
      searchInput.dispatchEvent(new Event("input", { bubbles: true }));

      const cards = document.querySelectorAll(".product-card");
      cards.forEach((card) => {
        const title = card.querySelector(".product-title")?.textContent || "";
        const isHidden = card.style.display === "none" || card.classList.contains("hidden");
        if (title.toLowerCase().includes("headphones")) {
          assert(!isHidden, "Card matching 'Headphones' should be visible", "visible", card.style.display);
        } else {
          assert(isHidden, "Card not matching 'Headphones' should be hidden", "hidden", card.style.display);
        }
      });
    }
  },
  {
    id: "q5_t6",
    name: "[JavaScript] Empty state displays when no products match search query",
    testFn: async ({ document, assert }) => {
      const searchInput = document.getElementById("search-input");
      const emptyState = document.getElementById("empty-state");
      assert(searchInput && emptyState, "Search input and empty state must exist");

      searchInput.value = "xyznonexistentproduct999";
      searchInput.dispatchEvent(new Event("input", { bubbles: true }));

      const isVisible = emptyState.style.display !== "none" && !emptyState.classList.contains("hidden");
      assert(isVisible, "#empty-state should be visible when 0 products match", "visible", emptyState.style.display);
    }
  }
];
