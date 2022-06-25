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

var cantidad = aleatorio (5, 25);

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
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOK == true) {
        for(var v = 0; v < cantidad; v++){
            var x = aleatorio (0, 420);
            var y = aleatorio (0, 420);
            papel.drawImage(vaca.imagen, x, y);
        }
    }
}

function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min +1)) + min;
    return resultado;
}