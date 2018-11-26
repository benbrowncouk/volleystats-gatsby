import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import { Link } from "gatsby"

import checklistImage from '../assets/images/logos/checklist.png'

import matchReport from '../assets/pdfs/match-report.pdf'
import attackDirectionSR from '../assets/pdfs/attack-direction-sr.pdf'
import attackDirectionTrans from '../assets/pdfs/attack-direction-trans.pdf'
import distribution from '../assets/pdfs/distribution.pdf'
import stats from '../assets/pdfs/stats.pdf'

class Homepage extends React.Component {
    render() {
        return (
            <Layout>

                <section id="body">
                  <div className="full">
                    <h1>Our Services</h1>
                  </div>
                  <div class="clear"></div>
                  <section id="doc">
                    <section>
                      <h2>What We Need</h2>
                    </section>
                    <div class="img">
                      <img src={checklistImage} alt="Checklist" />
                    </div>
                    <section>
                      <p>In order to carry out performance analysis for your match, you need to provide us with:</p>
                      <ul>
                        <li>A video of the complete match taken from directly behind the baseline</li>
                        <p >In the video, all players must be wearing numbered shirts, and all numbers must be visible on both sides of the court.</p>
                        <li>A copy of the match scoresheet showing the player names and numbers.</li>
                      </ul>
                      <p><strong>We recommend you record your video in 720p (at least) in order to ensure that shirt numbers are visible. Most webcams and camcorders from the last few years can record in this format.</strong></p>
                    </section>
                    <section>
                      <h2>What We Do</h2>
                        <p>For each video submitted we carry out a full DataVolley analysis of the game that includes:</p>
                        <ul>
                          <li>Service</li>
                              <p >We analyse the type of service (Jump, Jump float, or standing float), the start and end zones of the service, and the outcome.</p>
                            <li>Reception</li>
                              <p >The service reception of both teams in the match is analysed to show how successful it has been.</p>
                            <li>Attack</li>
                              <p >The attack analysis will show the speed of the set/combination attack, the start and end zones of the attack and the outcome of the attack.</p>
                            <li>Kill blocks</li>
                        </ul>
                    </section>
                    <div class="clear"></div>
                    <section>
                      <h2>What We Provide</h2>
                      <p>'What We Need', and 'What We Do' then allows us to produce a number of outputs, which are supplied back to you:</p>
                      <ul>
                        <li>A full DataVolley scout file</li>
                        <li>Performance Analysis Reports (all supplied as PDF)</li>
                          <ul class="second">
                            <li><a href={matchReport} target="_blank">A full DataVolley match report (*)</a></li>
                            <li><a href={attackDirectionSR} target="_blank">Attacks after receive by rotation report (*)</a></li>
                            <li><a href={attackDirectionTrans} target="_blank">Attacks during transition by rotation report (*)</a></li>
                            <li><a href={stats} target="_blank">Passing Stats report (*)</a></li>
                            <li><a href={distribution} target="_blank">Setter distribution report (*)</a></li>
                          </ul>
                      </ul>
                      <p>(*) Please click on each report to see an example.</p>
                    </section>
                    <section>
                      <h2>Further Analysis Services</h2>
                      <p>Other volleyball statistical analysis services that we can offer include:</p>
                      <p>Live performance analysis – have an analyst on site to provide statistical analysis of your match as it happens!</p>
                      <p>Video montages – help to show off the skills of your team or a single player (useful for pro-contracts and University/college scholarships).</p>
                      <p>Additional DataVolley reports - for example, helping to show how effective individual attackers have been.</p>
                      <p>Custom Worksheets - these can help to show players performance improvements.</p>
                      <p><strong>To find out more about these other services and any other volleyball statistical needs you may have along with their associated costs, please get in touch with us.</strong></p>
                    </section>
                  </section>
                  <div class="clear"></div>
              </section>
            </Layout>
        );
    }
}

export default Homepage;
