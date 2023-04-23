const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 100,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


/* ¿Que debén hacer?

🔥 Utilizando métodos de array e iterando sobre el array de pizzas, realizar las siguientes actividades, imprimiendo en consola:

a)  Las pizzas que tengan un id impar.
b) Responder: ¿Hay alguna pizza que valga menos de $600?
c) El nombre de cada pizza con su respectivo precio.
d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

TODAS  las respuestas deben ser USER-FRIENDLY. 
Si (como en el punto B), la respuesta es un booleano (true o false, hay o no hay), no imprimir el booleano , imprimir en consola una respuesta que toda persona pueda entender, sepa o no de programación (Es decir, no podemos imprimir un array o un objeto en consola, por ejemplo).


 */

//EJERCICO A
console.log("....EJERCICIO A....");
console.log("Las pizzas con ID impar son:"); 
pizzas.forEach(pizza => {

  if (pizza.id %2 != 0) {
    
  console.log("La "+pizza.nombre+" "+"con el ID"+" "+"("+pizza.id+")");
  }
  
});

console.log("");

//EJERCICIO B
console.log("....EJERCICIO B....");
console.log("La o las pizzas que valen menos de $600 son:"); 

pizzas.forEach(pizza => {

  if (pizza.precio < 600) {
    
  console.log("La "+pizza.nombre+""+""+" ("+"$"+pizza.precio+")");
  }
  
});
console.log("");

//EJERCICIO C
console.log("....EJERCICIO C....");
console.log("Estos son los nombre de las pizzas con su precio:"); 
pizzas.forEach(pizza => {

  console.log("La pizza"+" "+pizza.nombre+" tiene un precion de: "+"$"+pizza.precio);
});
console.log("");

//EJERCICIO D
console.log("....EJERCICIO D....");
console.log("Los ingredientes de cada pizza son:"); 
console.log("");
pizzas.forEach(pizza => {

  console.log("La "+" "+pizza.nombre+" tiene: ");
  console.log(pizza.ingredientes.toString());
console.log("");
});