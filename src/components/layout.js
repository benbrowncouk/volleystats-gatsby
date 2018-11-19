import React from "react";
import Helmet from "react-helmet";
import "../assets/css/main.css";

import Header from "./Header";
import Footer from "./Footer";

class Template extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: 'is-loading'
      }
    }

    componentDidMount () {
      this.timeoutId = setTimeout(() => {
          this.setState({loading: ''});
      }, 100);
    }

    componentWillUnmount () {
      if (this.timeoutId) {
          clearTimeout(this.timeoutId);
      }
    }

    render() {
        const { children } = this.props;

        const siteTitle = "VolleyStats.co.uk - Volleyball Performance Analysis and Live Statistics";

        return (
            <div className={`body ${this.state.loading}`}>
                <Helmet title={siteTitle}>
                  <meta name="google-site-verification" content="-tRo71in_-HoaU2mbH2zx_wqono8ljLIeyBUhyT6xGg" />
                  <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                </Helmet>
                <Header />
                {children}
                <Footer />
            </div>
        );
    }
}

export default Template;
