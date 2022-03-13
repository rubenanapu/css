var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var buttons = document.querySelectorAll(".plan button");
var closeModalButton = document.querySelector(".modal__action--negative");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    backdrop.style.display = "block";
    modal.style.display = "block";
  });
}

function closeModal(){
    backdrop.style.display = "none";
    modal.style.display = "none";
}

closeModalButton.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);
