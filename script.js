//Item 1//
function transformar(){
    var d = new Date();
    var segundototal= ((d.getHours()*3600)+(d.getMinutes()*60)+d.getSeconds());
    alert("Hora actual convertidos en segundos es de: " +segundototal);
}

//Item 2//
function AreaTriangulo(){
    let base = prompt("Ingrese la base del triángulo"); 
    let altura = prompt("Ingrese la altura del triángulo");
    let area = (base * altura) / 2; 
    alert(`El área del triángulo es ${area}`); 
}    

//Item 3//
AreaTriangulo();
function num7(){
    let num = prompt("Ingrese un número impar"); 
    if (num % 2 === 1) { 
      let raizCuadrada = Math.sqrt(num).toFixed(3); 
      alert(`La raíz cuadrada de ${num} es ${raizCuadrada}`); 
    } else {
      alert("El número ingresado no es impar"); 
    }
}

//Item 4//
function CadenaTexto(){
    let texto = prompt("Ingrese una cadena de texto"); 
    let longitud = texto.length;
    alert(`La longitud de la cadena de texto es ${longitud}`); 
}    

//Item 5//
function Array(){
let array1 = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
let array2 = ['Sábado', 'Domingo']; 
let arrayConcatenado = array1.concat(array2);
alert(`Los días de la semana son: ${arrayConcatenado}`);
}

//Item 6//
function Navegador(){
    let navegador = navigator.userAgent; 
    let version = ""; 
    if (navegador.indexOf("Chrome") != -1) {
      version = "Google Chrome";
    } else if (navegador.indexOf("Firefox") != -1) {
      version = "Mozilla Firefox";
    } else if (navegador.indexOf("MSIE") != -1) {
      version = "Internet Explorer";
    } else if (navegador.indexOf("Edge") != -1) {
      version = "Microsoft Edge";
    } else if (navegador.indexOf("Brave") != -1) {
      version = "Chromium Brave";
    } else {
      version = "Desconocido";
    }
    alert(`El navegador detectado es: ${version}`); 
}


//Item 7//
Navegador();
function Pantalla(){
    alert("Altura total es de: "+screen.height+"   Altura disponible es de:"+screen.availHeight+"   Anchura total es de:"+screen.width+"    Anchura disponible:"+screen.availWidth);
}


//Item 8//
function Imprimir(){
    window.print();
}
