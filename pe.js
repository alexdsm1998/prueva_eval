var intentos=prompt('cuantos intentos desea tener');
var array=[];
var boolean=true;
var aciertos=0;
var palabras=['dani','buenas','como','estas','hoy'];
var aleat=Math.floor(Math.random()*palabras.length);
var adivinar=palabras[aleat];
var fallos=0;
var array=[];
var n = adivinar.length;

console.log(palabras);
console.log('numero de fallos',fallos);

for (var i = 0; i < n; i++) {
  array[i]='0'*i;
}

if(intentos>5 && intentos<=10){
while (fallos<intentos && aciertos<adivinar.length) {
boolean=true;
  var letrausu =prompt("introduce una  letra");
  while (boolean) {
      if (isNaN(letrausu)) {
        boolean=false;
      } else {
          var letrausu = prompt("tienes que introducir una letra");
          boolean=true;
          fallos++;
        }
      }

  var acertado=false;
  for (var i = 0; i < n; i++) {
    if (adivinar.charAt(i)==letrausu) {
      array[i]=adivinar.charAt(i);
      console.log(array);
      acertado=true;
      aciertos++;
    }
  }

  if (acertado==true) {
    alert("has acertado");
    console.log('numero de fallos',fallos);
  } else {
    alert("letra no encontrada");
    fallos++;
    console.log('numero de fallos',fallos);
  }

  if (letrausu=='fin' || letrausu=='FIN') {
    fallos=intentos;
    alert('el juego ha terminado');
  }
 }
}else {
  intentos=prompt('introduce un numero de intentos entre 5 y 10');
  while (fallos<intentos && aciertos<adivinar.length) {
  boolean=true;
    var letrausu =prompt("introduce una  letra");
    while (boolean) {
        if (isNaN(letrausu)) {
          boolean=false;
        } else {
            var letrausu = prompt("tienes que introducir una letra");
            boolean=true;
            fallos++;
          }
        }

    var acertado=false;
    for (var i = 0; i < n; i++) {
      if (adivinar.charAt(i)==letrausu) {
        array[i]=adivinar.charAt(i);
        console.log(array);
        acertado=true;
        aciertos++;
      }
    }

    if (acertado==true) {
      alert("has acertado");
      console.log('numero de fallos',fallos);
    } else {
      alert("letra no encontrada");
      fallos++;
      console.log('numero de fallos',fallos);
    }

    if (letrausu=='fin' || letrausu=='FIN') {
      fallos=intentos;
      alert('el juego ha terminado');
    }
   }
}
console.log(array);
