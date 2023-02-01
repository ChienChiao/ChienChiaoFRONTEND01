console.log("inicio");
let Shelby =  document.getElementById("Shelby");
    
let Apodo = document.getElementById("Apodo");
//pruebas/
//let ApoLo = document.getElementByName("ApoLo");

let Resultado = document.getElementById("Resultado");

Apodo.onclick = function(){
     Resultado.innerHTML = "Shelby " + Shelby.value;
     console.log("HOLA");

}
