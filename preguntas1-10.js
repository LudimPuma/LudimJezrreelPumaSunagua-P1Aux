//      Preg 1
let edad = prompt("INTRODUCE TU EDAD"); 
if (edad > 18) {
   document.write("PUEDES CONDUCIR");
  console.log("mayor");
}
else {
  alert("NO PUEDES CONDUCIR");
  console.log("menor");
}
//      Preg 2
var resultado = "";
do {
    var cadena = prompt("Introduce una cadena");
    if (resultado == "") {
        resultado = resultado + cadena;
    }
    else {
        resultado = resultado + "-" + cadena;
    }
} while (confirm("Desea seguir?"));
document.write(resultado);
//      Preg 3
var nombre1 = prompt("Nombre 1:");
var edad1 = Number(prompt("Edad 1:"));
var nombre2 = prompt("Nombre 2:");
var edad2 = Number(prompt("Edad 2:"));
var nombre3 = prompt("Nombre 3:");
var edad3 = Number(prompt("Edad 3:"));
var maximo = Math.max(edad1, edad2, edad3);
if (maximo == edad1) {
    document.write("El mayor es: " + nombre1);
}
if (maximo == edad2) {
    document.write("El mayor es: " + nombre2);
}
if (maximo == edad3) {
    document.write("El mayor es: " + nombre3);
}
//      Preg 4
var num = Math.floor((Math.random() * 99) + 1);
document.write(num);
var i = 0;
var num;
var uno = 0;
var dos = 0;
var tres = 0;
do {
    num = Math.floor((Math.random() * 99) + 1);
    if ((num != uno) && (num != dos) && (num != 3)) {
        document.write(num + "<br>");
        i++;
        if (i == 1) {
            uno = num;
        }
        if (i == 2) {
            dos = num;
        }
        if (i == 3) {
            tres = num;
        }
    }
} while (i < 3);
//      Preg 5
var cadena = prompt("Introduce una cadena de texto:");
var numchar = cadena.length;
cadena = cadena.toUpperCase();  
var car;
var contador = 0;
var i;
for (i = 0; i < numchar; i++) {
    car = cadena.charAt(i);   
    if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) {
        contador++;
    }
}
document.write("Número de Vocales: " + contador + ".");
//      Preg 6
var cadena = prompt("Introduce un Texto que contenga paréntesis:");
var numchar = cadena.length;
var j;
var car;
var salida = "";
var copiar = false;    
for (j = 0; j < numchar; j++) {
	car = cadena.charAt(j);    
	if (car == ")") {
        copiar = false;
    }
    if (copiar) {
        salida = salida + car;
    }
    if (car == "(") {
        copiar = true;
    }
}
document.write(salida);
//      Preg 7
var cadena = prompt("Introduce un Texto:");
var numchar = cadena.length;
var j;
var car;
var salida = "";
for (j = 0; j < numchar; j++) {
    car = cadena.charAt(j);
    salida = car + salida;
}
document.write(salida);
//      Preg 8
var numero = Number(prompt("Introduce un número entre 1 y 100"));
if((numero >= 1) && (numero <= 100)) {
    var x = 0;
    var y = 1;
    var z;
    document.write(x + "<br>");
    for (i = 0; i < (numero-1); i++) {
        z = x + y;
        document.write(z + "<br>");
        y = x;
        x = z;
    }
}
else {
    alert("Número erróneo");
}
//     Preg 9
var jugados = 0;
var ganados = 0;
var perdidos = 0;
do {
    var jugada = prompt("Escribe \"piedra\", \"papel\" o \"tijera\"");
    var aleatorio = Math.floor((Math.random() * 9) + 1);
    var elige = "";
    if (aleatorio <= 3) {
        elige = "piedra";
    }
    else if (aleatorio <= 6) {
        elige = "papel";
    }
    else {
        elige = "tijera";
    }
    if ((jugada == "piedra") && (elige == "piedra")) {
        alert(jugada+"-"+elige+": Empate");
    }
    else if ((jugada == "piedra") && (elige == "papel")) {
        alert(jugada+"-"+elige+": Gana PC");
        perdidos++;
    }
    else if ((jugada == "piedra") && (elige == "tijera")) {
        alert(jugada+"-"+elige+": Gana Jugador");
        ganados++;
    }
    else if ((jugada == "papel") && (elige == "papel")) {
        alert(jugada+"-"+elige+": Empate");
    }
    else if ((jugada == "papel") && (elige == "tijera")) {
        alert(jugada+"-"+elige+": Gana PC");
        perdidos++;
    }
    else if ((jugada == "papel") && (elige == "piedra")) {
        alert(jugada+"-"+elige+": Gana Jugador");
        ganados++;
    }
    else if ((jugada == "tijera") && (elige == "tijera")) {
        alert(jugada+"-"+elige+": Empate");
    }
    else if ((jugada == "tijera") && (elige == "piedra")) {
        alert(jugada+"-"+elige+": Gana PC");
        perdidos++;
    }
    else if ((jugada == "tijera") && (elige == "papel")) {
        alert(jugada+"-"+elige+": Gana Jugador");
        ganados++;
    }
    jugados++;
} while (confirm("Jugar de nuevo"));
document.write("Partidas jugadas: "+jugados+"<br>");
document.write("Partidas ganadas: "+ganados+"<br>");
document.write("Partidas perdidas: "+perdidos+"<br>");
document.write("Partidas empatadas: "+(jugados-ganados-perdidos));
//      Preg 10
function masIva(precio, iva){
    iva = iva || 21
    var coniva = (precio + precio*iva/100);
    return coniva;
}
var precio = Number(prompt("Introduce un precio"));
var iva = Number(prompt("Introduce el iva"));
if(iva > 0){
    var resultado = masIva(precio, iva);
}
else{
    var resultado = masIva(precio);
}
document.write("Precio sin iva: " + precio);
document.write("<br>Precio más Iva: " + resultado);