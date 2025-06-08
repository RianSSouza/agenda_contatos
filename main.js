const form = document.getElementById("form-telefonica");
let linhas = "";
const telefones = [];

form.addEventListener("submit", function(e){
    e.preventDefault();

    adcionarLinha();
    atualizaTabela();
})

function adcionarLinha(){
    const inputNomeContato = document.getElementById("nome-contato");
    const inputTelefoneContato = document.getElementById("telefone-contato");

    if (telefones.includes(inputTelefoneContato.value)) {
        alert(`A Telefone: ${inputTelefoneContato.value} já foi inserido`);
    }else{

        telefones.push(inputTelefoneContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += `</tr>`

        linhas += linha;

        inputNomeContato.value = "";
        inputTelefoneContato.value = "";
    }

}

function atualizaTabela(){
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}