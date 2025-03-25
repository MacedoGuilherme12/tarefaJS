class Tarefas {
  constructor() {
    this.cont = 0;
  }

  adicionar() {
    const ul = document.querySelector("#tarefas .task-list");
    const escrevido = document.getElementById("input-tarefa").value;
    if (escrevido === "") {
      document.getElementById("erro").innerText = "Escreva algo!";
      return;
    }

    const li = document.createElement("li");
    const div = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", (e) => {
      const text = e.target.nextSibling;
      text.style.textDecoration = e.target.checked ? "line-through" : "none";
      text.style.color = e.target.checked ? "gray" : "black";
    });

    const texto = document.createElement("span");
    texto.innerText = escrevido;

    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", () => {
      ul.removeChild(li);
    });

    div.appendChild(checkbox);
    div.appendChild(texto);
    div.appendChild(button);
    li.appendChild(div);
    ul.appendChild(li);

    this.cont++;
    document.getElementById("input-tarefa").value = "";
    document.getElementById("input-tarefa").focus();
    document.getElementById("erro").innerText = "";
  }
}

const tarefa = new Tarefas();
