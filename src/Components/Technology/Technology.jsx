import React from 'react'
import './Technology.css'
import tech_data from '../../assets/services'

function Technology() {
  return (
    <section id='technology'>
        <div className="titles">
            <div className="title">
                <hr />
                <h1>Technologies</h1>
            </div>
            <div className="title-text">
                <p>I've worked with a range of technologies, from web-apps to mobile-apps.</p>
            </div>
        </div>

        <div className="tech-container">
        {tech_data.map((Technologies,index)=>{
                return <div key={index} className='tech-format'>
                    <img src={Technologies.t_pic} alt="" />
                    <h2>{Technologies.t_name}</h2>
                    <p>{Technologies.t_text}</p>
                </div>
            })}
        </div>
    </section>
  )
}

export default Technology