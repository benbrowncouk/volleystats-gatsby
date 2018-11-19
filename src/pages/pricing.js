import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import { Link } from "gatsby"

import premium from '../assets/images/logos/premium.png'
import standard from '../assets/images/logos/standard1.png'
import custom from '../assets/images/logos/custom1.png'


import matchReport from '../assets/pdfs/match-report.pdf'
import attackDirectionSR from '../assets/pdfs/attack-direction-sr.pdf'
import attackDirectionTrans from '../assets/pdfs/attack-direction-trans.pdf'
import distribution from '../assets/pdfs/distribution.pdf'
import stats from '../assets/pdfs/stats.pdf'

class Homepage extends React.Component {
    render() {
        const siteTitle = "VolleyStats.co.uk - Volleyball Performance Analysis and Live Statistics";

        return (
            <Layout>
                <Helmet title={siteTitle}>
                  <meta name="google-site-verification" content="" />
                </Helmet>

                <section id="body">
                  <div className="full">
                    <h1>What It Costs</h1>
                  </div>
                  <div class="clear"></div>
                  <div id="doc">
                    <section class="third">
                      <h2>Our Premium Service</h2>
                      <img src={premium} alt="Premium"/>
                      <p>Costs £80 per match (up-to 5 sets).  With this service we provide only you with the analysis and will never share the video or this analysis with others.</p>
                    </section>
                    <section class="third">
                      <h2>Our Standard Service</h2>
                      <img src={standard} alt="Standard"/>
                      <p>Costs £50 per match (up-to 5 sets).  With this service any videos submitted, and performance analysis gained from these, can be used and shared by us with other users. This allows us to build up a library of videos and associated performance analysis we can share with our other site users.</p>
                    </section>
                    <section class="end">
                      <h2>Our Custom Service</h2>
                      <img src={custom} alt="Custom"/>
                      <p>If you’d like to carry out custom analysis, create extra reports or carry out bulk analysis then please get in touch.  We’re happy to discuss the options that work best for you.</p>
                    </section>
                    <div class="clear"></div>
                    <section>
                      <p>Listed below are the charges we make for each match. If you need a bespoke package, please <Link to="/contact-us/">get in touch with us.</Link></p>
                    </section>
                    <section>
                      <h2>How much will it cost me?</h2>
                      <table width="600" border="1" cellspacing="2" cellpadding="5">
                        <tr>
                          <td>Tier</td>
                          <td>No. of Matches</td>
                          <td>Standard £</td>
                          <td>Premium £</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>1 - 10</td>
                          <td>50</td>
                          <td>80</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>11 - 25</td>
                          <td>45</td>
                          <td>70</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>26 - 40</td>
                          <td>40</td>
                          <td>60</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>41 +</td>
                          <td>35</td>
                          <td>50</td>
                        </tr>
                      </table>
                    </section>
                    <section>
                      <h2>What We Provide</h2>
                      <p>Our analysis of your video matches allows us to produce a number of outputs. The following reports are supplied back to you:</p>
                      <ul>
                        <li>A full DataVolley scout file</li>
                        <li>Performance Analysis Reports (all supplied as PDF)</li>
                        <ul class="second">
                          <li><Link to={matchReport} target="_blank">A full DataVolley match report (*)</Link></li>
                          <li><Link to={attackDirectionSR} target="_blank">Attacks after receive by rotation report (*)</Link></li>
                          <li><Link to={attackDirectionTrans} target="_blank">Attacks during transition by rotation report (*)</Link></li>
                          <li><Link to={stats} target="_blank">Passing Stats report (*)</Link></li>
                          <li><Link to={distribution} target="_blank">Setter distribution report (*)</Link></li>
                        </ul>
                      </ul>
                      <p>(*) Please click on each report to see an example.</p>
                    </section>
                    <section>
                      <h2>Additional Analyses</h2>
                      <p>Any additional analyses will be chargeable based on time taken to collate the data as follows:</p>
                      <ul>
                        <li>Standard DataVolley analyses are charged at £3 per analysis per match</li>
                        <li>Custom worksheets are chargeable at £10 minimum charge and £10 per hour spent after that. Your season stats will likely be standard analyses unless you are looking for highly specified statistics (see Skill Detail by Player analysis as this can be done over many matches and gives you lots of data).</li>
                      </ul>
                    </section>
                    <section>
                      <h2>Please Note</h2>
                      <p>Our standard turnaround time, based on receipt of video (i.e. successful upload notification), is 3 days max. We would be happy to discuss a shorter turnaround time for some games although this service would incur an extra charge of £15 per game and require 10 days’ notice.</p>
                    </section>
                  </div>
                  <div class="clear"></div>
              </section>
            </Layout>
        );
    }
}

export default Homepage;
