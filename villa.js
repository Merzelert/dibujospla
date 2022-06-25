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

var pollo = {
    url: "pollo.webp",
    cargaOK: false
};

var cerdo = {
    url: "cerdo.webp",
    cargaOK: false
};

var cantidad = aleatorio (5, 25);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url; 
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);


function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}

function cargarVaca() {
    vaca.cargaOK = true;
    dibujar();
}

function cargarPollo() {
    pollo.cargaOK = true;
    dibujar();
}

function cargarCerdo() {
    cerdo.cargaOK = true;
    dibujar();
}

function dibujar(){
    if (fondo.cargaOK == true){
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOK == true) {
        for(var v = 0; v < cantidad; v++){
            var x = aleatorio (0, 4);
            var y = aleatorio (0, 4);
            var x = x * 80;
            var y = y * 80;
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if (pollo.cargaOK == true) {
        for(var v = 0; v < cantidad; v++){
            var x = aleatorio (0, 4);
            var y = aleatorio (0, 4);
            var x = x * 80;
            var y = y * 80;
            papel.drawImage(pollo.imagen, x, y);
        }
    }
    if (cerdo.cargaOK == true) {
        for(var v = 0; v < cantidad; v++){
            var x = aleatorio (0, 4);
            var y = aleatorio (0, 4);
            var x = x * 80;
            var y = y * 80;
            papel.drawImage(cerdo.imagen, x, y);
        }
    }
}

function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min +1)) + min;
    return resultado;
}