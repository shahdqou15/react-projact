import { useState } from 'react'
import style from "./services.module.css"
function Services() {


  return (
    <>
      <section className={style.services}>
        <div className="container">
          <h2 className="pb-5">At Your Service</h2>
          <div className="row">
            <div className="col-md-3">
              <i className="fa-solid fa-gem fa-lg" style={{ color: "#f4623a" }}></i>
              <h5 className="fs-4">Sturdy Themes</h5>
              <p>Our themes are updated regularly to keep them bug free!</p>
            </div>
            <div className="col-md-3">
              <i className="fa-solid fa-laptop fa-lg" style={{ color: "#f4623a" }}></i>
              <h5 className="fs-4">Up to Date</h5>
              <p>All dependencies are kept current to keep things fresh.</p>
            </div>
            <div className="col-md-3">
              <i className="fa-solid fa-globe fa-lg" style={{ color: "#f4623a" }}></i>
              <h5 className="fs-4">Ready to Publish</h5>
              <p>You can use this design as is, or you can make changes!</p>
            </div>
            <div className="col-md-3">
              <i className="fa-regular fa-heart fa-lg" style={{ color: "#f4623a" }}></i>
              <h5 className="fs-4">Made with Love</h5>
              <p>Is it really open source if it's not made with love?</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services