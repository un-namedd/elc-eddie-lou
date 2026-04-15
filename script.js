/**
 * script.js — Sidebar toggle behaviour for the cafeteria website.
 *
 * HOW IT WORKS:
 * 1. Each HTML page has a button: <button id="sidebarToggle"> in the top bar.
 * 2. Clicking it adds or removes the CSS class "sidebar-collapsed" on <body>.
 * 3. styles.css defines body.sidebar-collapsed .sidebar { width: 78px; } and hides
 *    .brand and .link-text so only emoji icons show — like a slim “icon rail”.
 * 4. localStorage remembers the user’s choice so the sidebar stays collapsed/expanded
 *    when they open another page or refresh (same origin, same folder).
 */

const body = document.body;
const toggleButton = document.getElementById("sidebarToggle");
/** Key used in the browser’s local storage (string "true" or absent) */
const storageKey = "elcSidebarCollapsed";

// On load: if user previously collapsed the sidebar, apply the class immediately
if (localStorage.getItem(storageKey) === "true") {
    body.classList.add("sidebar-collapsed");
}

// Click handler: flip collapsed state and persist it
if (toggleButton) {
    toggleButton.addEventListener("click", () => {
        body.classList.toggle("sidebar-collapsed");
        localStorage.setItem(storageKey, body.classList.contains("sidebar-collapsed"));
    });
}
