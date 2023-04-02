function Felicitar() {
  return <h1>¡Feliz cumpleaños!</h1>;
}
function Despedirse() {
  return <h1>¡Hasta luego!</h1>;
}
function Sumar(props) {
  return <h1>{props.a + props.b}</h1>;
}
function UserCard(props) {
  return (
    <div>
      <h1>{props.nombre}</h1>
      <p>{props.cantidad}</p>
      <p>{props.casado ? "Casado" : "Soltero"}</p>
      <p>{props.direccion.calle}</p>
      <p>{props.direccion.ciudad}</p>
    </div>
  );
}
export { Felicitar, Despedirse, Sumar, UserCard };
