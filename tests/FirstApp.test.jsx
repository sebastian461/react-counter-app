import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en FirstApp", () => {
  /* test("debe hacer match con el snapshot", () => {
    const edad = 25;
    //Lo que cambia entre una prueba JS y una JSX es la necesidad de renderizar el componente
    //esto hace las comprobaciones para ver que nada falla en el DOM
    //por eso se hace uso del 'react-testing-library' 
    const { container } = render(<FirstApp edad={edad}></FirstApp>);

    //Esto crea una representación HTML de lo que se renderiza (la primera vez que se ejecuta) 
    //para luego tener un punto de comparación en caso de que algo cambie
    //(en caso de que el componente cambie mucho, no sería recomendable usarlo)
    expect(container).toMatchSnapshot();
  }); */

  test("debe mostrar el genero en un parrafo", () => {
    const genero = "Masculino";
    const { container, getByText, getByTestId } = render(
      <FirstApp genero={genero} />
    );

    expect(getByText(`Genero: ${genero}`)).toBeTruthy();

    //const p = container.querySelectorAll("p");
    //expect(p[1].innerHTML).toContain(`Genero: ${genero}`);

    expect(getByTestId("test-genero").innerHTML).toContain(genero);
  });
});
