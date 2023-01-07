let button_icon = document.querySelector(".button_icon");

share.addEventListener("click", overlay);

function overlay() {
    click.style.display = "flex";
    share.style.backgroundColor = "var(--Grayish-Blue)";
    button_icon.setAttribute("src", "images/icon-share-white.png");
  }
