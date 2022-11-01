
alert("Bienvenido/a a un carrito de compras de Tacos \nTenemos: \nTacos $10 \nAguas $20")

let taco = 10
let agua = 20
let opcion

do {
    opcion = parseInt(prompt("Agrega cuantas aguas y tacos necesites pero toma en consideración que tu total solo considerará la última suma de tacos o aguas. \n1. Agregar tacos \n2. Agregar agua \n3. Solicitar tu total \n4. Completar la compra"))
    if (opcion === 1) {
        taco = parseInt(prompt("Agrega cantidad de Tacos")) * taco
        console.log(taco)
    } else if (opcion === 2) {
        agua = parseInt(prompt("Agrega cantidad de Aguas")) * agua
        console.log(agua)
    }
    else if (opcion === 3) {
        let total = taco + agua
        console.log("El total de tu pedido es de " + total)
    }
    else {
    }

} while ((opcion != 4))