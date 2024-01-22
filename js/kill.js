// Code to handle checkbox selection and apply styling
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const row = checkbox.parentNode.parentNode;
    if (checkbox.checked) {
      row.style.color = "red";
      row.style.textDecoration = "line-through";
    } else {
      row.style.color = "";
      row.style.textDecoration = "";
    }
  });
});