import { render, screen } from "@testing-library/react";
import { FirstApp, Message } from "../FirstApp";

describe("<FirstApp/>", () => {
  const title = "Hola, Soy Goku";

  // ✅ Prueba 01
  test("Renderizado correctamente", () => {
    expect(render(<FirstApp title={title} />)).toBeDefined();
  });

  // ✅ Pruebas cuando quieres dejar prueba y asegurarte que el componente no sufra cambios a futuro
  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot(); // Para verificar en un futuro si cambiaron tu componente
  });

  // ✅ Prueba para validar que sea el titulo que se indica
  test("Debe mostrar el titulo en un h1", () => {
    // Obteniendo el componente <FirstApp>
    const { container, getByText } = render(<FirstApp title={title} />);

    // validar que en lo renderizado exista el texto
    expect(getByText(title)).toBeTruthy();

    // container es una propiedad que retorna todos los todos del componente seleccionado previamente
    const elemH1 = container.querySelector("h1");

    // validar que el valor obtenido del elemento H1 sea igual al titulo
    expect(elemH1.innerHTML).toBe(title); // .toContainer() metodo en el caso sea indiferente los espacios al inicio y al final
  });

  // ✅ Prueba para validar un atributo del elemento HTML
  test("Debe validar el valor de un atributo HTML", () => {
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );

    expect(screen.getByTestId("test-title").innerHTML).toBe(title);
  });

  // ✅
  test("Renderizando correctamente", () => {
    render(<Message />);

    // Matching a string:
    screen.getByText("Hello World"); // full string match

    // Matching a regex:
    screen.getByText(/World/); // substring match
    screen.getByText(/world/i); // substring match, ignore case
  });
});
