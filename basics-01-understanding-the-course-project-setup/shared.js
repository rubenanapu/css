var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var buttons = document.querySelectorAll(".plan button");
var closeModalButton = document.querySelector(".modal__action--negative");
var hamburgerButton = document.querySelector(".toggle-button");
var mobileSideNavBar = document.querySelector(".mobile-nav");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    // backdrop.style.display = "block";
    // modal.style.display = "block";
    backdrop.classList.add("open");
    modal.classList.add("open");
  });
}

function closeModal(){
    // backdrop.style.display = "none";
    // modal.style.display = "none";

    backdrop.classList.remove('open');
    modal.classList.remove('open');
}

function showSideNavigationBar(){
  // mobileSideNavBar.style.display = "block";
  // backdrop.style.display = 'block';

  mobileSideNavBar.classList.add("open");
  backdrop.classList.add("open");
}

closeModalButton.addEventListener('click', closeModal);
backdrop.addEventListener('click', function(){
  // mobileSideNavBar.style.display = "none";
  mobileSideNavBar.classList.remove("open");
  closeModal();
});
hamburgerButton.addEventListener('click', showSideNavigationBar);
