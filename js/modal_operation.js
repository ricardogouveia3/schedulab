addSchedulingButton = document.querySelector('#addScheduling');
editButton = document.querySelectorAll('#scheduleCardButtonsEdit');
modalTitle = document.querySelector('#schedulingTitle');
modalSubmit = document.querySelector('#schedulingSubmit');

addSchedulingButton.addEventListener("click", function(){
  modalTitle.textContent = 'Nova reserva';
  modalSubmit.setAttribute("value", "Criar reserva");
});

for (i = 0; i < editButton.length; i++) {
  editButton[i].addEventListener("click", function(){
    modalTitle.textContent = 'Editar reserva';
    modalSubmit.setAttribute("value", "Salvar");
  });
}