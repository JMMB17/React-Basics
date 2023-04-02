import React from "react";
import ReactDOM from "react-dom/client";
import Saludar from "./saludar";
import { Felicitar, Despedirse, Sumar, UserCard } from "./FuncionesVarias";
import { Button } from "./Button";
import { TaskCards } from "./Task";
import { Saludar2 } from "./ClaseSaludar";
import { Post } from "./Posts";
import { VscBug } from "react-icons/vsc"; // Despues de instalar la dependencia de react-icons importamos el icono que queremos usar
import { Contador } from "./Contador";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Creamos un array de objetos
const user = [
  {
    id: 1,
    nombre: "Michael",
    img: "https://robohash.org/user1",
  },
  {
    id: 2,
    nombre: "Juan",
    img: "https://robohash.org/user2",
  },
];

root.render(
  <>
    <Saludar />
    <Saludar />
    <Saludar />
    <Felicitar />
    <Despedirse />
    <Sumar a={2} b={3} />
    <Sumar a={5} b={3} />
    {/* <UserCard
      nombre="Michael"
      cantidad={100}
      casado={false}
      direccion={{ calle: "Calle falsa 123", ciudad: "Bogotá" }}
    /> */}
    <Button />
    <Button texto="aca mejor" />
    <Button texto="aca mejorsito" />
    <TaskCards />
    <Saludar2 />
    <form
      onSubmit={(e) => {
        e.preventDefault(); //evita que se recargue la pagina
        console.log("enviado");
      }}
    >
      <Button texto="Submit" />
    </form>
    <Post />
    <VscBug />
    {/* Recorremos el array de objetos con map y una funcion flecha // El key es
    para que react sepa que elemento es el que se esta renderizando // Si no se
    usa key react no sabe que elemento es el que se esta renderizando // y puede
    causar problemas // El key debe ser unico y para eso usamos el index //
    Notar que solo tiene index el div y no el h1 (el primer elemento es el que
    debe tener el id) */}
    {user.map((user, index) => {
      return (
        <div key={index}>
          <h1>{user.nombre}</h1>
          <img src={user.img}/>
        </div>
      );
    })}
    <Contador />
  </>
);
