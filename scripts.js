let objetos = [];

function pegarDados() {
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var estado = document.getElementById("estado").value;
    var cidade = document.getElementById("cidade").value;

    var camposVazios = [];

    if (nome === '') camposVazios.push("nome");
    if (idade === '') camposVazios.push("idade");
    if (estado === '') camposVazios.push("estado");
    if (cidade === '') camposVazios.push("cidade");

    if (camposVazios.length > 0) {
        return { valido: false };
    } else {
        return { dados: { nome: nome, idade: idade, estado: estado, cidade: cidade }, valido: true };
    }
}

function criarTabela() {
    var resultado = pegarDados();

    if (resultado.valido) {
        let pessoa = resultado.dados;

        objetos.push(pessoa);

        console.log("Todos os Objetos: ", objetos);

        // alert("Objeto adicionado com sucesso!");

        document.getElementById("nome").value = '';
        document.getElementById("idade").value = '';
        document.getElementById("estado").value = '';
        document.getElementById("cidade").value = '';
    } else {
        alert("Faltam campos a serem preenchidos.");
    }
    return objetos;
}

function tela() {
    let pessoas = criarTabela(); 
    let tabela = document.getElementById("tabelaClientes");
    var titulo = document.getElementById("tituloTabela")
    let corpoTabela = pessoas.map(pessoa => {
        return `
        <div>
            <span>Nome: ${pessoa.nome}</span><br>
            <span>Idade: ${pessoa.idade}</span><br>
            <span>Estado: ${pessoa.estado}</span><br>
            <span>Cidade: ${pessoa.cidade}</span><br><br>
        </div>`;
    }).join("");

    tabela.innerHTML += corpoTabela;
    titulo.style.display = "flex"
    tabela.style.display = "flex"
    tabela.style.justifyContent ="center"
    tabela.style.alignItems = "center"
    tabela.style.flexDirection = "column"
    tabela.style.width = "20%";
    tabela.style.border = "1px solid #ccc";
    tabela.style.borderCollapse = "collapse";

}