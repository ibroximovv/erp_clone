import { useContext } from 'react'
import { Context } from './context/Context'
import DashboardRoutes from './routes/DashboardRoutes'
import AuthRoutes from './routes/AuthRoutes'
import './App.css'

function App() {
  const { token } = useContext(Context)
  
  return token ? <DashboardRoutes /> : <AuthRoutes />
}

export default App
