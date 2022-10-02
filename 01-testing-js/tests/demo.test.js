
describe('Pruebas en <DemoComponent />', () => { // Agrupo mi prueba con un titulo
    
    test('Esta prueba no debe de fallar', () => {
    
        // 1. inicialización
        const message1 = 'Hola Mundo';
    
        // 2. estímulo
        const message2 = message1.trim();
        
        // 3. Observar el comportamiento... esperado
        expect( message1 ).toBe( message2 ); // Por detras quiere decir: message1 es igual a message2
    });
    
});