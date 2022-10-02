import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';


describe('Pruebas en 07-deses-arr', () => {
    
    test('debe de retornar un string y un número', () => {
        
        const [ letters, numbers ] = retornaArreglo();
        
        expect( letters ).toBe( 'ABC' ); // comparo contra el 1er elemento del arreglo
        expect( numbers ).toBe( 123 ); // comparo contra el 2do elemento del arreglo

        expect(typeof letters).toBe('string') // comparo el tipo de dato
        expect(typeof numbers).toBe('number') // comparo el tipo de dato

        expect( letters ).toEqual( expect.any(String) ); // espera cualquier tipo de string en el caso tengas una prueba similar

    });


});