import { useState } from 'react'
import style from "./about.module.css"
function About() {


  return (
    <>
    <section className={style.about}>
      <div className="container">
        <h2>We've got what you need!</h2>
        <p>Start Bootstrap has everything you need to get your new website up and running in no <br></br>time! Choose one of our open source, free to download, and easy to use themes! No<br></br> strings attached!</p>
        <button className={style.btnStart}>GET STARTED!</button>
      </div>
    </section>

    </>
  )
}

export default About
