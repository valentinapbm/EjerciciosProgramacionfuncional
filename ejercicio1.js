//Ejercicio1
// utilizar el método map de los arreglos para duplicar cada elemento
const arr = [1, 2, 3, 4, 5, 6];
const duplicateArray= arr.map(function(e){
    return e *2;
})
console.log(duplicateArray); // [2, 4, 6, 8, 10, 12]

// utilizar el método filter para filtrar los números pares de arr
const filterArray= arr.filter(function(number){
    return number%2===0;
})
console.log(filterArray);
// [2, 4, 6]

// utilizar el método reduce para sumar todos los elementos
// 21

const sum= arr.reduce(function(a,b){
    return (a + b)
})
console.log(sum);