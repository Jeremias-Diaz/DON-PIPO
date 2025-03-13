main()
async function main(){
    const elementos = [
        "./img/Carrusel/2.png",
        "./img/Carrusel/3.png",
        "./img/Carrusel/4.png"
    ]
    const carruselElement = document.getElementById("Carrusel");
    let counter = 0;
    setInterval(async () => {
        let element = elementos[counter];
        console.log(element);
        carruselElement.style.opacity = 0;
        carruselElement.src = element;
        await new Promise(r=>setTimeout(r, 100));
        carruselElement.style.opacity = 1;
        if (counter < elementos.length -1) {counter++} else {counter = 0};
    }, 2000);
}