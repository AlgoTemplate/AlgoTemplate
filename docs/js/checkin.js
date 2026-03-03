document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".task-list-item input");

  checkboxes.forEach((box, index) => {
    const key = "checkin_" + index;

    if (localStorage.getItem(key) === "true") {
      box.checked = true;
    }

    box.addEventListener("change", function () {
      localStorage.setItem(key, box.checked);
    });
  });
});