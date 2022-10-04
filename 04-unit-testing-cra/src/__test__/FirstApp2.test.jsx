import { render, screen } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe("<FirstApp>", () => {
  const title = "Hola, soy Goku";
  const subTitle = "No hay subtítulo";

  test("Debe hacer snapshot del componente", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test("Usando SCREEN", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("Debe de mostrar el titulo en un H1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toBe(title)
  });

  test("Evaluar que los subtitulos pasen por props", () => {
    render(<FirstApp title={title} />);
    expect(screen.getAllByText(subTitle).length).toBe(2)
  });
});
