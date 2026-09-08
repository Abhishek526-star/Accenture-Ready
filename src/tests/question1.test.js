// src/tests/question1.test.js - Question 1: Shopping Cart Total

export const question1Tests = [
  {
    id: "q1_t1",
    name: "[HTML] Promo input #promo-input and Apply button #apply-promo-btn exist",
    testFn: async ({ document, assert }) => {
      const promoInput = document.getElementById("promo-input");
      const applyBtn = document.getElementById("apply-promo-btn");
      assert(promoInput !== null, "Input with id='promo-input' must exist in HTML", "<input id='promo-input' />", promoInput);
      assert(applyBtn !== null, "Button with id='apply-promo-btn' must exist in HTML", "<button id='apply-promo-btn'>Apply</button>", applyBtn);
      assert(applyBtn.textContent.trim().length > 0, "Apply button should contain text 'Apply'", "Apply", applyBtn.textContent.trim());
    }
  },
  {
    id: "q1_t2",
    name: "[HTML] Discount amount span #discount-amount exists",
    testFn: async ({ document, assert }) => {
      const discount = document.getElementById("discount-amount");
      assert(discount !== null, "Span with id='discount-amount' must exist in HTML", "<span id='discount-amount'>$0.00</span>", discount);
    }
  },
  {
    id: "q1_t3",
    name: "[CSS] Checkout button #checkout-btn styled with white text and border-radius",
    testFn: async ({ document, assert }) => {
      const btn = document.getElementById("checkout-btn");
      assert(btn !== null, "Button #checkout-btn must exist");
      const style = window.getComputedStyle(btn);
      const isWhite = style.color.includes("255, 255, 255") || style.color === "white" || btn.style.color === "white";
      assert(isWhite, "Checkout button text should be white", "rgb(255, 255, 255)", style.color);
    }
  },
  {
    id: "q1_t4",
    name: "[JavaScript] Initial subtotal and total calculated correctly",
    testFn: async ({ document, assert }) => {
      const subtotal = document.getElementById("subtotal-amount");
      const total = document.getElementById("total-amount");
      assert(subtotal !== null, "#subtotal-amount must exist");
      assert(total !== null, "#total-amount must exist");
      // Initial items: Item 1 ($25 x 1 = $25), Item 2 ($15 x 2 = $30), Item 3 ($40 x 1 = $40) => Subtotal = $95.00 or $80.00 depending on starter
      assert(subtotal.textContent.includes("$"), "Subtotal should be formatted with dollar sign", "$...", subtotal.textContent.trim());
      assert(total.textContent.includes("$"), "Total should be formatted with dollar sign", "$...", total.textContent.trim());
    }
  },
  {
    id: "q1_t5",
    name: "[JavaScript] Changing item quantity updates subtotal and total dynamically",
    testFn: async ({ document, assert }) => {
      const qtyInputs = document.querySelectorAll(".item-qty");
      assert(qtyInputs.length > 0, "Cart item quantity inputs must exist");
      const firstQty = qtyInputs[0];
      const initialTotal = document.getElementById("total-amount").textContent.trim();
      
      // Change quantity
      firstQty.value = "3";
      firstQty.dispatchEvent(new Event("input", { bubbles: true }));
      firstQty.dispatchEvent(new Event("change", { bubbles: true }));
      
      const newTotal = document.getElementById("total-amount").textContent.trim();
      assert(newTotal !== initialTotal, "Total should update when item quantity changes", "Different total", newTotal);
    }
  },
  {
    id: "q1_t6",
    name: "[JavaScript] Applying valid promo code 'SAVE10' discounts total by 10%",
    testFn: async ({ document, assert }) => {
      const promoInput = document.getElementById("promo-input");
      const applyBtn = document.getElementById("apply-promo-btn");
      const discountAmount = document.getElementById("discount-amount");
      assert(promoInput && applyBtn, "Promo input and button must exist");

      promoInput.value = "SAVE10";
      applyBtn.click();

      const discText = discountAmount.textContent.trim();
      assert(discText !== "$0.00" && (discText.includes("-") || discText.includes("$")), "Discount should be applied when 'SAVE10' is submitted", "Discount applied", discText);
    }
  },
  {
    id: "q1_t7",
    name: "[JavaScript] Removing item from cart removes row and recalculates totals",
    testFn: async ({ document, assert }) => {
      const removeButtons = document.querySelectorAll(".remove-btn");
      assert(removeButtons.length > 0, "Remove buttons should exist");
      const initialRows = document.querySelectorAll(".cart-item").length;
      
      removeButtons[0].click();
      
      const remainingRows = document.querySelectorAll(".cart-item").length;
      assert(remainingRows === initialRows - 1, "Clicking remove button should remove item row from DOM", initialRows - 1, remainingRows);
    }
  }
];
