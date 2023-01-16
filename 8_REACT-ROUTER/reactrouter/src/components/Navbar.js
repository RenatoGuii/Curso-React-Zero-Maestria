// 2° Links com React Router
import "./Navbar.css"

import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        {/* Link substitui a tag 'a' do HTML */}
        <Link to='/' >Home</Link>
        <Link to='/about' >Sobre</Link>
        <Link to='/products' >Produtos</Link>
    </nav>
  )
}

export default Navbar