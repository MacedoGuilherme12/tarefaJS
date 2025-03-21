let aleatorio = Math.floor(Math.random() * 100) + 1;
let cont = 10;

function tigrinho(e) {
  e.preventDefault();
  console.log(aleatorio);
  const inputElemento = document.getElementById("numero");
  const numero = parseInt(inputElemento.value);

  if (isNaN(numero) || numero < 1 || numero > 100) {
    document.getElementById("dica").innerText =
      "Digite um número válido entre 1 e 100!";
    return;
  }

  if (numero === aleatorio) {
    document.getElementById("dica").innerText =
      "🎉 Acertou!! O jogo vai reiniciar...";
    setTimeout(reiniciar, 2000);
    return;
  }

  cont--;

  if (cont === 0) {
    document.getElementById("dica").innerText =
      "😞 Você perdeu! O jogo vai reiniciar...";
    setTimeout(reiniciar, 2000);
    return;
  }

  document.getElementById("dica").innerText =
    numero > aleatorio
      ? "O número secreto é menor!"
      : "O número secreto é maior!";

  document.getElementById(
    "tentativas"
  ).innerText = `Tentativas Restantes: ${cont}`;
}

function reiniciar() {
  cont = 10;
  aleatorio = Math.floor(Math.random() * 100) + 1;
  document.getElementById("tentativas").innerText = "Tentativas Restantes: 10";
  document.getElementById("dica").innerText = "Dica:";
  document.getElementById("numero").value = "";
}
