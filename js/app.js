//Variables y/o selectores
let year = document.querySelector('.footer__year');
const formularioDirectorio = document.querySelector('.formulario__directorio');

//Event Listeners
formularioDirectorio.addEventListener('submit', validarFormulario);
year.textContent = new Date().getFullYear();

// MixitUp 
let mixerPortfolio = mixitup('.secciones', {
    selectors: {
        target: '.depto'
    },
    animation: {
        duration: 400
    }
});

/* Link active */ 
const linkActive = document.querySelectorAll('.navegacion__opcion');
function activeLink(){
    linkActive.forEach(link=>link.classList.remove('navegacion__opcion-activo'))
    this.classList.add('navegacion__opcion-activo');
}
linkActive.forEach(link => link.addEventListener('click', activeLink));

// Funciones
function validarFormulario(e){
    e.preventDefault();
    const input = document.querySelector('.formulario__input');
    if(input.value === ''){
        mostrarAlerta('Este campo es obligatorio', document.querySelector('.directorio__alerta'));
    }else{
        if(input.value.length < 5 ){
            mostrarAlerta('Búsqueda inválida', document.querySelector('.directorio__alerta'));
        }
    }
}

function mostrarAlerta(mensaje, ubicacion){
    const divAlerta = document.createElement('div');
    const alertas = document.querySelectorAll('.error');
    if(alertas.length===0){
        divAlerta.textContent = mensaje;
        divAlerta.classList.add('error', 'alerta');
        ubicacion.appendChild(divAlerta);
        setTimeout(() => {
            divAlerta.remove();
        }, 3000);
    }
}