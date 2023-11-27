import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const counter = () => {
    console.log("+1");
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
      {/* Está es la sintaxis para agregar eventos, en este caso un evento click */}
      <button onClick={counter}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
