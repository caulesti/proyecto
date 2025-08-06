const CardProduct = ( producto ) => {
    return (
        <div className="border rounded-lg w-50 m-2 p-4 shadow bg-white hover:shadow-lg transition">
            <div className="mb-2">
                <h2 className="text-lg font-semibold text-gray-800">{producto.producto.nombre}</h2>
                <p className="text-green-600 font-bold">${producto.producto.price}</p>
                <p className={`text-sm ${producto.producto.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    stock: {producto.producto.stock > 0 ? `${producto.producto.stock} disponibles` : 'agotado'}
                </p>
            </div>
            <div className="text-sm text-gray-600">
                <p className="font-medium">Descripción:</p>
                <p>{producto.producto.description}</p>
            </div>
        </div>
    )
}

export default  CardProduct