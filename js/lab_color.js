labNumber = document.querySelectorAll('#labNumber');
labTag = document.querySelectorAll('#labTag');

for (i = 0; i < labNumber.length; i++) {
  switch (labNumber[i].textContent) {
    case "Lab 2":
      labTag[i].style.backgroundColor = "#3498db";
      break;
  
    case "Lab 3":
      labTag[i].style.backgroundColor = "#16a085";
      break;
  
    case "Lab 4":
      labTag[i].style.backgroundColor = "#f39c12";
      break;
  }
}
