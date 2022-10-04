import React from "react"
import { create } from "react-test-renderer"
import Gallery from "../components/Gallery"

let component;

const props = {
    data: []
};

describe("<Gallery/>", () => {
    beforeEach(() => {
        component = create(<Gallery {...props}/>);
    })

    it("Renderiza correctamente", () => {
        expect(component).toBeDefined();
        // expect(component.root.findByType("div")).toBeDefined();
        expect(component.root.findByType("ul")).toBeDefined(); // si esta definido el elemento "ul"
    })

    it("Mientra NoImages si la data esta vacia", () => {
        expect(component.root.findByType(NoImages)).toBeDefined()
    })

    it("Renderiza las imagenes si la data existe o cambia", () => {
        const data = [
            { farm: "farmTest01"}
        ]
    })
})