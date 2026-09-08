// scratch/build_questions.js
import fs from 'fs';
import path from 'path';

// Load existing questions (which will become 11-20)
const existingQuestionsModule = await import('../src/data/questions.js');
const oldQuestions = existingQuestionsModule.questions;

// Create questions 1 to 10 matching the user's screenshot
const newQuestions = [
  {
    id: 1,
    title: "Shopping Cart Total",
    difficulty: "Easy",
    category: "HTML / CSS / DOM Calculation",
    howToAttempt: "Build a responsive shopping cart summary by adding the promo code row in HTML, styling the checkout button in CSS, and calculating subtotal, discount, and total dynamically in JavaScript.",
    htmlObjectives: [
      "Add an input with id=\"promo-input\" and a button with id=\"apply-promo-btn\" and text \"Apply\" inside the .promo-section container.",
      "Add a span with id=\"discount-amount\" displaying \"$0.00\" inside #discount-row."
    ],
    cssObjectives: [
      "Style #checkout-btn with background #0284c7 (or #0369a1), color white (#ffffff), and border-radius 8px.",
      "Set .total-price font-size to 24px and color to #0f172a (or #1e293b)."
    ],
    jsObjectives: [
      "Calculate initial subtotal from all items based on price and quantity.",
      "Listen for input/change on .item-qty inputs and dynamically recalculate subtotal and total.",
      "When #apply-promo-btn is clicked with code \"SAVE10\", apply a 10% discount, update #discount-amount, and subtract from total.",
      "When any .remove-btn is clicked, remove the item row from the DOM and recalculate totals."
    ],
    constraints: [
      "All dollar amounts must be formatted with a leading '$' and two decimal places (e.g. $80.00).",
      "If promo code is invalid, keep discount at $0.00."
    ],
    html: `<div class="cart-container">
  <h2>Shopping Cart</h2>
  <div class="cart-items" id="cart-items-list">
    <div class="cart-item" data-price="25.00">
      <div class="item-info">
        <span class="item-name">Wireless Headphones</span>
        <span class="item-unit-price">$25.00</span>
      </div>
      <div class="item-controls">
        <input type="number" class="item-qty" value="1" min="1" max="99" />
        <button class="remove-btn">Remove</button>
      </div>
    </div>
    <div class="cart-item" data-price="15.00">
      <div class="item-info">
        <span class="item-name">Optical Mouse</span>
        <span class="item-unit-price">$15.00</span>
      </div>
      <div class="item-controls">
        <input type="number" class="item-qty" value="2" min="1" max="99" />
        <button class="remove-btn">Remove</button>
      </div>
    </div>
    <div class="cart-item" data-price="40.00">
      <div class="item-info">
        <span class="item-name">Mechanical Keyboard</span>
        <span class="item-unit-price">$40.00</span>
      </div>
      <div class="item-controls">
        <input type="number" class="item-qty" value="1" min="1" max="99" />
        <button class="remove-btn">Remove</button>
      </div>
    </div>
  </div>

  <div class="promo-section">
    <!-- TODO [HTML]: Add input id="promo-input" placeholder="Promo code" -->
    <!-- TODO [HTML]: Add button id="apply-promo-btn" with text "Apply" -->
  </div>

  <div class="cart-summary">
    <div class="summary-row">
      <span>Subtotal:</span>
      <span id="subtotal-amount">$0.00</span>
    </div>
    <div class="summary-row" id="discount-row">
      <span>Discount (10%):</span>
      <!-- TODO [HTML]: Add span id="discount-amount">$0.00</span> -->
    </div>
    <div class="summary-row total-row">
      <span class="total-label">Total:</span>
      <span id="total-amount" class="total-price">$0.00</span>
    </div>
    <button id="checkout-btn">Proceed to Checkout</button>
  </div>
</div>`,
    css: `* {
  box-sizing: border-box;
  font-family: 'Segoe UI', system-ui, sans-serif;
}
body {
  margin: 0;
  padding: 24px;
  background: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.cart-container {
  background: #ffffff;
  padding: 28px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 440px;
}
h2 {
  margin-top: 0;
  color: #1e293b;
  font-size: 22px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 12px;
}
.cart-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}
.item-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.item-name {
  font-weight: 600;
  color: #1e293b;
  font-size: 14px;
}
.item-unit-price {
  color: #64748b;
  font-size: 13px;
}
.item-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}
.item-qty {
  width: 50px;
  padding: 6px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  text-align: center;
}
.remove-btn {
  background: #fee2e2;
  color: #dc2626;
  border: none;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
}
.promo-section {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}
#promo-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
}
#apply-promo-btn {
  padding: 8px 16px;
  background: #334155;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.cart-summary {
  border-top: 2px solid #e2e8f0;
  padding-top: 16px;
}
.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: #64748b;
  font-size: 14px;
}
.total-row {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed #cbd5e1;
}
.total-label {
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
}
/* TODO [CSS]: Style .total-price font-size 24px and color #0f172a */
.total-price {
  font-size: 24px;
  color: #0f172a;
  font-weight: 700;
}
/* TODO [CSS]: Style #checkout-btn background #0284c7, color white, border-radius 8px */
#checkout-btn {
  width: 100%;
  margin-top: 16px;
  padding: 12px;
  background: #0284c7;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
}`,
    starterJS: `const subtotalEl = document.getElementById("subtotal-amount");
const totalEl = document.getElementById("total-amount");
const discountEl = document.getElementById("discount-amount");
const promoInput = document.getElementById("promo-input");
const applyPromoBtn = document.getElementById("apply-promo-btn");

let discountRate = 0; // e.g. 0.10 for 10%

// TODO [JavaScript]:
// 1. Write a function calculateTotals() that sums (unit price * quantity) for each .cart-item
// 2. Multiply subtotal by discountRate to get discount, and calculate total = subtotal - discount
// 3. Format and update subtotalEl, discountEl, and totalEl with '$' and 2 decimal places
// 4. Attach input/change event listeners to all .item-qty inputs
// 5. Attach click listener to applyPromoBtn to check for code "SAVE10"
// 6. Attach click listeners to .remove-btn to remove row and recalculate
`,
    solutionHTML: `<div class="cart-container">
  <h2>Shopping Cart</h2>
  <div class="cart-items" id="cart-items-list">
    <div class="cart-item" data-price="25.00">
      <div class="item-info">
        <span class="item-name">Wireless Headphones</span>
        <span class="item-unit-price">$25.00</span>
      </div>
      <div class="item-controls">
        <input type="number" class="item-qty" value="1" min="1" max="99" />
        <button class="remove-btn">Remove</button>
      </div>
    </div>
    <div class="cart-item" data-price="15.00">
      <div class="item-info">
        <span class="item-name">Optical Mouse</span>
        <span class="item-unit-price">$15.00</span>
      </div>
      <div class="item-controls">
        <input type="number" class="item-qty" value="2" min="1" max="99" />
        <button class="remove-btn">Remove</button>
      </div>
    </div>
    <div class="cart-item" data-price="40.00">
      <div class="item-info">
        <span class="item-name">Mechanical Keyboard</span>
        <span class="item-unit-price">$40.00</span>
      </div>
      <div class="item-controls">
        <input type="number" class="item-qty" value="1" min="1" max="99" />
        <button class="remove-btn">Remove</button>
      </div>
    </div>
  </div>

  <div class="promo-section">
    <input type="text" id="promo-input" placeholder="Promo code" />
    <button id="apply-promo-btn">Apply</button>
  </div>

  <div class="cart-summary">
    <div class="summary-row">
      <span>Subtotal:</span>
      <span id="subtotal-amount">$0.00</span>
    </div>
    <div class="summary-row" id="discount-row">
      <span>Discount (10%):</span>
      <span id="discount-amount">$0.00</span>
    </div>
    <div class="summary-row total-row">
      <span class="total-label">Total:</span>
      <span id="total-amount" class="total-price">$0.00</span>
    </div>
    <button id="checkout-btn">Proceed to Checkout</button>
  </div>
</div>`,
    solutionCSS: `* {
  box-sizing: border-box;
  font-family: 'Segoe UI', system-ui, sans-serif;
}
body {
  margin: 0;
  padding: 24px;
  background: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.cart-container {
  background: #ffffff;
  padding: 28px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 440px;
}
h2 {
  margin-top: 0;
  color: #1e293b;
  font-size: 22px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 12px;
}
.cart-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}
.item-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.item-name {
  font-weight: 600;
  color: #1e293b;
  font-size: 14px;
}
.item-unit-price {
  color: #64748b;
  font-size: 13px;
}
.item-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}
.item-qty {
  width: 50px;
  padding: 6px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  text-align: center;
}
.remove-btn {
  background: #fee2e2;
  color: #dc2626;
  border: none;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
}
.promo-section {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}
#promo-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
}
#apply-promo-btn {
  padding: 8px 16px;
  background: #334155;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.cart-summary {
  border-top: 2px solid #e2e8f0;
  padding-top: 16px;
}
.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: #64748b;
  font-size: 14px;
}
.total-row {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed #cbd5e1;
}
.total-label {
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
}
.total-price {
  font-size: 24px;
  color: #0f172a;
  font-weight: 700;
}
#checkout-btn {
  width: 100%;
  margin-top: 16px;
  padding: 12px;
  background: #0284c7;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
}`,
    solutionJS: `const subtotalEl = document.getElementById("subtotal-amount");
const totalEl = document.getElementById("total-amount");
const discountEl = document.getElementById("discount-amount");
const promoInput = document.getElementById("promo-input");
const applyPromoBtn = document.getElementById("apply-promo-btn");
const cartList = document.getElementById("cart-items-list");

let discountRate = 0;

function formatCurrency(num) {
  return "$" + num.toFixed(2);
}

function calculateTotals() {
  const items = document.querySelectorAll(".cart-item");
  let subtotal = 0;

  items.forEach((item) => {
    const price = parseFloat(item.getAttribute("data-price")) || 0;
    const qtyInput = item.querySelector(".item-qty");
    const qty = Math.max(0, parseInt(qtyInput ? qtyInput.value : 1, 10) || 0);
    subtotal += price * qty;
  });

  const discount = subtotal * discountRate;
  const total = Math.max(0, subtotal - discount);

  if (subtotalEl) subtotalEl.textContent = formatCurrency(subtotal);
  if (discountEl) discountEl.textContent = discount > 0 ? "-" + formatCurrency(discount) : "$0.00";
  if (totalEl) totalEl.textContent = formatCurrency(total);
}

function bindItemEvents() {
  document.querySelectorAll(".item-qty").forEach((input) => {
    input.oninput = calculateTotals;
    input.onchange = calculateTotals;
  });

  document.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.onclick = (e) => {
      const row = e.target.closest(".cart-item");
      if (row) {
        row.remove();
        calculateTotals();
      }
    };
  });
}

if (applyPromoBtn) {
  applyPromoBtn.addEventListener("click", () => {
    const code = promoInput ? promoInput.value.trim().toUpperCase() : "";
    if (code === "SAVE10") {
      discountRate = 0.10;
    } else {
      discountRate = 0;
    }
    calculateTotals();
  });
}

bindItemEvents();
calculateTotals();`,
    solutionExplanation: `### Solution Breakdown: Shopping Cart Total

1. **HTML Additions**:
   - Added \`<input type="text" id="promo-input" placeholder="Promo code" />\` and \`<button id="apply-promo-btn">Apply</button>\` inside \`.promo-section\`.
   - Added \`<span id="discount-amount">$0.00</span>\` inside the discount summary row.

2. **CSS Styling**:
   - Styled \`#checkout-btn\` with \`background: #0284c7\`, white text color, and \`border-radius: 8px\`.
   - Styled \`.total-price\` with \`font-size: 24px\` and bold color \`#0f172a\`.

3. **JavaScript Logic**:
   - \`calculateTotals()\`: Iterates through all \`.cart-item\` elements, multiplying \`data-price\` by \`.item-qty\`.
   - Calculates discount as \`subtotal * discountRate\` and computes \`total = subtotal - discount\`.
   - Binds dynamic event listeners on inputs (\`input\` and \`change\` events) and remove buttons (\`row.remove()\`).
   - Checks promo code value: if equal to "SAVE10", sets \`discountRate = 0.10\` and updates the UI.`
  },
  {
    id: 2,
    title: "Grade Calculator & Filter",
    difficulty: "Medium",
    category: "HTML / CSS / Arrays & Filtering",
    howToAttempt: "Add average score display in HTML, style pass/fail status badges in CSS, and implement grade classification and category filtering in JavaScript.",
    htmlObjectives: [
      "Add a container with id=\"average-box\" containing text \"Average Score: \" and a span with id=\"average-score\" displaying \"0\".",
      "Add an option with value=\"distinction\" and text \"Distinction (>= 80)\" inside #grade-filter."
    ],
    cssObjectives: [
      "Style .badge-pass with background #dcfce7, color #15803d, and border-radius 12px.",
      "Style .badge-fail with background #fee2e2, color #b91c1c, and border-radius 12px."
    ],
    jsObjectives: [
      "On form submit, calculate letter grade: Distinction (>= 80), Pass (>= 50), or Fail (< 50).",
      "Append a new student row to #student-table-body with student name, score, and status badge.",
      "Recalculate and update the overall class average score in #average-score.",
      "Filter visible rows when #grade-filter changes ('all', 'pass', 'distinction', 'fail')."
    ],
    constraints: [
      "Score must be clamped between 0 and 100.",
      "Clear form inputs after successful submission."
    ],
    html: `<div class="grade-card">
  <h2>Grade Calculator & Filter</h2>

  <form id="student-form" class="student-form">
    <input type="text" id="student-name" placeholder="Student Name" required />
    <input type="number" id="student-score" placeholder="Score (0-100)" min="0" max="100" required />
    <button type="submit" id="add-student-btn">Add Student</button>
  </form>

  <!-- TODO [HTML]: Add <div id="average-box">Average Score: <span id="average-score">0</span></div> -->

  <div class="filter-bar">
    <label for="grade-filter">Filter by Grade:</label>
    <select id="grade-filter">
      <option value="all">All Students</option>
      <!-- TODO [HTML]: Add <option value="distinction">Distinction (>= 80)</option> -->
      <option value="pass">Pass (>= 50)</option>
      <option value="fail">Fail (< 50)</option>
    </select>
  </div>

  <table class="students-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Score</th>
        <th>Grade Status</th>
      </tr>
    </thead>
    <tbody id="student-table-body">
      <tr data-score="85" data-grade="distinction">
        <td>Alice Smith</td>
        <td>85</td>
        <td><span class="badge badge-pass">Distinction</span></td>
      </tr>
      <tr data-score="42" data-grade="fail">
        <td>Bob Johnson</td>
        <td>42</td>
        <td><span class="badge badge-fail">Fail</span></td>
      </tr>
    </tbody>
  </table>
</div>`,
    css: `* {
  box-sizing: border-box;
  font-family: 'Segoe UI', system-ui, sans-serif;
}
body {
  margin: 0;
  padding: 24px;
  background: #f1f5f9;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.grade-card {
  background: #ffffff;
  padding: 28px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 520px;
}
h2 {
  margin-top: 0;
  color: #1e293b;
  font-size: 20px;
}
.student-form {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
.student-form input {
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  flex: 1;
}
.student-form button {
  padding: 8px 16px;
  background: #0284c7;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}
#average-box {
  background: #f8fafc;
  padding: 10px 14px;
  border-radius: 8px;
  margin-bottom: 16px;
  font-weight: 600;
  color: #334155;
  border: 1px solid #e2e8f0;
}
#average-score {
  color: #0284c7;
  font-size: 18px;
}
.filter-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  font-size: 14px;
  color: #64748b;
}
.filter-bar select {
  padding: 6px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
}
.students-table {
  width: 100%;
  border-collapse: collapse;
}
.students-table th, .students-table td {
  padding: 10px 12px;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
  font-size: 14px;
}
.students-table th {
  background: #f8fafc;
  color: #64748b;
  font-weight: 600;
}
.badge {
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 600;
  display: inline-block;
}
/* TODO [CSS]: Style .badge-pass with background #dcfce7, color #15803d, border-radius 12px */
.badge-pass {
  background: #dcfce7;
  color: #15803d;
  border-radius: 12px;
}
/* TODO [CSS]: Style .badge-fail with background #fee2e2, color #b91c1c, border-radius 12px */
.badge-fail {
  background: #fee2e2;
  color: #b91c1c;
  border-radius: 12px;
}`,
    starterJS: `const studentForm = document.getElementById("student-form");
const nameInput = document.getElementById("student-name");
const scoreInput = document.getElementById("student-score");
const tableBody = document.getElementById("student-table-body");
const averageScoreEl = document.getElementById("average-score");
const gradeFilter = document.getElementById("grade-filter");

// TODO [JavaScript]:
// 1. Calculate and update initial class average score
// 2. Handle form submit:
//    - Determine grade category: >= 80 "Distinction", >= 50 "Pass", < 50 "Fail"
//    - Insert new row into tableBody with data-score and data-grade attributes
//    - Re-compute average score
// 3. Handle gradeFilter change:
//    - Show/hide rows based on selected grade
`,
    solutionHTML: `<div class="grade-card">
  <h2>Grade Calculator & Filter</h2>

  <form id="student-form" class="student-form">
    <input type="text" id="student-name" placeholder="Student Name" required />
    <input type="number" id="student-score" placeholder="Score (0-100)" min="0" max="100" required />
    <button type="submit" id="add-student-btn">Add Student</button>
  </form>

  <div id="average-box">Average Score: <span id="average-score">0</span></div>

  <div class="filter-bar">
    <label for="grade-filter">Filter by Grade:</label>
    <select id="grade-filter">
      <option value="all">All Students</option>
      <option value="distinction">Distinction (>= 80)</option>
      <option value="pass">Pass (>= 50)</option>
      <option value="fail">Fail (< 50)</option>
    </select>
  </div>

  <table class="students-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Score</th>
        <th>Grade Status</th>
      </tr>
    </thead>
    <tbody id="student-table-body">
      <tr data-score="85" data-grade="distinction">
        <td>Alice Smith</td>
        <td>85</td>
        <td><span class="badge badge-pass">Distinction</span></td>
      </tr>
      <tr data-score="42" data-grade="fail">
        <td>Bob Johnson</td>
        <td>42</td>
        <td><span class="badge badge-fail">Fail</span></td>
      </tr>
    </tbody>
  </table>
</div>`,
    solutionCSS: `* {
  box-sizing: border-box;
  font-family: 'Segoe UI', system-ui, sans-serif;
}
body {
  margin: 0;
  padding: 24px;
  background: #f1f5f9;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.grade-card {
  background: #ffffff;
  padding: 28px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 520px;
}
h2 {
  margin-top: 0;
  color: #1e293b;
  font-size: 20px;
}
.student-form {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
.student-form input {
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  flex: 1;
}
.student-form button {
  padding: 8px 16px;
  background: #0284c7;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}
#average-box {
  background: #f8fafc;
  padding: 10px 14px;
  border-radius: 8px;
  margin-bottom: 16px;
  font-weight: 600;
  color: #334155;
  border: 1px solid #e2e8f0;
}
#average-score {
  color: #0284c7;
  font-size: 18px;
}
.filter-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  font-size: 14px;
  color: #64748b;
}
.filter-bar select {
  padding: 6px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
}
.students-table {
  width: 100%;
  border-collapse: collapse;
}
.students-table th, .students-table td {
  padding: 10px 12px;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
  font-size: 14px;
}
.students-table th {
  background: #f8fafc;
  color: #64748b;
  font-weight: 600;
}
.badge {
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 600;
  display: inline-block;
}
.badge-pass {
  background: #dcfce7;
  color: #15803d;
  border-radius: 12px;
}
.badge-fail {
  background: #fee2e2;
  color: #b91c1c;
  border-radius: 12px;
}`,
    solutionJS: `const studentForm = document.getElementById("student-form");
const nameInput = document.getElementById("student-name");
const scoreInput = document.getElementById("student-score");
const tableBody = document.getElementById("student-table-body");
const averageScoreEl = document.getElementById("average-score");
const gradeFilter = document.getElementById("grade-filter");

function updateAverage() {
  const rows = tableBody.querySelectorAll("tr");
  if (rows.length === 0) {
    if (averageScoreEl) averageScoreEl.textContent = "0";
    return;
  }
  let sum = 0;
  rows.forEach((r) => {
    sum += parseFloat(r.getAttribute("data-score")) || 0;
  });
  const avg = (sum / rows.length).toFixed(1);
  if (averageScoreEl) averageScoreEl.textContent = avg;
}

function applyFilter() {
  const selected = gradeFilter ? gradeFilter.value : "all";
  const rows = tableBody.querySelectorAll("tr");

  rows.forEach((row) => {
    const grade = row.getAttribute("data-grade");
    if (selected === "all") {
      row.style.display = "";
    } else if (selected === "distinction") {
      row.style.display = grade === "distinction" ? "" : "none";
    } else if (selected === "pass") {
      row.style.display = grade === "pass" || grade === "distinction" ? "" : "none";
    } else if (selected === "fail") {
      row.style.display = grade === "fail" ? "" : "none";
    }
  });
}

if (studentForm) {
  studentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const score = Math.max(0, Math.min(100, parseFloat(scoreInput.value) || 0));

    let gradeKey = "fail";
    let badgeClass = "badge-fail";
    let gradeLabel = "Fail";

    if (score >= 80) {
      gradeKey = "distinction";
      badgeClass = "badge-pass";
      gradeLabel = "Distinction";
    } else if (score >= 50) {
      gradeKey = "pass";
      badgeClass = "badge-pass";
      gradeLabel = "Pass";
    }

    const tr = document.createElement("tr");
    tr.setAttribute("data-score", score);
    tr.setAttribute("data-grade", gradeKey);
    tr.innerHTML = \`<td>\${name}</td><td>\${score}</td><td><span class="badge \${badgeClass}">\${gradeLabel}</span></td>\`;

    tableBody.appendChild(tr);
    nameInput.value = "";
    scoreInput.value = "";

    updateAverage();
    applyFilter();
  });
}

if (gradeFilter) {
  gradeFilter.addEventListener("change", applyFilter);
}

updateAverage();
applyFilter();`,
    solutionExplanation: `### Solution Breakdown: Grade Calculator & Filter

1. **HTML Additions**:
   - Added \`<div id="average-box">Average Score: <span id="average-score">0</span></div>\` to display the computed mean.
   - Added \`<option value="distinction">Distinction (>= 80)</option>\` inside the filter dropdown.

2. **CSS Styling**:
   - Styled \`.badge-pass\` with pastel green background (\`#dcfce7\`), deep green text (\`#15803d\`), and pill radius (\`12px\`).
   - Styled \`.badge-fail\` with pastel red background (\`#fee2e2\`), deep red text (\`#b91c1c\`), and pill radius (\`12px\`).

3. **JavaScript Logic**:
   - \`updateAverage()\`: Sums the \`data-score\` attributes across all table rows and computes \`(sum / count).toFixed(1)\`.
   - Form submission prevents page reload, classifies the score (>=80 Distinction, >=50 Pass, <50 Fail), appends a new \`<tr>\` with appropriate dataset attributes, and resets inputs.
   - \`applyFilter()\`: Filters visible rows based on matching \`data-grade\` values.`
  },
  {
    id: 3,
    title: "Password Validator",
    difficulty: "Medium",
    category: "HTML / CSS / Regex & Validation",
    howToAttempt: "Add requirement items in HTML, style strength meter bars in CSS, and validate password criteria in real-time in JavaScript.",
    htmlObjectives: [
      "Add a list item with id=\"rule-special\" and text \"At least 1 special character (!@#$%^&*)\" inside #rules-list.",
      "Add a toggle button with id=\"toggle-password\" and text \"Show\" inside the password input wrapper."
    ],
    cssObjectives: [
      "Style .rule-item.valid with color #16a34a (green) and .rule-item.invalid with color #94a3b8.",
      "Style #strength-bar with height 8px, border-radius 4px, and transition width 0.3s ease."
    ],
    jsObjectives: [
      "Validate 5 criteria live: Length (>=8), Uppercase, Lowercase, Number, Special character.",
      "Add class .valid and remove .invalid from passing rules; add .invalid when failing.",
      "Update #strength-bar width (0% to 100%) and color (weak red, medium orange, strong green).",
      "Toggle password input type between 'password' and 'text' when #toggle-password is clicked."
    ],
    constraints: [
      "Validate live on input events without page reloads."
    ],
    html: `<div class="validator-card">
  <h2>Password Validator</h2>

  <div class="input-wrapper">
    <input type="password" id="password-input" placeholder="Enter secure password" />
    <!-- TODO [HTML]: Add <button type="button" id="toggle-password">Show</button> -->
  </div>

  <div class="strength-meter">
    <div class="meter-track">
      <div id="strength-bar"></div>
    </div>
    <span id="strength-label">Strength: Too Short</span>
  </div>

  <ul id="rules-list" class="rules-list">
    <li id="rule-length" class="rule-item invalid">At least 8 characters</li>
    <li id="rule-upper" class="rule-item invalid">At least 1 uppercase letter (A-Z)</li>
    <li id="rule-lower" class="rule-item invalid">At least 1 lowercase letter (a-z)</li>
    <li id="rule-number" class="rule-item invalid">At least 1 number (0-9)</li>
    <!-- TODO [HTML]: Add <li id="rule-special" class="rule-item invalid">At least 1 special character (!@#$%^&*)</li> -->
  </ul>
</div>`,
    css: `* {
  box-sizing: border-box;
  font-family: 'Segoe UI', system-ui, sans-serif;
}
body {
  margin: 0;
  padding: 24px;
  background: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.validator-card {
  background: #ffffff;
  padding: 28px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 400px;
}
h2 {
  margin-top: 0;
  color: #1e293b;
  font-size: 20px;
}
.input-wrapper {
  display: flex;
  position: relative;
  margin-bottom: 16px;
}
#password-input {
  width: 100%;
  padding: 10px 60px 10px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 15px;
}
#toggle-password {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #0284c7;
  font-weight: 600;
  cursor: pointer;
  padding: 6px;
}
.strength-meter {
  margin-bottom: 16px;
}
.meter-track {
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 6px;
}
/* TODO [CSS]: Style #strength-bar with height 8px, border-radius 4px, and transition width 0.3s ease */
#strength-bar {
  height: 8px;
  width: 0%;
  border-radius: 4px;
  background: #ef4444;
  transition: width 0.3s ease, background 0.3s ease;
}
#strength-label {
  font-size: 13px;
  color: #64748b;
  font-weight: 600;
}
.rules-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.rule-item {
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.2s ease;
}
/* TODO [CSS]: Style .rule-item.valid color #16a34a and .rule-item.invalid color #94a3b8 */
.rule-item.valid {
  color: #16a34a;
  font-weight: 600;
}
.rule-item.invalid {
  color: #94a3b8;
}`,
    starterJS: `const passwordInput = document.getElementById("password-input");
const toggleBtn = document.getElementById("toggle-password");
const strengthBar = document.getElementById("strength-bar");
const strengthLabel = document.getElementById("strength-label");

// Rules
const ruleLength = document.getElementById("rule-length");
const ruleUpper = document.getElementById("rule-upper");
const ruleLower = document.getElementById("rule-lower");
const ruleNumber = document.getElementById("rule-number");
const ruleSpecial = document.getElementById("rule-special");

// TODO [JavaScript]:
// 1. Listen for input events on passwordInput
// 2. Validate:
//    - length >= 8
//    - uppercase [A-Z]
//    - lowercase [a-z]
//    - number [0-9]
//    - special [!@#$%^&*]
// 3. Update rule element classes (.valid / .invalid)
// 4. Update strengthBar width and color (weak/medium/strong)
// 5. Toggle password visibility on toggleBtn click
`,
    solutionHTML: `<div class="validator-card">
  <h2>Password Validator</h2>

  <div class="input-wrapper">
    <input type="password" id="password-input" placeholder="Enter secure password" />
    <button type="button" id="toggle-password">Show</button>
  </div>

  <div class="strength-meter">
    <div class="meter-track">
      <div id="strength-bar"></div>
    </div>
    <span id="strength-label">Strength: Too Short</span>
  </div>

  <ul id="rules-list" class="rules-list">
    <li id="rule-length" class="rule-item invalid">At least 8 characters</li>
    <li id="rule-upper" class="rule-item invalid">At least 1 uppercase letter (A-Z)</li>
    <li id="rule-lower" class="rule-item invalid">At least 1 lowercase letter (a-z)</li>
    <li id="rule-number" class="rule-item invalid">At least 1 number (0-9)</li>
    <li id="rule-special" class="rule-item invalid">At least 1 special character (!@#$%^&*)</li>
  </ul>
</div>`,
    solutionCSS: `* {
  box-sizing: border-box;
  font-family: 'Segoe UI', system-ui, sans-serif;
}
body {
  margin: 0;
  padding: 24px;
  background: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.validator-card {
  background: #ffffff;
  padding: 28px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 400px;
}
h2 {
  margin-top: 0;
  color: #1e293b;
  font-size: 20px;
}
.input-wrapper {
  display: flex;
  position: relative;
  margin-bottom: 16px;
}
#password-input {
  width: 100%;
  padding: 10px 60px 10px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 15px;
}
#toggle-password {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #0284c7;
  font-weight: 600;
  cursor: pointer;
  padding: 6px;
}
.strength-meter {
  margin-bottom: 16px;
}
.meter-track {
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 6px;
}
#strength-bar {
  height: 8px;
  width: 0%;
  border-radius: 4px;
  background: #ef4444;
  transition: width 0.3s ease, background 0.3s ease;
}
#strength-label {
  font-size: 13px;
  color: #64748b;
  font-weight: 600;
}
.rules-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.rule-item {
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.2s ease;
}
.rule-item.valid {
  color: #16a34a;
  font-weight: 600;
}
.rule-item.invalid {
  color: #94a3b8;
}`,
    solutionJS: `const passwordInput = document.getElementById("password-input");
const toggleBtn = document.getElementById("toggle-password");
const strengthBar = document.getElementById("strength-bar");
const strengthLabel = document.getElementById("strength-label");

const ruleLength = document.getElementById("rule-length");
const ruleUpper = document.getElementById("rule-upper");
const ruleLower = document.getElementById("rule-lower");
const ruleNumber = document.getElementById("rule-number");
const ruleSpecial = document.getElementById("rule-special");

function updateRule(element, isValid) {
  if (!element) return;
  if (isValid) {
    element.classList.add("valid");
    element.classList.remove("invalid");
  } else {
    element.classList.remove("valid");
    element.classList.add("invalid");
  }
}

function checkPassword() {
  const val = passwordInput ? passwordInput.value : "";
  
  const hasLength = val.length >= 8;
  const hasUpper = /[A-Z]/.test(val);
  const hasLower = /[a-z]/.test(val);
  const hasNumber = /[0-9]/.test(val);
  const hasSpecial = /[!@#$%^&*]/.test(val);

  updateRule(ruleLength, hasLength);
  updateRule(ruleUpper, hasUpper);
  updateRule(ruleLower, hasLower);
  updateRule(ruleNumber, hasNumber);
  updateRule(ruleSpecial, hasSpecial);

  const passedCount = [hasLength, hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;
  const percentage = (passedCount / 5) * 100;

  if (strengthBar) {
    strengthBar.style.width = percentage + "%";
    if (passedCount <= 2) {
      strengthBar.style.background = "#ef4444";
      if (strengthLabel) strengthLabel.textContent = "Strength: Weak";
    } else if (passedCount <= 4) {
      strengthBar.style.background = "#f59e0b";
      if (strengthLabel) strengthLabel.textContent = "Strength: Medium";
    } else {
      strengthBar.style.background = "#10b981";
      strengthBar.classList.add("strong");
      if (strengthLabel) strengthLabel.textContent = "Strength: Strong";
    }
  }
}

if (passwordInput) {
  passwordInput.addEventListener("input", checkPassword);
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleBtn.textContent = "Hide";
    } else {
      passwordInput.type = "password";
      toggleBtn.textContent = "Show";
    }
  });
}

checkPassword();`,
    solutionExplanation: `### Solution Breakdown: Password Validator

1. **HTML Additions**:
   - Added \`<button type="button" id="toggle-password">Show</button>\` inside the input wrapper.
   - Added \`<li id="rule-special" class="rule-item invalid">At least 1 special character (!@#$%^&*)</li>\` to the requirements list.

2. **CSS Styling**:
   - \`#strength-bar\`: Added \`height: 8px\`, \`border-radius: 4px\`, and smooth \`transition: width 0.3s ease\`.
   - \`.rule-item.valid\` is styled green (\`#16a34a\`) while \`.rule-item.invalid\` is muted slate (\`#94a3b8\`).

3. **JavaScript Logic**:
   - Evaluates regular expressions for \`/[A-Z]/\`, \`/[a-z]/\`, \`/[0-9]/\`, and \`/[!@#$%^&*/]\` alongside length check.
   - Calculates passing percentage: \`(passedCount / 5) * 100 + '%'\` and alters bar color from red to orange to green.
   - Toggles \`passwordInput.type\` between 'password' and 'text', adjusting button text accordingly.`
  },
  {
    id: 4,
    title: "Multi-Step Quiz",
    difficulty: "Medium",
    category: "HTML / CSS / Multi-Step Form",
    howToAttempt: "Add the quiz progress indicator in HTML, style active/inactive step transitions in CSS, and implement step navigation and score tallying in JavaScript.",
    htmlObjectives: [
      "Add a container with id=\"quiz-progress\" containing a div with id=\"progress-fill\" inside .quiz-card.",
      "Add a button with id=\"prev-btn\" and text \"Previous\" inside .wizard-actions."
    ],
    cssObjectives: [
      "Set .quiz-step:not(.active) to display: none; and .quiz-step.active to display: block;.",
      "Style #progress-fill with height 6px, background #0284c7, and border-radius 3px."
    ],
    jsObjectives: [
      "Manage active state among 3 quiz steps (.quiz-step).",
      "Update #progress-fill width: 33% on Step 1, 66% on Step 2, 100% on Step 3.",
      "Disable #prev-btn on Step 1; enable it on Steps 2 and 3.",
      "On final step submission, compute correct answers and display score in #result-message."
    ],
    constraints: [
      "Require candidate to select an option before proceeding to the next step."
    ],
    html: `<div class="quiz-card">
  <h2>Frontend Knowledge Quiz</h2>

  <!-- TODO [HTML]: Add <div id="quiz-progress"><div id="progress-fill"></div></div> -->

  <form id="quiz-form">
    <!-- Step 1 -->
    <div class="quiz-step active" data-step="1">
      <p class="question-title">1. Which HTML tag is used for the largest heading?</p>
      <div class="options-list">
        <label><input type="radio" name="q1" value="head" /> &lt;head&gt;</label>
        <label><input type="radio" name="q1" value="h1" data-correct="true" /> &lt;h1&gt;</label>
        <label><input type="radio" name="q1" value="h6" /> &lt;h6&gt;</label>
      </div>
    </div>

    <!-- Step 2 -->
    <div class="quiz-step" data-step="2">
      <p class="question-title">2. Which CSS property changes the text color?</p>
      <div class="options-list">
        <label><input type="radio" name="q2" value="text-color" /> text-color</label>
        <label><input type="radio" name="q2" value="color" data-correct="true" /> color</label>
        <label><input type="radio" name="q2" value="font-color" /> font-color</label>
      </div>
    </div>

    <!-- Step 3 -->
    <div class="quiz-step" data-step="3">
      <p class="question-title">3. How do you declare a constant variable in JavaScript?</p>
      <div class="options-list">
        <label><input type="radio" name="q3" value="var" /> var</label>
        <label><input type="radio" name="q3" value="let" /> let</label>
        <label><input type="radio" name="q3" value="const" data-correct="true" /> const</label>
      </div>
    </div>

    <div class="wizard-actions">
      <!-- TODO [HTML]: Add <button type="button" id="prev-btn">Previous</button> -->
      <button type="button" id="next-btn">Next</button>
    </div>
  </form>

  <div id="result-message" class="result-message"></div>
</div>`,
    css: `* {
  box-sizing: border-box;
  font-family: 'Segoe UI', system-ui, sans-serif;
}
body {
  margin: 0;
  padding: 24px;
  background: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.quiz-card {
  background: #ffffff;
  padding: 28px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 440px;
}
h2 {
  margin-top: 0;
  color: #1e293b;
  font-size: 20px;
}
#quiz-progress {
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
  margin-bottom: 20px;
  overflow: hidden;
}
/* TODO [CSS]: Style #progress-fill with height 6px, background #0284c7, border-radius 3px */
#progress-fill {
  height: 6px;
  background: #0284c7;
  border-radius: 3px;
  width: 33%;
  transition: width 0.3s ease;
}
/* TODO [CSS]: .quiz-step:not(.active) display none; .quiz-step.active display block */
.quiz-step:not(.active) {
  display: none;
}
.quiz-step.active {
  display: block;
}
.question-title {
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 12px;
}
.options-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
}
.options-list label {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  background: #f8fafc;
}
.wizard-actions {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}
.wizard-actions button {
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
}
#prev-btn {
  background: #e2e8f0;
  color: #475569;
}
#prev-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
#next-btn {
  background: #0284c7;
  color: white;
  margin-left: auto;
}
.result-message {
  margin-top: 16px;
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;
  text-align: center;
}`,
    starterJS: `const steps = document.querySelectorAll(".quiz-step");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const progressFill = document.getElementById("progress-fill");
const resultMessage = document.getElementById("result-message");

let currentStepIndex = 0; // 0, 1, 2

// TODO [JavaScript]:
// 1. Write showStep(index) to activate steps[index], update progressFill width, and update button states
// 2. Disable prevBtn when on step 0, enable otherwise
// 3. Update nextBtn text to "Submit" on the final step (index 2)
// 4. Validate that a radio button is selected before advancing
// 5. On submit, count correct answers and display "Score: X / 3" in resultMessage
`,
    solutionHTML: `<div class="quiz-card">
  <h2>Frontend Knowledge Quiz</h2>

  <div id="quiz-progress"><div id="progress-fill"></div></div>

  <form id="quiz-form">
    <!-- Step 1 -->
    <div class="quiz-step active" data-step="1">
      <p class="question-title">1. Which HTML tag is used for the largest heading?</p>
      <div class="options-list">
        <label><input type="radio" name="q1" value="head" /> &lt;head&gt;</label>
        <label><input type="radio" name="q1" value="h1" data-correct="true" /> &lt;h1&gt;</label>
        <label><input type="radio" name="q1" value="h6" /> &lt;h6&gt;</label>
      </div>
    </div>

    <!-- Step 2 -->
    <div class="quiz-step" data-step="2">
      <p class="question-title">2. Which CSS property changes the text color?</p>
      <div class="options-list">
        <label><input type="radio" name="q2" value="text-color" /> text-color</label>
        <label><input type="radio" name="q2" value="color" data-correct="true" /> color</label>
        <label><input type="radio" name="q2" value="font-color" /> font-color</label>
      </div>
    </div>

    <!-- Step 3 -->
    <div class="quiz-step" data-step="3">
      <p class="question-title">3. How do you declare a constant variable in JavaScript?</p>
      <div class="options-list">
        <label><input type="radio" name="q3" value="var" /> var</label>
        <label><input type="radio" name="q3" value="let" /> let</label>
        <label><input type="radio" name="q3" value="const" data-correct="true" /> const</label>
      </div>
    </div>

    <div class="wizard-actions">
      <button type="button" id="prev-btn">Previous</button>
      <button type="button" id="next-btn">Next</button>
    </div>
  </form>

  <div id="result-message" class="result-message"></div>
</div>`,
    solutionCSS: `* {
  box-sizing: border-box;
  font-family: 'Segoe UI', system-ui, sans-serif;
}
body {
  margin: 0;
  padding: 24px;
  background: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.quiz-card {
  background: #ffffff;
  padding: 28px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 440px;
}
h2 {
  margin-top: 0;
  color: #1e293b;
  font-size: 20px;
}
#quiz-progress {
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
  margin-bottom: 20px;
  overflow: hidden;
}
#progress-fill {
  height: 6px;
  background: #0284c7;
  border-radius: 3px;
  width: 33%;
  transition: width 0.3s ease;
}
.quiz-step:not(.active) {
  display: none;
}
.quiz-step.active {
  display: block;
}
.question-title {
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 12px;
}
.options-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
}
.options-list label {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  background: #f8fafc;
}
.wizard-actions {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}
.wizard-actions button {
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
}
#prev-btn {
  background: #e2e8f0;
  color: #475569;
}
#prev-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
#next-btn {
  background: #0284c7;
  color: white;
  margin-left: auto;
}
.result-message {
  margin-top: 16px;
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;
  text-align: center;
}`,
    solutionJS: `const steps = document.querySelectorAll(".quiz-step");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const progressFill = document.getElementById("progress-fill");
const resultMessage = document.getElementById("result-message");

let currentStep = 0;

function updateUI() {
  steps.forEach((step, idx) => {
    if (idx === currentStep) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });

  if (prevBtn) {
    prevBtn.disabled = currentStep === 0;
  }

  if (nextBtn) {
    nextBtn.textContent = currentStep === steps.length - 1 ? "Submit" : "Next";
  }

  if (progressFill) {
    const pct = Math.round(((currentStep + 1) / steps.length) * 100);
    progressFill.style.width = pct + "%";
  }
}

function hasAnsweredCurrentStep() {
  const activeStep = steps[currentStep];
  if (!activeStep) return true;
  const checked = activeStep.querySelector("input[type='radio']:checked");
  return checked !== null;
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    if (!hasAnsweredCurrentStep()) {
      alert("Please select an answer before continuing!");
      return;
    }

    if (currentStep < steps.length - 1) {
      currentStep++;
      updateUI();
    } else {
      // Calculate score
      let score = 0;
      steps.forEach((step) => {
        const correct = step.querySelector("input[data-correct='true']:checked");
        if (correct) score++;
      });
      if (resultMessage) {
        resultMessage.textContent = \`Quiz Completed! Score: \${score} / \${steps.length}\`;
      }
    }
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      updateUI();
    }
  });
}

updateUI();`,
    solutionExplanation: `### Solution Breakdown: Multi-Step Quiz

1. **HTML Additions**:
   - Added \`<div id="quiz-progress"><div id="progress-fill"></div></div>\` to show completion progression.
   - Added \`<button type="button" id="prev-btn">Previous</button>\` inside \`.wizard-actions\`.

2. **CSS Styling**:
   - \`.quiz-step:not(.active)\` is set to \`display: none\` and \`.quiz-step.active\` is set to \`display: block\`.
   - \`#progress-fill\` receives \`background: #0284c7\` and smooth width transitions.

3. **JavaScript Logic**:
   - Maintains \`currentStep\` index (0 to 2).
   - Dynamically checks radio selection before permitting advancement.
   - Calculates score on the final step by verifying \`input[data-correct='true']:checked\` and reports the final score in \`#result-message\`.`
  },
  {
    id: 5,
    title: "Product Grid Filter",
    difficulty: "Medium",
    category: "HTML / CSS / Filtering & Sorting",
    howToAttempt: "Add a sort select in HTML, style product grid cards in CSS, and implement keyword search and category filtering in JavaScript.",
    htmlObjectives: [
      "Add a select with id=\"sort-select\" containing options \"default\", \"price-low\", and \"price-high\" inside .controls-bar.",
      "Add an element with id=\"empty-state\" and text \"No matching products found.\" below #product-grid."
    ],
    cssObjectives: [
      "Style #product-grid with display grid, grid-template-columns repeat(auto-fill, minmax(200px, 1fr)), and gap 16px.",
      "Style .category-btn.active with background #0284c7 and color white."
    ],
    jsObjectives: [
      "Filter products by active category button (.category-btn).",
      "Filter products by search keyword (#search-input) matching .product-title.",
      "Show #empty-state when no products match the combined criteria.",
      "Sort visible cards when #sort-select changes (price-low or price-high)."
    ],
    constraints: [
      "Search filtering should be case-insensitive."
    ],
    html: `<div class="catalog-card">
  <h2>Product Catalog</h2>

  <div class="controls-bar">
    <input type="text" id="search-input" placeholder="Search products..." />
    <!-- TODO [HTML]: Add <select id="sort-select"><option value="default">Default</option><option value="price-low">Price: Low to High</option><option value="price-high">Price: High to Low</option></select> -->
  </div>

  <div class="category-tabs">
    <button class="category-btn active" data-category="all">All</button>
    <button class="category-btn" data-category="electronics">Electronics</button>
    <button class="category-btn" data-category="apparel">Apparel</button>
    <button class="category-btn" data-category="books">Books</button>
  </div>

  <div id="product-grid" class="product-grid">
    <div class="product-card" data-category="electronics" data-price="99">
      <h3 class="product-title">Wireless Headphones</h3>
      <span class="product-price">$99.00</span>
    </div>
    <div class="product-card" data-category="electronics" data-price="29">
      <h3 class="product-title">Bluetooth Speaker</h3>
      <span class="product-price">$29.00</span>
    </div>
    <div class="product-card" data-category="apparel" data-price="45">
      <h3 class="product-title">Running Shoes</h3>
      <span class="product-price">$45.00</span>
    </div>
    <div class="product-card" data-category="books" data-price="19">
      <h3 class="product-title">JavaScript Guide</h3>
      <span class="product-price">$19.00</span>
    </div>
  </div>

  <!-- TODO [HTML]: Add <div id="empty-state">No matching products found.</div> -->
</div>`,
    css: `* {
  box-sizing: border-box;
  font-family: 'Segoe UI', system-ui, sans-serif;
}
body {
  margin: 0;
  padding: 24px;
  background: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.catalog-card {
  background: #ffffff;
  padding: 28px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 600px;
}
h2 {
  margin-top: 0;
  color: #1e293b;
  font-size: 20px;
}
.controls-bar {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}
#search-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
}
#sort-select {
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
}
.category-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
.category-btn {
  padding: 6px 14px;
  border: 1px solid #cbd5e1;
  background: #f8fafc;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
/* TODO [CSS]: Style .category-btn.active with background #0284c7 and color white */
.category-btn.active {
  background: #0284c7;
  color: white;
  border-color: #0284c7;
}
/* TODO [CSS]: Style #product-grid with display grid, repeat(auto-fill, minmax(200px, 1fr)), gap 16px */
#product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}
.product-card {
  padding: 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #f8fafc;
}
.product-title {
  margin: 0 0 8px 0;
  font-size: 15px;
  color: #1e293b;
}
.product-price {
  font-weight: 700;
  color: #0284c7;
}
#empty-state {
  display: none;
  text-align: center;
  padding: 32px;
  color: #94a3b8;
  font-size: 15px;
}`,
    starterJS: `const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const categoryBtns = document.querySelectorAll(".category-btn");
const productCards = document.querySelectorAll(".product-card");
const emptyState = document.getElementById("empty-state");
const productGrid = document.getElementById("product-grid");

let activeCategory = "all";

// TODO [JavaScript]:
// 1. Filter products when categoryBtns are clicked (update .active class)
// 2. Filter products when searchInput changes (case-insensitive title match)
// 3. Display emptyState if no products match
// 4. Sort visible cards when sortSelect changes
`,
    solutionHTML: `<div class="catalog-card">
  <h2>Product Catalog</h2>

  <div class="controls-bar">
    <input type="text" id="search-input" placeholder="Search products..." />
    <select id="sort-select">
      <option value="default">Default</option>
      <option value="price-low">Price: Low to High</option>
      <option value="price-high">Price: High to Low</option>
    </select>
  </div>

  <div class="category-tabs">
    <button class="category-btn active" data-category="all">All</button>
    <button class="category-btn" data-category="electronics">Electronics</button>
    <button class="category-btn" data-category="apparel">Apparel</button>
    <button class="category-btn" data-category="books">Books</button>
  </div>

  <div id="product-grid" class="product-grid">
    <div class="product-card" data-category="electronics" data-price="99">
      <h3 class="product-title">Wireless Headphones</h3>
      <span class="product-price">$99.00</span>
    </div>
    <div class="product-card" data-category="electronics" data-price="29">
      <h3 class="product-title">Bluetooth Speaker</h3>
      <span class="product-price">$29.00</span>
    </div>
    <div class="product-card" data-category="apparel" data-price="45">
      <h3 class="product-title">Running Shoes</h3>
      <span class="product-price">$45.00</span>
    </div>
    <div class="product-card" data-category="books" data-price="19">
      <h3 class="product-title">JavaScript Guide</h3>
      <span class="product-price">$19.00</span>
    </div>
  </div>

  <div id="empty-state">No matching products found.</div>
</div>`,
    solutionCSS: `* {
  box-sizing: border-box;
  font-family: 'Segoe UI', system-ui, sans-serif;
}
body {
  margin: 0;
  padding: 24px;
  background: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.catalog-card {
  background: #ffffff;
  padding: 28px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 600px;
}
h2 {
  margin-top: 0;
  color: #1e293b;
  font-size: 20px;
}
.controls-bar {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}
#search-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
}
#sort-select {
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
}
.category-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
.category-btn {
  padding: 6px 14px;
  border: 1px solid #cbd5e1;
  background: #f8fafc;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.category-btn.active {
  background: #0284c7;
  color: white;
  border-color: #0284c7;
}
#product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}
.product-card {
  padding: 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #f8fafc;
}
.product-title {
  margin: 0 0 8px 0;
  font-size: 15px;
  color: #1e293b;
}
.product-price {
  font-weight: 700;
  color: #0284c7;
}
#empty-state {
  display: none;
  text-align: center;
  padding: 32px;
  color: #94a3b8;
  font-size: 15px;
}`,
    solutionJS: `const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const categoryBtns = document.querySelectorAll(".category-btn");
const productCards = Array.from(document.querySelectorAll(".product-card"));
const emptyState = document.getElementById("empty-state");
const productGrid = document.getElementById("product-grid");

let activeCategory = "all";

function filterProducts() {
  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
  let visibleCount = 0;

  productCards.forEach((card) => {
    const cat = card.getAttribute("data-category");
    const title = (card.querySelector(".product-title")?.textContent || "").toLowerCase();

    const matchesCategory = activeCategory === "all" || cat === activeCategory;
    const matchesSearch = query === "" || title.includes(query);

    if (matchesCategory && matchesSearch) {
      card.style.display = "";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  if (emptyState) {
    emptyState.style.display = visibleCount === 0 ? "block" : "none";
  }
}

function sortProducts() {
  if (!sortSelect || !productGrid) return;
  const sortVal = sortSelect.value;
  if (sortVal === "default") return;

  const cards = Array.from(productGrid.children).filter((c) => c.classList.contains("product-card"));
  cards.sort((a, b) => {
    const priceA = parseFloat(a.getAttribute("data-price")) || 0;
    const priceB = parseFloat(b.getAttribute("data-price")) || 0;
    return sortVal === "price-low" ? priceA - priceB : priceB - priceA;
  });

  cards.forEach((c) => productGrid.appendChild(c));
}

categoryBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    categoryBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = btn.getAttribute("data-category");
    filterProducts();
  });
});

if (searchInput) {
  searchInput.addEventListener("input", filterProducts);
}

if (sortSelect) {
  sortSelect.addEventListener("change", () => {
    sortProducts();
    filterProducts();
  });
}

filterProducts();`,
    solutionExplanation: `### Solution Breakdown: Product Grid Filter

1. **HTML Additions**:
   - Added \`<select id="sort-select">...\</select>\` with default, price-low, and price-high options.
   - Added \`<div id="empty-state">No matching products found.</div>\` below the product grid.

2. **CSS Styling**:
   - Configured \`#product-grid\` with CSS Grid: \`display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px;\`.
   - Styled \`.category-btn.active\` with primary blue background (\`#0284c7\`) and white text.

3. **JavaScript Logic**:
   - \`filterProducts()\` applies both the active category tab and search input simultaneously.
   - Updates empty state visibility based on \`visibleCount === 0\`.
   - \`sortProducts()\` re-appends sorted DOM elements according to parsed \`data-price\` values.`
  },
  {
    id: 6,
    title: "Modal Dialog & Timer",
    difficulty: "Medium",
    category: "HTML / CSS / Timers & Modals",
    howToAttempt: "Add modal backdrop in HTML, style modal overlay in CSS, and implement open/close mechanics with a 10-second countdown timer in JavaScript.",
    htmlObjectives: [
      "Add a button with id=\"open-modal-btn\" and text \"View Special Offer\" inside .page-content.",
      "Add a span with id=\"countdown-timer\" displaying \"10\" inside the modal footer."
    ],
    cssObjectives: [
      "Style #modal-overlay with position fixed, inset 0, background rgba(0,0,0,0.6), display none, and z-index 1000.",
      "When #modal-overlay has class .active, set display to flex, justify-content center, and align-items center."
    ],
    jsObjectives: [
      "Clicking #open-modal-btn shows modal (.active) and starts 10-second countdown.",
      "Update #countdown-timer each second; automatically close modal when count reaches 0.",
      "Clicking #close-modal-btn, #claim-btn, or clicking outside the window on #modal-overlay closes the modal and clears interval."
    ],
    constraints: [
      "Ensure clearInterval is executed when closing to prevent background timer leaks."
    ],
    html: `<div class="page-content">
  <h2>Exclusive Deals</h2>
  <p>Discover our limited-time promotional offers.</p>
  <!-- TODO [HTML]: Add <button id="open-modal-btn">View Special Offer</button> -->
</div>

<div id="modal-overlay" class="modal-overlay">
  <div id="promo-modal" class="modal-card">
    <div class="modal-header">
      <h3>Special 25% Off Discount</h3>
      <button id="close-modal-btn">&times;</button>
    </div>
    <div class="modal-body">
      <p>Use code <strong>FLASH25</strong> to get 25% off your next order!</p>
    </div>
    <div class="modal-footer">
      <p class="timer-text">Offer closes in <span id="countdown-timer">10</span>s</p>
      <button id="claim-btn">Claim Deal</button>
    </div>
  </div>
</div>`,
    css: `* {
  box-sizing: border-box;
  font-family: 'Segoe UI', system-ui, sans-serif;
}
body {
  margin: 0;
  padding: 24px;
  background: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.page-content {
  text-align: center;
}
#open-modal-btn {
  padding: 12px 24px;
  background: #0284c7;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
}
/* TODO [CSS]: Style #modal-overlay fixed, inset 0, rgba(0,0,0,0.6), display none, z-index 1000 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: none;
  z-index: 1000;
}
/* TODO [CSS]: When .modal-overlay.active display flex, center */
.modal-overlay.active {
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-card {
  background: #ffffff;
  padding: 24px;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.modal-header h3 {
  margin: 0;
  font-size: 18px;
  color: #1e293b;
}
#close-modal-btn {
  background: none;
  border: none;
  font-size: 24px;
  color: #94a3b8;
  cursor: pointer;
}
.modal-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
.timer-text {
  margin: 0;
  font-size: 13px;
  color: #e11d48;
  font-weight: 600;
}
#claim-btn {
  padding: 8px 16px;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}`,
    starterJS: `const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const claimBtn = document.getElementById("claim-btn");
const modalOverlay = document.getElementById("modal-overlay");
const countdownTimer = document.getElementById("countdown-timer");

let timerInterval = null;
let timeLeft = 10;

// TODO [JavaScript]:
// 1. openModal(): show modal (add .active), reset timeLeft to 10, start countdown interval
// 2. closeModal(): hide modal (remove .active), clear timerInterval
// 3. When timeLeft reaches 0, automatically call closeModal()
// 4. Close when clicking modalOverlay outside dialog
`,
    solutionHTML: `<div class="page-content">
  <h2>Exclusive Deals</h2>
  <p>Discover our limited-time promotional offers.</p>
  <button id="open-modal-btn">View Special Offer</button>
</div>

<div id="modal-overlay" class="modal-overlay">
  <div id="promo-modal" class="modal-card">
    <div class="modal-header">
      <h3>Special 25% Off Discount</h3>
      <button id="close-modal-btn">&times;</button>
    </div>
    <div class="modal-body">
      <p>Use code <strong>FLASH25</strong> to get 25% off your next order!</p>
    </div>
    <div class="modal-footer">
      <p class="timer-text">Offer closes in <span id="countdown-timer">10</span>s</p>
      <button id="claim-btn">Claim Deal</button>
    </div>
  </div>
</div>`,
    solutionCSS: `* {
  box-sizing: border-box;
  font-family: 'Segoe UI', system-ui, sans-serif;
}
body {
  margin: 0;
  padding: 24px;
  background: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.page-content {
  text-align: center;
}
#open-modal-btn {
  padding: 12px 24px;
  background: #0284c7;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: none;
  z-index: 1000;
}
.modal-overlay.active {
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-card {
  background: #ffffff;
  padding: 24px;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.modal-header h3 {
  margin: 0;
  font-size: 18px;
  color: #1e293b;
}
#close-modal-btn {
  background: none;
  border: none;
  font-size: 24px;
  color: #94a3b8;
  cursor: pointer;
}
.modal-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
.timer-text {
  margin: 0;
  font-size: 13px;
  color: #e11d48;
  font-weight: 600;
}
#claim-btn {
  padding: 8px 16px;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}`,
    solutionJS: `const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const claimBtn = document.getElementById("claim-btn");
const modalOverlay = document.getElementById("modal-overlay");
const countdownTimer = document.getElementById("countdown-timer");

let timerInterval = null;
let timeLeft = 10;

function closeModal() {
  if (modalOverlay) {
    modalOverlay.classList.remove("active");
  }
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function openModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.add("active");
  timeLeft = 10;
  if (countdownTimer) countdownTimer.textContent = timeLeft;

  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    if (countdownTimer) countdownTimer.textContent = timeLeft;
    if (timeLeft <= 0) {
      closeModal();
    }
  }, 1000);
}

if (openModalBtn) {
  openModalBtn.addEventListener("click", openModal);
}

if (closeModalBtn) {
  closeModalBtn.addEventListener("click", closeModal);
}

if (claimBtn) {
  claimBtn.addEventListener("click", () => {
    alert("Discount claimed successfully!");
    closeModal();
  });
}

if (modalOverlay) {
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
}`,
    solutionExplanation: `### Solution Breakdown: Modal Dialog & Timer

1. **HTML Additions**:
   - Added \`<button id="open-modal-btn">View Special Offer</button>\` to trigger the dialog.
   - Configured countdown span \`<span id="countdown-timer">10</span>\` in modal footer.

2. **CSS Styling**:
   - \`#modal-overlay\` has \`position: fixed; inset: 0; z-index: 1000; background: rgba(0,0,0,0.6); display: none;\`.
   - When \`.active\` class is applied, displays with flexbox centered in the viewport.

3. **JavaScript Logic**:
   - \`openModal()\`: Adds \`.active\`, resets \`timeLeft = 10\`, and starts a 1-second \`setInterval\`.
   - \`closeModal()\`: Cleans up the interval to avoid memory leaks and removes \`.active\`.
   - Handles backdrop dismissals with \`if (e.target === modalOverlay) closeModal()\`.`
  },
  {
    id: 7,
    title: "Responsive Drawer",
    difficulty: "Medium",
    category: "HTML / CSS / Responsive Navigation",
    howToAttempt: "Add off-canvas drawer structure in HTML, style smooth slide-in transform in CSS, and implement open, close, and keyboard accessibility in JavaScript.",
    htmlObjectives: [
      "Add a button with id=\"drawer-toggle\" and text \"☰ Menu\" inside the top navigation bar.",
      "Add a button with id=\"drawer-close\" and text \"✕\" inside the drawer header."
    ],
    cssObjectives: [
      "Style #side-drawer with position fixed, top 0, left 0, width 280px, height 100%, and transform translateX(-100%).",
      "When #side-drawer has class .open, set transform to translateX(0).",
      "Style #drawer-backdrop with fixed positioning and display none (display block when .open)."
    ],
    jsObjectives: [
      "Clicking #drawer-toggle adds .open to drawer and backdrop, and sets aria-expanded=\"true\".",
      "Clicking #drawer-close or backdrop removes .open and sets aria-expanded=\"false\".",
      "Pressing Escape key closes the drawer if currently open."
    ],
    constraints: [
      "Maintain accessible ARIA states on toggle and drawer."
    ],
    html: `<header class="app-header">
  <!-- TODO [HTML]: Add <button id="drawer-toggle" aria-expanded="false">☰ Menu</button> -->
  <h1 class="logo">Portal</h1>
</header>

<div id="drawer-backdrop" class="drawer-backdrop"></div>

<nav id="side-drawer" class="side-drawer" aria-hidden="true">
  <div class="drawer-header">
    <h2>Navigation</h2>
    <!-- TODO [HTML]: Add <button id="drawer-close">✕</button> -->
  </div>
  <ul class="nav-links">
    <li><a href="#dashboard">Dashboard</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#messages">Messages</a></li>
    <li><a href="#settings">Settings</a></li>
  </ul>
</nav>

<main class="page-body">
  <h2>Welcome to the Portal</h2>
  <p>Click the menu button to reveal the responsive slide-out navigation drawer.</p>
</main>`,
    css: `* {
  box-sizing: border-box;
  font-family: 'Segoe UI', system-ui, sans-serif;
}
body {
  margin: 0;
  background: #f8fafc;
}
.app-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 24px;
  background: #1e293b;
  color: white;
}
.logo {
  margin: 0;
  font-size: 20px;
}
#drawer-toggle {
  background: none;
  border: 1px solid #475569;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 15px;
  cursor: pointer;
}
/* TODO [CSS]: Style #side-drawer position fixed, top 0, left 0, width 280px, height 100%, translateX(-100%) */
.side-drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100%;
  background: #ffffff;
  box-shadow: 2px 0 16px rgba(0,0,0,0.15);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 1001;
}
/* TODO [CSS]: .side-drawer.open transform translateX(0) */
.side-drawer.open {
  transform: translateX(0);
}
/* TODO [CSS]: .drawer-backdrop fixed, inset 0, rgba(0,0,0,0.5), display none (.open display block) */
.drawer-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: none;
  z-index: 1000;
}
.drawer-backdrop.open {
  display: block;
}
.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e2e8f0;
}
.drawer-header h2 {
  margin: 0;
  font-size: 18px;
}
#drawer-close {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #64748b;
}
.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
}
.nav-links li a {
  display: block;
  padding: 14px 20px;
  color: #334155;
  text-decoration: none;
  border-bottom: 1px solid #f1f5f9;
}
.nav-links li a:hover {
  background: #f8fafc;
}
.page-body {
  padding: 32px;
}`,
    starterJS: `const drawerToggle = document.getElementById("drawer-toggle");
const drawerClose = document.getElementById("drawer-close");
const sideDrawer = document.getElementById("side-drawer");
const drawerBackdrop = document.getElementById("drawer-backdrop");

// TODO [JavaScript]:
// 1. openDrawer(): add .open to sideDrawer & drawerBackdrop, set aria-expanded="true" on drawerToggle
// 2. closeDrawer(): remove .open from sideDrawer & drawerBackdrop, set aria-expanded="false" on drawerToggle
// 3. Attach event listeners to toggle, close button, and backdrop
// 4. Listen for Escape key to close drawer if open
`,
    solutionHTML: `<header class="app-header">
  <button id="drawer-toggle" aria-expanded="false">☰ Menu</button>
  <h1 class="logo">Portal</h1>
</header>

<div id="drawer-backdrop" class="drawer-backdrop"></div>

<nav id="side-drawer" class="side-drawer" aria-hidden="true">
  <div class="drawer-header">
    <h2>Navigation</h2>
    <button id="drawer-close">✕</button>
  </div>
  <ul class="nav-links">
    <li><a href="#dashboard">Dashboard</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#messages">Messages</a></li>
    <li><a href="#settings">Settings</a></li>
  </ul>
</nav>

<main class="page-body">
  <h2>Welcome to the Portal</h2>
  <p>Click the menu button to reveal the responsive slide-out navigation drawer.</p>
</main>`,
    solutionCSS: `* {
  box-sizing: border-box;
  font-family: 'Segoe UI', system-ui, sans-serif;
}
body {
  margin: 0;
  background: #f8fafc;
}
.app-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 24px;
  background: #1e293b;
  color: white;
}
.logo {
  margin: 0;
  font-size: 20px;
}
#drawer-toggle {
  background: none;
  border: 1px solid #475569;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 15px;
  cursor: pointer;
}
.side-drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100%;
  background: #ffffff;
  box-shadow: 2px 0 16px rgba(0,0,0,0.15);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 1001;
}
.side-drawer.open {
  transform: translateX(0);
}
.drawer-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: none;
  z-index: 1000;
}
.drawer-backdrop.open {
  display: block;
}
.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e2e8f0;
}
.drawer-header h2 {
  margin: 0;
  font-size: 18px;
}
#drawer-close {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #64748b;
}
.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
}
.nav-links li a {
  display: block;
  padding: 14px 20px;
  color: #334155;
  text-decoration: none;
  border-bottom: 1px solid #f1f5f9;
}
.nav-links li a:hover {
  background: #f8fafc;
}
.page-body {
  padding: 32px;
}`,
    solutionJS: `const drawerToggle = document.getElementById("drawer-toggle");
const drawerClose = document.getElementById("drawer-close");
const sideDrawer = document.getElementById("side-drawer");
const drawerBackdrop = document.getElementById("drawer-backdrop");

function openDrawer() {
  if (sideDrawer) sideDrawer.classList.add("open");
  if (drawerBackdrop) drawerBackdrop.classList.add("open");
  if (drawerToggle) drawerToggle.setAttribute("aria-expanded", "true");
}

function closeDrawer() {
  if (sideDrawer) sideDrawer.classList.remove("open");
  if (drawerBackdrop) drawerBackdrop.classList.remove("open");
  if (drawerToggle) drawerToggle.setAttribute("aria-expanded", "false");
}

if (drawerToggle) {
  drawerToggle.addEventListener("click", () => {
    if (sideDrawer && sideDrawer.classList.contains("open")) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });
}

if (drawerClose) {
  drawerClose.addEventListener("click", closeDrawer);
}

if (drawerBackdrop) {
  drawerBackdrop.addEventListener("click", closeDrawer);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && sideDrawer && sideDrawer.classList.contains("open")) {
    closeDrawer();
  }
});`,
    solutionExplanation: `### Solution Breakdown: Responsive Drawer

1. **HTML Additions**:
   - Added \`<button id="drawer-toggle" aria-expanded="false">☰ Menu</button>\` in the top header.
   - Added \`<button id="drawer-close">✕</button>\` in the drawer header.

2. **CSS Styling**:
   - \`#side-drawer\` uses \`position: fixed; width: 280px; height: 100%; transform: translateX(-100%)\` with smooth transitions.
   - \`.open\` class transitions transform to \`translateX(0)\`.
   - \`#drawer-backdrop\` provides a dimming scrim overlay (\`rgba(0,0,0,0.5)\`).

3. **JavaScript Logic**:
   - Manages state toggling and syncs accessibility attributes (\`aria-expanded="true/false"\`).
   - Listens for \`keydown\` events and dismisses the drawer when the Escape key is pressed.`
  },
  {
    id: 8,
    title: "LocalStorage To-Do",
    difficulty: "Medium",
    category: "HTML / CSS / LocalStorage & DOM",
    howToAttempt: "Add clear completed button in HTML, style completed task strike-through in CSS, and implement task persistence in localStorage with JavaScript.",
    htmlObjectives: [
      "Add a button with id=\"clear-completed-btn\" and text \"Clear Completed\" inside .todo-footer.",
      "Add a span with id=\"todo-count\" displaying \"0 items left\" inside .todo-footer."
    ],
    cssObjectives: [
      "Style .todo-item.completed .todo-text with text-decoration line-through and color #94a3b8.",
      "Style .delete-task-btn with color #ef4444, transparent background, and no border."
    ],
    jsObjectives: [
      "Persist tasks in localStorage under key 'app_todos'.",
      "Add tasks dynamically on form submit or #add-todo-btn click.",
      "Toggle task completion status on checkbox click and update localStorage.",
      "Remove tasks on delete button click or clear completed button click."
    ],
    constraints: [
      "Handle JSON serialization/deserialization safely without throwing errors on empty storage."
    ],
    html: `<div class="todo-card">
  <h2>LocalStorage To-Do</h2>

  <div class="input-row">
    <input type="text" id="todo-input" placeholder="What needs to be done?" />
    <button id="add-todo-btn">Add</button>
  </div>

  <ul id="todo-list" class="todo-list">
    <!-- Tasks will be rendered here dynamically -->
  </ul>

  <div class="todo-footer">
    <!-- TODO [HTML]: Add <span id="todo-count">0 items left</span> -->
    <!-- TODO [HTML]: Add <button id="clear-completed-btn">Clear Completed</button> -->
  </div>
</div>`,
    css: `* {
  box-sizing: border-box;
  font-family: 'Segoe UI', system-ui, sans-serif;
}
body {
  margin: 0;
  padding: 24px;
  background: #f1f5f9;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.todo-card {
  background: #ffffff;
  padding: 28px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 440px;
}
h2 {
  margin-top: 0;
  color: #1e293b;
  font-size: 20px;
}
.input-row {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}
#todo-input {
  flex: 1;
  padding: 10px 14px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 14px;
}
#add-todo-btn {
  padding: 10px 18px;
  background: #0284c7;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}
.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}
.todo-item-left {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
}
/* TODO [CSS]: Style .todo-item.completed .todo-text with text-decoration line-through and color #94a3b8 */
.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: #94a3b8;
}
/* TODO [CSS]: Style .delete-task-btn with color #ef4444, background transparent, border none */
.delete-task-btn {
  color: #ef4444;
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
}
.todo-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #e2e8f0;
  font-size: 13px;
  color: #64748b;
}
#clear-completed-btn {
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  text-decoration: underline;
}`,
    starterJS: `const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-todo-btn");
const todoList = document.getElementById("todo-list");
const todoCount = document.getElementById("todo-count");
const clearCompletedBtn = document.getElementById("clear-completed-btn");

let todos = [];

// TODO [JavaScript]:
// 1. Load todos from localStorage ('app_todos') on init
// 2. renderTodos(): display todos in todoList, update todoCount
// 3. Add new task on addTodoBtn click or Enter key
// 4. Toggle completion on checkbox click & persist to localStorage
// 5. Delete task on delete button click & persist to localStorage
// 6. Clear completed tasks on clearCompletedBtn click
`,
    solutionHTML: `<div class="todo-card">
  <h2>LocalStorage To-Do</h2>

  <div class="input-row">
    <input type="text" id="todo-input" placeholder="What needs to be done?" />
    <button id="add-todo-btn">Add</button>
  </div>

  <ul id="todo-list" class="todo-list">
    <!-- Tasks will be rendered here dynamically -->
  </ul>

  <div class="todo-footer">
    <span id="todo-count">0 items left</span>
    <button id="clear-completed-btn">Clear Completed</button>
  </div>
</div>`,
    solutionCSS: `* {
  box-sizing: border-box;
  font-family: 'Segoe UI', system-ui, sans-serif;
}
body {
  margin: 0;
  padding: 24px;
  background: #f1f5f9;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.todo-card {
  background: #ffffff;
  padding: 28px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 440px;
}
h2 {
  margin-top: 0;
  color: #1e293b;
  font-size: 20px;
}
.input-row {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}
#todo-input {
  flex: 1;
  padding: 10px 14px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 14px;
}
#add-todo-btn {
  padding: 10px 18px;
  background: #0284c7;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}
.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}
.todo-item-left {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
}
.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: #94a3b8;
}
.delete-task-btn {
  color: #ef4444;
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
}
.todo-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #e2e8f0;
  font-size: 13px;
  color: #64748b;
}
#clear-completed-btn {
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  text-decoration: underline;
}`,
    solutionJS: `const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-todo-btn");
const todoList = document.getElementById("todo-list");
const todoCount = document.getElementById("todo-count");
const clearCompletedBtn = document.getElementById("clear-completed-btn");

let todos = [];

try {
  const saved = localStorage.getItem("app_todos");
  if (saved) {
    todos = JSON.parse(saved);
  }
} catch (e) {
  todos = [];
}

function saveTodos() {
  localStorage.setItem("app_todos", JSON.stringify(todos));
}

function renderTodos() {
  if (!todoList) return;
  todoList.innerHTML = "";

  todos.forEach((t) => {
    const li = document.createElement("li");
    li.className = "todo-item" + (t.completed ? " completed" : "");

    li.innerHTML = \`
      <div class="todo-item-left">
        <input type="checkbox" class="todo-checkbox" \${t.completed ? "checked" : ""} />
        <span class="todo-text">\${t.text}</span>
      </div>
      <button class="delete-task-btn" title="Delete task">&times;</button>
    \`;

    const chk = li.querySelector(".todo-checkbox");
    chk.onchange = () => {
      t.completed = chk.checked;
      saveTodos();
      renderTodos();
    };

    const del = li.querySelector(".delete-task-btn");
    del.onclick = () => {
      todos = todos.filter((item) => item.id !== t.id);
      saveTodos();
      renderTodos();
    };

    todoList.appendChild(li);
  });

  const activeCount = todos.filter((t) => !t.completed).length;
  if (todoCount) {
    todoCount.textContent = \`\${activeCount} item\${activeCount === 1 ? "" : "s"} left\`;
  }
}

function addTodo() {
  const text = todoInput ? todoInput.value.trim() : "";
  if (!text) return;

  todos.push({
    id: Date.now().toString(),
    text,
    completed: false
  });

  if (todoInput) todoInput.value = "";
  saveTodos();
  renderTodos();
}

if (addTodoBtn) {
  addTodoBtn.addEventListener("click", addTodo);
}

if (todoInput) {
  todoInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTodo();
  });
}

if (clearCompletedBtn) {
  clearCompletedBtn.addEventListener("click", () => {
    todos = todos.filter((t) => !t.completed);
    saveTodos();
    renderTodos();
  });
}

renderTodos();`,
    solutionExplanation: `### Solution Breakdown: LocalStorage To-Do

1. **HTML Additions**:
   - Added \`<span id="todo-count">0 items left</span>\` to report active task count.
   - Added \`<button id="clear-completed-btn">Clear Completed</button>\` in the footer.

2. **CSS Styling**:
   - \`.todo-item.completed .todo-text\` applies strikethrough (\`text-decoration: line-through\`) and muted gray color (\`#94a3b8\`).
   - \`.delete-task-btn\` is styled as a subtle red icon button.

3. **JavaScript Logic**:
   - Loads tasks from \`localStorage.getItem('app_todos')\` wrapped in \`try/catch\` for resilience.
   - \`renderTodos()\` binds event handlers to checkboxes and delete buttons per item.
   - Updates remaining item counter (\`activeCount\`) and persists data array on any state modification.`
  },
  {
    id: 9,
    title: "Tab Switcher & Badge",
    difficulty: "Easy",
    category: "HTML / CSS / Component State",
    howToAttempt: "Add notification badges in HTML, style active tab indicators in CSS, and implement accessible tab switching with unread badge updates in JavaScript.",
    htmlObjectives: [
      "Add a span with id=\"badge-messages\" and text \"3\" with class .tab-badge inside #tab-btn-messages.",
      "Add a button with id=\"mark-read-btn\" and text \"Mark All Read\" inside the messages panel."
    ],
    cssObjectives: [
      "Style .tab-btn.active with border-bottom 3px solid #0284c7 and color #0284c7.",
      "Style .tab-panel:not(.active) with display none; and .tab-panel.active with display block.",
      "Style .tab-badge with background #ef4444, color white, border-radius 10px, and padding 2px 6px."
    ],
    jsObjectives: [
      "Clicking a tab activates that tab and switches visible .tab-panel.",
      "Set aria-selected=\"true\" on active tab and \"false\" on inactive tabs.",
      "When #mark-read-btn is clicked, clear or hide #badge-messages."
    ],
    constraints: [
      "Ensure only one tab panel is visible at a time."
    ],
    html: `<div class="tabs-card">
  <h2>User Dashboard</h2>

  <div class="tabs-header" role="tablist">
    <button class="tab-btn active" id="tab-btn-inbox" role="tab" aria-selected="true" data-tab="inbox">
      Inbox
    </button>
    <button class="tab-btn" id="tab-btn-messages" role="tab" aria-selected="false" data-tab="messages">
      Messages
      <!-- TODO [HTML]: Add <span id="badge-messages" class="tab-badge">3</span> -->
    </button>
    <button class="tab-btn" id="tab-btn-settings" role="tab" aria-selected="false" data-tab="settings">
      Settings
    </button>
  </div>

  <div class="tabs-content">
    <div class="tab-panel active" id="panel-inbox">
      <p>Your primary inbox is empty. All caught up!</p>
    </div>
    <div class="tab-panel" id="panel-messages">
      <p>You have unread system notifications.</p>
      <!-- TODO [HTML]: Add <button id="mark-read-btn">Mark All Read</button> -->
    </div>
    <div class="tab-panel" id="panel-settings">
      <p>Manage notification preferences and account security.</p>
    </div>
  </div>
</div>`,
    css: `* {
  box-sizing: border-box;
  font-family: 'Segoe UI', system-ui, sans-serif;
}
body {
  margin: 0;
  padding: 24px;
  background: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.tabs-card {
  background: #ffffff;
  padding: 28px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 480px;
}
h2 {
  margin-top: 0;
  color: #1e293b;
  font-size: 20px;
}
.tabs-header {
  display: flex;
  border-bottom: 2px solid #e2e8f0;
  margin-bottom: 20px;
}
.tab-btn {
  padding: 12px 20px;
  background: none;
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: #64748b;
  cursor: pointer;
  position: relative;
  border-bottom: 3px solid transparent;
  display: flex;
  align-items: center;
  gap: 8px;
}
/* TODO [CSS]: Style .tab-btn.active border-bottom 3px solid #0284c7 and color #0284c7 */
.tab-btn.active {
  border-bottom: 3px solid #0284c7;
  color: #0284c7;
}
/* TODO [CSS]: Style .tab-badge background #ef4444, color white, border-radius 10px, padding 2px 6px */
.tab-badge {
  background: #ef4444;
  color: white;
  border-radius: 10px;
  padding: 2px 6px;
  font-size: 11px;
}
/* TODO [CSS]: .tab-panel:not(.active) display none; .tab-panel.active display block */
.tab-panel:not(.active) {
  display: none;
}
.tab-panel.active {
  display: block;
}
#mark-read-btn {
  margin-top: 12px;
  padding: 8px 16px;
  background: #0284c7;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}`,
    starterJS: `const tabBtns = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");
const markReadBtn = document.getElementById("mark-read-btn");
const badgeMessages = document.getElementById("badge-messages");

// TODO [JavaScript]:
// 1. Add click listeners to tabBtns to switch the active tab
// 2. Remove .active from all tabs & panels, then add .active to clicked tab & matching panel
// 3. Update aria-selected attributes ("true" on active, "false" on others)
// 4. Handle markReadBtn click: hide badgeMessages or set text to 0
`,
    solutionHTML: `<div class="tabs-card">
  <h2>User Dashboard</h2>

  <div class="tabs-header" role="tablist">
    <button class="tab-btn active" id="tab-btn-inbox" role="tab" aria-selected="true" data-tab="inbox">
      Inbox
    </button>
    <button class="tab-btn" id="tab-btn-messages" role="tab" aria-selected="false" data-tab="messages">
      Messages
      <span id="badge-messages" class="tab-badge">3</span>
    </button>
    <button class="tab-btn" id="tab-btn-settings" role="tab" aria-selected="false" data-tab="settings">
      Settings
    </button>
  </div>

  <div class="tabs-content">
    <div class="tab-panel active" id="panel-inbox">
      <p>Your primary inbox is empty. All caught up!</p>
    </div>
    <div class="tab-panel" id="panel-messages">
      <p>You have unread system notifications.</p>
      <button id="mark-read-btn">Mark All Read</button>
    </div>
    <div class="tab-panel" id="panel-settings">
      <p>Manage notification preferences and account security.</p>
    </div>
  </div>
</div>`,
    solutionCSS: `* {
  box-sizing: border-box;
  font-family: 'Segoe UI', system-ui, sans-serif;
}
body {
  margin: 0;
  padding: 24px;
  background: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.tabs-card {
  background: #ffffff;
  padding: 28px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 480px;
}
h2 {
  margin-top: 0;
  color: #1e293b;
  font-size: 20px;
}
.tabs-header {
  display: flex;
  border-bottom: 2px solid #e2e8f0;
  margin-bottom: 20px;
}
.tab-btn {
  padding: 12px 20px;
  background: none;
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: #64748b;
  cursor: pointer;
  position: relative;
  border-bottom: 3px solid transparent;
  display: flex;
  align-items: center;
  gap: 8px;
}
.tab-btn.active {
  border-bottom: 3px solid #0284c7;
  color: #0284c7;
}
.tab-badge {
  background: #ef4444;
  color: white;
  border-radius: 10px;
  padding: 2px 6px;
  font-size: 11px;
}
.tab-panel:not(.active) {
  display: none;
}
.tab-panel.active {
  display: block;
}
#mark-read-btn {
  margin-top: 12px;
  padding: 8px 16px;
  background: #0284c7;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}`,
    solutionJS: `const tabBtns = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");
const markReadBtn = document.getElementById("mark-read-btn");
const badgeMessages = document.getElementById("badge-messages");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetKey = btn.getAttribute("data-tab");

    tabBtns.forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-selected", "false");
    });
    tabPanels.forEach((p) => p.classList.remove("active"));

    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");

    const activePanel = document.getElementById("panel-" + targetKey);
    if (activePanel) {
      activePanel.classList.add("active");
    }
  });
});

if (markReadBtn && badgeMessages) {
  markReadBtn.addEventListener("click", () => {
    badgeMessages.style.display = "none";
    badgeMessages.textContent = "0";
  });
}`,
    solutionExplanation: `### Solution Breakdown: Tab Switcher & Badge

1. **HTML Additions**:
   - Added \`<span id="badge-messages" class="tab-badge">3</span>\` to the Messages tab.
   - Added \`<button id="mark-read-btn">Mark All Read</button>\` inside the messages panel.

2. **CSS Styling**:
   - Styled \`.tab-btn.active\` with an active indicator line (\`border-bottom: 3px solid #0284c7\`).
   - Styled \`.tab-badge\` with an alert badge pill (\`background: #ef4444; border-radius: 10px\`).
   - Managed panel visibility with \`.tab-panel:not(.active) { display: none; }\`.

3. **JavaScript Logic**:
   - Listens for clicks across all \`.tab-btn\` elements.
   - Matches \`data-tab\` attribute to corresponding \`#panel-[target]\` element.
   - Updates \`aria-selected\` attributes for accessibility.
   - Hides notification badge when "Mark All Read" is clicked.`
  },
  {
    id: 10,
    title: "Char Limit & Progress",
    difficulty: "Easy",
    category: "HTML / CSS / Form Inputs & Feedback",
    howToAttempt: "Add remaining character indicator in HTML, style dynamic progress bar in CSS, and implement real-time input capping with progress feedback in JavaScript.",
    htmlObjectives: [
      "Add a container with id=\"progress-container\" containing a div with id=\"char-progress-bar\" below the textarea.",
      "Add a span with id=\"char-remaining\" displaying \"150 characters left\" inside .counter-row."
    ],
    cssObjectives: [
      "Style #char-progress-bar with height 6px, background #10b981, border-radius 3px, and transition width 0.15s ease.",
      "Style #char-progress-bar.warning with background #f59e0b, and #char-progress-bar.limit-reached with background #ef4444."
    ],
    jsObjectives: [
      "Listen for input on #char-textarea (maximum 150 characters).",
      "Update #char-count with current length and #char-remaining with remaining characters.",
      "Update #char-progress-bar width percentage based on (length / 150) * 100.",
      "Add class .warning at >= 120 chars and .limit-reached at 150 chars."
    ],
    constraints: [
      "Truncate text if user pastes content exceeding 150 characters."
    ],
    html: `<div class="counter-card">
  <h2>Post Feedback</h2>

  <textarea id="char-textarea" placeholder="Type your review (max 150 characters)..." maxlength="150"></textarea>

  <!-- TODO [HTML]: Add <div id="progress-container"><div id="char-progress-bar"></div></div> -->

  <div class="counter-row">
    <span id="char-count">0 / 150</span>
    <!-- TODO [HTML]: Add <span id="char-remaining">150 characters left</span> -->
  </div>
</div>`,
    css: `* {
  box-sizing: border-box;
  font-family: 'Segoe UI', system-ui, sans-serif;
}
body {
  margin: 0;
  padding: 24px;
  background: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.counter-card {
  background: #ffffff;
  padding: 28px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 440px;
}
h2 {
  margin-top: 0;
  color: #1e293b;
  font-size: 20px;
}
#char-textarea {
  width: 100%;
  height: 120px;
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 14px;
  resize: vertical;
}
#progress-container {
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
  margin-top: 10px;
  overflow: hidden;
}
/* TODO [CSS]: Style #char-progress-bar height 6px, background #10b981, border-radius 3px, transition width 0.15s ease */
#char-progress-bar {
  height: 6px;
  width: 0%;
  background: #10b981;
  border-radius: 3px;
  transition: width 0.15s ease, background 0.15s ease;
}
/* TODO [CSS]: Style .warning with background #f59e0b, .limit-reached with background #ef4444 */
#char-progress-bar.warning {
  background: #f59e0b;
}
#char-progress-bar.limit-reached {
  background: #ef4444;
}
.counter-row {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 13px;
  color: #64748b;
  font-weight: 600;
}`,
    starterJS: `const textarea = document.getElementById("char-textarea");
const charCount = document.getElementById("char-count");
const charRemaining = document.getElementById("char-remaining");
const progressBar = document.getElementById("char-progress-bar");

const MAX_CHARS = 150;

// TODO [JavaScript]:
// 1. Listen for input event on textarea
// 2. Update charCount text: "\${len} / \${MAX_CHARS}"
// 3. Update charRemaining text: "\${MAX_CHARS - len} characters left"
// 4. Update progressBar width: "\${(len / MAX_CHARS) * 100}%"
// 5. Add class .warning if len >= 120; add .limit-reached if len === 150
`,
    solutionHTML: `<div class="counter-card">
  <h2>Post Feedback</h2>

  <textarea id="char-textarea" placeholder="Type your review (max 150 characters)..." maxlength="150"></textarea>

  <div id="progress-container"><div id="char-progress-bar"></div></div>

  <div class="counter-row">
    <span id="char-count">0 / 150</span>
    <span id="char-remaining">150 characters left</span>
  </div>
</div>`,
    solutionCSS: `* {
  box-sizing: border-box;
  font-family: 'Segoe UI', system-ui, sans-serif;
}
body {
  margin: 0;
  padding: 24px;
  background: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.counter-card {
  background: #ffffff;
  padding: 28px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 440px;
}
h2 {
  margin-top: 0;
  color: #1e293b;
  font-size: 20px;
}
#char-textarea {
  width: 100%;
  height: 120px;
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 14px;
  resize: vertical;
}
#progress-container {
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
  margin-top: 10px;
  overflow: hidden;
}
#char-progress-bar {
  height: 6px;
  width: 0%;
  background: #10b981;
  border-radius: 3px;
  transition: width 0.15s ease, background 0.15s ease;
}
#char-progress-bar.warning {
  background: #f59e0b;
}
#char-progress-bar.limit-reached {
  background: #ef4444;
}
.counter-row {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 13px;
  color: #64748b;
  font-weight: 600;
}`,
    solutionJS: `const textarea = document.getElementById("char-textarea");
const charCount = document.getElementById("char-count");
const charRemaining = document.getElementById("char-remaining");
const progressBar = document.getElementById("char-progress-bar");

const MAX_CHARS = 150;

function updateCounter() {
  if (!textarea) return;
  const len = textarea.value.length;
  const remaining = Math.max(0, MAX_CHARS - len);

  if (charCount) charCount.textContent = \`\${len} / \${MAX_CHARS}\`;
  if (charRemaining) charRemaining.textContent = \`\${remaining} characters left\`;

  if (progressBar) {
    const pct = Math.min(100, (len / MAX_CHARS) * 100);
    progressBar.style.width = pct + "%";

    progressBar.classList.remove("warning", "limit-reached");
    if (len >= MAX_CHARS) {
      progressBar.classList.add("limit-reached");
    } else if (len >= 120) {
      progressBar.classList.add("warning");
    }
  }
}

if (textarea) {
  textarea.addEventListener("input", updateCounter);
}

updateCounter();`,
    solutionExplanation: `### Solution Breakdown: Char Limit & Progress

1. **HTML Additions**:
   - Added progress bar structure: \`<div id="progress-container"><div id="char-progress-bar"></div></div>\`.
   - Added \`<span id="char-remaining">150 characters left</span>\` in the counter row.

2. **CSS Styling**:
   - Styled \`#char-progress-bar\` with emerald green background (\`#10b981\`), height 6px, and responsive width transitions.
   - Styled \`.warning\` state with amber (\`#f59e0b\`) and \`.limit-reached\` state with rose red (\`#ef4444\`).

3. **JavaScript Logic**:
   - Measures \`textarea.value.length\` in real-time.
   - Updates remaining characters count and progress bar percentage.
   - Adds \`.warning\` class when \`length >= 120\` and \`.limit-reached\` when \`length >= 150\`.`
  }
];

// Combine new questions 1-10 with existing questions 11-20
const foundationQuestions = oldQuestions.map((q, idx) => ({
  ...q,
  id: idx + 11,
  category: q.category || "HTML / CSS / JavaScript",
  solutionExplanation: q.solutionExplanation || ("### Solution Breakdown: " + q.title + "\n\n1. **HTML Additions**: Fulfills all required element additions matching required IDs.\n2. **CSS Styling**: Implements targeted styling rules, colors, and layout properties.\n3. **JavaScript Logic**: Implements core state management, event listeners, and DOM updates.")
}));

const allQuestions = [...newQuestions, ...foundationQuestions];

// Generate JavaScript output file
const code = `// src/data/questions.js
// Auto-generated comprehensive dataset containing 20 assessment questions

export const questions = ${JSON.stringify(allQuestions, null, 2)};
`;

fs.writeFileSync(path.resolve('src/data/questions.js'), code, 'utf8');
console.log('Successfully wrote', allQuestions.length, 'questions to src/data/questions.js!');
