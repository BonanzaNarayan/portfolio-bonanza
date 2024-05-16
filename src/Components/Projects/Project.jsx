import React from 'react'
import './Poject.css'
import folder from '../../assets/github.png'
import link from '../../assets/link.png'

function Project() {
  return (
    <section id='projects'>
        <div className="project-title">
            <hr />
            <h1>Projects</h1>
        </div>

        <div className="project-container">

            <div className="card">
                <div className="icons">
                    <img src={folder} alt="" />
                    <a href="https://food-web-app-page-demo.netlify.app"><img src={link} alt="" /></a>
                </div>
                <div className="text-project">
                    <h1>Fod Delivery Web App</h1>
                    <p>Front end food delivery we app</p>
                </div>
                <div className="tools">
                    <p>React JS</p>
                </div>
            </div>
            <div className="card">
                <div className="icons">
                    <img src={folder} alt="" />
                    <a href="https://corporateboss-solutions.com"><img src={link} alt="" /></a>
                </div>
                <div className="text-project">
                    <h1>Corporate Boss Solutions</h1>
                    <p>A Website for a company I am currently with.</p>
                </div>
                <div className="tools">
                    <p>React JS, Form Submit API</p>
                </div>
            </div>
            <div className="card">
                <div className="icons">
                    <img src={folder} alt="" />
                    <a href="https://expert-auto.netlify.app"><img src={link} alt="" /></a>
                </div>
                <div className="text-project">
                    <h1>Auto Mobile Service</h1>
                    <p>A website for an auto mobile services</p>
                </div>
                <div className="tools">
                    <p>HTML/CSS, JavaScript, Google Spreadsheet API</p>
                </div>
            </div>
            {/* <div className="card">
                <div className="icons">
                    <img src={folder} alt="" />
                    <a href=""><img src={link} alt="" /></a>
                </div>
                <div className="text-project">
                    <h1>Car Rentals</h1>
                    <p>Lorem, beatae numquam beatae numquam hic?</p>
                </div>
                <div className="tools">
                    <p>React JS</p>
                </div>
            </div>
            <div className="card">
                <div className="icons">
                    <img src={folder} alt="" />
                    <a href=""><img src={link} alt="" /></a>
                </div>
                <div className="text-project">
                    <h1>Car Rentals</h1>
                    <p>Lorem, beatae numquam beatae numquam hic?</p>
                </div>
                <div className="tools">
                    <p>React JS</p>
                </div>
            </div> */}


        </div>
    </section>
  )
}

export default Project