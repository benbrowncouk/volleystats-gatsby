import React from 'react'

import facebook from '../assets/images/social-facebook-circular-button.png'
import twitter from '../assets/images/social-twitter-circular-button.png'

class Footer extends React.Component {
    render() {
        return (
            <footer>
            	<section>
                    <section className="left">
                        <h3>&copy; Copyright 2018 VolleyStats.co.uk</h3>
                    </section>
                    <section className="middle">
                    <h3>Connect With Us!</h3>
                      <ul className="social">
                        <li className="first"><a href="https://www.facebook.com/volleystats.co.uk/" target="_blank" rel="noopener noreferrer">
                          <img src={facebook} alt="Facebook logo"/></a></li>
                        <li><a href="https://twitter.com/volleystatsuk" target="_blank" rel="noopener noreferrer">
                          <img src={twitter} alt="Twitter logo"/></a></li>
                      </ul>
                    </section>
                    <section className="right">
                      <h3>Website designed by</h3>
                      <h3>Rod Stockwell</h3>
                     </section>
                </section>
            </footer>
        )
    }
}

export default Footer;
