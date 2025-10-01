function salvarContato(nome, telefone) {
    const contatos = JSON.parse(localStorage.getItem("contatos")) || [];
    contatos.push({ nome, telefone });
    localStorage.setItem("contatos", JSON.stringify(contatos));
}

function listarContatos() {
    const contatos = JSON.parse(localStorage.getItem("contatos")) || [];
    const lista = document.getElementById("contatos-lista");
    lista.innerHTML = "";

    contatos.forEach((contato, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${contato.nome}</td>
            <td>${contato.telefone}</td>
            <td><button onclick="removerContato(${index})">Remover</button></td>
        `;
        lista.appendChild(row);
    });
}

function removerContato(index) {
    const contatos = JSON.parse(localStorage.getItem("contatos")) || [];
    contatos.splice(index, 1);
    localStorage.setItem("contatos", JSON.stringify(contatos));
    listarContatos();
}

document.getElementById("form1").addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    salvarContato(nome, telefone);
    listarContatos();
    this.reset();
});

listarContatos();
