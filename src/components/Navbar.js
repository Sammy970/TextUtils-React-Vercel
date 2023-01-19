//rfc
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";


export default function Navbar(props) {

  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="https://img.icons8.com/color/512/txt.png" alt="text-logo" width="50" height="47" className="d-inline-block align-text-center" />
          <strong className='fs-4 mx-3'>{props.title}</strong>
        </Link>
        {/* <a className="navbar-brand" href="#/">{props.title}</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active mx-2" aria-current="page" to="/"><strong>Home</strong></Link>
              {/* <a className="nav-link active" aria-current="page" href="#/">Home</a> */}
            </li>

            {isAuthenticated &&
              (<li className="nav-item">
                <Link className="nav-link mx-2" to="/about"><strong>{props.aboutText}</strong></Link>
              </li>)}

            {isAuthenticated ?
              (<li className="nav-item">
                <button className="btn gap-2 btn-primary" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
              </li>)
              :
              (<li className="nav-item">
                <button className="btn gap-2 btn-primary" onClick={() => loginWithRedirect()}>Log In</button>
              </li>)

            }

          </ul>

          {isAuthenticated && (
            <div className='mx-auto'>
              <h5 style={{color: props.mode === "light" ? "black":"white" }}> Welcome, {user.name}</h5>
            </div>
          )}

          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-success" type="submit">Search</button>
          </form> */}

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input my-2" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
            {/* <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable Dark Mode</label> */}
            <img src="https://cdn-icons-png.flaticon.com/512/7645/7645197.png" alt="darkModeIcon" width="30" height="30" className=" mx-2 align-text-bottom" />
          </div>

        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Set Text here',
  aboutText: 'About'
}