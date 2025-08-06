import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Movimientos from '../Movimientos'
import Productos from '../Productos'
import NotFound from '../NotFound'
import Navbar from '../../Components/Navbar'
import Proveedor from '../Proveedor'
import './App.css'
import { InventarioProvider } from '../../Context'

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/productos', element: <Productos />},
    {path: '/proveedor', element: <Proveedor />},
    {path: '/movimientos', element: <Movimientos />},
    {path: '/*', element: <NotFound />},
  ])
  return routes
}

const App = () => {
  
  return (
    <InventarioProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </InventarioProvider>
  )
}

export default App
