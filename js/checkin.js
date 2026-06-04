document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".task-list-item input");
  const pageKey = window.location.pathname || "/";

  checkboxes.forEach((box, index) => {
    const key = "checkin_" + pageKey + "_" + index;

    if (localStorage.getItem(key) === "true") {
      box.checked = true;
    }

    box.addEventListener("change", function () {
      localStorage.setItem(key, box.checked);
    });
  });

  const ensureRel = (anchor) => {
    const tokens = new Set(
      String(anchor.getAttribute("rel") || "")
        .split(/\s+/)
        .filter(Boolean)
    );
    tokens.add("noopener");
    tokens.add("noreferrer");
    anchor.setAttribute("rel", Array.from(tokens).join(" "));
  };

  document.querySelectorAll(".md-typeset a[href]").forEach((a) => {
    const href = a.getAttribute("href");
    if (!href) return;

    const lower = href.trim().toLowerCase();
    if (
      lower.startsWith("#") ||
      lower.startsWith("javascript:") ||
      lower.startsWith("mailto:") ||
      lower.startsWith("tel:")
    ) {
      return;
    }

    if (!a.getAttribute("target")) {
      a.setAttribute("target", "_blank");
    }
    ensureRel(a);
  });
});
