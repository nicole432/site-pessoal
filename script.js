const itensMenu = document.querySelectorAll('.textoCabecalho')

itensMenu.forEach(item => {
    item.addEventListener('click', (e) => {
        //e.preventDefault()
        itensMenu.forEach(i => i.classList.remove('active'))
        item.classList.add()
    })
})

document.getElementById("copiarTelefone").addEventListener("click", function () {
    const numeroTelefone = this.getAttribute("data-telefone");
    navigator.clipboard.writeText(numeroTelefone).then(() => {
        window.alert("Número copiado para a área de transferência!" + '  ' + numeroTelefone + '         ' +'Entre em contato comigo via Whatsapp!'
        )
    }).catch(err => {
        window.alert("Erro ao copiar! " + err);
    });
});


