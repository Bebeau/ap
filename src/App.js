import React, { Component } from 'react';

import './assets/sass/style.css';

import Header from './layout/header';
import Footer from './layout/footer';
import Splash from './layout/splash';

import logo from './assets/img/SVG/logo_white.svg';

import apple from './assets/img/SVG/apple_white.svg';
import spotify from './assets/img/SVG/spotify.svg';
import itunes from './assets/img/SVG/itunes.svg';
import tidal from './assets/img/SVG/tidal_white.svg';
import google from './assets/img/SVG/google.svg';
import amazon from './assets/img/SVG/amazon.svg';

import malibu from './assets/img/albums/malibu.jpg';
import yesLawdRemix from './assets/img/albums/yesLawdRemix.jpg';
import yesLawd from './assets/img/albums/yesLawd.jpg';
import tillitsover from './assets/img/albums/tillItsOver.jpg';
import venice from './assets/img/albums/venice.jpg';

import Particles from 'react-particles-js';

var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;

const albums = [
  {
    artwork: [malibu],
    apple: 'https://geo.itunes.apple.com/us/album/malibu/1065681363?mt=1&app=music',
    spotify: 'http://testing.com',
    itunes: 'http://testing.com',
    tidal: 'http://testing.com',
    google: 'http://testing.com',
    amazon: 'http://testing.com'
  },
  {
    artwork: [yesLawdRemix],
    apple: 'http://testing.com',
    spotify: 'http://testing.com',
    itunes: 'http://testing.com',
    tidal: 'http://testing.com',
    google: 'http://testing.com',
    amazon: 'http://testing.com'
  },
  {
    artwork: [tillitsover],
    apple: 'http://testing.com',
    spotify: 'http://testing.com',
    itunes: 'http://testing.com',
    tidal: 'http://testing.com',
    google: 'http://testing.com',
    amazon: 'http://testing.com'
  },
  {
    artwork: [yesLawd],
    apple: 'http://testing.com',
    spotify: 'http://testing.com',
    itunes: 'http://testing.com',
    tidal: 'http://testing.com',
    google: 'http://testing.com',
    amazon: 'http://testing.com'
  },
  {
    artwork: [venice],
    apple: 'http://testing.com',
    spotify: 'http://testing.com',
    itunes: 'http://testing.com',
    tidal: 'http://testing.com',
    google: 'http://testing.com',
    amazon: 'http://testing.com'
  }
]

const videos = [
  {
    url: 'https://www.youtube.com/watch?v=y_Ka5wiQBEw',
    title: 'The Season',
    poster: ''
  },
  {
    url: 'https://www.youtube.com/watch?v=-OqrcUvrbRY',
    title: 'The Come Down',
    poster: ''
  },
  {
    url: 'https://www.youtube.com/watch?v=7A1utb0NrHU',
    title: 'TINITS',
    poster: ''
  }
]

class Albums extends React.Component {
  render() {
    return (
      <article className="album">
        <img src={this.props.artwork[0]} alt="" />
        <a className="apple" href={this.props.apple} target="_BLANK" rel="noopener noreferrer">
          <img src={apple} alt="Apple Music" />
        </a>
        <a className="spotify" href={this.props.spotify} target="_BLANK" rel="noopener noreferrer">
          <img src={spotify} alt="Spotify" />
        </a>
        <a className="itunes" href={this.props.itunes} target="_BLANK" rel="noopener noreferrer">
          <img src={itunes} alt="iTunes" />
        </a>
        <a className="tidal" href={this.props.tidal} target="_BLANK" rel="noopener noreferrer">
          <img src={tidal} alt="Tidal" />
        </a>
        <a className="google" href={this.props.google} target="_BLANK" rel="noopener noreferrer">
          <img src={google} alt="Google" />
        </a>
        <a className="amazon" href={this.props.amazon} target="_BLANK" rel="noopener noreferrer">
          <img src={amazon} alt="Amazon" />
        </a>
      </article>
    )
  }
};

class Videos extends React.Component {
  render() {
    return (
      <video poster={this.props.poster}>
        <source src={this.props.url} type="video/mp4" />
      </video>
    )
  }
};

class App extends Component {
  constructor() {
    super()
    this.addActiveClass = this.addActiveClass.bind(this);
    this.state = {
      active: false
    }
  }
  addActiveClass = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }
  render() {
    return (
      <div id="App">
        <Header />
        <Splash />
        <div id="logo">
          <img src={logo} alt="Anderson Paak" />
        </div>
        <nav>
          <button onClick={this.addActiveClass} className={this.state.active ? 'selected': null}>Home</button>
          <a href="https://buy.andersonpaak.com" target="_blank" rel="noopener noreferrer">Store</a>
          <button onClick={this.toggle} className={this.state.active ? 'selected': null}>Tour</button>
          <button onClick={this.toggle} className={this.state.active ? 'selected': null}>Music</button>
          <button onClick={this.toggle} className={this.state.active ? 'selected': null}>Videos</button>
          <button onClick={this.toggle} className={this.state.active ? 'selected': null}>Photos</button>
        </nav>
        <section id="modal" className={this.state.active ? 'open': null}>
          <div id="music">
            {albums.map((album, index) => (
              <Albums
                key={index}
                artwork={album.artwork}
                apple={album.apple}
                spotify={album.spotify}
                itunes={album.itunes}
                tidal={album.tidal}
                google={album.google}
                amazon={album.amazon}
              />
            ))}
          </div>
          <div id="videos">
          </div>
          <div id="photos">
          </div>
          <div id="tour">
          </div>
        </section>
        <Footer />
        <article id="stage" className={this.state.active ? 'open': null}></article>
        <Particles 
          params={
            {"particles":{"number":{"value":100,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":2,"random":true,"anim":{"enable":false,"speed":20,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}
          }/>
      </div>
    );
  }
}

export default App;
