import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
// import { paths } from "../../hooks/paths"

const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/major')
  }, [])
  return ''
}

export default Home