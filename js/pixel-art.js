var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var paleta = document.getElementById("paleta");
var grillaPixeles = document.getElementById("grilla-pixeles");
var capturarMovimientoDeMouse;
var botonBorrar = document.getElementById("borrar");
var botonGuardar = document.getElementById("guardar");
var imgBatman = document.getElementById("batman");
var imgWonder = document.getElementById("wonder");
var imgFlash = document.getElementById("flash");
var imgHomer = document.getElementById("homer");

grillaPixeles.addEventListener("mousedown", (function() {
  capturarMovimientoDeMouse = true;
  console.log("mouseDown")
}));

grillaPixeles.addEventListener("mouseup", (function() {
  capturarMovimientoDeMouse = false;
  console.log("mouseUp")
}));

botonBorrar.addEventListener("click", (function () {
  $("#grilla-pixeles div").animate({"background-color": "white"}, 1000);
}));

botonGuardar.addEventListener("click", (function(){
  guardarPixelArt();
}));

imgBatman.addEventListener("click", (function() {
  cargarSuperheroe(batman);
}));

imgWonder.addEventListener("click", (function() {
  cargarSuperheroe(wonder);
}));

imgFlash.addEventListener("click", (function() {
  cargarSuperheroe(flash);
}));

imgHomer.addEventListener("click", (function() {
  cargarSuperheroe(homer);
}));

function recorrerColores(colores){
  for (var i = 0; i < colores.length; i++) {
    var nuevoDiv = document.createElement("div");
    nuevoDiv.style.backgroundColor = colores[i];
    nuevoDiv.id = "color-paleta";
    nuevoDiv.addEventListener("click", seleccionarColor);
    paleta.appendChild(nuevoDiv);
  }
};

function seleccionarColor(e) {
  var color = e.target.style.backgroundColor;
  var indicador = document.getElementById("indicador-de-color");
  indicador.style.backgroundColor = color;
};

function crearGrillaDePixeles() {
  for (var i = 0; i < 1750; i++) {
    var pixel = document.createElement("div");
    pixel.addEventListener("mouseover", pintar);
    grillaPixeles.appendChild(pixel);
  }
};

function pintar(e) {
  if (capturarMovimientoDeMouse) {
    var selector = document.getElementById("indicador-de-color");
    e.target.style.backgroundColor = selector.style.backgroundColor;
  }
};


// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    var selector = document.getElementById("indicador-de-color");
    selector.style.backgroundColor = colorActual;
  })
);

recorrerColores(nombreColores);
crearGrillaDePixeles();
