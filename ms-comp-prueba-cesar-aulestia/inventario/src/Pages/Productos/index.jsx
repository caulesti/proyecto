import { useContext } from 'react'
import Layout from '../../Components/Layout'
import CardProducto from '../../Components/CardProducto'
import { InventarioContext } from '../../Context'

function Productos() {
  const context = useContext(InventarioContext)

  return (
    <Layout>
      {
      <div className='grid gap-4 grid-cols-5 w-full max-w-screen-lg'>
        {
          context.productos?.map(producto => (
            <CardProducto key={producto.id} producto={producto}/>       
          ))
        }
      </div>
      }
    </Layout>
  )
}

export default Productos