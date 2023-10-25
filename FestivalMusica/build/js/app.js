document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp() {
    crearGaleria();
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <img loading="lazy" width="200" height="300" src="/FestivalMusica/img/thumb/${i}.jpg" 
            alt="imagen galeria">
        `;
        galeria.appendChild(imagen);
    }
}
