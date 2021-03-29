//querySelector
const heading= document.querySelector('.header__texto h2');  //retorna 0 o 1 elemento
heading.textContent= 'Hola bb';
console.log(heading);

//querySelectorAll
const enlaces= document.querySelectorAll('.navegacion a');
enlaces[0].textContent= 'Nuevo texto para enlaces';
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');
//getElementById

const heading2= document.getElementById('heading');
console.log(heading2);

//Generar un nuevo enlace
const nuevoEnlace=document.createElement('A');

//agregar el href
nuevoEnlace.href= 'nuevo-enlace.html';
//agregar el texto
nuevoEnlace.textContent= 'Un nuevo enlace';
//agregar la clase
nuevoEnlace.classList.add('navegacion__enlace')
//agregarlo al documento
const navegacion= document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);
console.log(nuevoEnlace)

//eventos
// console.log(1);

// window.addEventListener('load', function(){ //load espera a que el JS y los archivos que dependen del HTML esten listos
//     //load es un evento, se le conoce como callback, cuando el evento ocurre se ejecuta la funcion
//     console.log(2);
// });
// window.onload= function(){
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function(){//solo espera a que se descargue el HTML, pero no espera CSS o IMAGENES
//     console.log(4);
// })

// console.log(5);

// window.onscroll =function(){
//     console.log('scrolling...')
// }

//seleccionar elementos html y asociarles un evento

// const btnEnviar= document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento);
//     evento.preventDefault(); //funciona para prevenir la accion por defecto de un elemento y sirve para validad formularios
//     console.log('enviando formulario');
// })

//eventos de los inputs y text area
const datos= {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre= document.querySelector('#nombre');
const email= document.querySelector('#email');
const mensaje= document.querySelector('#mensaje');
const formulario= document.querySelector('.formulario');

nombre.addEventListener('input',leerTexto);
email.addEventListener('input',leerTexto);
mensaje.addEventListener('input',leerTexto);

//El evento submit
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    //validar formulario
    const {nombre, email, mensaje}= datos;
    if(nombre=== ''|| email=== ''|| mensaje===''){
        mostrarError('Todos los campos son obligatorios');
        return;
    }

    console.log('Enviando el formulario');
    //enviar formulario
})

function leerTexto(e){
    datos[e.target.id]= e.target.value;
    console.log(datos);

}
function mostrarError(mensaje){
    console.log(mensaje);
    
}
