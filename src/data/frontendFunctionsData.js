// src/data/frontendFunctionsData.js
// Complete dataset for Frontend Functions & CSS Properties with Examples

export const frontendCategories = [
  {
    key: 'dom-selection',
    label: '1. DOM Selection Methods',
    color: '#38bdf8',
    bg: 'rgba(56,189,248,0.08)',
    border: 'rgba(56,189,248,0.25)',
    type: 'JAVASCRIPT',
    note: 'Important: getElementById and querySelector return null if no element is found. querySelectorAll returns an empty NodeList (not null).',
    rows: [
      [
        'getElementById()',
        'document.getElementById("btn")',
        'Element with matching ID or null',
        {
          attempt: 'Write JavaScript to select the payment button with id="checkout-btn" and disable it while processing an order.',
          sampleCode: '<button id="checkout-btn" class="btn-primary">\n  Complete Purchase\n</button>',
          code: 'const checkoutBtn = document.getElementById("checkout-btn");\nif (checkoutBtn) {\n  checkoutBtn.disabled = true;\n  checkoutBtn.textContent = "Processing...";\n}',
          output: {
            headers: ['DOM Property', 'Initial Value', 'Updated Value'],
            rows: [
              ['disabled', 'false', 'true'],
              ['textContent', '"Complete Purchase"', '"Processing..."']
            ]
          },
          note: 'ID lookup is the fastest DOM query method. IDs are case-sensitive and must be unique in valid HTML.'
        }
      ],
      [
        'querySelector()',
        'document.querySelector(".box")',
        'First matching Element or null',
        {
          attempt: 'Write JavaScript to find the first active user card in the list and read its data-user-id attribute.',
          sampleCode: '<div class="user-card">Alice (ID: 101)</div>\n<div class="user-card active" data-user-id="102">Bob (ID: 102)</div>\n<div class="user-card active" data-user-id="103">Carol (ID: 103)</div>',
          code: 'const activeUser = document.querySelector(".user-card.active");\nconst userId = activeUser ? activeUser.dataset.userId : null;\nconsole.log("Selected user ID:", userId);',
          output: {
            headers: ['Selector Match', 'Returned Node', 'dataset.userId'],
            rows: [
              ['.user-card.active', '<div class="user-card active"...>', '"102"']
            ]
          },
          note: 'querySelector uses standard CSS selectors (classes, attributes, pseudo-classes). Returns only the first occurrence.'
        }
      ],
      [
        'querySelectorAll()',
        'document.querySelectorAll("p")',
        'Static NodeList of all matching elements',
        {
          attempt: 'Select all navigation links with class "nav-link" and mark external links with a target="_blank" attribute.',
          sampleCode: '<nav>\n  <a href="/home" class="nav-link">Home</a>\n  <a href="https://accenture.com" class="nav-link">Accenture</a>\n</nav>',
          code: 'const navLinks = document.querySelectorAll(".nav-link");\nnavLinks.forEach((link) => {\n  if (link.href.startsWith("http")) {\n    link.setAttribute("target", "_blank");\n  }\n});',
          output: {
            headers: ['Element Link', 'href', 'target Attribute'],
            rows: [
              ['navLinks[0]', '"/home"', 'null (internal)'],
              ['navLinks[1]', '"https://accenture.com"', '"_blank" (external)']
            ]
          },
          note: 'querySelectorAll returns a static (non-live) NodeList that supports .forEach(), but not .map() or .filter() directly unless converted with Array.from().'
        }
      ],
      [
        'getElementsByClassName()',
        'document.getElementsByClassName("item")',
        'Live HTMLCollection of matching elements',
        {
          attempt: 'Select all badges with class "badge" and count how many exist in the live DOM.',
          sampleCode: '<div class="cart">\n  <span class="badge">Sale</span>\n  <span class="badge">New</span>\n</div>',
          code: 'const badges = document.getElementsByClassName("badge");\nconsole.log("Total badges:", badges.length);',
          output: {
            headers: ['Collection Type', 'Items Found', 'Live Updates'],
            rows: [
              ['HTMLCollection', '2', 'Yes (auto-updates when DOM changes)']
            ]
          },
          note: 'Unlike NodeList, an HTMLCollection is LIVE: if elements with that class are added/removed dynamically, the collection immediately reflects the change.'
        }
      ],
      [
        'getElementsByTagName()',
        'document.getElementsByTagName("div")',
        'Live HTMLCollection of matching tags',
        {
          attempt: 'Find all <img> tags inside an article container to ensure each has an alt text description.',
          sampleCode: '<article id="post">\n  <img src="chart.png" alt="Q3 Performance Chart">\n  <img src="banner.png">\n</article>',
          code: 'const article = document.getElementById("post");\nconst images = article.getElementsByTagName("img");\nfor (let img of images) {\n  if (!img.alt) img.alt = "Post illustration";\n}',
          output: {
            headers: ['Image Index', 'Initial alt', 'Updated alt'],
            rows: [
              ['images[0]', '"Q3 Performance Chart"', '"Q3 Performance Chart"'],
              ['images[1]', '"" (missing)', '"Post illustration"']
            ]
          },
          note: 'getElementsByTagName("*") retrieves every single element inside a container, which is useful for recursive DOM tree traversals.'
        }
      ]
    ]
  },
  {
    key: 'html-css-manipulation',
    label: '2. Change HTML and CSS using JavaScript',
    color: '#4ade80',
    bg: 'rgba(74,222,128,0.08)',
    border: 'rgba(74,222,128,0.25)',
    type: 'JAVASCRIPT',
    note: 'Security Rule: Always use textContent for user-entered text. Never assign unsanitized user input into innerHTML to prevent XSS attacks.',
    rows: [
      [
        'textContent',
        'el.textContent = "Hello";',
        'Sets or retrieves plain text content',
        {
          attempt: 'Update the user greeting badge with the username entered into an input box safely without HTML injection.',
          sampleCode: '<h2 id="greeting">Welcome, Guest</h2>',
          code: 'const greeting = document.getElementById("greeting");\nconst username = "<script>alert(1)</script>Abhishek";\n// textContent escapes HTML tags automatically\ngreeting.textContent = `Welcome, ${username}`;',
          output: {
            headers: ['Rendered Text', 'Security Result'],
            rows: [
              ['Welcome, <script>alert(1)</script>Abhishek', 'Safe: Script tags treated as plain text string']
            ]
          },
          note: 'textContent is faster than innerText and innerHTML because it does not trigger layout recalculations or parse HTML tags.'
        }
      ],
      [
        'innerHTML',
        'el.innerHTML = "<b>Hello</b>";',
        'Parses and sets child HTML markup',
        {
          attempt: 'Render a formatted order summary snippet containing strong emphasis tags into an empty container.',
          sampleCode: '<div id="summary-box"></div>',
          code: 'const box = document.getElementById("summary-box");\nbox.innerHTML = `<strong>Order Confirmed:</strong> #<span>8492</span>`;',
          output: {
            headers: ['Target Element', 'New DOM Tree'],
            rows: [
              ['#summary-box', '<strong>Order Confirmed:</strong> #<span>8492</span>']
            ]
          },
          note: 'Assigning to innerHTML destroys and recreates all descendant DOM nodes and their attached event listeners. Use appendChild or createElement for better performance.'
        }
      ],
      [
        'innerText',
        'el.innerText = "Welcome";',
        'Sets or returns rendered visible text',
        {
          attempt: 'Read the visible button text while respecting CSS display:none on hidden elements.',
          sampleCode: '<button id="status-btn">Save <span style="display:none">Draft</span></button>',
          code: 'const btn = document.getElementById("status-btn");\nconsole.log("innerText:", btn.innerText);\nconsole.log("textContent:", btn.textContent.trim());',
          output: {
            headers: ['Property', 'Evaluated Text'],
            rows: [
              ['innerText', '"Save" (skips hidden elements)'],
              ['textContent', '"Save Draft" (includes hidden elements)']
            ]
          },
          note: 'innerText triggers a browser reflow/layout recalculation to determine CSS visibility, making it slower than textContent.'
        }
      ],
      [
        'value',
        'input.value',
        'Gets or sets form control input value',
        {
          attempt: 'Read the celsius temperature input, compute fahrenheit, and clear the input field on reset.',
          sampleCode: '<input id="celsius" type="number" value="25" />',
          code: 'const input = document.getElementById("celsius");\nconst c = parseFloat(input.value);\nconst f = (c * 9) / 5 + 32;\nconsole.log(`${c}°C = ${f}°F`);\ninput.value = ""; // Clear input',
          output: {
            headers: ['Input Field', 'Computed Result', 'After Reset'],
            rows: [
              ['#celsius', '25°C = 77°F', 'value = "" (empty)']
            ]
          },
          note: 'Input values are always strings. Remember to use parseInt() or parseFloat() when doing numerical math.'
        }
      ],
      [
        'style',
        'el.style.color = "red";',
        'Applies inline CSS directly to element',
        {
          attempt: 'Dynamically update the width of a progress bar element based on task completion percentage.',
          sampleCode: '<div class="progress-bar" style="width: 0%;"></div>',
          code: 'const bar = document.querySelector(".progress-bar");\nconst percent = 75;\nbar.style.width = `${percent}%`;\nbar.style.backgroundColor = "#10b981";',
          output: {
            headers: ['Element', 'Inline Style Attribute'],
            rows: [
              ['.progress-bar', 'style="width: 75%; background-color: rgb(16, 185, 129);"']
            ]
          },
          note: 'el.style only reads INLINE styles. To read styles computed from external CSS stylesheets, use window.getComputedStyle(el).'
        }
      ],
      [
        'classList.add()',
        'el.classList.add("active");',
        'Adds one or more CSS class tokens',
        {
          attempt: 'Highlight the active navigation tab when clicked by adding the "active" class.',
          sampleCode: '<button id="tab-inbox" class="tab-btn">Inbox</button>',
          code: 'const tab = document.getElementById("tab-inbox");\ntab.classList.add("active", "selected");',
          output: {
            headers: ['Initial class', 'classList.add Method', 'Final class'],
            rows: [
              ['"tab-btn"', 'add("active", "selected")', '"tab-btn active selected"']
            ]
          },
          note: 'classList.add() silently ignores classes that already exist on the element without creating duplicate class names.'
        }
      ],
      [
        'classList.remove()',
        'el.classList.remove("active");',
        'Removes one or more CSS class tokens',
        {
          attempt: 'Remove the "loading" spinner class from a button once an API request finishes.',
          sampleCode: '<button id="submit-btn" class="btn loading">Submit</button>',
          code: 'const btn = document.getElementById("submit-btn");\nbtn.classList.remove("loading");',
          output: {
            headers: ['Initial class', 'Action', 'Final class'],
            rows: [
              ['"btn loading"', 'remove("loading")', '"btn"']
            ]
          },
          note: 'classList.remove() will not throw an error if the specified class does not exist on the element.'
        }
      ],
      [
        'classList.toggle()',
        'el.classList.toggle("active");',
        'Toggles presence of class (adds if missing, removes if present)',
        {
          attempt: 'Toggle dark mode on the root container and check whether dark mode is currently active.',
          sampleCode: '<div id="container" class="app-theme"></div>',
          code: 'const container = document.getElementById("container");\nconst isDark = container.classList.toggle("dark-theme");\nconsole.log("Is dark theme active?", isDark);',
          output: {
            headers: ['Call #', 'classList.toggle Return', 'Container Classes'],
            rows: [
              ['1st click', 'true', '"app-theme dark-theme"'],
              ['2nd click', 'false', '"app-theme"']
            ]
          },
          note: 'classList.toggle returns a boolean: true if the class was added, false if it was removed.'
        }
      ],
      [
        'classList.contains()',
        'el.classList.contains("active");',
        'Returns boolean indicating if class exists',
        {
          attempt: 'Check if an accordion panel is already expanded before triggering an animation.',
          sampleCode: '<div id="panel-1" class="accordion-panel active">Content</div>',
          code: 'const panel = document.getElementById("panel-1");\nif (panel.classList.contains("active")) {\n  console.log("Panel is currently expanded");\n}',
          output: {
            headers: ['Element', 'Query', 'Return Value'],
            rows: [
              ['#panel-1', 'classList.contains("active")', 'true']
            ]
          },
          note: 'classList.contains() is an O(1) constant-time check and is cleaner than regex-matching el.className.'
        }
      ],
      [
        'setAttribute()',
        'el.setAttribute("disabled", "");',
        'Sets attribute value on element',
        {
          attempt: 'Set accessibility attribute aria-expanded="true" on an open dropdown menu button.',
          sampleCode: '<button id="menu-btn" aria-expanded="false">Menu</button>',
          code: 'const menuBtn = document.getElementById("menu-btn");\nmenuBtn.setAttribute("aria-expanded", "true");\nmenuBtn.setAttribute("data-state", "open");',
          output: {
            headers: ['Attribute', 'Old Value', 'New Value'],
            rows: [
              ['aria-expanded', '"false"', '"true"'],
              ['data-state', 'undefined', '"open"']
            ]
          },
          note: 'setAttribute works for standard HTML attributes, ARIA accessibility attributes, and custom data-* attributes.'
        }
      ],
      [
        'getAttribute()',
        'el.getAttribute("type")',
        'Reads value of specified attribute',
        {
          attempt: 'Inspect the password input type and toggle between "password" and "text" to implement Show/Hide password.',
          sampleCode: '<input id="pwd" type="password" />',
          code: 'const pwd = document.getElementById("pwd");\nconst currentType = pwd.getAttribute("type");\npwd.setAttribute("type", currentType === "password" ? "text" : "password");',
          output: {
            headers: ['Action', 'getAttribute("type")', 'Visibility'],
            rows: [
              ['Initial', '"password"', 'Hidden (•••)'],
              ['Toggled', '"text"', 'Visible text']
            ]
          },
          note: 'getAttribute() returns the exact string attribute from HTML source, or null if the attribute is not set.'
        }
      ],
      [
        'removeAttribute()',
        'el.removeAttribute("disabled");',
        'Removes attribute completely from element',
        {
          attempt: 'Re-enable a submit button once form validation passes.',
          sampleCode: '<button id="btn" disabled>Submit</button>',
          code: 'const btn = document.getElementById("btn");\nbtn.removeAttribute("disabled");',
          output: {
            headers: ['Target', 'Attribute Action', 'Result'],
            rows: [
              ['#btn', 'removeAttribute("disabled")', 'Button becomes clickable']
            ]
          },
          note: 'For boolean attributes like disabled, required, and readonly, removing the attribute is the cleanest way to unset them.'
        }
      ]
    ]
  },
  {
    key: 'element-mutation',
    label: '3. Create, Add and Remove Elements',
    color: '#fb923c',
    bg: 'rgba(251,146,60,0.08)',
    border: 'rgba(251,146,60,0.25)',
    type: 'JAVASCRIPT',
    note: 'The 4 positions for insertAdjacentHTML() are: beforebegin (before target), afterbegin (first child), beforeend (last child), afterend (after target).',
    rows: [
      [
        'createElement()',
        'document.createElement("div")',
        'Instantiates a new Element node in memory',
        {
          attempt: 'Create a new list item <li> for a To-Do list application, set its text, and prepare it for insertion.',
          sampleCode: '<ul id="todo-list"></ul>',
          code: 'const li = document.createElement("li");\nli.className = "todo-item";\nli.textContent = "Prepare Accenture Assessment";\nconsole.log(li);',
          output: {
            headers: ['Created Node', 'Class', 'Text Content'],
            rows: [
              ['<li>', '"todo-item"', '"Prepare Accenture Assessment"']
            ]
          },
          note: 'createElement creates the node in memory. It is not attached to the visible document until appended with appendChild or append.'
        }
      ],
      [
        'appendChild()',
        'parent.appendChild(child)',
        'Appends node as the last child of parent',
        {
          attempt: 'Append a newly created comment card to the end of a comment thread container.',
          sampleCode: '<div id="comments">\n  <p>First comment</p>\n</div>',
          code: 'const comments = document.getElementById("comments");\nconst newP = document.createElement("p");\nnewP.textContent = "Second comment";\ncomments.appendChild(newP);',
          output: {
            headers: ['Parent Container', 'Child Added', 'Total Children'],
            rows: [
              ['#comments', '<p>Second comment</p>', '2 elements']
            ]
          },
          note: 'appendChild only accepts Node objects (not plain strings). To append raw text strings, use parent.append().'
        }
      ],
      [
        'append()',
        'parent.append(child1, "Text")',
        'Appends multiple nodes and text strings',
        {
          attempt: 'Append both an icon element and a text string into a notification toast.',
          sampleCode: '<div id="toast"></div>',
          code: 'const toast = document.getElementById("toast");\nconst icon = document.createElement("span");\nicon.textContent = "✅ ";\ntoast.append(icon, "Action completed successfully!");',
          output: {
            headers: ['Target', 'Arguments Passed', 'Rendered Output'],
            rows: [
              ['#toast', 'Node + String', '✅ Action completed successfully!']
            ]
          },
          note: 'append() can take multiple arguments and converts strings into Text nodes automatically.'
        }
      ],
      [
        'prepend()',
        'parent.prepend(child)',
        'Inserts node as first child before all others',
        {
          attempt: 'Prepend a newly received chat message to the top of an announcement feed.',
          sampleCode: '<ul id="feed">\n  <li>Yesterday update</li>\n</ul>',
          code: 'const feed = document.getElementById("feed");\nconst breakingNews = document.createElement("li");\nbreakingNews.textContent = "🔴 Urgent: Server reboot";\nfeed.prepend(breakingNews);',
          output: {
            headers: ['First Child (index 0)', 'Second Child (index 1)'],
            rows: [
              ['"🔴 Urgent: Server reboot"', '"Yesterday update"']
            ]
          },
          note: 'prepend() inserts before the first existing child node, making it ideal for reverse-chronological feeds.'
        }
      ],
      [
        'remove()',
        'el.remove()',
        'Removes element directly from its parent DOM',
        {
          attempt: 'Remove a notification card from the screen when the user clicks its close button.',
          sampleCode: '<div id="banner">\n  <span>Maintenance Tonight</span>\n  <button id="close-banner">X</button>\n</div>',
          code: 'const banner = document.getElementById("banner");\nconst closeBtn = document.getElementById("close-banner");\ncloseBtn.addEventListener("click", () => {\n  banner.remove(); // Direct removal\n});',
          output: {
            headers: ['DOM State Before', 'DOM State After'],
            rows: [
              ['#banner exists in body', '#banner is completely detached']
            ]
          },
          note: 'el.remove() is modern and clean. In older browsers you had to write el.parentNode.removeChild(el).'
        }
      ],
      [
        'replaceWith()',
        'oldEl.replaceWith(newEl)',
        'Replaces element with new nodes or text',
        {
          attempt: 'Replace a "Loading..." placeholder skeleton with the final loaded user profile card.',
          sampleCode: '<div id="skeleton">Loading Profile...</div>',
          code: 'const skeleton = document.getElementById("skeleton");\nconst profileCard = document.createElement("div");\nprofileCard.className = "profile-card";\nprofileCard.textContent = "Welcome, Alice!";\nskeleton.replaceWith(profileCard);',
          output: {
            headers: ['Original Node', 'Replaced With'],
            rows: [
              ['#skeleton', '<div class="profile-card">Welcome, Alice!</div>']
            ]
          },
          note: 'replaceWith() swaps the element in-place, preserving its exact position in the parent hierarchy.'
        }
      ],
      [
        'insertAdjacentHTML()',
        'el.insertAdjacentHTML("beforeend", html)',
        'Parses HTML string and inserts at relative position',
        {
          attempt: 'Insert a new table row at the end of a table body using insertAdjacentHTML.',
          sampleCode: '<tbody id="rows">\n  <tr><td>Alice</td></tr>\n</tbody>',
          code: 'const tbody = document.getElementById("rows");\ntbody.insertAdjacentHTML("beforeend", "<tr><td>Bob</td></tr>");',
          output: {
            headers: ['Position Keyword', 'Insertion Location'],
            rows: [
              ['"beforebegin"', 'Before target element itself'],
              ['"afterbegin"', 'Inside target, before first child'],
              ['"beforeend"', 'Inside target, after last child'],
              ['"afterend"', 'After target element itself']
            ]
          },
          note: 'Much faster than innerHTML += because it does not reparse existing children or disrupt existing event listeners.'
        }
      ],
      [
        'cloneNode()',
        'el.cloneNode(true)',
        'Duplicates an existing node (true = deep clone)',
        {
          attempt: 'Clone a reusable template card, modify its contents, and append it into a gallery.',
          sampleCode: '<div id="template-card" class="card">\n  <h4>Title</h4><p>Description</p>\n</div>',
          code: 'const template = document.getElementById("template-card");\nconst clone = template.cloneNode(true); // deep clone\nclone.id = "card-2";\nclone.querySelector("h4").textContent = "Project Alpha";\ndocument.body.appendChild(clone);',
          output: {
            headers: ['Clone Type', 'Children Copied', 'ID Changed'],
            rows: [
              ['Deep (true)', 'h4, p copied with all descendants', 'id="card-2"']
            ]
          },
          note: 'cloneNode(true) copies attributes and inline listeners, but does NOT copy event listeners added via addEventListener().'
        }
      ]
    ]
  },
  {
    key: 'events-handling',
    label: '4. Events and Event Handling',
    color: '#c084fc',
    bg: 'rgba(192,132,252,0.08)',
    border: 'rgba(192,132,252,0.25)',
    type: 'JAVASCRIPT',
    note: 'Event Delegation Tip: Attach a single listener to a parent container and inspect event.target to handle dynamic children efficiently.',
    rows: [
      [
        'addEventListener()',
        'btn.addEventListener("click", fn)',
        'Attaches an event handler function to element',
        {
          attempt: 'Attach a click event listener to an increment button that updates a counter state variable.',
          sampleCode: '<button id="increment-btn">+</button>\n<span id="counter">0</span>',
          code: 'let count = 0;\nconst btn = document.getElementById("increment-btn");\nconst display = document.getElementById("counter");\n\nbtn.addEventListener("click", () => {\n  count++;\n  display.textContent = count;\n});',
          output: {
            headers: ['Event', 'Handler Action', 'DOM Update'],
            rows: [
              ['"click"', 'count++', 'counter.textContent updated']
            ]
          },
          note: 'Allows multiple independent event listeners on the same element without overwriting existing handlers.'
        }
      ],
      [
        'removeEventListener()',
        'btn.removeEventListener("click", fn)',
        'Detaches a previously registered handler',
        {
          attempt: 'Disable button click handling once the user has clicked once to prevent duplicate submissions.',
          sampleCode: '<button id="submit">Vote</button>',
          code: 'const btn = document.getElementById("submit");\nfunction handleVote() {\n  console.log("Vote recorded!");\n  btn.removeEventListener("click", handleVote);\n}\nbtn.addEventListener("click", handleVote);',
          output: {
            headers: ['1st Click', '2nd Click'],
            rows: [
              ['"Vote recorded!" logged', 'Nothing happens (handler removed)']
            ]
          },
          note: 'The handler passed to removeEventListener MUST be the exact same function reference (anonymous arrow functions cannot be removed).'
        }
      ],
      [
        'click',
        'btn.addEventListener("click", handler)',
        'Fires on mouse click or keyboard Enter/Space on buttons',
        {
          attempt: 'Listen for button clicks on an accordion header to expand or collapse child content.',
          sampleCode: '<button id="acc-header">Toggle Details</button>',
          code: 'const btn = document.getElementById("acc-header");\nbtn.addEventListener("click", (e) => {\n  console.log("Button clicked at x:", e.clientX);\n});',
          output: {
            headers: ['Event Type', 'Trigger', 'Pointer Coordinates'],
            rows: [
              ['click', 'Left mouse click or Enter key', 'e.clientX, e.clientY']
            ]
          },
          note: 'Buttons trigger click events on both mouse clicks and keyboard Space/Enter for accessibility.'
        }
      ],
      [
        'input',
        'input.addEventListener("input", handler)',
        'Fires synchronously whenever input value changes',
        {
          attempt: 'Implement a real-time character counter that updates as the user types.',
          sampleCode: '<input id="text-input" />\n<span id="char-count">0</span>',
          code: 'const input = document.getElementById("text-input");\nconst count = document.getElementById("char-count");\ninput.addEventListener("input", () => {\n  count.textContent = input.value.length;\n});',
          output: {
            headers: ['User Types', 'Event Trigger', 'Count Output'],
            rows: [
              ['"Accenture"', 'Fires on every keystroke', '9']
            ]
          },
          note: 'input fires immediately on every keystroke, backspace, paste, and cut — ideal for search filtering and character counts.'
        }
      ],
      [
        'change',
        'select.addEventListener("change", handler)',
        'Fires when value is committed (blur or option chosen)',
        {
          attempt: 'Filter questions when the user selects a category from a <select> dropdown.',
          sampleCode: '<select id="role-select">\n  <option value="all">All Roles</option>\n  <option value="ase">Associate Software Engineer</option>\n</select>',
          code: 'const select = document.getElementById("role-select");\nselect.addEventListener("change", (e) => {\n  console.log("Selected role:", e.target.value);\n});',
          output: {
            headers: ['Trigger Condition', 'Selected Value'],
            rows: [
              ['Option selected and closed', '"ase"']
            ]
          },
          note: 'For text inputs, change only fires after the input loses focus (blur). For real-time updates while typing, use input.'
        }
      ],
      [
        'submit',
        'form.addEventListener("submit", handler)',
        'Fires when a form is submitted',
        {
          attempt: 'Intercept a form submission, prevent page reload, and display a validation error if passwords do not match.',
          sampleCode: '<form id="auth-form">\n  <input type="password" id="p1" />\n  <button type="submit">Register</button>\n</form>',
          code: 'const form = document.getElementById("auth-form");\nform.addEventListener("submit", (e) => {\n  e.preventDefault();\n  console.log("Validating credentials without reload");\n});',
          output: {
            headers: ['Form Submission', 'Page Reload', 'JavaScript Status'],
            rows: [
              ['Triggered by button/Enter', 'Stopped by e.preventDefault()', 'Processed']
            ]
          },
          note: 'Always attach submit listeners to the <form> element, NOT the submit button, to handle both clicks and Enter key submissions.'
        }
      ],
      [
        'keydown / keyup',
        'input.addEventListener("keydown", handler)',
        'Fires when key is depressed / released',
        {
          attempt: 'Send a chat message when the user presses the "Enter" key inside a chat input box.',
          sampleCode: '<input id="chat-msg" placeholder="Type a message..." />',
          code: 'const input = document.getElementById("chat-msg");\ninput.addEventListener("keydown", (e) => {\n  if (e.key === "Enter") {\n    console.log("Sending:", input.value);\n    input.value = "";\n  }\n});',
          output: {
            headers: ['Key Pressed', 'e.key', 'Action'],
            rows: [
              ['Enter', '"Enter"', 'Message sent and input cleared']
            ]
          },
          note: 'Use modern e.key (e.g. "Enter", "Escape", "ArrowUp") rather than the deprecated e.keyCode.'
        }
      ],
      [
        'mouseover / mouseout',
        'el.addEventListener("mouseover", handler)',
        'Fires when cursor enters / leaves element',
        {
          attempt: 'Display a custom tooltip popover when hovering over an info badge.',
          sampleCode: '<span id="info-icon">ℹ️</span>\n<div id="tooltip" style="display:none">More info</div>',
          code: 'const icon = document.getElementById("info-icon");\nconst tip = document.getElementById("tooltip");\nicon.addEventListener("mouseover", () => tip.style.display = "block");\nicon.addEventListener("mouseout", () => tip.style.display = "none");',
          output: {
            headers: ['Mouse State', 'Tooltip Display'],
            rows: [
              ['Hover over', '"block" (visible)'],
              ['Hover away', '"none" (hidden)']
            ]
          },
          note: 'For element-only hover without bubble noise from child elements, prefer mouseenter and mouseleave.'
        }
      ],
      [
        'focus / blur',
        'input.addEventListener("focus", handler)',
        'Fires when element gains / loses focus',
        {
          attempt: 'Highlight an input wrapper with a glowing border when focused and validate upon blur.',
          sampleCode: '<input id="email" placeholder="name@accenture.com" />',
          code: 'const email = document.getElementById("email");\nemail.addEventListener("focus", () => email.style.borderColor = "#6366f1");\nemail.addEventListener("blur", () => {\n  email.style.borderColor = email.value.includes("@") ? "#10b981" : "#ef4444";\n});',
          output: {
            headers: ['Focus State', 'Border Color Result'],
            rows: [
              ['focus', '#6366f1 (active purple glow)'],
              ['blur (valid email)', '#10b981 (green check)'],
              ['blur (invalid email)', '#ef4444 (red alert)']
            ]
          },
          note: 'focus and blur do NOT bubble up the DOM tree. Use focusin and focusout if you need event delegation on a parent.'
        }
      ],
      [
        'preventDefault()',
        'e.preventDefault()',
        'Cancels browser default behavior for event',
        {
          attempt: 'Prevent a standard hyperlink from navigating to a new URL and handle navigation via SPA routing instead.',
          sampleCode: '<a id="route-link" href="/dashboard">Go to Dashboard</a>',
          code: 'const link = document.getElementById("route-link");\nlink.addEventListener("click", (e) => {\n  e.preventDefault();\n  console.log("Navigating via React Router without page refresh");\n});',
          output: {
            headers: ['Default Action', 'Intercepted By', 'Result'],
            rows: [
              ['Browser page navigation', 'e.preventDefault()', 'Single Page App smooth transition']
            ]
          },
          note: 'Can also be used on checkbox click events or contextmenu (right-click) events to customize behavior.'
        }
      ],
      [
        'stopPropagation()',
        'e.stopPropagation()',
        'Stops event from bubbling up DOM hierarchy',
        {
          attempt: 'Prevent a modal backdrop close click handler from firing when the user clicks inside the modal card.',
          sampleCode: '<div id="backdrop">\n  <div id="modal-card">Modal Content</div>\n</div>',
          code: 'const backdrop = document.getElementById("backdrop");\nconst modal = document.getElementById("modal-card");\n\nbackdrop.addEventListener("click", () => console.log("Backdrop closed"));\nmodal.addEventListener("click", (e) => {\n  e.stopPropagation(); // Stops click from reaching backdrop\n});',
          output: {
            headers: ['Click Target', 'Backdrop Listener Fired?'],
            rows: [
              ['Backdrop area', 'Yes (closes modal)'],
              ['Modal Card area', 'No (stopped by e.stopPropagation)']
            ]
          },
          note: 'Prevents parent container handlers from executing when interacting with nested controls.'
        }
      ],
      [
        'event.target vs currentTarget',
        'const el = e.target;',
        'target = where event occurred; currentTarget = element listening',
        {
          attempt: 'Use event delegation on a <ul> to detect which specific <li> button was clicked.',
          sampleCode: '<ul id="btn-group">\n  <li><button data-id="1">Action 1</button></li>\n  <li><button data-id="2">Action 2</button></li>\n</ul>',
          code: 'const list = document.getElementById("btn-group");\nlist.addEventListener("click", (e) => {\n  console.log("e.target (clicked):", e.target.tagName);\n  console.log("e.currentTarget (listening):", e.currentTarget.id);\n});',
          output: {
            headers: ['Property', 'Value'],
            rows: [
              ['e.target', '<button data-id="1"> (deepest clicked element)'],
              ['e.currentTarget', '<ul id="btn-group"> (element with addEventListener)']
            ]
          },
          note: 'In event delegation, e.target is the element actually clicked; e.currentTarget is the parent element where the listener was attached.'
        }
      ]
    ]
  },
  {
    key: 'array-string',
    label: '5. Essential Array and String Methods',
    color: '#fbbf24',
    bg: 'rgba(251,191,36,0.08)',
    border: 'rgba(251,191,36,0.25)',
    type: 'JAVASCRIPT',
    note: 'Remember: map, filter, and slice return a NEW array without mutating original data. push, pop, and splice MUTATE the original array.',
    rows: [
      [
        'forEach()',
        'arr.forEach(item => ...)',
        'Executes callback once per array element',
        {
          attempt: 'Iterate over all products and render each title to console.',
          sampleCode: 'const products = ["Laptop", "Keyboard", "Mouse"];',
          code: 'products.forEach((item, index) => {\n  console.log(`${index + 1}. ${item}`);\n});',
          output: {
            headers: ['Index', 'Item'],
            rows: [
              ['1', 'Laptop'],
              ['2', 'Keyboard'],
              ['3', 'Mouse']
            ]
          },
          note: 'forEach returns undefined and cannot be broken out of with break. Use a for...of loop if you need early exit.'
        }
      ],
      [
        'map()',
        'arr.map(x => x * 2)',
        'Returns new array with transformed elements',
        {
          attempt: 'Extract all employee salaries and calculate a 10% bonus for each.',
          sampleCode: 'const salaries = [50000, 60000, 75000];',
          code: 'const bonuses = salaries.map(s => s * 0.10);\nconsole.log(bonuses);',
          output: {
            headers: ['Original Salary', '10% Bonus'],
            rows: [
              ['50000', '5000'],
              ['60000', '6000'],
              ['75000', '7500']
            ]
          },
          note: 'map() always produces an array of identical length. Ideal for transforming data models into UI components in React.'
        }
      ],
      [
        'filter()',
        'arr.filter(x => x.active)',
        'Returns new array containing elements that pass condition',
        {
          attempt: 'Filter a list of assessment questions to return only "Easy" difficulty challenges.',
          sampleCode: 'const qs = [{id:1, diff:"Easy"}, {id:2, diff:"Hard"}, {id:3, diff:"Easy"}];',
          code: 'const easyQuestions = qs.filter(q => q.diff === "Easy");\nconsole.log(easyQuestions);',
          output: {
            headers: ['Matching Question IDs', 'Count'],
            rows: [
              ['[1, 3]', '2 elements']
            ]
          },
          note: 'If no elements pass the test, filter() returns an empty array [] without throwing errors.'
        }
      ],
      [
        'find()',
        'arr.find(u => u.id === id)',
        'Returns first matching element (or undefined)',
        {
          attempt: 'Locate a specific user object by ID from a users list.',
          sampleCode: 'const users = [{id: 10, name:"Alice"}, {id: 20, name:"Bob"}];',
          code: 'const user = users.find(u => u.id === 20);\nconsole.log(user.name);',
          output: {
            headers: ['Search ID', 'Found Record', 'Name'],
            rows: [
              ['20', '{ id: 20, name: "Bob" }', '"Bob"']
            ]
          },
          note: 'Stops iterating as soon as the first matching item is found, making it faster than filter() for unique ID lookups.'
        }
      ],
      [
        'some() / every()',
        'arr.some(u => u.isAdmin)',
        'some = true if at least one matches; every = true if all match',
        {
          attempt: 'Check if any score is failing (< 40) across an exam round.',
          sampleCode: 'const scores = [85, 92, 38, 76];',
          code: 'const hasFailures = scores.some(s => s < 40);\nconst allPassed = scores.every(s => s >= 40);\nconsole.log("Has failure?", hasFailures);\nconsole.log("All passed?", allPassed);',
          output: {
            headers: ['Function', 'Result'],
            rows: [
              ['scores.some(s => s < 40)', 'true (38 is < 40)'],
              ['scores.every(s => s >= 40)', 'false']
            ]
          },
          note: 'Both methods short-circuit early as soon as the outcome is guaranteed.'
        }
      ],
      [
        'includes()',
        'arr.includes("target")',
        'Checks if value exists in array or string',
        {
          attempt: 'Verify if a required permission exists inside an array of granted roles.',
          sampleCode: 'const roles = ["USER", "EDITOR", "ADMIN"];',
          code: 'const canEdit = roles.includes("EDITOR");\nconsole.log("Can edit?", canEdit);',
          output: {
            headers: ['Searched Value', 'Result'],
            rows: [
              ['"EDITOR"', 'true'],
              ['"SUPERADMIN"', 'false']
            ]
          },
          note: 'Uses strict equality (===) comparison. Works cleanly on primitive values (strings, numbers).'
        }
      ],
      [
        'push() / pop()',
        'arr.push("item"); arr.pop();',
        'push = adds to end; pop = removes & returns last item',
        {
          attempt: 'Implement an undo stack by pushing actions and popping on undo.',
          sampleCode: 'const history = ["state1", "state2"];',
          code: 'history.push("state3");\nconst last = history.pop(); // returns "state3"',
          output: {
            headers: ['Action', 'Popped Element', 'Remaining Array'],
            rows: [
              ['pop()', '"state3"', '["state1", "state2"]']
            ]
          },
          note: 'Operates in O(1) constant time, making arrays effective LIFO (last-in, first-out) stacks.'
        }
      ],
      [
        'slice()',
        'arr.slice(start, end)',
        'Extracts shallow copy of portion without modifying original',
        {
          attempt: 'Extract the first 3 items from a leaderboard for top 3 podium display.',
          sampleCode: 'const players = ["Alice", "Bob", "Carol", "Dave", "Eve"];',
          code: 'const top3 = players.slice(0, 3);\nconsole.log(top3);',
          output: {
            headers: ['Original Length', 'Extracted Portion', 'Original Modified?'],
            rows: [
              ['5 players', '["Alice", "Bob", "Carol"]', 'No (original untouched)']
            ]
          },
          note: 'arr.slice() with no arguments is an easy way to create a shallow copy of an array.'
        }
      ],
      [
        'splice()',
        'arr.splice(start, count, ...items)',
        'Modifies array in-place by removing or inserting elements',
        {
          attempt: 'Remove 1 item at index 1 and insert a replacement.',
          sampleCode: 'const items = ["A", "B", "C"];',
          code: 'const removed = items.splice(1, 1, "NEW_B");\nconsole.log("Updated:", items);\nconsole.log("Removed:", removed);',
          output: {
            headers: ['Modified Array', 'Removed Item'],
            rows: [
              ['["A", "NEW_B", "C"]', '["B"]']
            ]
          },
          note: 'Unlike slice(), splice() MUTATES the original array and returns the removed elements.'
        }
      ],
      [
        'trim()',
        'str.trim()',
        'Strips whitespace from both ends of string',
        {
          attempt: 'Sanitize user form input before validation to ignore leading or trailing spaces.',
          sampleCode: 'const rawInput = "   Alice Smith   ";',
          code: 'const clean = rawInput.trim();\nconsole.log(`"${clean}"`);',
          output: {
            headers: ['Original String', 'Trimmed String'],
            rows: [
              ['"   Alice Smith   "', '"Alice Smith"']
            ]
          },
          note: 'Essential when validating empty inputs: if (!input.value.trim()) alert("Field required").'
        }
      ],
      [
        'split() / join()',
        'str.split(","); arr.join(", ")',
        'split converts string to array; join combines array into string',
        {
          attempt: 'Split a comma-separated tags string into an array, clean each, and join back with hashtags.',
          sampleCode: 'const tagStr = "react, javascript, css";',
          code: 'const tags = tagStr.split(",").map(t => `#${t.trim()}`);\nconst result = tags.join(" ");\nconsole.log(result);',
          output: {
            headers: ['Input', 'Processed Output'],
            rows: [
              ['"react, javascript, css"', '"#react #javascript #css"']
            ]
          },
          note: 'str.split("") splits into individual characters; arr.join("") concatenates characters back into a string.'
        }
      ],
      [
        'toLowerCase() / toUpperCase()',
        'str.toLowerCase()',
        'Converts string to lowercase / uppercase',
        {
          attempt: 'Perform case-insensitive search matching between user query and item title.',
          sampleCode: 'const title = "Frontend Engineering";\nconst query = "FRONTEND";',
          code: 'const isMatch = title.toLowerCase().includes(query.toLowerCase());\nconsole.log("Matches?", isMatch);',
          output: {
            headers: ['title.toLowerCase()', 'query.toLowerCase()', 'Match Result'],
            rows: [
              ['"frontend engineering"', '"frontend"', 'true']
            ]
          },
          note: 'Does not modify the original string because JavaScript strings are immutable.'
        }
      ],
      [
        'startsWith() / endsWith()',
        'str.startsWith("https://")',
        'Checks if string begins / terminates with substring',
        {
          attempt: 'Check if a URL is secure (starts with https://) and has a .pdf extension.',
          sampleCode: 'const url = "https://accenture.com/doc.pdf";',
          code: 'const isSecure = url.startsWith("https://");\nconst isPdf = url.endsWith(".pdf");\nconsole.log({ isSecure, isPdf });',
          output: {
            headers: ['Condition', 'Evaluation'],
            rows: [
              ['startsWith("https://")', 'true'],
              ['endsWith(".pdf")', 'true']
            ]
          },
          note: 'Much faster and more readable than using regular expressions or indexOf === 0.'
        }
      ]
    ]
  },
  {
    key: 'css-layout',
    label: '6. CSS Layout and Positioning',
    color: '#22d3ee',
    bg: 'rgba(34,211,238,0.08)',
    border: 'rgba(34,211,238,0.25)',
    type: 'CSS',
    note: 'Positioning rule: An element with position: absolute is positioned relative to its closest ancestor with position other than static (usually relative).',
    rows: [
      [
        'display',
        'display: flex; /* block, inline, grid, none */',
        'Defines element layout rendering behavior',
        {
          attempt: 'Hide an element completely from the document flow and screen readers.',
          sampleCode: '<div class="alert-box" style="display: none;">Notice</div>',
          code: '.alert-box {\n  display: none; /* Removed from visual and accessibility tree */\n}\n.alert-box.visible {\n  display: block; /* Restored to flow */\n}',
          output: {
            headers: ['Value', 'Visual Space Occupied', 'Accessible to Screen Readers'],
            rows: [
              ['none', 'Zero space (completely unrendered)', 'No'],
              ['block', 'Full container width', 'Yes']
            ]
          },
          note: 'display: none removes the element from document flow entirely. To hide visually while preserving space, use visibility: hidden.'
        }
      ],
      [
        'position',
        'position: relative; /* static, absolute, fixed, sticky */',
        'Determines coordinate positioning context',
        {
          attempt: 'Position a notification badge in the top-right corner of an avatar icon.',
          sampleCode: '<div class="avatar-wrapper">\n  <img src="avatar.png">\n  <span class="badge">3</span>\n</div>',
          code: '.avatar-wrapper {\n  position: relative;\n}\n.badge {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n}',
          output: {
            headers: ['Wrapper Position', 'Badge Position', 'Coordinates'],
            rows: [
              ['relative (anchor)', 'absolute', 'top: -4px, right: -4px']
            ]
          },
          note: 'Without position: relative on the parent, absolute positioning calculates relative to the <html> document.'
        }
      ],
      [
        'top, right, bottom, left',
        'top: 0; right: 16px;',
        'Offset distances from edge of containing block',
        {
          attempt: 'Pin a modal overlay dialog exactly in the center of the viewport.',
          sampleCode: '<div class="modal-card">Popup</div>',
          code: '.modal-card {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}',
          output: {
            headers: ['Offset', 'Transform Adjustment', 'Final Alignment'],
            rows: [
              ['top: 50%, left: 50%', 'translate(-50%, -50%)', 'Perfect horizontal & vertical center']
            ]
          },
          note: 'Top/left/bottom/right have no effect unless position is set to relative, absolute, fixed, or sticky.'
        }
      ],
      [
        'z-index',
        'z-index: 100;',
        'Controls stacking order along the z-axis',
        {
          attempt: 'Ensure a sticky navigation header always sits on top of all page content.',
          sampleCode: '<header class="site-header"></header>',
          code: '.site-header {\n  position: sticky;\n  top: 0;\n  z-index: 999; /* Stacks above normal content */\n}',
          output: {
            headers: ['Element', 'z-index Value', 'Stack Level'],
            rows: [
              ['Normal Content', 'auto (0)', 'Background layer'],
              ['.site-header', '999', 'Foreground sticky layer']
            ]
          },
          note: 'z-index only applies to positioned elements (position other than static) or flex/grid child items.'
        }
      ],
      [
        'overflow',
        'overflow: hidden; /* auto, scroll, visible */',
        'Handles content that exceeds element boundaries',
        {
          attempt: 'Create a scrollable test results container with a fixed height.',
          sampleCode: '<div class="test-logs">Lots of log output...</div>',
          code: '.test-logs {\n  max-height: 240px;\n  overflow-y: auto; /* Shows scrollbar only when needed */\n  overflow-x: hidden; /* Clips horizontal overflow */\n}',
          output: {
            headers: ['overflow-y Value', 'Behavior'],
            rows: [
              ['auto', 'Scrolls vertically only when content exceeds 240px'],
              ['hidden', 'Clips overflowing content without scrollbar']
            ]
          },
          note: 'overflow: hidden also establishes a block formatting context and prevents margin collapsing.'
        }
      ],
      [
        'box-sizing',
        'box-sizing: border-box;',
        'Defines how total width and height are calculated',
        {
          attempt: 'Prevent padding and borders from expanding an input beyond 100% width.',
          sampleCode: '<input class="full-input" />',
          code: '* {\n  box-sizing: border-box; /* Width includes padding and border */\n}\n.full-input {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid #ccc;\n}',
          output: {
            headers: ['box-sizing Value', 'Total Width Calculation'],
            rows: [
              ['content-box (default)', '100% + 32px padding + 4px border (overflows!)'],
              ['border-box (recommended)', 'Exactly 100% (padding is inside width)']
            ]
          },
          note: 'Always reset * { box-sizing: border-box; } at the top of your CSS in every frontend assessment challenge.'
        }
      ]
    ]
  },
  {
    key: 'css-flexbox',
    label: '7. CSS Flexbox Layout',
    color: '#f472b6',
    bg: 'rgba(244,114,182,0.08)',
    border: 'rgba(244,114,182,0.25)',
    type: 'CSS',
    note: 'Flexbox distributes items along 1 dimension (main axis vs cross axis). Use gap instead of margin for clean gutters.',
    rows: [
      [
        'display: flex',
        'display: flex;',
        'Turns element into a 1D flex container',
        {
          attempt: 'Align navigation brand and actions horizontally on a single line.',
          sampleCode: '<header class="navbar">\n  <div>Brand</div>\n  <div>Links</div>\n</header>',
          code: '.navbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}',
          output: {
            headers: ['Container', 'Child Behavior'],
            rows: [
              ['.navbar', 'Children convert to flex items, arranged horizontally']
            ]
          },
          note: 'Direct child elements automatically become flex items whose margins do not collapse.'
        }
      ],
      [
        'flex-direction',
        'flex-direction: row; /* column, row-reverse */',
        'Sets main axis orientation',
        {
          attempt: 'Stack form inputs vertically in mobile layout and side-by-side on desktop.',
          sampleCode: '<div class="form-row">\n  <input placeholder="First" />\n  <input placeholder="Last" />\n</div>',
          code: '.form-row {\n  display: flex;\n  flex-direction: column; /* Stacked */\n}\n@media (min-width: 768px) {\n  .form-row {\n    flex-direction: row; /* Horizontal */\n  }\n}',
          output: {
            headers: ['Screen Size', 'flex-direction', 'Layout Orientation'],
            rows: [
              ['Mobile', 'column', 'Vertical stack (top to bottom)'],
              ['Desktop', 'row', 'Side-by-side (left to right)']
            ]
          },
          note: 'When flex-direction is column, the main axis becomes vertical and cross axis becomes horizontal.'
        }
      ],
      [
        'justify-content',
        'justify-content: space-between; /* center, flex-start */',
        'Aligns items along the main axis',
        {
          attempt: 'Distribute navbar brand to the far left and profile menu to the far right.',
          sampleCode: '<nav class="top-nav">\n  <div class="logo">Accenture Ready</div>\n  <div class="menu">Profile</div>\n</nav>',
          code: '.top-nav {\n  display: flex;\n  justify-content: space-between;\n}',
          output: {
            headers: ['Value', 'Alignment Result'],
            rows: [
              ['space-between', 'First item at start, last item at end, space in between'],
              ['center', 'All items packed in the center'],
              ['space-around', 'Equal space around each item']
            ]
          },
          note: 'Controls spacing along the main axis. If flex-direction is row, it controls horizontal distribution.'
        }
      ],
      [
        'align-items',
        'align-items: center; /* stretch, flex-start, flex-end */',
        'Aligns items along the cross axis',
        {
          attempt: 'Vertically center an icon and text label inside a button.',
          sampleCode: '<button class="action-btn">\n  <svg class="icon"></svg>\n  <span>Submit</span>\n</button>',
          code: '.action-btn {\n  display: flex;\n  align-items: center; /* Vertically centered */\n  gap: 8px;\n}',
          output: {
            headers: ['Cross Axis Alignment', 'Vertical Position'],
            rows: [
              ['center', 'Icon and text perfectly aligned along midline']
            ]
          },
          note: 'Default value is stretch, which forces flex children to expand to match the height of the tallest item.'
        }
      ],
      [
        'flex-wrap',
        'flex-wrap: wrap; /* nowrap */',
        'Controls multi-line item wrapping',
        {
          attempt: 'Allow tag badge pills to wrap onto multiple rows when container width narrows.',
          sampleCode: '<div class="tags-container">\n  <span class="tag">HTML</span>\n  <span class="tag">CSS</span>\n  <span class="tag">JS</span>\n</div>',
          code: '.tags-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}',
          output: {
            headers: ['flex-wrap Value', 'Behavior on Narrow Screen'],
            rows: [
              ['wrap', 'Pushes overflowing tags onto a new line'],
              ['nowrap (default)', 'Compresses tags or overflows container']
            ]
          },
          note: 'Essential for responsive toolbars and chip/tag clouds.'
        }
      ],
      [
        'gap',
        'gap: 12px; /* row-gap, column-gap */',
        'Specifies gutter spacing between flex items',
        {
          attempt: 'Add clean 16px spacing between button group actions without margin edge bugs.',
          sampleCode: '<div class="btn-group">\n  <button>Cancel</button>\n  <button>Save</button>\n</div>',
          code: '.btn-group {\n  display: flex;\n  gap: 16px; /* 16px between buttons, none on outer edges */\n}',
          output: {
            headers: ['Method', 'Outer Spacing Added?'],
            rows: [
              ['gap: 16px', 'No (only between items)'],
              ['margin-right: 16px', 'Yes (requires :last-child reset fix)']
            ]
          },
          note: 'gap is universally supported across modern browsers for both Flexbox and Grid.'
        }
      ],
      [
        'flex (grow / shrink / basis)',
        'flex: 1; /* flex: 1 1 auto; */',
        'Shorthand for flex-grow, flex-shrink, flex-basis',
        {
          attempt: 'Create a split layout where the sidebar is fixed at 280px and the main editor fills all remaining space.',
          sampleCode: '<div class="app-layout">\n  <aside class="sidebar">Sidebar</aside>\n  <main class="editor">Editor</main>\n</div>',
          code: '.app-layout {\n  display: flex;\n}\n.sidebar {\n  flex: 0 0 280px; /* Fixed width */\n}\n.editor {\n  flex: 1; /* Takes all remaining space */\n}',
          output: {
            headers: ['Sidebar Width', 'Editor Width'],
            rows: [
              ['280px (fixed)', '100% - 280px (dynamically expands)']
            ]
          },
          note: 'flex: 1 is equivalent to flex: 1 1 0%. It forces items to grow and shrink proportionally.'
        }
      ]
    ]
  },
  {
    key: 'css-grid',
    label: '8. CSS Grid Layout',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.08)',
    border: 'rgba(52,211,153,0.25)',
    type: 'CSS',
    note: 'CSS Grid provides a 2-dimensional layout system (rows AND columns simultaneously).',
    rows: [
      [
        'display: grid',
        'display: grid;',
        'Defines element as a 2D grid container',
        {
          attempt: 'Establish a 2D layout container for a dashboard statistics grid.',
          sampleCode: '<div class="stats-grid">\n  <div class="card">1</div>\n  <div class="card">2</div>\n</div>',
          code: '.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n}',
          output: {
            headers: ['Container', 'Child Placement'],
            rows: [
              ['.stats-grid', 'Automated 2-column grid layout with 16px gutters']
            ]
          },
          note: 'Unlike Flexbox (1D), Grid excels at controlling column widths and row heights at the same time.'
        }
      ],
      [
        'grid-template-columns',
        'grid-template-columns: repeat(3, 1fr);',
        'Defines column track widths',
        {
          attempt: 'Create an auto-responsive product card grid that wraps without media queries.',
          sampleCode: '<div class="card-grid">Cards...</div>',
          code: '.card-grid {\n  display: grid;\n  /* Automatically fits cards of min 260px */\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 20px;\n}',
          output: {
            headers: ['Viewport Width', 'Columns Rendered'],
            rows: [
              ['Wide desktop (1200px+)', '4 columns of ~280px'],
              ['Tablet (800px)', '3 columns of ~260px'],
              ['Mobile (375px)', '1 column of 100%']
            ]
          },
          note: 'repeat(auto-fit, minmax(min, 1fr)) is the ultimate formula for responsive grids without media queries.'
        }
      ],
      [
        'grid-template-rows',
        'grid-template-rows: 60px 1fr auto;',
        'Defines row track heights',
        {
          attempt: 'Structure a full-height web application with fixed 60px header, scrollable body, and 40px footer.',
          sampleCode: '<div class="app-shell">\n  <header>Header</header>\n  <main>Body</main>\n  <footer>Footer</footer>\n</div>',
          code: '.app-shell {\n  display: grid;\n  height: 100vh;\n  grid-template-rows: 60px 1fr 40px;\n}',
          output: {
            headers: ['Row 1 (Header)', 'Row 2 (Main Body)', 'Row 3 (Footer)'],
            rows: [
              ['60px fixed', '1fr (fills remaining height)', '40px fixed']
            ]
          },
          note: 'The 1fr unit stands for "1 fraction of available space".'
        }
      ],
      [
        'grid-column / grid-row',
        'grid-column: span 2; /* 1 / 3 */',
        'Spans an item across multiple columns or rows',
        {
          attempt: 'Make a featured banner card span across all 3 columns of the top grid row.',
          sampleCode: '<div class="featured-card">Featured Post</div>',
          code: '.featured-card {\n  grid-column: 1 / -1; /* Spans full width from first to last line */\n}',
          output: {
            headers: ['Item Class', 'grid-column Value', 'Columns Spanned'],
            rows: [
              ['.featured-card', '1 / -1', 'All columns (full container width)']
            ]
          },
          note: '-1 refers to the very last grid line, which is useful when the number of columns is dynamic.'
        }
      ],
      [
        'place-items / place-content',
        'place-items: center;',
        'Shorthand for align-items and justify-items',
        {
          attempt: 'Center any content dead-center inside a hero banner using just 2 lines of CSS.',
          sampleCode: '<div class="hero-banner">\n  <h1>Hero Headline</h1>\n</div>',
          code: '.hero-banner {\n  display: grid;\n  place-items: center; /* Horizontally & vertically centered */\n  min-height: 400px;\n}',
          output: {
            headers: ['CSS Rules', 'Alignment Result'],
            rows: [
              ['display: grid; place-items: center;', 'Perfect dead-center alignment in both dimensions']
            ]
          },
          note: 'place-items: center is the modern, cleanest way to center anything in CSS.'
        }
      ]
    ]
  },
  {
    key: 'css-spacing-borders',
    label: '9. Spacing, Sizing and Borders',
    color: '#fb7185',
    bg: 'rgba(251,113,133,0.08)',
    border: 'rgba(251,113,133,0.25)',
    type: 'CSS',
    note: 'Margin = outside border spacing; Padding = inside border spacing. Borders and padding are contained inside width with box-sizing: border-box.',
    rows: [
      [
        'width / height',
        'width: 100%; height: 400px;',
        'Explicit element dimensions',
        {
          attempt: 'Define dimensions for an assessment card component.',
          sampleCode: '<div class="card">Card Content</div>',
          code: '.card {\n  width: 100%;\n  max-width: 480px;\n  min-height: 320px;\n}',
          output: {
            headers: ['Viewport', 'Rendered Width'],
            rows: [
              ['Mobile (360px)', '100% (360px)'],
              ['Desktop (1400px)', '480px (clamped by max-width)']
            ]
          },
          note: 'Pair width: 100% with max-width for responsive mobile-friendly sizing.'
        }
      ],
      [
        'margin',
        'margin: 0 auto; /* top right bottom left */',
        'Creates space OUTSIDE the border of an element',
        {
          attempt: 'Horizontally center a block card container on the page.',
          sampleCode: '<div class="container">Centered Content</div>',
          code: '.container {\n  width: 90%;\n  max-width: 1200px;\n  margin: 0 auto; /* Auto left/right margins center block elements */\n}',
          output: {
            headers: ['margin-top / bottom', 'margin-left / right', 'Alignment'],
            rows: [
              ['0', 'auto (equal split)', 'Horizontally centered']
            ]
          },
          note: 'Vertical margins can collapse between adjacent block elements. Use padding or gap to avoid collapsing.'
        }
      ],
      [
        'padding',
        'padding: 16px 24px;',
        'Creates breathing room INSIDE the border of an element',
        {
          attempt: 'Add comfortable interior spacing to a button.',
          sampleCode: '<button class="btn">Click Me</button>',
          code: '.btn {\n  padding: 10px 20px; /* 10px top/bottom, 20px left/right */\n}',
          output: {
            headers: ['Vertical Interior', 'Horizontal Interior'],
            rows: [
              ['10px above and below text', '20px to the left and right']
            ]
          },
          note: 'Background colors and background images fill the element up through the padding area.'
        }
      ],
      [
        'border / border-radius',
        'border: 1px solid #e2e8f0; border-radius: 8px;',
        'Sets border stroke and rounded corners',
        {
          attempt: 'Style an assessment card with a subtle border and rounded pill badge.',
          sampleCode: '<div class="pill-badge">Online</div>',
          code: '.pill-badge {\n  border: 1px solid #10b981;\n  border-radius: 9999px; /* Fully rounded pill */\n  padding: 4px 12px;\n}',
          output: {
            headers: ['Border Style', 'Corner Radius'],
            rows: [
              ['1px solid green', 'Pill shape (border-radius: 9999px)']
            ]
          },
          note: 'border-radius: 50% on a square element (width === height) produces a perfect circle.'
        }
      ],
      [
        'box-shadow',
        'box-shadow: 0 4px 16px rgba(0,0,0,0.1);',
        'Adds drop shadow elevation effects',
        {
          attempt: 'Add a subtle card elevation shadow that lifts on hover.',
          sampleCode: '<div class="card">Card</div>',
          code: '.card {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  transition: box-shadow 0.2s ease;\n}\n.card:hover {\n  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);\n}',
          output: {
            headers: ['Shadow Parameters', 'Values'],
            rows: [
              ['X offset, Y offset, Blur, Color', '0px, 4px, 12px, rgba(0,0,0,0.08)']
            ]
          },
          note: 'Add inset keyword (e.g. box-shadow: inset 0 2px 4px ...) to create an inner shadow instead of an outer drop shadow.'
        }
      ]
    ]
  },
  {
    key: 'css-text-effects',
    label: '10. Text, Backgrounds and Effects',
    color: '#f87171',
    bg: 'rgba(248,113,113,0.08)',
    border: 'rgba(248,113,113,0.25)',
    type: 'CSS',
    note: 'Performance Tip: Animate transform and opacity using transition for smooth 60fps GPU-accelerated micro-interactions.',
    rows: [
      [
        'color / background-color',
        'color: #0f172a; background-color: #f8fafc;',
        'Sets foreground text and background colors',
        {
          attempt: 'Define high-contrast dark theme styling for an assessment card.',
          sampleCode: '<div class="dark-card">Theme Card</div>',
          code: '.dark-card {\n  background-color: #0f172a;\n  color: #f8fafc;\n}',
          output: {
            headers: ['Property', 'Color Code', 'Result'],
            rows: [
              ['background-color', '#0f172a', 'Deep slate dark background'],
              ['color', '#f8fafc', 'Clean crisp white text']
            ]
          },
          note: 'Use CSS custom properties (variables) like var(--bg-surface) for seamless theme toggling.'
        }
      ],
      [
        'font-size / font-weight',
        'font-size: 16px; font-weight: 700;',
        'Controls typeface size and boldness',
        {
          attempt: 'Style a challenge section header with strong typographic hierarchy.',
          sampleCode: '<h2>Assessment Round</h2>',
          code: 'h2 {\n  font-size: 1.25rem; /* 20px */\n  font-weight: 700;   /* Bold */\n  line-height: 1.3;\n}',
          output: {
            headers: ['Keyword', 'Numeric Weight'],
            rows: [
              ['normal', '400'],
              ['medium / semibold', '500 / 600'],
              ['bold', '700']
            ]
          },
          note: 'Prefer rem units for font-size so your typography scales with the user browser accessibility settings.'
        }
      ],
      [
        'text-align / text-transform',
        'text-align: center; text-transform: uppercase;',
        'Aligns and transforms text casing',
        {
          attempt: 'Format category badges with centered, uppercase text and letter spacing.',
          sampleCode: '<span class="category-badge">frontend</span>',
          code: '.category-badge {\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  font-size: 0.75rem;\n}',
          output: {
            headers: ['Source HTML', 'Rendered Output'],
            rows: [
              ['"frontend"', '"FRONTEND" (centered with tracking)']
            ]
          },
          note: 'text-transform changes visual rendering without modifying the underlying text content.'
        }
      ],
      [
        'cursor',
        'cursor: pointer; /* not-allowed, default, text */',
        'Changes mouse cursor icon on hover',
        {
          attempt: 'Show a hand pointer on clickable tabs and a disabled ban symbol on disabled buttons.',
          sampleCode: '<button class="btn" disabled>Disabled</button>',
          code: '.btn:not(:disabled) {\n  cursor: pointer;\n}\n.btn:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}',
          output: {
            headers: ['Button State', 'Cursor Icon'],
            rows: [
              ['Active', 'Hand pointer (👆)'],
              ['Disabled', 'Prohibition circle (🚫)']
            ]
          },
          note: 'Always set cursor: pointer on custom interactive elements (like custom checkboxes or clickable div cards).'
        }
      ],
      [
        'transition',
        'transition: all 0.2s ease;',
        'Smoothly animates CSS property changes',
        {
          attempt: 'Add a smooth color transition when hovering over navigation links.',
          sampleCode: '<a class="link">Learn More</a>',
          code: '.link {\n  color: #64748b;\n  transition: color 0.15s ease-in-out;\n}\n.link:hover {\n  color: #0284c7;\n}',
          output: {
            headers: ['State Change', 'Animation Duration', 'Timing Curve'],
            rows: [
              ['Hover on/off', '0.15s', 'Smooth ease-in-out curve']
            ]
          },
          note: 'Always specify exact properties (e.g. transition: transform 0.2s, opacity 0.2s) instead of transition: all for maximum performance.'
        }
      ],
      [
        'transform',
        'transform: translateY(-2px) scale(1.02);',
        'Applies 2D or 3D transformations (translate, scale, rotate)',
        {
          attempt: 'Create an interactive button click press effect.',
          sampleCode: '<button class="press-btn">Submit</button>',
          code: '.press-btn {\n  transition: transform 0.1s ease;\n}\n.press-btn:active {\n  transform: scale(0.96); /* Sinks down on click */\n}',
          output: {
            headers: ['User Action', 'Transform Effect'],
            rows: [
              ['Mouse down (:active)', 'Scales to 96% size for tactile feedback']
            ]
          },
          note: 'transform does not cause browser reflows/layout recalculations, making it GPU-accelerated and ultra-fast.'
        }
      ]
    ]
  }
];
