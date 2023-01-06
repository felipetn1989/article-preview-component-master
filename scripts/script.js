share.addEventListener("click", overlay);

function overlay() {
  click.style.display = "flex";
}

share_clicked.addEventListener("click", reclick);

function reclick() {
  click.style.display = "none";
}
