const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];


const formularioBusqueda = document.querySelector("#formularioBusqueda");
const inputNumero = document.querySelector("#numeroPizza");
const buscarBtn = document.querySelector("#buscarBtn");
const resultadoContainer = document.querySelector("#resultado");

formularioBusqueda.addEventListener("submit", (event) => {
    event.preventDefault();

    const numeroPizza = parseInt(inputNumero.value);

    const pizzaEncontrada = pizzas.find(pizza => pizza.id === numeroPizza);

    if (isNaN(numeroPizza)) {
        resultadoContainer.innerHTML = "<p>Por favor, ingresa un número válido.</p>";
    } else if (pizzaEncontrada) {
        resultadoContainer.innerHTML = `
            <div class="card">
                <img src="${pizzaEncontrada.imagen}" alt="${pizzaEncontrada.nombre}">
                <h2>${pizzaEncontrada.nombre}</h2>
                <p>Precio: $${pizzaEncontrada.precio.toFixed(2)}</p>
            </div>
        `;

        localStorage.setItem("ultimaPizza", JSON.stringify(pizzaEncontrada));
    } else {
        resultadoContainer.innerHTML = "<p>No se encontró ninguna pizza con ese número.</p>";
    }
});

const ultimaPizzaGuardada = JSON.parse(localStorage.getItem("ultimaPizza"));

if (ultimaPizzaGuardada) {
    resultadoContainer.innerHTML = `
        <div class="card">
            <img src="${ultimaPizzaGuardada.imagen}" alt="${ultimaPizzaGuardada.nombre}">
            <h2>${ultimaPizzaGuardada.nombre}</h2>
            <p>Precio: $${ultimaPizzaGuardada.precio.toFixed(2)}</p>
        </div>
    `;
}
;

