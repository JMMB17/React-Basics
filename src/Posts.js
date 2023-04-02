export const Post = () => {
  return (
    <button
      onClick={() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json()) // convierte la respuesta en un json
        .then(data => console.log(data)) // imprime el json
        .catch(error => console.log(error)); // imprime el error si lo hay
        }}
    >
      Obtener datos
    </button>
  );
};
// Otra forma de crear una funcion flecha que es lo mismo que una funcion normal
// Obteniendo los datos de un backend (API) con fetch
