function mudarTema(){
    const body = document.getElementById("body");
    document.body.classList.toggle("bodyClaro");

    const header = document.getElementById("header");
    header.classList.toggle("headerClaro");
    
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
    card.classList.toggle("cardClaro");
    });

    const tema = document.getElementById("tema");
    tema.classList.toggle("temaClaro")

};

function mudarTemaJogo(){
    const body = document.getElementById("body");
    document.body.classList.toggle("bodyClaro");

    const header = document.getElementById("subheader");
    header.classList.toggle("headerClaro");

    const tema = document.getElementById("tema");
    tema.classList.toggle("temaClaro")
}