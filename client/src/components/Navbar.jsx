import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
  <nav className="navbar navbar-expand-lg bg-success "  data-bs-theme='dark' >
  <div className=" container">
    <Link className="navbar-brand fs-2 fst-italic fst-bold" to="/">GoFood</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
        <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;
