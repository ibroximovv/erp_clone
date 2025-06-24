
import { Route, Routes } from 'react-router-dom'
import { DashboardRouteList } from '../hooks/paths'
import type { DashboardRouteType } from '../types/DashboardRouteType'

function DashboardRoutes() {
  return (
    <Routes>
        {DashboardRouteList.map((item: DashboardRouteType) => <Route key={item.id} path={item.path} element={item.element} />)}
    </Routes>
  )
}

export default DashboardRoutes