import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
 <nav className="navbar navbar-expand-lg bg-yellow">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src='NoBgLogo.png' />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarTogglerDemo03">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-end text-center">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/employees" className="nav-link">
                The Team
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/customers" className="nav-link">
                Our Amazing Customers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/estimates" className="nav-link">
                New Customers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

