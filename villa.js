var vm = document.getElementById("villamerz");
var papel = vm.getContext("2d");

var fondo = {
    url: "tile.webp",
    cargaOK: false
};

var vaca = {
    url: "vaca.webp",
    cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url; 
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}

function cargarVaca() {
    vaca.cargaOK = true;
    dibujar();
}

function dibujar(){
    if (fondo.cargaOK == true){
        papel.drawImage(fondo, 0, 0);
    }
}

function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min +1)) + min;
    return resultado;
}