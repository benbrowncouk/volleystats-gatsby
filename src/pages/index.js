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
          <div id="doc">
            <section>
              <p>Would you like professional performance analysis carried out on your volleyball games, but don’t have the skills or time to do this yourself?</p>
              <p>Perhaps we can help…</p>
            </section>
            <div className="photo-gallery">
              <SimpleSlider images={[this.props.data.imageOne.childImageSharp.fluid, this.props.data.imageTwo.childImageSharp.fluid,
              this.props.data.imageThree.childImageSharp.fluid, this.props.data.imageFour.childImageSharp.fluid, this.props.data.imageFive.childImageSharp.fluid]} />
            </div>
            <div className="clear"></div>
            <section className="third">
              <Link to="/about-us/">
                <h2>Who Are We?</h2>
                <img src={silhouetteImage} alt="" />
                <p>We are lifelong volleyball fanatics who, between us, have many years of experience as players, coaches and carrying out performance analysis.</p><br /></Link>
            </section>
            <section className="third">
              <Link to="/pricing/">
                <h2>What Does It Cost?</h2>
                <img src={changeImage} alt="" />
                <p>Our cost for this service is dependant on the number of matches you would like us to process, and what your club wants. Our price structure for the basic analysis service is listed on our Pricing page. Please get in touch with us if you need to discuss more analysis options.</p></Link>
            </section>
            <section className="end">
              <Link to="/our-services/">
                <h2>What Do We Do?</h2>
                <img src={computerImage} alt="" />
                <p>We analyse information and video footage sent to us using DataVolley software, and we supply you with a standard set of statistics and performance analysis reports (examples are on Our Services page).</p></Link>
            </section>
            <div className="clear"></div>
          </div>
          <div className="clear"></div>
        </section>
      </Layout>
    );
  }
}

export default Homepage;

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 800) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "1.jpg" }) {
    ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "5.jpg" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "3.jpg" }) {
      ...fluidImage
    }
    imageFour: file(relativePath: { eq: "7.jpg" }) {
      ...fluidImage
    }
    imageFive: file(relativePath: { eq: "8.jpg" }) {
      ...fluidImage
    }
  }
`;
