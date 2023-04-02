import {useState, useEffect} from "react";
function Contador(){
    const [contador, setContador] = useState(0); //useState es un hook y en este ejemplo le estamos diciendo que el estado inicial es 0. Este hook retorna un array con dos elementos, el primero es el estado y el segundo es una funcion que nos permite modificar el estado
    // useState es un hook que nos permite actualizar el estado de un componente, como cambiar su valor
    useEffect(()=>{
        console.log("se actualizo el contador");
    }, [contador]) // useEffect es un hook que nos permite ejecutar codigo cuando se actualiza el estado de un componente. En este ejemplo se ejecuta cuando se actualiza el estado del contador. El segundo parametro es un array que contiene las variables que se deben actualizar para que se ejecute el codigo. Si el array esta vacio se ejecuta solo una vez cuando se renderiza el componente
    return <div>
        {/* contador con funcion flecha y hook. Es necesario importar useState y usarlo en la funcion para que funcione correctamente */}
        <h1>contar: {contador}</h1>
        <button onClick={()=>{setContador(contador+1)}}>incrementar</button>
    </div>
}

export {Contador}