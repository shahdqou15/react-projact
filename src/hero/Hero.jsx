import { useState } from 'react'
import style from "./hero.module.css"

function Hero() {

  return (
    <>
    <div className={style.hero}>
      <div className="container">
        <h1>Your Favorite Place for<br></br> Free Bootstrap Themes</h1>
        <p>Start Bootstrap can help you build better websites using the Bootstrap<br></br> framework! Just download a theme and start customizing, no strings<br></br> attached!</p>
        <button className={style.btn}>FIND OUT MORE</button>
      </div>
    </div>

    </>
  )
}

export default Hero
