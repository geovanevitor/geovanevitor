function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    // Esconde todos os conteúdos das abas
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    // Remove a classe ativa de todas as abas
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Exibe a aba correspondente ao clicar
    document.getElementById(tabName).classList.add("active");

    // Adiciona a classe ativa ao botão da aba clicada
    evt.currentTarget.classList.add("active");
}
