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
});
