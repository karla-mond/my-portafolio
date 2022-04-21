// funciones, no se debe de poner el tipo de variable
function f(g) {
    let x = g*5;
    return x;
}

class point2D {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    print() {
        console.log(this.x, "-", this.y)
    }
}

let point1 = new point2D(3, 4)
point1.print()

let var1 = 1 // definir variable, no se debe establcer el tipo de variable
const var2 = 0.5 // variable estática, constante
let var3 = 'string'

console.log("Hello JS!")

// datos básicos: enteros, flotantes, strings
console.log(var1 + 5)
console.log(var1 * 2.5)
console.log(var3 + " adadasd")

console.log(f(6))

let var4 = [3, 4, 2, 1] //arreglo
let var5 = []
var5.push(4)
var5.push(4, 5, 6, 7)
console.log(var5)

for(let i=0; i<var5.length; i++) {
    console.log(var5[i], var5[i]%2)
}

// si no te importa realmente el índice de la lista
for(let n of var5) { 
    console.log(n -1)
}

let contador = 0
while(contador < 10) {
    console.log(contador)
    contador++
}

if(true) 
    console.log("True!")
else 
    console.log("False!")

if(contador == 10) 
    console.log("QWEQWE")
else 
    console.log("ZXCZXC")

let var6 = {
    a: "1",
    b: 2, 
    c: 4.5
}

console.log(var6.a)