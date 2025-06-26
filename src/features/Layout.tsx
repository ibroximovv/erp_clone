import { useContext } from "react"
import Header from "../modules/Header"
import Navbar from "../modules/Navbar"
import { Context } from "../context/Context"
import DashboardRoutes from "../routes/DashboardRoutes"

const DashboardLayout = () => {
  const {showNavbar} = useContext(Context)
  return (
    <div className="flex">
      <Navbar />
      <div className={` ${showNavbar ? "w-full" : "w-[82%]"} duration-300`}>
        <Header />
        <DashboardRoutes />
      </div>
    </div>
  )
}

export default DashboardLayout