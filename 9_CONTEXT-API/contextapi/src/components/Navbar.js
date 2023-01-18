import './Navbar.css'

import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <h1>Menu</h1>
        <Link to='/' >Página 1</Link>
        <Link to='/pag2' >Página 2</Link>
        <Link to='/pag3' >Página 3</Link>
    </div>
  )
}

export default Navbar