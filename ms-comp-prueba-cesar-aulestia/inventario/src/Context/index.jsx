import { createContext, useState, useEffect } from 'react'

export const InventarioContext = createContext()

export const InventarioProvider = ({ children }) => {

    // Productos
    const [productos, setProductos] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8080/productos')
        .then(response => response.json())
        .then(data => setProductos(data))
    },[])

    // Movimientos
    const [movimientos, setMovimientos] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8080/movimientos/1')
        .then(response => response.json())
        .then(data => setMovimientos(data))
    },[])

    // Proveedores

    return (
        <InventarioContext.Provider value={{
            productos,
            setProductos,
            movimientos,
            setMovimientos
        }}>
            { children }
        </InventarioContext.Provider>
    )
}
