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

import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import photo1 from './assets/img/photos/1.jpg';
import photo2 from './assets/img/photos/2.jpg';
import photo3 from './assets/img/photos/3.jpg';
import photo4 from './assets/img/photos/4.jpg';
import photo5 from './assets/img/photos/5.jpg';
import photo6 from './assets/img/photos/6.jpg';
import photo7 from './assets/img/photos/7.jpg';
import photo8 from './assets/img/photos/8.jpg';
import photo9 from './assets/img/photos/9.jpg';
import photo10 from './assets/img/photos/10.jpg';
import photo11 from './assets/img/photos/11.jpg';
import photo12 from './assets/img/photos/12.jpg';
import photo13 from './assets/img/photos/13.jpg';
import photo14 from './assets/img/photos/14.jpg';
import photo15 from './assets/img/photos/15.jpg';
import photo16 from './assets/img/photos/16.jpg';
import photo17 from './assets/img/photos/17.jpg';

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

const photos = [
  {
    img: [photo1]
  },
  {
    img: [photo2]
  },
  {
    img: [photo3]
  },
  {
    img: [photo4]
  },
  {
    img: [photo5]
  },
  {
    img: [photo6]
  },
  {
    img: [photo7]
  },
  {
    img: [photo8]
  },
  {
    img: [photo9]
  },
  {
    img: [photo10]
  },
  {
    img: [photo11]
  },
  {
    img: [photo12]
  },
  {
    img: [photo13]
  },
  {
    img: [photo14]
  },
  {
    img: [photo15]
  },
  {
    img: [photo16]
  },
  {
    img: [photo17]
  }
]

const videos = [
  {
    url: 'https://www.youtube-nocookie.com/embed/y_Ka5wiQBEw',
    title: 'The Season'
  },
  {
    url: 'https://www.youtube-nocookie.com/embed/-OqrcUvrbRY',
    title: 'The Come Down'
  },
  {
    url: 'https://www.youtube-nocookie.com/embed/7A1utb0NrHU',
    title: 'TINITS'
  }
]

const VideoSlide = ({url, title}) => {
  return (
    <div className="slide">
      <h2>{title}</h2>
      <iframe width="854" height="480" src={url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
  );
};

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

class Photos extends React.Component {
  render() {
    return (
      <img src={this.props.img} alt="Anderson Paak Photo" />
    )
  }
}

class App extends Component {
  constructor() {
    super()
    this.addActiveClass = this.addActiveClass.bind(this);
    this.state = {
      active: false
    }
  }
  addActiveClass = (id) => {
    this.setState({ 
      active: false
    });
    this.timeoutId = setTimeout(function () {
      this.setState({
        active: true,
        id: id
      });
    }.bind(this), 800);
  }
  componentWillUnmount () {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
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
          <a href="https://buy.andersonpaak.com" target="_blank" rel="noopener noreferrer">Store</a>
          <button onClick={this.addActiveClass.bind(this, 'tour')} className={this.state.id === 'tour' ? 'selected': null}>Tour</button>
          <button onClick={this.addActiveClass.bind(this, 'music')} className={this.state.id === 'music' ? 'selected': null}>Music</button>
          <button onClick={this.addActiveClass.bind(this, 'videos')} className={this.state.id === 'videos' ? 'selected': null}>Videos</button>
          <button onClick={this.addActiveClass.bind(this, 'photos')} className={this.state.id === 'photos' ? 'selected': null}>Photos</button>
        </nav>
        <section id="modal" className={this.state.active ? 'open': null}>
          <div id="music" className={this.state.id === 'music' ? 'show':null}>
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
          <div id="videos" className={this.state.id === 'videos' ? 'show':null}>
            {videos.map((video, i) => (
              <VideoSlide 
                key = {i}
                url = {video.url}
                title = {video.title}
              />
              ))
            }
          </div>
          <div id="photos" className={this.state.id === 'photos' ? 'show':null}>
            {photos.map((photo, index) => (
              <Photos
                key={index}
                img={photo.img}
              />
            ))}
          </div>
          <div id="tour" className={this.state.id === 'tour' ? 'show':null}>
            <h2>Upcoming Dates</h2>
            <ul>
              <li className="event">
                <span className="date">10.31.2018</span>
                <span className="venue">Greek Theater</span>
                <span className="location">Los Angeles, CA</span>
                <span className="continent">North America</span>
                <a href="" className="buy">Tickets</a>
              </li>
              <li className="event">
                <span className="date">01.09.2019</span>
                <span className="venue">Hordern Pavilion</span>
                <span className="location">Sydney, NSW</span>
                <span className="continent">Australia</span>
                <a href="" className="buy">Tickets</a>
              </li>
              <li className="event">
                <span className="date">01.10.2019</span>
                <span className="venue">Festival Hall</span>
                <span className="location">Melbourne, VIC</span>
                <span className="continent">Australia</span>
                <a href="" className="buy">Tickets</a>
              </li>
              <li className="event">
                <span className="date">01.10.2019</span>
                <span className="venue">Festival Hall</span>
                <span className="location">Melbourne, VIC</span>
                <span className="continent">Australia</span>
                <a href="" className="buy">Tickets</a>
              </li>
              <li className="event">
                <span className="date">01.12.2019</span>
                <span className="venue">Logan Campbell Centre</span>
                <span className="location">Auckland</span>
                <span className="continent">New Zealand</span>
                <a href="" className="buy">Tickets</a>
              </li>
            </ul>
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
    );
  }
}

export default App;
