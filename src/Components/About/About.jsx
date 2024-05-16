import React from 'react'
import man from '../../assets/man.png'
import './About.css'

function About() {
  return (
    <section id='about'>
        <div className="about-title">
            <hr />
            <h1>About me</h1>
        </div>
        <div className="all-about">
            <div className="about-left">
                <div className="about-me">
                    <p>I'm Bonanza Narayan, a skilled web developer with experience in creating user-friendly and visually appealing websites. I prioritize user experience and have expertise in several programming languages, including HTML, CSS, JavaScript, and PHP, as well as popular web development frameworks such as React. I maintain a clear and open communication with clients and team members throughout the development process.</p>

                    <p>Please take a look at my portfolio to see some of my best work, which demonstrate my ability to create websites that meet a client's needs.</p>

                    <p>Here are a few technologies I've been working with recently:</p>
                </div>
                <div className="skills">
                    <ul>
                        <li><p>JavaScript</p> <hr /></li>
                        <li><p>React</p> <hr /></li>
                        <li><p>Node/Express js</p> <hr /></li>
                        <li><p>HTML/CSS/SCSS</p> <hr /></li>
                        <li><p>Tailwind</p> <hr /></li>
                    </ul>
                </div>
            </div>
            <div className="about-right">
                <img src={man} alt="" />
            </div>
        </div>
    </section>
  )
}

export default About