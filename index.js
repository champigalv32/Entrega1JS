const Pizzas = [
{
    Id: 1,
    Nombre: "Muzzarela",
    Ingredientes: ["Harina de trigo", "Salsa de Tomate", "Queso", "Oregano"],
    Precio: 550,
},
{
    Id: 2,
    Nombre: "Fugazetta",
    Ingredientes: ["Harina de trigo", "Cebolla", "Queso"],
    Precio: 650,
},
{
    Id: 3,
    Nombre: "Napolitana",
    Ingredientes: ["Harina de trigo", "Tomate", "Queso", "Provenzal"],
    Precio: 710,
},
{
    Id: 4,
    Nombre: "Especial",
    Ingredientes : ["Harina de trigo", "Salsa de Tomate", "Queso", "Jamon", "Morron"],
    Precio: 850,
},
{
    Id: 5,
    Nombre: "Especial con huevo",
    Ingredientes : ["Harina de trigo", "Sala de Tomate", "Queso", "Jamon", "Morron", "Huevo"],
    Precio: 900,
},
{
    Id: 6,
    Nombre: "Calabresa",
    Ingredientes : ["Harina de trigo", "Queso", "Salame"],
    Precio: 1000,
},
];

console.log(Pizzas.length)


/* Crear una iteración del array que imprima en consola:

a) Las pizzas que tengan un id impar.*/

const idimpares = Pizzas.filter( pizza => pizza.Id % 2 == 1 ) 
idimpares.forEach((pizza) => {
    console.log( `La pizza ${pizza.Nombre} tiene id par`)
});

/* b) ¿Hay alguna pizza que valga menos de $600? */

const PizzaBarata = Pizzas.filter (pizza => pizza.Precio < 600 )
PizzaBarata.forEach ((pizza) =>{
    console.log(` La pizza ${pizza.Nombre} cuesta menos de $600 ` )
});

/* c) El nombre de cada pizza con su respectivo precio.*/

const ListadePizzas = Pizzas.filter (pizza => pizza.Nombre && pizza.Precio)
ListadePizzas.forEach ((pizza) => {
console.log(` La pizza ${pizza.Nombre} tiene un precio de $${pizza.Precio}` )
});

/* d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.*/

const IngredientesGeneral= Pizzas.filter (pizza => pizza.Ingredientes)
    IngredientesGeneral.forEach ((pizza) => {
    console.log (`Los ingredientes de la Pizza ${pizza.Nombre} son: `)
    console.log (`${pizza.Ingredientes} `)
});

        





