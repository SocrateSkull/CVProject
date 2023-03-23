//Menú lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu() {
    if (menu_visible == false) {//si está oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else {
        menu.style.display = "none";
        menu_visible = false;
    }

}
//Ocultar menú al seleccionar una opción
let links = document.querySelectorAll("nav a ");
for (var x = 0; x < links.length; x++) {
    links[x].onclick = function () {
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Animación barra habilidades

function crearBarra(id_barra) {
    for (i = 0; i <= 16; i++) {
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

let html = document.getElementById("html");
crearBarra(html);

let javascript = document.getElementById("javascript");
crearBarra(javascript);

let php = document.getElementById("php");
crearBarra(php);

let python = document.getElementById("python");
crearBarra(python);

let wordpress = document.getElementById("wordpress");
crearBarra(wordpress);

let excel = document.getElementById("excel");
crearBarra(excel);

//Guardado de cantidad casillas que se  pintaran por cada barra
//Inicio con -1 porque no contiene ninguna marcada al ejecutarse

let contadores = [-1,-1,-1,-1,-1,-1];
//comprobación de ejecución animación
let entro = false;

//Función que aplica las animaciones de dichas barras
function efectoHabilidades() {
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if (distancia_skills >= 300 && entro == false) {
        entro = true;
        const intervalHtml = setInterval(function () {
            pintarBarra(html, 17, 0, intervalHtml);
        }, 100);
        const intervalJavascript = setInterval(function () {
            pintarBarra(javascript, 12, 1, intervalJavascript);
        }, 100);
        const intervalPhp = setInterval(function () {
            pintarBarra(php, 11, 2, intervalPhp);
        }, 100);
        const intervalPython = setInterval(function () {
            pintarBarra(python, 11, 3, intervalPython);
        }, 100);
        const intervalWordpress = setInterval(function () {
            pintarBarra(wordpress, 11, 4, intervalWordpress);
        }, 100);
        const intervalExcel = setInterval(function () {
            pintarBarra(excel, 14, 5, intervalExcel);
        }, 100);
    }
}
// llenado de barra con su cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval) {
    contadores[indice]++;
    x = contadores[indice];
    if (x < cantidad) {
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#8b0000";
    } else {
        clearInterval(interval)
    }
}
// Detectar el scrolling de mouse para ejecución de animación de barra
window.onscroll = function () {
    efectoHabilidades();
}