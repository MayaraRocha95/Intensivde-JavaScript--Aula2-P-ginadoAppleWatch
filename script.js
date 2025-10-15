const imagemVisualizacao = document.querySelector("#visualizacao img");
const tituloProduto = document.querySelector("h1");

const opcoesTamanho = ['41 mm', '45 mm'];

//console.log(opcoesTamanho[1]);

let numImagemSelecionada = 1;

let numTamanhoSelecionado = 1;

function atualizarTamanho() {
  const opcaoTamanhoSelecionado = document
    .querySelector('[name="opcao-tamanho"]:checked')
    .id.charAt(0);
    numTamanhoSelecionado = opcaoTamanhoSelecionado;

    console.log(opcoesTamanho[numTamanhoSelecionado]);
}

function atualizarImagemSelecionada() {
  const opcaoImagemSelecionada = document
    .querySelector('[name="opcao-imagem"]:checked')
    .id.charAt(0);

  numImagemSelecionada = opcaoImagemSelecionada;

  imagemVisualizacao.src =
    "./imagens/opcoes-cores/imagens-azul-inverno/imagem-" +
    numImagemSelecionada +
    ".jpeg";
}

//atualizarImagemSelecionada();
