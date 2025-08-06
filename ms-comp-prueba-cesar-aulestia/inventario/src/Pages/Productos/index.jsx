import { useContext } from 'react'
import Layout from '../../Components/Layout'
import CardProducto from '../../Components/CardProducto'
import { InventarioContext } from '../../Context'
import { PlusIcon} from '@heroicons/react/24/solid'

function Productos() {
  const context = useContext(InventarioContext)

  return (
    <Layout>
      {
      <div className='grid gap-4 grid-cols-5 w-full max-w-screen-lg '>
        {
          context.productos?.map(producto => (
            <CardProducto key={producto.id} producto={producto}/>       
          ))
        }
        <div 
          className="relative border rounded-full w-25 h-25 shadow bg-white hover:shadow-lg transition"
          onClick={() => {
            console.log('click')
          }}>
            <PlusIcon className=''/>
        </div>
      </div>
      }
      
    </Layout>
  )
}

export default Productos