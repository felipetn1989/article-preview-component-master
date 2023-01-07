let button_icon = document.querySelector(".button_icon");

share.addEventListener("click", overlay);

function overlay() {
  click.style.display = "flex";
  share.style.backgroundColor = "var(--Grayish-Blue)";
  button_icon.setAttribute("src", "images/icon-share-white.png");

  share.addEventListener("click", reclick);
}

function reclick() {
  click.style.display = "none";
  share.style.backgroundColor = "var(--Light-Grayish-Blue)";
  button_icon.setAttribute("src", "images/icon-share.svg");

  share.removeEventListener("click", reclick)
  share.addEventListener("click", overlay);
}
