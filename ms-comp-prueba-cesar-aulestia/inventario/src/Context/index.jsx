import { createContext, useState, useEffect } from 'react'

export const InventarioContext = createContext()

export const InventarioProvider = ({ children }) => {

    /** PRODUCTOS */
    
    // Mostrar productos
    const [productos, setProductos] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8080/productos')
        .then(response => response.json())
        .then(data => setProductos(data))
    },[])

    const [searchByIdProducto, setSearchByIdProducto] = useState(null)

    // Movimientos
    const [movimientos, setMovimientos] = useState(null)

    useEffect(() => {
        if (!searchByIdProducto) return;
        fetch(`http://localhost:8080/movimientos/${searchByIdProducto}`)
            .then(response => {
            if (!response.ok) {
                throw new Error(`Error ${response.status}: producto no encontrado`);
            }
            return response.json();
            })
            .then(data => setMovimientos(data))
            .catch(error => {
                console.error('Error al obtener movimientos:', error.message);
                setMovimientos([]); // Limpiar la lista para no mostrar datos anteriores
            });
    }, [searchByIdProducto]);

    // Proveedores
    

    return (
        <InventarioContext.Provider value={{
            productos,
            setProductos,
            movimientos,
            setMovimientos,
            setSearchByIdProducto,
        }}>
            { children }
        </InventarioContext.Provider>
    )
}
