import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
        <div className="all-footer">
            <div className="footer-nav">
                <ul>
                    <h2>Nav</h2>
                    <a href="#home">Home</a>
                    <a href="#technology">Technology</a>
                    <a href="#projects">Projects</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </ul>
            </div>
            <div className="footer-skills">
                <h2>Skills</h2>
                <li>Front-end Development</li>
                <li>Back-end Development</li>
                <li>UI/UX Design</li>
                <li>Mobile Apps Development</li>
            </div>
            <div className="footer-contact">
                <h2>Contact</h2>
                <h3>Email: <span>narayanbonanzakweku@gmail.com</span></h3>
                <h3>Tell: <span>+233 554 435 925</span></h3>
            </div>
        </div>
        <div className="copy-right">
        <p>COPYRIGHT &#169; 2024 <a href="#home">Bonanza Narayan</a> ALL RIGHTS RESERVED</p>
        </div>
    </footer>
  )
}

export default Footer