import React from 'react'

import { Link } from "gatsby"

import logo from '../assets/images/vector-white.jpg'
import menu from '../assets/images/logos/menu.png'

class Header extends React.Component {
    render() {
        return (
          <section id="header">
            <header>
              <Link to="/" id="logo"><img src={logo} alt="Volleyball Scores Logo"/></Link>
              <nav>
                <div id="menu-icon"><img src={menu} alt="Menu icon"/></div>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about-us/">About Us</Link></li>
                  <li><Link to="/our-services/">Our Services</Link></li>
                  <li><Link to="/pricing/">Pricing</Link></li>
                  <li><Link to="/contact-us/">Contact Us</Link></li>
                </ul>
                <div className="clear"></div>
              </nav>
            </header>
            <div className="full">
              <h1>Volleyball Performance Analysis</h1>
            </div>
          </section>
        )
    }
}

export default Header
