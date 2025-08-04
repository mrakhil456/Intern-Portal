import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar (props) {
  return (
    
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
          
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
         <li className="nav-item">
          <Link  className="nav-link active"  to="/">Login</Link>
        </li>
        
        <li className="nav-item">
          <Link  className="nav-link active"  to="/Dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="#">Features</Link>
        </li>
        
      </ul>
       
    </div>
       <div>
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
       </div>
       
    
  <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault" />
  <label className="form-check-label" htmlFor="switchCheckDefault">Dark Mode</label>
</div>
  </div>
</nav>

    
  )
}

export default Navbar
Navbar.propTypes={
  title: PropTypes.string.isRequired
   
}
Navbar.defaultProps = {
  title: "Fundraising"

}