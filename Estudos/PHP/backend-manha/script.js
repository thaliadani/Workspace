// Espera o usuário clicar em "Enviar"
document.getElementById("formContato").addEventListener("submit", function (event) {
    event.preventDefault(); // impede o envio automático do formulário

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Simples validação no front-end
    if (!nome || !email || !mensagem) {
        document.getElementById("visivel").classList.remove("d-none");
        document.getElementById("resposta").innerText = "⚠️ Preencha todos os campos!";
        setTimeout(function () {
            document.getElementById("visivel").classList.add("d-none");
        }, 5000); // esconde após 5 segundos
        return;
    }

    // Envia via fetch (simulando uma chamada ao back-end)
    fetch("processa.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `nome=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}&mensagem=${encodeURIComponent(mensagem)}`
    })
        .then(response => response.text())
        .then(data => {
            document.getElementById("visivel").classList.remove("d-none");
            document.getElementById("resposta").innerHTML = data;
            document.getElementById("formContato").reset(); // limpa o formulário
            setTimeout(function () {
                document.getElementById("visivel").classList.add("d-none");
            }, 5000); // esconde após 5 segundos
        })
        .catch(error => {
            document.getElementById("visivel").classList.remove("d-none");
            document.getElementById("resposta").innerText = "❌ Erro ao enviar dados!";
            setTimeout(function () {
                document.getElementById("visivel").classList.add("d-none");
            }, 5000); // esconde após 5 segundos
        });
});
