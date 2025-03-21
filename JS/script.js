let aleatorio = Math.floor(Math.random() * 100) + 1;
let cont = 10;
function tigrinho(e) {
  e.preventDefault();
  const numero = parseInt(document.getElementById("numero").value);
  console.log(aleatorio);
  if (numero == aleatorio) {
    document.getElementById("dica").innerHTML = "Acertou!!";
    reiniciar();
    return;
  }
  if (cont == 0) {
    document.getElementById("dica").innerText = "Você perdeu!!";
    reiniciar();
    return;
  }
  if (numero > aleatorio) {
    document.getElementById("dica").innerText = "O número secreto é menor";
    cont--;
    return;
  } else {
    document.getElementById("dica").innerText = "O número secreto é maior";
    cont--;
    document.getElementById(
      "tentativas"
    ).innerText = `Tentativas Restantes: ${cont}`;
    return;
  }
}
function reiniciar() {
  cont = 10;
  aleatorio = Math.floor(Math.random() * 100) + 1;
  document.getElementById("tentativas").innerText = "O jogo irá reiniciar";
}
