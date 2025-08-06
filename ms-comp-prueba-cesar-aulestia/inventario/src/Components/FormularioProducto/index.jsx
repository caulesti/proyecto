import { useForm } from 'react-hook-form'

const FormularioProducto = () => {

	const { 
		register, 
		handleSubmit, 
		formState:{errors},
	} = useForm()

	const onSubmit = handleSubmit(data => {
		//Post
		fetch('http://localhost:8080/productos', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then(response => response.json())
		.then(data => {
			console.log('Producto creado:', data);
		})
		.catch(error => {
			console.error('Error al crear el producto:', error);
		});
	})

	return (
		<main className='container h-screen grid place-items-center  mx-auto'>
			<form className='flex flex-col gap-5 items-center border border-slate-700 rounded-md w-full max-w-md px-8 py-10' onSubmit={onSubmit}>
				{/* Encabezado del formulario */}
				<div className='space-y-4'>
					<h1 className='text-2xl font-bold text-center'>
						Ingreso de productos
					</h1>
					<p className='text-slate-500'>
						Complete los siguientes campos para registrar un producto.
					</p>
				</div>
				
				{/* Campos del formulario */}
				<div className='space-y-3 w-full'>
					<div className='flex flex-col gap-2'>
						<label htmlFor='nombre' className='text-sm text-slate-700 font-semibold'> Nombre Completo: </label>
						<input
							type='text'
							id='nombre'
							className={`border  rounded-sm px-2 py-3 text-sm outline-none font-medium text-slate-600 ${errors.nombre ? 'border-red-500' : 'border-slate-500' }`}
							placeholder='Cesar Aulestia'
							{...register('nombre', {required: 'El nombre completo es requerido',})}
						/>
						{errors.nombre && (<p className='text-red-500 font-medium text-sm w-full'>{errors.nombre.message}</p>)}
					</div>
				</div>

				<div className='space-y-3 w-full'>
					<div className='flex flex-col gap-2'>
						<label htmlFor='descripcion' className='text-sm text-slate-700 font-semibold'> Descripcion: </label>
						<input
							type='text'
							id='descripcion'
							className={`border  rounded-sm px-2 py-3 text-sm outline-none font-medium text-slate-600 ${errors.descripcion ? 'border-red-500' : 'border-slate-500' }`}
							placeholder='Cesar Aulestia'
							{...register('descripcion', {required: 'La descripcion es requerida',})}
						/>
						{errors.descripcion && (<p className='text-red-500 font-medium text-sm w-full'>{errors.descripcion.message}</p>)}
					</div>
				</div>

				<div className='space-y-3 w-full'>
					<div className='flex flex-col gap-2'>
						<label htmlFor='precio' className='text-sm text-slate-700 font-semibold'> Precio: </label>
						<input
							type='number'
							id='precio'
							step='0.01'
							className={`border  rounded-sm px-2 py-3 text-sm outline-none font-medium text-slate-600 ${errors.precio ? 'border-red-500' : 'border-slate-500' }`}
							placeholder='10.99'
							{...register('precio', {required: 'El precio es requerido', valueAsNumber: true, min: { value: 0.01, message: 'El precio debe ser mayor que 0' },})}
						/>
						{errors.precio && (<p className='text-red-500 font-medium text-sm w-full'>{errors.precio.message}</p>)}
					</div>
				</div>

				<div className='space-y-3 w-full'>
					<div className='flex flex-col gap-2'>
						<label htmlFor='stockInicial' className='text-sm text-slate-700 font-semibold'> Stock inicial: </label>
						<input
							type='number'
							id='stockInicial'
							step='1'
							className={`border  rounded-sm px-2 py-3 text-sm outline-none font-medium text-slate-600 ${errors.stockInicial ? 'border-red-500' : 'border-slate-500' }`}
							placeholder='10'
							{...register('stockInicial', {required: 'El stock inicial es requerido', valueAsNumber: true, min: { value: 0.01, message: 'La cantidad debe ser mayor a 0' },})}
						/>
						{errors.stockInicial && (<p className='text-red-500 font-medium text-sm w-full'>{errors.stockInicial.message}</p>)}
					</div>
				</div>

				<div className='space-y-3 w-full'>
					<div className='flex flex-col gap-2'>
						<label htmlFor='idProveedor' className='text-sm text-slate-700 font-semibold'> Id del proveedor: </label>
						<input
							type='number'
							id='idProveedor'
							step='1'
							className={`border  rounded-sm px-2 py-3 text-sm outline-none font-medium text-slate-600 ${errors.idProveedor ? 'border-red-500' : 'border-slate-500' }`}
							placeholder='10'
							{...register('idProveedor', {required: 'El id del proveedor es requerido', valueAsNumber: true, min: { value: 0.01, message: 'El id ser mayor a 0' },})}
						/>
						{errors.stockInicial && (<p className='text-red-500 font-medium text-sm w-full'>{errors.stockInicial.message}</p>)}
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

export default FormularioProducto