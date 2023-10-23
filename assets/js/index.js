const hamburguer = document.getElementById("hamburguer");
const menu = document.getElementById("menu");
const x = document.getElementById("x");
function togleHamburguer() {
  menu.classList.toggle("closed");
}

hamburguer.addEventListener("click", togleHamburguer);
x.addEventListener("click", togleHamburguer);

function verMais(link) {
  window.open(link, "_blank");
  console.log("ok");
}
