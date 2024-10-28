const filtrarProductos = require('../js/productos');

// Escribir los tests debajo

//  Verificar que la funcion de filtrarProductos para "Todos los productos" muestre todas las categorias juntas.
       
    test('filtrarProductos', () => {
        const productosArray = [
            { categoria: 'camperas'},
            { categoria: 'pantalones'},
            { categoria: 'remeras'},
        ];
        const resultado = filtrarProductos(productosArray,'Todos los productos');
        expect (resultado).toEqual([{ categoria: 'camperas',categoria: 'pantalones',categoria: 'remeras'}]);
    });

    // Verificar que la funcion de filtrarProductos para Pantalones muestre solo la categoria que coincide.

    test('devuelve productos con categoria definida',() => {
        const productosArray = [
            { categoria: 'pantalones'},
        ];
        const resultado = filtrarProductos(productosArray, 'pantalones');
        expect(resultado).toEqual([{ categoria: 'pantalones'}])
    });

     // Verificar que la funcion de filtrarProductos para Remeras muestre solo la categoria que coincide.

     test('devuelve productos con categoria definida',() => {
        const productosArray = [
            { categoria: 'remeras'},
        ];
        const resultado = filtrarProductos(productosArray, 'remeras');
        expect(resultado).toEqual([{ categoria: 'remeras'}])
    });

     // Verificar que la funcion de filtrarProductos para Camperas muestre solo la categoria que coincide.

     test('devuelve productos con categoria definida',() => {
        const productosArray = [
            { categoria: 'camperas'},
        ];
        const resultado = filtrarProductos(productosArray, 'camperas');
        expect(resultado).toEqual([{ categoria: 'camperas'}])
    });

