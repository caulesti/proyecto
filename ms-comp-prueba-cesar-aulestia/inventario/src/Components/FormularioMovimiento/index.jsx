import { useForm } from 'react-hook-form'

const FormularioMovimiento = () => {

    const { 
        register, 
        handleSubmit, 
        formState:{errors},
    } = useForm()

    const onSubmit = handleSubmit(data => {
        //Post
        fetch('http://localhost:8080/movimientos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Movimiento creado:', data);
        })
        .catch(error => {
            console.error('Error al crear el movimiento:', error);
        });
    })

    return (
        <main className='container h-screen grid place-items-center  mx-auto'>
            <form className='flex flex-col gap-5 items-center border border-slate-700 rounded-md w-full max-w-md px-8 py-10' onSubmit={onSubmit}>
                {/* Encabezado del formulario */}
                <div className='space-y-4'>
                    <h1 className='text-2xl font-bold text-center'>
                        Realizar movimiento de inventario
                    </h1>
                    <p className='text-slate-500'>
                        Complete los siguientes campos para el movimiento de inventario.
                    </p>
                </div>
                
                {/* Campos del formulario */}
                <div className='space-y-3 w-full'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='idProducto' className='text-sm text-slate-700 font-semibold'> Id del producto: </label>
                        <input
                            type='number'
                            id='idProducto'
                            step='1'
                            className={`border  rounded-sm px-2 py-3 text-sm outline-none font-medium text-slate-600 ${errors.idProducto ? 'border-red-500' : 'border-slate-500' }`}
                            placeholder='1'
                            {...register('idProducto', {required: 'El id del producto es requerido', valueAsNumber: true, min: { value: 0.01, message: 'El id del producto debe ser mayor a 0' },})}
                        />
                        {errors.idProducto && (<p className='text-red-500 font-medium text-sm w-full'>{errors.idProducto.message}</p>)}
                    </div>
                </div>

                <div className='space-y-3 w-full'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='cantidad' className='text-sm text-slate-700 font-semibold'> Cantidad: </label>
                        <input
                            type='number'
                            id='cantidad'
                            step='1'
                            className={`border  rounded-sm px-2 py-3 text-sm outline-none font-medium text-slate-600 ${errors.cantidad ? 'border-red-500' : 'border-slate-500' }`}
                            placeholder='10'
                            {...register('cantidad', {required: 'La cantidad es requerida.', valueAsNumber: true, min: { value: 0.01, message: 'La cantidad debe ser mayor a 0' },})}
                        />
                        {errors.cantidad && (<p className='text-red-500 font-medium text-sm w-full'>{errors.cantidad.message}</p>)}
                    </div>
                </div>

                <div className='space-y-3 w-full'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='tipoMovimiento' className='text-sm text-slate-700 font-semibold'>Tipo de movimiento:</label>
                        <select
                            id='tipoMovimiento'
                            className={`border rounded-sm px-2 py-3 text-sm outline-none font-medium text-slate-600 ${
                                errors.tipoMovimiento ? 'border-red-500' : 'border-slate-500'
                            }`}
                            {...register('tipoMovimiento', {
                                required: 'El tipo de movimiento debe ser especificado',
                            })}
                        >
                            <option value="">-- Selecciona una opción --</option>
                            <option value="ENTRADA">ENTRADA</option>
                            <option value="SALIDA">SALIDA</option>
                        </select>
                        {errors.tipoMovimiento && (<p className='text-red-500 font-medium text-sm w-full'>{errors.tipoMovimiento.message}</p>)}
                    </div>
                </div>
                
                {/* Botones para enviar el formulario */}
                <div className='flex flex-col gap-3 w-full'>
                    <button type='submit' className='bg-stone-800 text-white py-3 rounded-md font-medium cursor-pointer'>Continuar</button>
                    <button type='button' className='underline font-medium cursor-pointer'>Cancelar</button>
                </div>
            </form>
        </main>
    )
}

export default FormularioMovimiento