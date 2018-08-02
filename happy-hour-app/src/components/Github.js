import React, { Component } from "react";
import Search from "./Search";
import axios from "axios";

class GitHub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestFailed: false
    };
    this.getData = this.getData.bind(this);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.getData();
  }
  getData() {
    axios
      .get("/bars")
      .then(response => {
        const data = response.data.success.results;
        this.setState({ posts: data });
      })
      .catch(error => console.log(error, "error"));
  }

  render() {
    const myData = this.state.posts;

    console.log(myData);
    return (
      <div>
        <h1>Barzzz</h1>
        <Search />

        <a class="menu-toggle rounded" href="#">
          <i class="fa fa-bars" />
        </a>
        <nav id="sidebar-wrapper">
          <ul class="sidebar-nav">
            <li class="sidebar-brand">
              <a class="js-scroll-trigger" href="#page-top">
                Start Bootstrap
              </a>
            </li>
            <li class="sidebar-nav-item">
              <a class="js-scroll-trigger" href="#page-top">
                Home
              </a>
            </li>
            <li class="sidebar-nav-item">
              <a class="js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li class="sidebar-nav-item">
              <a class="js-scroll-trigger" href="#services">
                Services
              </a>
            </li>
            <li class="sidebar-nav-item">
              <a class="js-scroll-trigger" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li class="sidebar-nav-item">
              <a class="js-scroll-trigger" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <header class="masthead d-flex">
          <div class="container text-center my-auto">
            <h1 class="mb-1">Stylish Portfolio</h1>
            <h3 class="mb-5">
              <em>A Free Bootstrap Theme by Start Bootstrap</em>
            </h3>
            <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">
              Find Out More
            </a>
          </div>
          <div class="overlay" />
        </header>

        <section class="content-section bg-light" id="about">
          <div class="container text-center">
            <div class="row">
              <div class="col-lg-10 mx-auto">
                <h2>
                  Stylish Portfolio is the perfect theme for your next project!
                </h2>
                <p class="lead mb-5">
                  This theme features a flexible, UX friendly sidebar menu and
                  stock photos from our friends at
                  <a href="https://unsplash.com/">Unsplash</a>!
                </p>
                <a
                  class="btn btn-dark btn-xl js-scroll-trigger"
                  href="#services"
                >
                  What We Offer
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          class="content-section bg-primary text-white text-center"
          id="services"
        >
          <div class="container">
            <div class="content-section-heading">
              <h3 class="text-secondary mb-0">Services</h3>
              <h2 class="mb-5">What We Offer </h2>
            </div>
            <div class="row">
              <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span class="service-icon rounded-circle mx-auto mb-3">
                  <i class="icon-screen-smartphone" />
                </span>
                <h4>
                  <strong>Responsive</strong>
                </h4>
                <p class="text-faded mb-0">Looks great on any screen size!</p>
              </div>
              <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span class="service-icon rounded-circle mx-auto mb-3">
                  <i class="icon-pencil" />
                </span>
                <h4>
                  <strong>Redesigned</strong>
                </h4>
                <p class="text-faded mb-0">
                  Freshly redesigned for Bootstrap 4.
                </p>
              </div>
              <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
                <span class="service-icon rounded-circle mx-auto mb-3">
                  <i class="icon-like" />
                </span>
                <h4>
                  <strong>Favorited</strong>
                </h4>
                <p class="text-faded mb-0">
                  Millions of users
                  <i class="fa fa-heart" />
                  Start Bootstrap!
                </p>
              </div>
              <div class="col-lg-3 col-md-6">
                <span class="service-icon rounded-circle mx-auto mb-3">
                  <i class="icon-mustache" />
                </span>
                <h4>
                  <strong>Question</strong>
                </h4>
                <p class="text-faded mb-0">I mustache you a question...</p>
              </div>
            </div>
          </div>
        </section>

        <section class="callout">
          <div class="container text-center">
            <h2 class="mx-auto mb-5">
              Welcome to
              <em>your</em>
              next website!
            </h2>
            <a
              class="btn btn-primary btn-xl"
              href="https://startbootstrap.com/template-overviews/stylish-portfolio/"
            >
              Download Now!
            </a>
          </div>
        </section>

        <section class="content-section" id="portfolio">
          <div class="container">
            <div class="content-section-heading text-center">
              <h3 class="text-secondary mb-0">Portfolio</h3>
              <h2 class="mb-5">Recent Projects</h2>
            </div>
            <div class="row no-gutters">
              {myData.map(item => (
                <div class="col-lg-6">
                  <a class="portfolio-item" href="#">
                    <span class="caption">
                      <span class="caption-content">
                        <h2>Stationary</h2>
                        <p class="mb-0">{item.Name}</p>
                      </span>
                    </span>
                    <img class="img-fluid" src="img/portfolio-1.jpg" alt="" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section class="content-section bg-primary text-white">
          <div class="container text-center">
            <h2 class="mb-4">The buttons below are impossible to resist...</h2>
            <a href="#" class="btn btn-xl btn-light mr-4">
              Click Me!
            </a>
            <a href="#" class="btn btn-xl btn-dark">
              Look at Me!
            </a>
          </div>
        </section>

        <section id="contact" class="map">
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

        <footer class="footer text-center">
          <div class="container">
            <ul class="list-inline mb-5">
              <li class="list-inline-item">
                <a class="social-link rounded-circle text-white mr-3" href="#">
                  <i class="icon-social-facebook" />
                </a>
              </li>
              <li class="list-inline-item">
                <a class="social-link rounded-circle text-white mr-3" href="#">
                  <i class="icon-social-twitter" />
                </a>
              </li>
              <li class="list-inline-item">
                <a class="social-link rounded-circle text-white" href="#">
                  <i class="icon-social-github" />
                </a>
              </li>
            </ul>
            <p class="text-muted small mb-0">
              Copyright &copy; Your Website 2017
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default GitHub;
