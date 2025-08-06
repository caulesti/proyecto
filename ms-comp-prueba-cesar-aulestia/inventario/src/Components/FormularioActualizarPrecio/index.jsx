import { useForm } from 'react-hook-form'
import { useState, useContext } from 'react'
import { InventarioContext } from '../../Context'

const FormularioActualizarPrecio = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const [mensaje, setMensaje] = useState('')
  const context = useContext(InventarioContext)

  const onSubmit = handleSubmit(data => {
    fetch(`http://localhost:8080/productos/${data.idProducto}/${data.precio}`, {
      method: 'PUT'
    })
      .then(res => {
        if (!res.ok) throw new Error(`Error ${res.status}`)
        return res.json()
      })
      .then(data => {
        setMensaje(`✅ Precio actualizado a $${data.price}`)
        context.cargarProductos()
        reset()

      })
      .catch(error => {
        console.error('Error al actualizar el precio:', error)
        setMensaje('❌ Error al actualizar el precio')
      })
    
  })

  return (
    <main className="container h-screen grid place-items-center mx-auto">
      <form
        className="flex flex-col gap-5 items-center border border-slate-700 rounded-md w-full max-w-md px-8 py-10"
        onSubmit={onSubmit}
      >
        {/* Encabezado */}
        <div className="space-y-4 text-center">
          <h1 className="text-2xl font-bold">Actualizar precio</h1>
          <p className="text-slate-500">Complete los siguientes campos para actualizar el precio del producto.</p>
        </div>

        {/* Campo: ID del producto */}
        <div className="w-full space-y-3">
          <label htmlFor="idProducto" className="text-sm text-slate-700 font-semibold">
            ID del producto:
          </label>
          <input
            type="number"
            id="idProducto"
            step="1"
            placeholder="1"
            className={`border rounded-sm px-2 py-3 text-sm outline-none font-medium text-slate-600 ${
              errors.idProducto ? 'border-red-500' : 'border-slate-500'
            }`}
            {...register('idProducto', {
              required: 'El ID del producto es requerido',
              valueAsNumber: true,
              min: { value: 1, message: 'El ID debe ser mayor a 0' },
            })}
          />
          {errors.idProducto && (
            <p className="text-red-500 text-sm">{errors.idProducto.message}</p>
          )}
        </div>

        {/* Campo: Precio */}
        <div className="w-full space-y-3">
          <label htmlFor="precio" className="text-sm text-slate-700 font-semibold">
            Nuevo precio:
          </label>
          <input
            type="number"
            id="precio"
            step="0.01"
            placeholder="19.99"
            className={`border rounded-sm px-2 py-3 text-sm outline-none font-medium text-slate-600 ${
              errors.precio ? 'border-red-500' : 'border-slate-500'
            }`}
            {...register('precio', {
              required: 'El nuevo precio es requerido',
              valueAsNumber: true,
              min: { value: 0.01, message: 'El precio debe ser mayor a 0' },
            })}
          />
          {errors.precio && (
            <p className="text-red-500 text-sm">{errors.precio.message}</p>
          )}
        </div>

        {/* Botones */}
        <div className="flex flex-col gap-3 w-full">
          <button
            type="submit"
            className="bg-stone-800 text-white py-3 rounded-md font-medium cursor-pointer"
          >
            Continuar
          </button>
          <button
            type="button"
            onClick={() => {
              reset()
              setMensaje('')
            }}
            className="underline font-medium cursor-pointer"
          >
            Cancelar
          </button>
        </div>

        {/* Mensaje */}
        {mensaje && (
          <p className="text-center text-sm font-medium mt-2">{mensaje}</p>
        )}
      </form>
    </main>
  )
}

export default FormularioActualizarPrecio
