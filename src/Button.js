import PropTypes from 'prop-types';

export function Button(props) {
  return <button onClick={function(){
    console.log(props.texto);
  }}>{props.texto}</button>;
}
// Colocar restricciones a los props o a lo que se le pasa a la funcion como parametros
Button.propTypes = {
    texto: PropTypes.string.isRequired,
};
// Colocar valores por defecto a los props o a lo que se le pasa a la funcion como parametros
Button.defaultProps = { texto: "Default" };
