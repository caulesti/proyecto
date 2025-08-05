import { useContext } from 'react'
import Layout from '../../Components/Layout'
import CardMovimiento from '../../Components/CardMovimiento'
import { InventarioContext } from '../../Context'

function Home() {
  const context = useContext(InventarioContext)

  return (
    <Layout>
      {/** 
      <div className='grid gap-4 grid-cols-5 w-full max-w-screen-lg'>
        {
          productos?.map(producto => (
            <CardProduct key={producto.id} producto={producto}/>       
          ))
        }
      </div>
      */}
      {<div>
        {
          context.movimientos?.map(movimiento => (
            <CardMovimiento key={movimiento.id} movimiento={movimiento}/>
          ))
        }
      </div>}
    </Layout>
  )
}

export default Home