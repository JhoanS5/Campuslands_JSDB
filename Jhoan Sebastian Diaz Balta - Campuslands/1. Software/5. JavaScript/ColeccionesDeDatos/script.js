/*
Para declarar arreglos.

const autos = ["Susuki", "Ford"];

const autos2 = [];

autos2[0] = "Toyota";
autos2[1] = "Mazda";

const autos3 = new Array("BMW", "Audi");



*/

const numeros = [1,2,3,4,5];
numeros.splice(2,1,6,7);

// Empieza en indice 2, elimina 1 valor, agrega el 6, 7 en su lugar
console.log(numeros);

/*
Recorrer set
*/

const miSet = new Set(["a","b","c"]);

for (let valor of miSet){
    console.log(valor);
}

/*
<form>
<input name = "nombre" value = "Juan">

</form>

const form = document.querySelector("form");
const formData =  new formData(form);
*/ 