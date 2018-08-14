modalContainer = document.querySelector('#modalSchedulingContainer');
addSchedulingButton = document.querySelector('#addScheduling');


addSchedulingButton.addEventListener("click", function(){
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
