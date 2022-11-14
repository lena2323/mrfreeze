import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Link to="/" className="title"> Freezers?</Link>
        <ul>
            <li className='first-in-nav'>
              <Link to="/">Freezers</Link>
            </li>
            <li className='first-in-nav'>
              <Link to="/create">Create Freezer log</Link>
            </li>
            <li className='second-in-nav'>              
            <Link to="/user">Create User</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar