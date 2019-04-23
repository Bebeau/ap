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

import venturaLogo from './assets/img/ventura.png';
import venturaMobile from './assets/img/ventura_album.png';
import aftermath from './assets/img/SVG/aftermath.svg';
import obe from './assets/img/obe.png';
import twelveTone from './assets/img/12tone.png';

import logoWhite from './assets/img/SVG/logo_white.svg';
import Particles from 'react-particles-js';

import facebook from './assets/img/SVG/facebook.svg';
import instagram from './assets/img/SVG/instagram.svg';
import twitter from './assets/img/SVG/twitter.svg';
import youtube from './assets/img/SVG/youtube.svg';

import apple from './assets/img/SVG/apple.svg';
import spotify from './assets/img/SVG/spotify.svg';
import itunes from './assets/img/SVG/itunes.svg';
import google from './assets/img/SVG/google.svg';
import amazon from './assets/img/SVG/amazon.svg';

const advancedMatching = {};
const options = {
    autoConfig: true,
    debug: false,
};
ReactPixel.init('252805335389609', advancedMatching, options);
ReactPixel.init('1024129180947932', advancedMatching, options);
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
    this.targetSplash = document.querySelector('#splash');
    disableBodyScroll(this.targetSplash);
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
    return (
      <div id="App">
        <Header />
        <section className={this.state.clicked ? 'close': null} id="splash">
          <button onClick={this.toggleSplash} >Enter Site</button>
          <article className="half">
            <img id="bgImage" className="showMobile" src={venturaMobile} alt="Ventura" />
            <img id="title" src={venturaLogo} alt="Ventura" />
            <div id="musicLinks">
              <p className="date">04.12.19</p>
              <p className="order">Pre-Order The Album</p>
              <a id="apple" href="https://itunes.apple.com/album/ventura/1456175798?app=music" target="_blank" rel="noopener noreferrer">
                <img src={apple} alt="Apple" />
              </a>
              <a id="spotify" href="https://open.spotify.com/album/4oLEB2ABMfxqC6mchADZp7" target="_blank" rel="noopener noreferrer">
                <img src={spotify} alt="Spotify" />
              </a>
              <a id="itunes" href="https://itunes.apple.com/album/ventura/1456175798?app=itunes" target="_blank" rel="noopener noreferrer">
                <img src={itunes} alt="iTunes" />
              </a>
              <a id="google" href="https://play.google.com/store/music/album?id=Bvutalufsiwjbcu4365hjnz3yzu" target="_blank" rel="noopener noreferrer">
                <img src={google} alt="Google" />
              </a>
              <a id="amazon" href="https://www.amazon.com/gp/product/B07PQNN8XW?tag=smarturl-pivot-20" target="_blank" rel="noopener noreferrer">
                <img src={amazon} alt="Amazon" />
              </a>
              <a id="shop" href="https://buy.andersonpaak.com/" target="_blank" rel="noopener noreferrer">Shop<br /><span>Now</span></a>
            </div>
          </article>
          <div id="artwork">
            <img src={venturaMobile} alt="Ventura" />
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