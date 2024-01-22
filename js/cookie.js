const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const checkedBoxes = JSON.parse(localStorage.getItem('checkedBoxes')) || [];

checkboxes.forEach((checkbox, index) => {
  checkbox.checked = checkedBoxes.includes(index);

  checkbox.addEventListener("change", () => {
    const row = checkbox.parentNode.parentNode;
    if (checkbox.checked) {
      row.style.color = "red";
      checkedBoxes.push(index);
    } else {
      row.style.color = "";
      const checkboxIndex = checkedBoxes.indexOf(index);
      if (checkboxIndex > -1) {
        checkedBoxes.splice(checkboxIndex, 1);
      }
    }
    localStorage.setItem('checkedBoxes', JSON.stringify(checkedBoxes));
  });
});