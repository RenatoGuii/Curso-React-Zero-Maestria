// 2° Links com React Router
import "./Navbar.css"

import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        {/* Link substitui a tag 'a' do HTML */}
        {/*<Link to='/' >Home</Link>
        <Link to='/about' >Sobre</Link>*/}

        {/* 8° Link Ativo */}
        <NavLink to='/' 
        // className= {({ isActive }) => (isActive ? 'esta-ativo' : 'nao-ativo') }
        >Home</NavLink>
        <NavLink to='/about' >Sobre</NavLink>
    </nav>
  )
}

export default Navbar