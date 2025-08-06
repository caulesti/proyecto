import { useContext } from 'react'
import Layout from '../../Components/Layout'
import CardMovimiento from '../../Components/CardMovimiento'
import { InventarioContext } from '../../Context'

function Movimientos() {
  const context = useContext(InventarioContext)

  return (
    <Layout>
      {<div>
        <input 
          type="number"
          placeholder='Search movement by product id' 
          className='border border-black rounded-lg mb-4 p-4 w-80 focus:outline-none'
          onChange={(event) => context.setSearchByIdProducto(event.target.value)}/>
        {
          context.movimientos?.map(movimiento => (
            <CardMovimiento key={movimiento.id} movimiento={movimiento}/>
          ))
        }
      </div>}
    </Layout>
  )
}

export default Movimientos