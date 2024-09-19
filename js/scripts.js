// Seleção de Elementos
const numeroInput = document.querySelector("#numero");
const multiplicadorInput = document.querySelector("#multiplicador");
const inputCalcular = document.querySelector(".multiplicacao");
const tabelaMultiplicacao = document.querySelector(".tabela-multiplicacao");

// Função

const criarTabela = (numero, numero2) => {
  const infoCalcular = document.querySelector("p");
  infoCalcular.innerHTML = "";

  for (i = 1; i <= numero2; i++) {
    const resultado = numero * i;

    const template = `<div class="linha">
    <div class="operacao">${numero} x ${i} =</div>
    <div class="resultado">${resultado}</div>
  </div>`;

    const parse = new DOMParser();

    const htmlTemplate = parse.parseFromString(template, "text/html");

    const linha = htmlTemplate.querySelector(".linha");

    tabelaMultiplicacao.appendChild(linha);
  }
  infoCalcular.innerHTML = `A Tabuada do ${numero}`;
};

// Seleção de Eventos

inputCalcular.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero1 = +numeroInput.value;
  const numero2 = +multiplicadorInput.value;

  if (!numero1 || !numero2) return;

  criarTabela(numero1, numero2);
});
