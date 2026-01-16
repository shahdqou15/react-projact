import { useState } from 'react'
import style from "./navbar.module.css"

function Navbar() {


  return (
    <>
      <div className={style.navbar}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <a href="#" className="text-decoration-none">Start Bootstrap</a>
            </div>
            <div className="col-md-8">
              <ul className="d-flex gap-5 ">
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
