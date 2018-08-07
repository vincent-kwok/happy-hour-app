import React, { Component } from "react";
<<<<<<< Updated upstream
import Toolbar from "./components/Toolbar";
import NoteContainer from "./components/NoteContainer";
import Github from "./components/Github";
import { transformNotes } from "./helpers";
=======
import axios from 'axios';
>>>>>>> Stashed changes
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: props.zip,
      bars: []
    }
    this.searchZip = this.searchZip.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  searchZip() {
    axios.get('https://api.barzz.net/api/search?', {
      params: { 
        zip: this.state.zip,
        specials: 'Y',
        user_key: '4ba8ad255b786d9a8e308195706be07c'
      }})
      .then( (response) => {
        // console.log("response", response);
        this.setState({
          bars: response.data.success.results
        });
        // console.log("searchZip", this.state.searchZip);
      })
      .catch( (error) => {
        console.log(error);
      });
  }

  handleChange(e) {
    this.setState({zip: e.target.value});
  }

  render() {
    const myData = this.state.bars;
    console.log(myData);

    return (
      <div id="app">
        <header className="masthead d-flex">
          <div className="container text-center my-auto">
            <h1 className="mb-1">Barzzz</h1>
            <h3 className="mb-5">
              <em>Find happy hours around you!</em>
            </h3>
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter zip" />
            <button className="btn btn-primary btn-xl js-scroll-trigger" onClick={this.searchZip}>Search</button>
          </div>
          <div className="overlay" />
        </header>

        <section className="content-section" id="portfolio">
          <div className="container">
            <div className="content-section-heading text-center">
              <h3 className="text-secondary mb-0">Barzzz</h3>
              <h2 className="mb-5">Check out these happy hours!</h2>
            </div>
            <div className="row no-gutters">

              {myData.map((item) => (
                <div className="col-lg-6">
                  <a className="portfolio-item">
                    <span className="caption">
                      <span className="caption-content">
                        <p className="mb-0">{item.Name}</p>
                        <p className="mb-0">{item.Address}</p>
                        <p className="mb-0">{item.Bar_Url}</p>
                        <p className="mb-0">Sunday: {item.Sunday_Specials}</p>
                        <p className="mb-0">Monday: {item.Monday_Specials}</p>
                        <p className="mb-0">Tuesday: {item.Tuesday_Specials}</p>
                        <p className="mb-0">Wednesday: {item.Wednesday_Specials}</p>
                        <p className="mb-0">Thursday: {item.Thursday_Specials}</p>
                        <p className="mb-0">Friday: {item.Friday_Specials}</p>
                        <p className="mb-0">Saturday: {item.Saturday_Specials}</p>
                      </span>
                    </span>
                    <img className="img-fluid" src="img/portfolio-1.jpg" alt="" />
                  </a>
                </div>
              ))}

            </div>
          </div>
        </section>

{/*}
        <a className="menu-toggle rounded">
          <i className="fa fa-bars" />
        </a>
        <nav id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <li className="sidebar-brand">
              <a className="js-scroll-trigger" href="#page-top">
                Start Bootstrap
              </a>
            </li>
            <li className="sidebar-nav-item">
              <a className="js-scroll-trigger" href="#page-top">
                Home
              </a>
            </li>
            <li className="sidebar-nav-item">
              <a className="js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li className="sidebar-nav-item">
              <a className="js-scroll-trigger" href="#services">
                Services
              </a>
            </li>
            <li className="sidebar-nav-item">
              <a className="js-scroll-trigger" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="sidebar-nav-item">
              <a className="js-scroll-trigger" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <section className="content-section bg-light" id="about">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h2>
                  Stylish Portfolio is the perfect theme for your next project!
                </h2>
                <p className="lead mb-5">
                  This theme features a flexible, UX friendly sidebar menu and
                  stock photos from our friends at
                  <a href="https://unsplash.com/">Unsplash</a>!
                </p>
                <a
                  className="btn btn-dark btn-xl js-scroll-trigger"
                  href="#services"
                >
                  What We Offer
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          className="content-section bg-primary text-white text-center"
          id="services"
        >
          <div className="container">
            <div className="content-section-heading">
              <h3 className="text-secondary mb-0">Services</h3>
              <h2 className="mb-5">What We Offer </h2>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  <i className="icon-screen-smartphone" />
                </span>
                <h4>
                  <strong>Responsive</strong>
                </h4>
                <p className="text-faded mb-0">Looks great on any screen size!</p>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  <i className="icon-pencil" />
                </span>
                <h4>
                  <strong>Redesigned</strong>
                </h4>
                <p className="text-faded mb-0">
                  Freshly redesigned for Bootstrap 4.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  <i className="icon-like" />
                </span>
                <h4>
                  <strong>Favorited</strong>
                </h4>
                <p className="text-faded mb-0">
                  Millions of users
                  <i className="fa fa-heart" />
                  Start Bootstrap!
                </p>
              </div>
              <div className="col-lg-3 col-md-6">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  <i className="icon-mustache" />
                </span>
                <h4>
                  <strong>Question</strong>
                </h4>
                <p className="text-faded mb-0">I mustache you a question...</p>
              </div>
            </div>
          </div>
        </section>

        <section className="callout">
          <div className="container text-center">
            <h2 className="mx-auto mb-5">
              Welcome to
              <em>your</em>
              next website!
            </h2>
            <a
              className="btn btn-primary btn-xl"
              href="https://startbootstrap.com/template-overviews/stylish-portfolio/"
            >
              Download Now!
            </a>
          </div>
        </section>

        <section className="content-section bg-primary text-white">
          <div className="container text-center">
            <h2 className="mb-4">The buttons below are impossible to resist...</h2>
            <a className="btn btn-xl btn-light mr-4">
              Click Me!
            </a>
            <a className="btn btn-xl btn-dark">
              Look at Me!
            </a>
          </div>
        </section>
*/}

        <section id="contact" className="map">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A&amp;output=embed"
          />
          <br />
          <small>
            <a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A" />
          </small>
        </section>

        <footer className="footer text-center">
          <div className="container">
            <ul className="list-inline mb-5">
              <li className="list-inline-item">
                <a className="social-link rounded-circle text-white mr-3">
                  <i className="icon-social-facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="social-link rounded-circle text-white mr-3">
                  <i className="icon-social-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="social-link rounded-circle text-white">
                  <i className="icon-social-github" />
                </a>
              </li>
            </ul>
            <p className="text-muted small mb-0">
              Copyright &copy; Your Website 2017
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
