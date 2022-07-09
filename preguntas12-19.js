//      Preg 12
function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    str_segundo = new String (segundo)
    if (str_segundo.length == 1)
       segundo = "0" + segundo

    str_minuto = new String (minuto)
    if (str_minuto.length == 1)
       minuto = "0" + minuto

    str_hora = new String (hora)
    if (str_hora.length == 1)
       hora = "0" + hora

    horaImprimible = hora + " : " + minuto + " : " + segundo

    document.form_reloj.reloj.value = horaImprimible

    setTimeout("mueveReloj()",1000)
}
//      Preg 14
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
//      Preg 16
var dupli = 0;
do {
    var numero = prompt("INTRODUCE UN NUMERO");
    if (Number(numero) == numero) {
          numero = Number(numero);
          dupli = dupli + numero;
    }
    else {
       if (numero != undefined) {
       alert(numero + " ESTO NO ES UN NUMERO ");
       }
    }
} while (numero != undefined);
document.write(dupli);
//      Preg 17
System.out.println("Lectura de los elementos del array: ");
for (i = 0; i < 10; i++) {
    System.out.print("numeros[" + i + "]= ");
    numeros[i]=sc.nextInt();
}
for (i = 0; i < 10; i++) {
    if (numeros[i] > 0){ //sumar positivos
        sumaPos += numeros[i];
        pos++;
    } else if (numeros[i] < 0){ //sumar negativos
        sumaNeg += numeros[i];
        neg++;
    }
}
if (pos != 0) {
    System.out.println("Media de los valores positivos: " + sumaPos / pos);                
} else {
    System.out.println("No ha introducido numeros positivos");
}
if (neg != 0) {
    System.out.println("Media de los valores negativos: " + sumaNeg / neg);
} else {
    System.out.println("No ha introducido numeros negativos");
}
//      Preg 18
const regalos = listGifts(carta)
console.log(regalos)
var cajon = prompt("Introduce tu nota");
if (Number(cajon) == cajon) {
	if (cajon > 0 && cajon <= 10) {
		if (cajon < 3) {
			alert("Muy deficiente");
		}
		else if (cajon < 5) {
			alert("Insuficiete");
		}
		else if (cajon < 6) {
			alert("Suficiente");
		}
		else if (cajon < 7) {
			alert("Bien");
		}
		else if (cajon < 9) {
			alert("Notable"); 5
		}
		else if (cajon >= 9) {
			alert("Sobresaliente");
		}
	}
	else {
		alert("Nota erronea");
	}
}
else {
	if (cajon != undefined) {
		alert("Introduce un numero valido");
	}
}
while (cajon != undefined);