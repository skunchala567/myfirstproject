(function () {
  const KEY = "creator-studio-theme";
  const LEGACY_KEY = "sheetfusion-theme";
  const NAV_KEY = "creator-studio-nav-collapsed";
  const root = document.documentElement;

  function storedTheme() {
    try {
      const saved = localStorage.getItem(KEY) || localStorage.getItem(LEGACY_KEY);
      return saved === "light" || saved === "dark" ? saved : "dark";
    } catch (error) {
      return "dark";
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(KEY, theme);
      localStorage.setItem(LEGACY_KEY, theme);
    } catch (error) {
      /* Theme still applies for the current page when storage is unavailable. */
    }
  }

  function updateControls(theme) {
    const nextLabel = theme === "light" ? "Dark mode" : "Light mode";
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
      button.setAttribute("title", nextLabel);
    });
    document.querySelectorAll("[data-theme-label]").forEach((label) => {
      label.textContent = nextLabel;
    });
    document.querySelectorAll("[data-theme-icon]").forEach((icon) => {
      icon.textContent = theme === "light" ? "☀️" : "🌙";
    });

    const legacyIcon = document.getElementById("themeIcon");
    const legacyLabel = document.getElementById("themeLabel");
    if (legacyIcon) legacyIcon.textContent = theme === "light" ? "D" : "L";
    if (legacyLabel) legacyLabel.textContent = theme === "light" ? "LIGHT" : "DARK";
  }

  function applyTheme(theme) {
    const normalized = theme === "light" ? "light" : "dark";
    root.setAttribute("data-theme", normalized);
    if (document.body) {
      document.body.classList.toggle("light-mode", normalized === "light");
    }
    saveTheme(normalized);
    updateControls(normalized);
  }

  function toggleTheme() {
    applyTheme(root.getAttribute("data-theme") === "light" ? "dark" : "light");
  }

  window.CreatorStudioTheme = {
    apply: applyTheme,
    toggle: toggleTheme,
    get: function () {
      return root.getAttribute("data-theme") || storedTheme();
    }
  };

  function bindThemeControls() {
    applyTheme(window.CreatorStudioTheme.get());
    document.querySelectorAll("[data-theme-toggle], #themeBtn").forEach((button) => {
      if (button.dataset.themeBound === "true") return;
      button.dataset.themeBound = "true";
      button.addEventListener("click", toggleTheme);
    });
  }

  function storedNavCollapsed() {
    try {
      return localStorage.getItem(NAV_KEY) === "true";
    } catch (error) {
      return false;
    }
  }

  function saveNavCollapsed(collapsed) {
    try {
      localStorage.setItem(NAV_KEY, collapsed ? "true" : "false");
    } catch (error) {
      /* The current page still responds even when storage is unavailable. */
    }
  }

  function updateNavControls(collapsed) {
    document.querySelectorAll("[data-nav-toggle]").forEach((button) => {
      button.setAttribute("aria-pressed", collapsed ? "true" : "false");
      button.setAttribute("aria-label", collapsed ? "Show navigation" : "Hide navigation");
      button.setAttribute("title", collapsed ? "Show navigation" : "Hide navigation");
      button.textContent = collapsed ? "NAV" : "HIDE";
    });
  }

  function applyNavCollapsed(collapsed) {
    root.classList.toggle("app-nav-collapsed", collapsed);
    if (document.body) {
      document.body.classList.toggle("app-nav-collapsed", collapsed);
    }
    saveNavCollapsed(collapsed);
    updateNavControls(collapsed);
  }

  function toggleNavCollapsed() {
    applyNavCollapsed(!root.classList.contains("app-nav-collapsed"));
  }

  function createNavToggle() {
    if (document.querySelector("[data-nav-toggle]")) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "nav-collapse-toggle";
    button.dataset.navToggle = "true";
    document.body.appendChild(button);
  }

  function bindNavControls() {
    createNavToggle();
    document.querySelectorAll("[data-nav-toggle]").forEach((button) => {
      if (button.dataset.navBound === "true") return;
      button.dataset.navBound = "true";
      button.addEventListener("click", toggleNavCollapsed);
    });
    applyNavCollapsed(storedNavCollapsed());
  }

  applyTheme(storedTheme());

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      bindThemeControls();
      bindNavControls();
    });
  } else {
    bindThemeControls();
    bindNavControls();
  }
}());
