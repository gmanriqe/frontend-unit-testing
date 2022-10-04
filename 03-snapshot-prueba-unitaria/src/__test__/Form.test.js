import React from "react"
import { create, act } from "react-test-renderer"
import Form from "../components/Form"

let component;

const props = {
    history: {},
    handleSubmit: () => { }
}

describe("<Form />", () => {
    beforeEach(() => {
        component = create(<Form {...props} />)
    })

    it("Renderiza correctamente", () => {
        expect(component).toBeDefined()
        /*
        expect(component.toJSON().type).toEqual("form")
        expect(component.root.findByType("input")).toBeDefined() // que busque en el componente si el elemento existe
        expect(component.root.findByType("button")).toBeDefined() // que busque en el componente si el elemento existe
        expect(component.findByType("svg")).toBeDefined() // que busque en el componente si el elemento existe
        */
    })

    it("Boton debe habilitarse si tiene un valor no vacio", () => {
        console.log(component.root)
        // const form = component.root.findByType("form")
        // const input = form.findByType("input") // buscar un elemento input
        // const button = form.findByType("button") // buscar un elemento button

        // expect(button.props.disabled).toBeTruthy()
        // expect(button.prop.className).toEqual("Search-button null")

        act(() => {
            input.props.onChange({ target: { value: "aves" } })
        })

        expect(button.props.disabled).tobeFalsy()
        expect(button.props.className).toEqual("search-button active")
    })
})
