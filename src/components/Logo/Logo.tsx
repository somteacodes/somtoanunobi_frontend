import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <a href="#" className="-m-1.5 p-1.5">
    <span className="sr-only">Somto Anunobi Logo</span>
    <Link
    to={"/"}
    className="text-6xl font-bold text-white ">
        SA
    </Link>
    
  </a>
  )
}

export default Logo