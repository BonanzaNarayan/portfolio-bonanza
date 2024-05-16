import React from 'react'
import './Contact.css'
import github from '../../assets/github.png'
import ig from '../../assets/ig.png'
import linkedin from '../../assets/linkedin.png'
import chain from '../../assets/chain.png'

function Contact() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "4aa7e03f-6c45-4586-a428-63fb70ca0af4");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
      };





  return (
    <section id='contact'>
        <div className="title-contact">
            <hr />
            <h1>Contact me</h1>
        </div>
        <div className="contact-all">
            <div className="social-links">
                <h2>I'm excited to work with you on your next web development project to bring your dream web app to life. Hit me up, let's create a website that's both beautiful and functional! </h2>

                <div className="links-socials">
                    <a href="https://github.com/BonanzaNarayan/"><img src={github} alt="" /> Github</a>
                    <a href="https://linkedin.com/in/bonanza-narayan-2695b5297"><img src={linkedin} alt="" />Linkedin</a>
                    <a href="https://www.instagram.com/bonanza_narayan/"><img src={ig} alt="" /> Instagram</a>
                    <a href="https://linktr.ee/Kyvz404/"><img src={chain} alt="" /> Other Links</a>
                </div>
            </div>
            <div className="form">
                <form onSubmit={onSubmit}>
                    <p>Full Name</p>
                    <input type="text" name='Name' placeholder='Enter your name' required />
                    <p>Emial</p>
                    <input type="email" name='Email' placeholder='Email Id' required />
                    <p>Messgae</p>
                    <textarea name="message" id=""  required placeholder='Message'></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact