import { useContext } from 'react'
import Layout from '../../Components/Layout'
import CardMovimiento from '../../Components/CardMovimiento'
import { InventarioContext } from '../../Context'

function Movimientos() {
  const context = useContext(InventarioContext)

  return (
    <Layout>
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

export default Movimientos