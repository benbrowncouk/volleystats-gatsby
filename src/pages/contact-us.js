import React from "react";

import Layout from '../components/layout';

class Homepage extends React.Component {
  render() {

    return (
      <Layout>
        <section id="body">
          <div className="full">
            <h1>Get In Touch</h1>
          </div>
          <div id="doc">
            <section>
              <p>We always welcome enquiries, whether about output PDFs that you have received, a custom requirement you may have, or just for a quote. Please use this page to send us your enquiry.</p>
            </section>
          </div>
          <form method="post" name="volleystats-contact" data-netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="volleystats-contact" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="6"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Clear" /></li>
            </ul>
          </form>
        </section>
      </Layout>
    );
  }
}

export default Homepage;
