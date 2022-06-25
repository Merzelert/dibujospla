var vm = document.getElementById("villamerz");
var papel = vm.getContext("2d");
var mapa = "tile.webp"

var fondo = new Image();
fondo.src = mapa; 
fondo.addEventListener("load", dibujar);

var vaca = new Image();
vaca.src = "vaca.webp";
vaca.addEventListener("load", dibujarVaca);

var pollo = new Image();
pollo.src = "pollo.webp";
pollo.addEventListener("load", dibujarPollo);

var cerdo = new Image();
cerdo.src = "cerdo.webp";
cerdo.addEventListener("load", dibujarCerdo);

function dibujar() {
    papel.drawImage(fondo, 0, 0);
}

function dibujarVaca() {
    papel.drawImage(vaca, 10, 10);
}

function dibujarPollo() {
    papel.drawImage(pollo, 50, 50);
}

function dibujarCerdo() {
    papel.drawImage(cerdo, 100, 100);
}

function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min +1)) + min;
    return resultado;
}