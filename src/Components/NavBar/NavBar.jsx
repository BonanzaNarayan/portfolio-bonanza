import { useRef, useState } from 'react'
import React from 'react'
import './NavBar.css'

function NavBar() {
    const [menu, setMenu] = useState("home")
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.top = "0"
    }

    const closeMenu = () => {
        menuRef.current.style.top = "-100vh"
    }
  return (
    <header>
        <div className="navBtn" onClick={openMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className="logo">
            <a href="/">
            <h1>Bonanza <span>Narayan</span></h1>
            </a>
        </div>

        <nav ref={menuRef}>
            <h1 onClick={closeMenu} className='closeNav'>X</h1>
            <ul>
                <li><a onClick={()=>setMenu("home")} href="#home">Home</a>{menu === "home"? <hr /> : <></>}</li>
                <li><a onClick={()=>setMenu("technology")} href="#technology">Technology</a>{menu === "technology"? <hr /> : <></>}</li>
                <li><a onClick={()=>setMenu("projects")} href="#projects">Projects</a>{menu === "projects"? <hr /> : <></>}</li>
                <li><a onClick={()=>setMenu("about")} href="#about">About</a>{menu === "about"? <hr /> : <></>}</li>
                <li className="contact"><a onClick={()=>setMenu("contact")}  href="#contact">Contact</a></li>
            </ul>
        </nav>
       
    </header>
  )
}

export default NavBar