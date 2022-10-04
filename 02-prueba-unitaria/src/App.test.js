import React from "react"
import { create } from "react-test-renderer"
import App from './App';

// Para verificar si el componente se esta renderizando correctamente
describe("<App />", () => { // describe => metodo que me ayuda a describir la prueba unitaria
    let component
    let header
    
    beforeAll(() => {
        component = create(<App/>)
        header = component.root.findByType("header")
    })

    // CASO PRUEBA 1
    it("Renderiza correctamente", () => {
       
        expect(component).toBeDefined()
    })

    // CASO PRUIEBA 2
    it("Renderiza el header correctamente", () => {
        
        expect(header).toBeDefined()
        expect(header.props.className).toEqual("App-header")
    })

    // CASO PRUEBA 3
    it("Renderiza un texto, un link y una imagen", () => {        
        const img = header.findByType("img")
        const a = header.findByType("a")
        const p = header.findByType("p")

        expect(img).toBeDefined() // si esta definido en el componente
        expect(img.props.className).toEqual("App-logo") // si tiene un atributo de clase App-logo
        expect(img.props.src).toEqual("logo.svg") // si tiene un atributo de src logo.svg
        expect(a).toBeDefined() // si esta definido en el componente
        expect(p).toBeDefined() // si esta definido en el componente
        expect(p.findByType("code")).toBeDefined() // si dentro del elemento p tenemos un elemento code
    })
})


