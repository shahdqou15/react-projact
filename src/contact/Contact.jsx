import { useState } from 'react'
import style from "./contact.module.css"
function Contact() {


  return (
    <>
      <section className={style.contact}>

        <h2>Let's Get In Touch!</h2>
        <p>Ready to start your next project with us? Send us a messages and<br></br> we will get back to you as soon as possible!</p>
        <div class="form-floating w-50">
          <input type="text" className="form-control " id="floatingInput" placeholder="name@example.com"></input>
          <label for="floatingInput">Full name</label>
        </div>

        <div class="form-floating w-50">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
            <label for="floatingInput">Email address</label>
        </div>

        <div class="form-floating w-50">
          <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
            <label for="floatingInput">Phone number</label>
        </div>

        <div class="form-floating w-50">
          <textarea type="text" className="form-control pb-5"></textarea>
            <label for="floatingInput">Message</label>
        </div>
        <input type='submit' className={style.btn} value="submit" disabled></input>

      </section>

    </>
  )
}

export default Contact
