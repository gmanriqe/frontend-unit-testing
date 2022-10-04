import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from "../CounterApp";

describe("<CounterApp/>", () => {
  const initialValue = 10;

  // snapshot del componente
  test("Snapshot del componente", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  // validar que el valor ingresado sea 100
  test("Inicio del valor en 100", () => {
    render(<CounterApp value={initialValue} />);
    expect(screen.getByText(initialValue)).toBeTruthy();
  });

  // Click (Interaccion de usuario +1)
  test("Debe incrementar +1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("11")).toBeTruthy();
  });

  // Click (Interaccion de usuario -1)
  test("Debe decrementar -1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("9")).toBeTruthy();
  });

  // Click (Interaccion de usuario reset)
  test("Debe setear 10", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("Reset"));
    expect(screen.getByText("10")).toBeTruthy();

    screen.debug();
  });
});
