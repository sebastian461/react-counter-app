import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Pruebas en CounterApp", () => {
  test("snapshot", () => {
    const value = 0;
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test("debe renderizar con valor 100", () => {
    const value = 100;
    render(<CounterApp value={value} />);
    /* El 'screen' es el objeto renderizado del componente */
    expect(screen.getByText(100)).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      "100"
    );
  });

  test("debe incrementar con el botón +1", () => {
    render(<CounterApp value={10} />);

    /* Con esta importación se pueden ejecutar eventos en los test */
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText(11)).toBeTruthy();
  });

  test("debe decrementar con el botón -1", () => {
    render(<CounterApp value={10} />);

    /* Con esta importación se pueden ejecutar eventos en los test */
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText(9)).toBeTruthy();
  });

  test("debe funcionar el botón reset", () => {
    render(<CounterApp value={10} />);

    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));

    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    expect(screen.getByText(10)).toBeTruthy();
  });
});
