import React, { Component } from 'react';

import ReactPixel from 'react-facebook-pixel';
import VideoSlider from './components/Carousel/videos.js';
import Tours from './components/tour.js';
import Albums from './components/music.js';
import Photos from './components/photos.js';

import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import './assets/sass/style.css';

import Header from './layout/header';
import Footer from './layout/footer';

import logoWhite from './assets/img/SVG/logo_white.svg';

import oxnardLogo from './assets/img/oxnard.png';
import oxnardLP from './assets/img/oxnardLP.png';

import oxnardMobile from './assets/img/oxnard_albumnMobile.jpg';

import Particles from 'react-particles-js';

import aftermath from './assets/img/SVG/aftermath.svg';
import obe from './assets/img/obe.png';
import twelveTone from './assets/img/12tone.png';

import introVideoMP4 from './assets/videos/oxnard_intro.mp4';
import introVideoWEBM from './assets/videos/oxnard_intro.webm';

import facebook from './assets/img/SVG/facebook.svg';
import instagram from './assets/img/SVG/instagram.svg';
import twitter from './assets/img/SVG/twitter.svg';
import youtube from './assets/img/SVG/youtube.svg';

const advancedMatching = {};
const options = {
    autoConfig: true,
    debug: false,
};
ReactPixel.init('252805335389609', advancedMatching, options);
ReactPixel.pageView();

class App extends Component {
  constructor() {
    super()
    this.addActiveClass = this.addActiveClass.bind(this);
    var pathArray = window.location.pathname.split('/');
    if(
      pathArray[1] === 'home'
    ) {
      this.state = {
        active: false,
        fadeIn: true,
        clicked: true
      }
    } else if(
      pathArray[1] === 'tour' ||
      pathArray[1] === 'music' ||
      pathArray[1] === 'videos' ||
      pathArray[1] === 'photos'
    ) {
      this.state = {
        active: true,
        id: pathArray[1],
        fadeIn: true,
        clicked: true
      }
    } else {
      this.state = {
        active: false,
        clicked: false
      }
    }
  }
  targetElement = null;
  componentDidMount() {
    this.targetVideos = document.querySelector('#videos');
    this.targetPhotos = document.querySelector('#photos');
    this.targetTours = document.querySelector('#tour');
    this.targetMusic = document.querySelector('#music');
  }
  toggleSplash = () => {
    const currentState = this.state.clicked;
    this.setState({ 
      clicked: !currentState,
      fadeIn: true
    });
  }
  addActiveClass = (id) => {
    ReactPixel.track('ViewContent');
    this.setState({ 
      active: false
    });
    this.timeoutId = setTimeout(function () {
      this.setState({
        active: true,
        id: id
      });
      disableBodyScroll(this.targetVideos);
      disableBodyScroll(this.targetPhotos);
      disableBodyScroll(this.targetTours);
      disableBodyScroll(this.targetMusic);
    }.bind(this), 800);
    // window.location.href = window.location.protocol+"://"+window.location.hostname+"/"+id;
  }
  showMenu = (id) => {
    this.setState({ 
      active: false
    });
  }
  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    clearAllBodyScrollLocks();
  }
  render() {
    // if(this.state.clicked) {
    //     var fixed = document.getElementById('splash');
    //     fixed.addEventListener('touchmove', function(e) {
    //     e.preventDefault();
    //   }, false);
    // }
    return (
      <div id="App">
        <Header />
        <section className={this.state.clicked ? 'close': null} id="splash">
          <button onClick={this.toggleSplash} >Enter Site</button>
          <article className="half">
            <img id="bgImage" className="showMobile" src={oxnardMobile} alt="Oxnard" />
            <img id="title" src={oxnardLogo} alt="Oxnard" />
            <div id="musicLinks">
              <p>Album Available Now</p>
              <a href="https://buy.andersonpaak.com/" target="_BLANK" rel="noopener noreferrer">
                <img src={oxnardLP} alt="Oxnard Pre-Order" />
              </a>
              <p className="merchLink">Shop Now</p>
            </div>
          </article>
          <div id="videoWrap">
            <video id="video" autoPlay muted preload="auto">
              <source src={introVideoWEBM} type="video/webm" />
              <source src={introVideoMP4} type="video/mp4" />
            </video>
          </div>
          <div id="logoMarks">
            <img id="aftermath" src={aftermath} alt="Aftermath" />
            <img id="obe" src={obe} alt="OBE" />
            <img id="twelveTone" src={twelveTone} alt="12 Tone" />
          </div>
        </section>
        <div id="container" className={this.state.clicked ? 'in': null}>
          <div id="logo">
            <img src={logoWhite} alt="Anderson Paak" />
          </div>
          <nav className="hideMobile">
            <a href="https://buy.andersonpaak.com" target="_blank" rel="noopener noreferrer">Store</a>
            <button onClick={this.addActiveClass.bind(this, 'tour')} className={this.state.id === 'tour' ? 'selected': null}>Tour</button>
            <button onClick={this.addActiveClass.bind(this, 'music')} className={this.state.id === 'music' ? 'selected': null}>Music</button>
            <button onClick={this.addActiveClass.bind(this, 'videos')} className={this.state.id === 'videos' ? 'selected': null}>Videos</button>
            <button onClick={this.addActiveClass.bind(this, 'photos')} className={this.state.id === 'photos' ? 'selected': null}>Photos</button>
          </nav>
          <nav className={this.state.active ? 'open showMobile': "showMobile"}>
            <button className="close" onClick={this.showMenu}></button>
            <div className="navLinks">
              <a href="https://buy.andersonpaak.com" target="_blank" rel="noopener noreferrer">Store</a>
              <button onClick={this.addActiveClass.bind(this, 'tour')}>Tour</button>
              <button onClick={this.addActiveClass.bind(this, 'music')}>Music</button>
              <button onClick={this.addActiveClass.bind(this, 'videos')}>Videos</button>
              <button onClick={this.addActiveClass.bind(this, 'photos')}>Photos</button>
              <article id="social" className="showMobile">
                <a id="facebook" href="https://www.facebook.com/AndersonPaak" target="_BLANK" rel="noopener noreferrer">
                  <img src={facebook} alt="" />
                </a>
                <a id="instagram" href="https://www.instagram.com/anderson._paak/" target="_BLANK" rel="noopener noreferrer">
                  <img src={instagram} alt="" />
                </a>
                <a id="twitter" href="https://twitter.com/AndersonPaak" target="_BLANK" rel="noopener noreferrer">
                  <img src={twitter} alt="" />
                </a>
                <a id="youtube" href="https://www.youtube.com/user/Breezylovejoy" target="_BLANK" rel="noopener noreferrer">
                  <img src={youtube} alt="" />
                </a>
              </article>
            </div>
          </nav>
          <section id="modal" className={this.state.active ? 'open': null}>
            <div id="music" className={this.state.id === 'music' ? 'show modalwrap': 'modalwrap'}>
              <Albums/>
            </div>
            <div id="videos" className={this.state.id === 'videos' ? 'show modalwrap': 'modalwrap'}>
              <VideoSlider />
            </div>
            <div id="photos" className={this.state.id === 'photos' ? 'show modalwrap': 'modalwrap'}>
              <Photos />
            </div>
            <div id="tour" className={this.state.id === 'tour' ? 'show modalwrap': 'modalwrap'}>
              <h2>Upcoming Dates</h2>
              <Tours />
            </div>
          </section>
          <Footer />
          <article id="stage" className={this.state.active ? 'open': null}></article>
          <Particles
            params={
              {"particles":{"number":{"value":100,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":2,"random":true,"anim":{"enable":false,"speed":20,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}
            }
            className="particles"
          />
        </div>
      </div>
    );
  }
}

export default App;
