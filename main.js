const form = document.getElementById("form-contato");
let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  adicionalinha();
  atualizaTabela();
});

const nomes = [];
const numeros = [];

function adicionalinha() {
  let inputNomeContato = document.getElementById("nome-contato");
  let inputNumeroContato = document.getElementById("numero-contato");

  if (numeros.includes(inputNumeroContato.value)) {
    alert(
      `este número de contato ${inputNumeroContato.value} já está cadastrado`
    );
  } else {
    nomes.push(inputNomeContato.value);
    numeros.push(inputNumeroContato.value);
    let linha = "<tr>";
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += "<tr>";
    linhas += linha;

    inputNomeContato.value = "";
    inputNumeroContato.value = "";
  }
}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}
