const pizzaArray = [
  { id: 1, name: "4 Quesos", priceARS: 1950, image: "4quesos.png" },
  { id: 2, name: "Cebolla", priceARS: 1700, image: "cebolla.png" },
  { id: 3, name: "Ananá", priceARS: 1450, image: "anana.png" },
  { id: 4, name: "Especial", priceARS: 2125, image: "especial.png" },
  { id: 5, name: "Muzzarella", priceARS: 1530, image: "muzzarella.png" },
];

const pizzaIdInput = document.querySelector("#pizzaIdInput");
const searchButton = document.querySelector("#searchButton");
const resultContainer = document.querySelector("#resultContainer");

const buscarPizza = (pizzaId) => {
  const pizza = findPizzaById(pizzaId);

  if (pizza) {
    renderizarPizza(pizza);
    guardarUltimaPizzaBuscada(pizzaId);
  } else {
    errorMensaje("La pizza no se encontró");
  }
};

const findPizzaById = (id) => {
  return pizzaArray.find((pizza) => pizza.id === id);
};

const renderizarPizza = (pizza) => {
  resultContainer.innerHTML = 
  ` <div class="pizza-card">
      <h2>${pizza.name}</h2>
      <img src="img/${pizza.image}" alt="${pizza.name}">
      <p>Precio: $${pizza.priceARS.toLocaleString()} ARS</p>
    </div>
  `;
};

const errorMensaje = (mensaje) => {
  resultContainer.innerHTML = `
    <P class="error-message">${mensaje}</P>
  `;
};

const guardarUltimaPizzaBuscada = (pizzaId) => {
  localStorage.setItem("ultimaPizzaBuscada", JSON.stringify(pizzaId));
};

searchButton.addEventListener("click", () => {
  const pizzaId = parseInt(pizzaIdInput.value);
  buscarPizza(pizzaId);
});


