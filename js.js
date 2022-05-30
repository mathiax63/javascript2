//Crear un documento html con 3 cuadrados que, al ser clickeados, cambien el color de fondo del documento. Cada cuadrado debera tener un color distinto.

let cuadrado1 = document.getElementById("cuadrados1")
let cuadrado2 = document.getElementById("cuadrados2")
let cuadrado3 = document.getElementById("cuadrados3")


//let cuadrados = document.getElementById("cuadrados1"); // Encuentra el elemento con el document
/*
cuadrados1.onclick = cambiaColor; // Agrega función onclick al elemento
  
function cambiaColor(evento) { 
cuadrados1.style.backgroundColor = colores[0]
}
*/
let colores = []
 colores[0] =""
 colores[1] =  "#000066"
 colores[2] =  "#ff402045"
 colores[3] =  "#ff504046"
 colores[4] =  "#ff801056"
 colores[5] =  "#99FF99"
 colores[6] =  "#000000"
 colores[7] =  "#CC3300"
 colores[8] =  "#FF6666"
 colores[9] = "#FFF56199"

 let contador = 0
 function corredorDeColores(){
     //console.log("pase?")
     
  if(contador>=8){
    contador=0
  }
     contador++
     cuadrado1.style.backgroundColor = colores[contador]
     cuadrado1.style.backgroundColor = colores[contador]
 }
 cuadrado1.onclick = corredorDeColores


 let colores2 = []
 colores2[0] =""
 colores2[1] =  "#000016"
 colores2[2] =  "#ff408045"
 colores2[3] =  "#ff504046"
 colores2[4] =  "#ff807056"
 colores2[5] =  "#99FF79"
 colores2[6] =  "#000050"
 colores2[7] =  "#CC3350"
 colores2[8] =  "#FF6626"
 colores2[9] = "#FFF56399"

let contador2 =0
 function corredorDeColores2(){
     //console.log("pase?")
     
  if(contador2>=8){
    contador2=0
  }
  //console.log("h")
     contador2++
     cuadrado2.style.backgroundColor = colores2[contador2]
     cuadrado2.style.backgroundColor = colores2[contador2]
 }
 cuadrado2.onclick = corredorDeColores2











 let colores3 = []
 colores3[0] =""
 colores3[1] =  "#100016"
 colores3[2] =  "#ff108045"
 colores3[3] =  "#ff904046"
 colores3[4] =  "#ff107056"
 colores3[5] =  "#92FF79"
 colores3[6] =  "#111050"
 colores3[7] =  "#CC1350"
 colores3[8] =  "#FF1626"
 colores3[9] = "#FFF26399"

let contador3 =0
 function corredorDeColores3(){
     //console.log("pase?")
     
  if(contador3>=8){
    contador3=0
  }
  
     contador3++
     cuadrado3.style.backgroundColor = colores3[contador3]
     cuadrado3.style.backgroundColor = colores3[contador3]
 }
 cuadrado3.onclick = corredorDeColores3












 


//Programar un contador de caracteres para un textarea.



let texto = prompt("ingrese texto")

let resultado=texto.length

console.log(resultado)









//Dado el siguiente array de alumnos utilizar
// los métodos de array vistos para generar un array con los alumnos aprobados. Se considera aprobado todo alumno que tenga una nota mayor o igual a 7.



var alumnos = [
    {
      nombre: 'Juan Gomez',
      nota: 7
    }, {
      nombre: 'Pedro Rodriguez',
      nota: 4
    }, {
      nombre: 'Roxana García',
      nota: 8
    }, {
      nombre: 'Luciano Lopez',
      nota: 5
    }, {
      nombre: 'Fernanda Gimenez',
      nota: 6
    }, {
      nombre: 'Florencia Martinez', 
      nota: 10
    }, {
      nombre: 'Raul Sanchez',
      nota: 7
    }, {
      nombre: 'Sandra Figueroa',
      nota: 8
    }  
  ];
  let aprobados = " "
  let alumnosAprobados = alumnos.map(function(alumno){
      if (alumno.nota >= 7){
          aprobados += alumno.nombre
          return aprobados + " "
      }

  })
  console.log(aprobados + " ")