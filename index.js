
// Datos de Entrada

// Arreglo de datos
const pizzaArray = [
  { id: 1, name: "4 Quesos", priceARS: 1950, image: "4quesos.png" },
  { id: 2, name: "Cebolla", priceARS: 1700, image: "cebolla.png" },
  { id: 3, name: "Ananá", priceARS: 1450, image: "anana.png" },
  { id: 4, name: "Especial", priceARS: 2125, image: "especial.png" },
  { id: 5, name: "Muzzarella", priceARS: 1530, image: "muzzarella.png" },
];
// Constantes
const pizzaIdInput = document.querySelector("#pizzaIdInput");
const searchButton = document.querySelector("#searchButton");
const resultContainer = document.querySelector("#resultContainer");

// Procedimiento Buscar

searchButton.addEventListener("click", () => {
  const pizzaId = parseInt(pizzaIdInput.value);
  
});buscarPizza(pizzaId);

// busco si existe el ID ingresado
const buscarPizza = (pizzaId) => {
  const pizza = findPizzaById(pizzaId);

  if (pizza) {
    // si el ID pizza existe renderizo el contenido del array y guardo la busqueda realizada
    renderizarPizza(pizza);
    guardarUltimaPizzaBuscada(pizzaId);
  } else {
    // valido que el valor a buscar no sea vacio
    if (pizzaIdInput.value == "") {
      errorMensaje("No se ha ingesado ningun Identificador de Pizza");
      // valido que el valor que ingrese este dentro del array [1,5]
    } else {
      errorMensaje("No se ha encontrado el Identificador de Pizza ingresado");
    }
  }
};

// funcion para buscar el ID de la pizza en el Array
const findPizzaById = (id) => {
  return pizzaArray.find((pizza) => pizza.id === id);
};

// funcion para renderizar el contenido del array mostrando el Nombre de la pizza, imagen y precio Argentino.
const renderizarPizza = (pizza) => {
  resultContainer.innerHTML = ` <div class="pizza-card">
      <h2>${pizza.name}</h2>
      <img src="img/${pizza.image}" alt="${pizza.name}">
      <p>Precio: $${pizza.priceARS.toLocaleString()} ARS</p>
    </div>
  `;
};

// funcion para mostrar los mensajes de error
const errorMensaje = (mensaje) => {
  resultContainer.innerHTML = `
    <P class="error-message">${mensaje}</P>
  `;
};
// funcion que utilizo si el ID de la pizza es valido para guardar la ultima busqueda
const guardarUltimaPizzaBuscada = (pizzaId) => {
  localStorage.setItem("ultimaPizzaBuscada", JSON.stringify(pizzaId));
};


