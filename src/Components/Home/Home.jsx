import React from 'react'
import './Home.css'
import man from '../../assets/man.png'

function Home() {
  return (
      <section id='home'>
        <div className="welcome">
          <p>Hi there!</p>
          <h2>I'm Bonanza <span>Narayan</span></h2>
          <h1>I craft the Web's best!</h1>
          <p>I am a software engineer who creates exceptional digital experiences that put users first. Aside specializing in crafting webs that prioritize accessibility and user-centered design. Let's develop a web that's both beautiful and functional, and take your digital presence to new heights!</p>
        </div>
        <div className="img">
          <img src={man} alt="" />
        </div>
      </section>
  )
}

export default Home