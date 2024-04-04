const form = document.querySelector("form");
const list = document.querySelector("ol");
const input = document.querySelector("form input");

form.addEventListener("submit", (e) => {
  // Prevenir el comportamiento por defecto del form (evita que se recargue la pagina)
  e.preventDefault();

  crearNombre();
});

function crearNombre() {
  let value = input.value;

  // si value de input no es vacio --> se crea el elmento y se añade a la lista
  if (value !== "") {
    const li = `<li>${value}</li>`;
    list.innerHTML += li;
  }
}
