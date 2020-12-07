import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [home, setHome] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenuHome = () => {
    setClick(false);
    setHome(true);
  }
  
  const closeMobileMenuAbout = () => {
    setClick(false);
    setHome(false);
  }







    return (
        <>
          <nav className="navbar">
              <div className="navbar-container">
                <Link to="/" 
                  className="navbar-logo"
                  id="icon"
                  onClick={closeMobileMenuHome}
                >
                  RL
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/' 
                      className={ home ? 'nav-links active' : 'nav-links'}
                      id='home'
                      onClick={closeMobileMenuHome}
                    >
                      Home
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link to='/about-me' 
                      className={ home ? 'nav-links' : 'nav-links active'}
                      
                      onClick={closeMobileMenuAbout}
                    >
                      About
                    </Link>
                  </li>
                  
                </ul>
              </div>
          </nav>
        </>
    )
}

export default Navbar
