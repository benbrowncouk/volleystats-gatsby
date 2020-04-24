import React from "react";

import Layout from '../components/layout';

import ben from '../assets/images/us/ben.jpg'
import matt from '../assets/images/us/matt1.jpg'
import steve from '../assets/images/us/steve1.jpg'
import rod from '../assets/images/us/rod.jpg'


class Homepage extends React.Component {
    render() {
        return (
            <Layout>
                <section id="body">
                    <div className="full">
                        <h1>Who Are We?</h1>
                    </div>
                    <section id="doc">
                        <section>
                            <p>We are a group of performance analysis statisticians and lifelong volleyball fanatics based in the UK. We have extensive experience of carrying out performance analysis at all levels of volleyball from grass-roots to Internationals, both for tournaments and teams. This includes:</p>
                            <ul>
                                <li>London 2012 Olympics</li>
                                <li>Baku 2015 European Games</li>
                                <li>GB Women’s Volleyball</li>
                                <li>England Senior/Junior Men and Women</li>
                                <li>England Super 8’s (premier division)</li>
                                <li>Small Countries Division Events</li>
                            </ul>
                            <p>&nbsp;</p>
                        </section>
                        <div class="clear"></div>
                        <section>
                            <section class="half">
                                <h2>Ben Brown</h2>
                                <img name="Ben" src={ben} alt="Ben Brown - VolleyStats.co.uk" />
                                <p>Ben has been involved with statistical analysis since the 2005/06 season. He was the statistics lead at the indoor volleyball at Earls Court in London 2012, and was the English representative for statistics at the Baku 2015 European Games. Ben was also the Statistics Manager for most of the Great Britain European events hosted in England in the run up to the London 2012 Olympic Games.</p>
                            </section>
                            <section class="half">
                                <h2>Matt Bianco</h2>
                                <img name="Matt" src={matt} alt="Matt Bianco - VolleyStats.co.uk" />
                                <p>Matt, along with Ben, has been involved with statistical analysis since the 2005/06 season. He was the team statistician for the Great Britain Ladies Team for London 2012, and is currently working with the England Ladies Senior Team.</p>
                            </section>
                            <div class="clear"></div>
                            <section class="half">
                                <h2>Steve Matthews</h2>
                                <img name="steve" src={steve} alt="Steve Matthews - VolleyStats.co.uk" />
                                <p>Steve has been involved with statistical analysis since the 2008/09 season. At London 2012, he was a team leader at the indoor volleyball at Earls Court. He is currently the England Senior Men's Team statistician. Steve was also involved with the Great Britain European events in the run up to the London 2012 Olympic Games.</p>
                            </section>
                            <section class="half">
                                <h2>Rod Stockwell</h2>
                                <img name="Rod" src={rod} alt="Rod Stockwell - VolleyStats.co.uk" />
                                <p>Rod has been involved with statistical analysis since the 2007/08 season. At London 2012, he was a team leader at the indoor volleyball at Earls Court. He is currently the England Junior Women's Team statistician. Rod was also involved with the Great Britain European events in the run up to the London 2012 Olympic Games. He has also been the Statistics Manager for CEV Small Countries Division events hosted in Scotland since 2011.</p>
                            </section>
                        </section>
                        <div class="clear"></div>
                    </section>
                </section>
            </Layout>
        );
    }
}

export default Homepage;
