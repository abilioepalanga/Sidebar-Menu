function getLocalStorage() {
    return JSON.parse(localStorage.getItem("contatos")) || [];
}

function atualizarTabela() {
    const contatos = getLocalStorage();
    contatos.forEach((contato, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${index + 1}</td>
        <td>${contato.nome}</td>
        <td>${contato.telefone}</td>
        <td><button onclick="removerContato(${index})">Remover</button></td>
        `;
        document.getElementById("contatos-lista").appendChild(row);
    });
}
function salvarContato(nome, telefone) {
    const contatos = getLocalStorage();
    contatos.push({ nome, telefone });
    localStorage.setItem("contatos", JSON.stringify(contatos));
}
function removerContato(index) {
    const contatos = getLocalStorage();
    contatos.splice(index, 1); // Remove o contato pelo índice
    localStorage.setItem("contatos", JSON.stringify(contatos));
    document.getElementById("contatos-lista").innerHTML = "";
    atualizarTabela();
}

document.getElementById("form1").addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    salvarContato(nome, telefone);
    atualizarTabela();
});

atualizarTabela();
