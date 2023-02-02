let buttonIcon = document.querySelector(".button_icon");

/* Everytime the user clicks on the Share button, it calls the function overlay. The function then toggles the appropriate CSS classes on and off. At the end, the function checks if the overlay is being displayed and changes the image of button accordinly */

share.addEventListener("click", () => {
  click.classList.toggle("display_flex");
  share.classList.toggle("color");

  buttonIcon.src = click.classList.contains("display_flex")
    ? "images/icon-share-white.png"
    : "images/icon-share.svg";
});
