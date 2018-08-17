modalContainer = document.querySelector('#modalSchedulingContainer');
addSchedulingButton = document.querySelector('#addScheduling');
modalDarken = document.querySelector('#modalSchedulingDarken');
editButton = document.querySelector('#scheduleCardButtonsEdit');


addSchedulingButton.addEventListener("click", function(){
  if ( addSchedulingButton.style.transform == "rotate(45deg)" ) {
    addSchedulingButton.style.transform = "rotate(0)";
  }
  else { addSchedulingButton.style.transform = "rotate(45deg)"; }
});

editButton.addEventListener("click", function(){
  if ( addSchedulingButton.style.transform == "rotate(45deg)" ) {
    addSchedulingButton.style.transform = "rotate(0)";
  }
  else { addSchedulingButton.style.transform = "rotate(45deg)"; }
});

addSchedulingButton.addEventListener("click", function(){
  if (modalContainer.style.display == "flex") {
    modalContainer.style.display = "none";
  } else {
    modalContainer.style.display = "flex";
  }
});

editButton.addEventListener("click", function(){
  if (modalContainer.style.display == "flex") {
    modalContainer.style.display = "none";
  } else {
    modalContainer.style.display = "flex";
  }
});

modalDarken.addEventListener("click", function(){
  modalContainer.style.display = "none";
  addSchedulingButton.style.transform = "rotate(0)";
});
