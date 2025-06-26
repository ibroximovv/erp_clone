import { useContext } from 'react'
import { Context } from './context/Context'
import AuthRoutes from './routes/AuthRoutes'
import './App.css'
import DashboardLayout from './features/Layout'

function App() {
  const { token } = useContext(Context)
  
  return token ? <DashboardLayout /> : <AuthRoutes />
}

export default App
