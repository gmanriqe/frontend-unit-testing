// Tipos de Testing en el Frontend
/*
    1.Pruebas unitarias (unit testing)
    2.pruebas de integracion
    3.pruebas E2E
*/

// React-testing-renderer vs react-testing-library (curso fernando herrera)
/*
    - react-test-renderer es la librería de utilidades más básica que se entrega con React. De la documentación de React:
    - Para los que usan el bundle CRA sugiero que utilicen el que lleva por defecto react-testing-library 
    - React Testing Library es parte de la familia testing-library, está construida sobre react-test-renderer y está hecha para ser una solución bastante ligera.
*/

// 1.Pruebas unitarias (unit testing)
/*
    - Se enfocan en las pruebas mas pequeñas de nuestro proyecto (componentes reuzables, componentes globales)
    - Probar componentes por separado, quiere decir que no puedes hacer una prueba unitaria para probar 10 componentes
*/

// 2.pruebas de integracion
/*
    - Se base en la union de +1 componente y verificar su funcionalidad y la seguridad de los componentes que han sido integrados
*/

// 3.pruebas E2E (Son las mas costosas y llevan mas tiempo en escribirlas)
/*
    - Se encarga de promprobar flujos completos de la apliacion de inicio a fin. Ejm.: Transferencia a un banco (comprobamos desde el momento que el usuario ingresa el numero de tarjeta hasta que termina la transaccion)
    Verificamos que todas las vistas funcionen correctamenta.
*/

// Que es Test Runner
/*
    - Nos ayudan a implementar ambientes de pruebas para poder ejecutar nuestros componentes y colaborar su funcionamiento de manera automatica  
    - Existen muchos "test runner" y nosotros utilizaremos Jest para Javascript
*/

// Ejemplos de Test Runner para Unit Testing en Javascript
/*
    Jest (Creado por el equipo de facebook, y es quien tambien le crea Features al framework), mocha, Jazmin y ava
*/

// Que es Jest
/*
    - Es un Test Runner para ejecutar un ambiente de pruebas y podamos probar el funcionamiento de nuestros componentes
*/

// Que nos aportar Jest
/*
    - Zero config (Lo trae implementado create-react-app)
    - Snapshots (es una copia del arbol de tu componente que lo guardas en la carpeta de pruebas unitarias. Compara el componente del UI y el snapshot que se genera a la hora de ejecutar la prueba). Si es diferente, entonces algo cambio en tu UI inesperadamente
    - Isolated Test (todas las pruebas que ejecutamos en Jest, son aisladas del ambiente en desarrollo)
    - Api (La documentacion es muy buena y podemos ir a consultarla siempre)
*/

// expect()
/*
    - Es una funcion que ayuda a validar un componente de un componente que vamos a inspeccionar, o el valor de retorn de una funcion.
    - No es necesario importarlo
    - El argumento es el valor a probar
    - .matcher() metodo que viene incluido en la funcion expect(). Ejm: expect(tuFuncion()).toEqual(5)

    - Matcher + usados:
    toBeDefined() => que haya una valor definido
    toBeUndefined()
    toEqual(valor)
    toBe(valor) 
    toBeInstanceOf(valor) => cuando quieres corroborar si es una instancia
    toBeTruthy() => validas si el resultado es verdadero
    toBeGreaterThan(valor) => valida si el resultado es mayor al valor que envias como valor
    toHaveLength(valor) => cuando trabajas con arreglo y valida el tamaño
*/

// comando: --collectCoverage=true (packaje.json)
/*
    Es un comando esencial, y nos envia un porcentaje como unreporte de que parte de nuestro proyecto estamos haciendo pruebas
*/

// comando test a un archivo especifico: npm run test src/__test__/Gallery.test.js

// cuadro de resultados del test
/*
    Stmts: sentencias
    Branch:
    Funcs: funciones, metodos, y todas fueron ejecutadas correctamente
    Lines:
    Uncovered Line: lineas que no han sido cubiertas con pruebas unitarias
*/

// Instancias de TestRenderer
/*
    - testRenderer.toJSON() => Convierte el arbol en forma de objeto (Nos permite corroborar los tipos de elementos HTML)
    - testRenderer.toTree() => Convertirlo en arbol
    - testRenderer.update() => Actualizar para montar nuevamente el componente
    - testRenderer.unmount() => Desmontar un componente
    - testRenderer.getInstance() => La instancia de tu componente
    - testRenderer.root => Viene a ser la instancia del objeto raiz
*/

// Instancia de TestInstance
/*
    - Tambien hacer uso de los diferentes selectores del testInstance.
*/

// Repitiendo configuracion de algunos test
/*
    - Metodo que se ejecuta cada vez que se ejecuta un caso de Caso de Prueba
    beforEach(() => {

    })

    - Método que se ejecuta luego que se ejecuta cada Caso de Prueba
    afterEach(() => {

    })

    // Engloba todos los casos de prueba
    beforeAll() se ejecuta antes de ejecutar los Casos de Prueba
    afterAll() se ejecuta despues de ejecuitar los Casos de Prueba
*/

//
/*
*/

//
/*
*/

//
/*
*/

//
/*
*/


/*
*/

//
/*
*/

//
/*
*/

//
/*
*/

//
/*
*/

//
/*
*/


/*
*/

//
/*
*/

//
/*
*/

//
/*
*/

//
/*
*/

//
/*
*/


/*
*/

//
/*
*/

//
/*
*/

//
/*
*/

//
/*
*/


// ===============================
// Comandos
// ===============================
// para correr nuestro test: (configuracion por defecto con create-react-app)
/*
    npm run test
*/

//
/*
*/

//
/*
*/

//
/*
*/

//
/*
*/

//
/*
*/
