import React, {useEffect, useState} from 'react'
import './styles/Navbar.css'
import {Link} from 'react-router-dom'

function Navbar({nav,navShow,linkStyle}) {

    const [scroll,setScroll] = useState(0)
  
    const handleScroll = () => {
        setScroll(window.pageYOffset)
    }
  
    useEffect((e) => {
       window.addEventListener("scroll", handleScroll)
    });
  
    useEffect(() => {
      return () => {
        window.addEventListener("scroll", handleScroll)
      };
    });

    const navigationShow = () => {
        navShow(!nav)
    }

    return (
        <div className={`navigation ${scroll>60.32?"nav_top":""}`}>
            <div className="navigation_bar">
                <span className="navigation_logo">Andrei Dragulin</span>
                <ul className={`navigation_links ${nav ? "nav_show" : ""}`}>
                    <Link to="/" style={linkStyle} className="link"><li>Home</li></Link>
                    <Link to="/about" style={linkStyle} className="link"><li>About me</li></Link>
                    <Link to="/portofolio" style={linkStyle} className="portofolio_link"><li id="navigation_portofolio">Portofolio</li></Link>
                </ul>
                <div className="navigation_burger" onClick={navigationShow}>
                    <div className="line_1"></div>
                    <div className="line_2"></div>
                    <div className="line_3"></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar