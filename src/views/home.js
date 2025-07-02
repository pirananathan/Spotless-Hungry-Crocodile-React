import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Hero9 from '../components/hero9'
import Features1 from '../components/features1'
import Contact3 from '../components/contact3'
import Footer1 from '../components/footer1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Spotless Hungry Crocodile</title>
        <meta property="og:title" content="Spotless Hungry Crocodile" />
      </Helmet>
      <Navbar4
        link1={
          <Fragment>
            <span className="home-text10">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12">Services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13">Contact</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text14">Link5</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text15">Sign Up</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text16">Log In</span>
          </Fragment>
        }
      ></Navbar4>
      <Hero9
        action1={
          <Fragment>
            <span className="home-text17">Learn More</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text18">Join Now</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text19">
              Unlock premium benefits and rewards
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text20">Empower your natural beauty</span>
          </Fragment>
        }
      ></Hero9>
      <Features1
        slogan={
          <Fragment>
            <span className="home-text21">
              Empowering you with cutting-edge tools
            </span>
          </Fragment>
        }
        mainAction={
          <Fragment>
            <span className="home-text22">Discover More</span>
          </Fragment>
        }
        sectionTitle={
          <Fragment>
            <span className="home-text23">Our Features</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text24">Intuitive Interface</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text25">Advanced Analytics</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text26">24/7 Support</span>
          </Fragment>
        }
        secondaryAction={
          <Fragment>
            <span className="home-text27">Get Started</span>
          </Fragment>
        }
        sectionDescription={
          <Fragment>
            <span className="home-text28">
              Explore the key features that set us apart from the rest.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text29">
              User-friendly interface designed for seamless navigation.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text30">
              Gain valuable insights with our advanced analytics tools.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text31">
              Round-the-clock support to assist you whenever you need help.
            </span>
          </Fragment>
        }
      ></Features1>
      <Contact3
        email1={
          <Fragment>
            <span className="home-text32">contact@example.com</span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="home-text33">+1234567890</span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="home-text34">123 Main Street, City, Country</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text35">
              Feel free to reach out to us for any inquiries or feedback.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text36">
              Our team is ready to assist you.
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="home-text37">
              You can also fill out the form below to send us a message.
            </span>
          </Fragment>
        }
        content4={
          <Fragment>
            <span className="home-text38">
              We typically respond within 24 hours.
            </span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="home-text39">
              Follow us on social media for updates and news.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text40">Contact Us</span>
          </Fragment>
        }
      ></Contact3>
      <Footer1
        link1={
          <Fragment>
            <span className="home-text41">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text42">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text43">Contact Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text44">Facebook</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text45">Twitter</span>
          </Fragment>
        }
        link6={
          <Fragment>
            <span className="home-text46">Instagram</span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="home-text47">LinkedIn</span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="home-text48">YouTube</span>
          </Fragment>
        }
        link9={
          <Fragment>
            <span className="home-text49">Pinterest</span>
          </Fragment>
        }
        link10={
          <Fragment>
            <span className="home-text50">Tumblr</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text51">/subscribe</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text52">
              Stay Connected with Us on Social Media
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="home-text53">
              © 2022 Your Company. All Rights Reserved.
            </span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text54">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text55">Cookie Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text56">Privacy Policy</span>
          </Fragment>
        }
        column1Title={
          <Fragment>
            <span className="home-text57">Explore</span>
          </Fragment>
        }
        column2Title={
          <Fragment>
            <span className="home-text58">Connect</span>
          </Fragment>
        }
        socialLinkTitleCategory={
          <Fragment>
            <span className="home-text59">Follow Us</span>
          </Fragment>
        }
      ></Footer1>
    </div>
  )
}

export default Home
