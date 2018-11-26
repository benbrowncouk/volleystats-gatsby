import React from "react";

import Layout from '../components/layout';
import SimpleSlider from '../components/carousel'

import { Link, graphql } from "gatsby"

import silhouetteImage from '../assets/images/multiple-users-silhouette.png';
import changeImage from '../assets/images/change.png';
import computerImage from '../assets/images/computer-service.png';

class Homepage extends React.Component {
    render() {
        return (
            <Layout>
                <section id="body">
                  <h1>Page Not Found</h1>
                  <p>Sorry, that's embarassing, but that page was not found. Please go back to <Link to="/">homepage</Link>.</p>
              </section>
            </Layout>
        );
    }
}

export default Homepage;
