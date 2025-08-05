const CardMovimiento = ( movimiento ) => {
    console.log(movimiento.movimiento)
    return (
        <div className="border rounded-lg shadow-md p-4 w-80 bg-white">
            <h1 className="text-xl font-bold mb-2">Movimiento de inventario {movimiento.movimiento.id}</h1>
            
            <hr className="my-2" />
            
            <p className="text-sm text-gray-700 mb-1">
                <span className="font-semibold">Producto: {movimiento.movimiento.producto.nombre}</span>
            </p>

            <p className="text-sm text-gray-700 mb-1">
                🔁 <span className="font-semibold">Tipo:</span>{" "}
                <span className={movimiento.movimiento.tipoMovimiento === "ENTRADA" ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
                    {movimiento.movimiento.tipoMovimiento}
                </span>
            </p>

            <p className="text-sm text-gray-700 mb-1">
                📦 <span className="font-semibold">Cantidad:</span> {movimiento.movimiento.cantidad}
            </p>

            <p className="text-sm text-gray-700 mb-1">
                🕒 <span className="font-semibold">Fecha:</span> {movimiento.movimiento.fecha.slice(0,10)}
            </p>

        </div>
    )
}

export default CardMovimiento