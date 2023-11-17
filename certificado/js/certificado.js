
function redirecionar(){
    entrada = document.querySelector("#entrada").value;

    p = document.createElement("p");

    texto = document.createTextNode(entrada);

    p.appendChild(texto);

    saida = document.querySelector("#saida");

    saida.appendChild(p);

    sair = document.querySelector(".nome_ra");
    sair.classList.add("ativado");

    window.print();
}
