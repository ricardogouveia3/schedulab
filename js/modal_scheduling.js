modalContainer = document.querySelector('#modalSchedulingContainer');
addSchedulingButton = document.querySelector('#addScheduling');
modalDarken = document.querySelector('#modalSchedulingDarken');
editButton = document.querySelectorAll('#scheduleCardButtonsEdit');


addSchedulingButton.addEventListener("click", function(){
  modalTrigger();
});

modalDarken.addEventListener("click", function(){
  modalTrigger();
});

for (i = 0; i < editButton.length; i++) {
  editButton[i].addEventListener("click", function(){
    modalTrigger();
  });
}

function modalTrigger() {
  if ( addSchedulingButton.style.transform == "rotate(45deg)" ) {
    addSchedulingButton.style.transform = "rotate(0)";
  } else { addSchedulingButton.style.transform = "rotate(45deg)"; }

  if (modalContainer.style.display == "flex") {
    modalContainer.style.display = "none";
  } else { modalContainer.style.display = "flex"; }
}