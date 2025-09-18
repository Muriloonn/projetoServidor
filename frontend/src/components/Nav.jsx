import { Link } from "react-router-dom"
import Imagem from "../assets/Imagem.jpg"

const Nav = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
        <nav className="mx-auto flex justify-between items-center">
            <img src={Imagem} className="h-[70px] w-[70px] rounded-4xl"/>
            <ul className="list-none">
                <li className="hover:text-amber-300 transition-colors duration-300">
                    <Link to="/">Home</Link>
                </li>
                <li className="hover:text-amber-300 transition-colors duration-300">
                    <Link to="/cliente">Cliente</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Nav