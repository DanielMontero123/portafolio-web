let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}
var audio = document.getElementById("background-music");
var playing = false;

document.getElementById("play-button").onclick = function () {
    if (playing) {
        playing = false;
        audio.pause();
    } else {
        playing = true;
        audio.volume = 0.05;
        audio.play();
    }

};

function seleccionar() {
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var habilidades = document.getElementById("habilidades");
    var distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
    if (distancia_habilidades >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("java");
        habilidades[1].classList.add("android");
        habilidades[2].classList.add("cloud");
        habilidades[3].classList.add("baseD");
        habilidades[4].classList.add("htmlcss");
        habilidades[5].classList.add("react");
        habilidades[6].classList.add("equipo");
        habilidades[7].classList.add("adaptabilidad");
        habilidades[8].classList.add("aprendizaje");
        habilidades[9].classList.add("comunicacion");
        habilidades[10].classList.add("ingles");
        habilidades[11].classList.add("creatividad");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
    efectoHabilidades();
}



const form = document.getElementById('formEmail')

async function handleSendEmail(event) {
    event.preventDefault()

    const fd = new FormData(this)

    const response = await fetch('https://formspree.io/f/xwkjvpbg', {
        method: 'POST',
        body: fd,
        headers: {
            Accept: 'application/json'
        }
    })

    if (response.ok) {
        this.reset()
        Swal.fire({
            title: 'GRACIAS POR CONTACTARME',
            text: "Tu mensaje ha sido enviado con éxito",
            icon: 'success',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })

    } else {
        Swal.fire({
            title: 'OOOPS...',
            text: "No se ha enviado tu mensaje :(",
            icon: 'error',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
}

form.addEventListener('submit', handleSendEmail)
