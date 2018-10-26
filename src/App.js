import React, { Component } from 'react';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import ReactPixel from 'react-facebook-pixel';

import './assets/sass/style.css';

import Header from './layout/header';
import Footer from './layout/footer';

import logoWhite from './assets/img/SVG/logo_white.svg';

import oxnardLogo from './assets/img/oxnard.png';

import apple from './assets/img/SVG/apple.svg';
import appleWhite from './assets/img/SVG/apple_white.svg';
import spotify from './assets/img/SVG/spotify.svg';
import itunes from './assets/img/SVG/itunes.svg';
import tidal from './assets/img/SVG/tidal.svg';
import tidalWhite from './assets/img/SVG/tidal_white.svg';
import google from './assets/img/icons/googleplay.png';
import amazon from './assets/img/SVG/amazon.svg';

import oxnard from './assets/img/albums/oxnard.jpg';
import malibu from './assets/img/albums/malibu.jpg';
import bubblin from './assets/img/albums/bubblin.jpg';
import yesLawd from './assets/img/albums/yesLawd.jpg';
import tillitsover from './assets/img/albums/tillItsOver.jpg';
import venice from './assets/img/albums/venice.jpg';

import Particles from 'react-particles-js';

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
import photo18 from './assets/img/photos/18.jpg';

import aftermath from './assets/img/SVG/aftermath.svg';

const advancedMatching = {};
const options = {
    autoConfig: true,
    debug: false,
};
ReactPixel.init('252805335389609', advancedMatching, options);

const albums = [
  {
    artwork: [oxnard],
    apple: 'https://itunes.apple.com/us/album/bubblin/1383381572?i=1383381915&app=music&ign-mpt=uo%3D4',
    spotify: 'https://open.spotify.com/album/6N1y1a5qnqN8pBkizOdMvk?si=A2y4GZEGQxq68qt9pu8jog',
    itunes: 'https://itunes.apple.com/us/album/bubblin/1383381572?i=1383381915&app=music&ign-mpt=uo%3D4',
    tidal: 'https://tidal.com/track/88736899',
    google: 'https://play.google.com/store/music/album?id=B756yrjl7kg2eofq2fqclykshsm&tid=song-Ttjpmct5y72vzsqhxxmng2gvx4a',
    amazon: 'https://www.amazon.com/dp/B07CZVG8QR/ref=ap_ws_tlw_trk6'
  },
  {
    artwork: [bubblin],
    apple: 'https://itunes.apple.com/us/album/bubblin/1383381572?i=1383381915&app=music&ign-mpt=uo%3D4',
    spotify: 'https://open.spotify.com/album/6N1y1a5qnqN8pBkizOdMvk?si=A2y4GZEGQxq68qt9pu8jog',
    itunes: 'https://itunes.apple.com/us/album/bubblin/1383381572?i=1383381915&app=music&ign-mpt=uo%3D4',
    tidal: 'https://tidal.com/track/88736899',
    google: 'https://play.google.com/store/music/album?id=B756yrjl7kg2eofq2fqclykshsm&tid=song-Ttjpmct5y72vzsqhxxmng2gvx4a',
    amazon: 'https://www.amazon.com/dp/B07CZVG8QR/ref=ap_ws_tlw_trk6'
  },
  {
    artwork: [malibu],
    apple: 'https://open.spotify.com/album/4VFG1DOuTeDMBjBLZT7hCK?si=2ZJdsZzsSQufftITqowCpg',
    spotify: 'https://open.spotify.com/album/4VFG1DOuTeDMBjBLZT7hCK?si=2ZJdsZzsSQufftITqowCpg',
    itunes: 'https://itunes.apple.com/us/album/malibu/1065681363?app=music&ign-mpt=uo%3D4',
    tidal: 'https://tidal.com/album/55010255',
    google: 'https://play.google.com/store/music/album/Anderson_Paak_Malibu?id=B562fkkr2nawzqrty3v5vr2x7fe',
    amazon: 'https://www.amazon.com/Malibu-Explicit-Anderson-Paak/dp/B0192ZU8TG/ref=ntt_mus_dp_dpt_1'
  },
  {
    artwork: [tillitsover],
    apple: 'https://itunes.apple.com/us/album/til-its-over-single/1355644175?app=music&ign-mpt=uo%3D4',
    spotify: 'https://open.spotify.com/album/7z4UqvGprXWpQ0wo8ldLDA?si=giMbalMYQh2U1DfLF87KeQ',
    itunes: 'https://itunes.apple.com/us/album/til-its-over-single/1355644175?app=music&ign-mpt=uo%3D4',
    tidal: 'https://tidal.com/album/86783333',
    google: 'https://play.google.com/store/music/album?id=Be3blgz2r4f2fvsqxkzt4xihzre&tid=song-Tujidsxyffjurb2q5skhuosnd74',
    amazon: 'https://www.amazon.com/dp/B07BVTB4HB/ref=ap_ws_tlw_trk5'
  },
  {
    artwork: [yesLawd],
    apple: 'https://itunes.apple.com/us/album/yes-lawd/1150640159?app=music&ign-mpt=uo%3D4',
    spotify: 'https://open.spotify.com/album/0K3FiXt6ekJTWaUku3LpHL?si=49_BbqGuSVaLPrV0QUFGxw',
    itunes: 'https://itunes.apple.com/us/album/yes-lawd/1150640159?app=music&ign-mpt=uo%3D4',
    tidal: 'https://tidal.com/album/82333145',
    google: 'https://play.google.com/store/music/album/NxWorries_Yes_Lawd?id=Bdo33c3q74gfnfizeivojzmfhka&hl=en',
    amazon: 'https://www.amazon.com/Yes-Lawd-Explicit-NxWorries/dp/B0786VTWKT/ref=sr_1_1?s=dmusic&ie=UTF8&qid=1540424593&sr=1-1-mp3-albums-bar-strip-0&keywords=nxworries'
  },
  {
    artwork: [venice],
    apple: 'https://itunes.apple.com/us/album/venice/929712951?app=music&ign-mpt=uo%3D4',
    spotify: 'https://open.spotify.com/album/2DOiha5oI19Dmw5M9ryHD8?si=gfEotoYwQua5ZP2Vt8zGzQ',
    itunes: 'https://itunes.apple.com/us/album/venice/929712951?app=music&ign-mpt=uo%3D4',
    tidal: 'https://tidal.com/album/36796815',
    google: 'https://play.google.com/store/music/album/Anderson_Paak_Venice?id=Bhvutosdz6uiobdwusjlsnndkou',
    amazon: 'https://www.amazon.com/Venice-Explicit-Anderson-Paak/dp/B00P1K6Z3U/ref=ntt_mus_dp_dpt_2'
  }
]

const photos = [
  {
    img: [photo1]
  },
  {
    img: [photo18]
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
    url: 'https://www.youtube-nocookie.com/embed/7PmUtmfTmbg?showinfo=0&controls=0',
    title: "Bubblin'"
  },
  {
    url: 'https://www.youtube-nocookie.com/embed/N6rusSDuv-Y?showinfo=0&controls=0',
    title: "Bubblin' Challenge"
  },
  {
    url: 'https://www.youtube-nocookie.com/embed/-OqrcUvrbRY?showinfo=0&controls=0',
    title: 'Come Down'
  },
  {
    url: 'https://www.youtube-nocookie.com/embed/y_Ka5wiQBEw?showinfo=0&controls=0',
    title: 'The Season / Carry Me / The Waters'
  }
]

const VideoSlide = ({url, title}) => {
  return (
    <div className="slide">
      <h2>{title}</h2>
      <iframe src={url} title={title} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
    </div>
  );
};

class Albums extends React.Component {
  render() {
    return (
      <article className="album">
        <img src={this.props.artwork[0]} alt="" />
        <a className="apple" href={this.props.apple} target="_BLANK" rel="noopener noreferrer">
          <img src={appleWhite} alt="Apple Music" />
        </a>
        <a className="spotify" href={this.props.spotify} target="_BLANK" rel="noopener noreferrer">
          <img src={spotify} alt="Spotify" />
        </a>
        <a className="itunes" href={this.props.itunes} target="_BLANK" rel="noopener noreferrer">
          <img src={itunes} alt="iTunes" />
        </a>
        <a className="tidal" href={this.props.tidal} target="_BLANK" rel="noopener noreferrer">
          <img src={tidalWhite} alt="Tidal" />
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
      <img src={this.props.img} alt="" />
    )
  }
}

class App extends Component {
  constructor() {
    super()
    this.addActiveClass = this.addActiveClass.bind(this);
    this.state = {
      active: false,
      clicked: false
    }
  }
  targetElement = null;
  componentDidMount() {
    // 2. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav). 
    this.targetPhotos = document.querySelector('.modal');
  }
  toggleSplash = () => {
    const currentState = this.state.clicked;
    this.setState({ 
      clicked: !currentState,
      fadeIn: true
    });
    disableBodyScroll(this.targetElement);
  }
  addActiveClass = (id) => {
    ReactPixel.track('ViewContent', {
      value: id
    });
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
    if(this.state.clicked) {
        var fixed = document.getElementById('splash');
        fixed.addEventListener('touchmove', function(e) {
        e.preventDefault();
      }, false);
    }
    return (
      <div id="App">
        <Header />
        <section className={this.state.clicked ? 'close': null} id="splash">
          <button onClick={this.toggleSplash} >Enter Site</button>
          <article className="half">
            <img id="title" src={oxnardLogo} alt="Oxnard" />
            <div id="musicLinks">
              <p>Available For Pre-Order</p>
              <a className="apple" href="https://itunes.apple.com/us/album/tints-feat-kendrick-lamar-single/1437534355?app=music&ign-mpt=uo%3D4" target="_BLANK" rel="noopener noreferrer">
                <img src={apple} alt="Apple Music" />
              </a>
              <a className="spotify" href="https://open.spotify.com/track/1gnwGVoG7V08vMX3hyr90x?si=oLJ8DAv6TU6AIhHwkKBbUg" target="_BLANK" rel="noopener noreferrer">
                <img src={spotify} alt="Spotify" />
              </a>
              <a className="itunes" href="https://itunes.apple.com/us/album/tints-feat-kendrick-lamar-single/1437534355?app=music&ign-mpt=uo%3D4" target="_BLANK" rel="noopener noreferrer">
                <img src={itunes} alt="iTunes" />
              </a>
              <a className="tidal" href="https://tidal.com/album/96155864" target="_BLANK" rel="noopener noreferrer">
                <img src={tidal} alt="Tidal" />
              </a>
              <a className="google" href="https://play.google.com/store/music/album/Anderson_Paak_Tints_feat_Kendrick_Lamar?id=Brnbxp77jjsxpkfmmwjtg3tdhry&hl=en" target="_BLANK" rel="noopener noreferrer">
                <img src={google} alt="Google" />
              </a>
              <a className="amazon" href="https://www.amazon.com/Tints-feat-Kendrick-Lamar-Explicit/dp/B07HPX4F5Y/ref=sr_1_1?ie=UTF8&qid=1540537494&sr=8-1&keywords=anderson+paak+tints" target="_BLANK" rel="noopener noreferrer">
                <img src={amazon} alt="Amazon" />
              </a>
            </div>
          </article>
          <img id="aftermath" src={aftermath} alt="Aftermath" />
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
            </div>
          </nav>
          <section id="modal" className={this.state.active ? 'open': null}>
            <div id="music" className={this.state.id === 'music' ? 'show modalwrap': 'modalwrap'}>
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
            <div id="videos" className={this.state.id === 'videos' ? 'show modalwrap': 'modalwrap'}>
              {videos.map((video, i) => (
                <VideoSlide 
                  key = {i}
                  url = {video.url}
                  title = {video.title}
                />
                ))
              }
            </div>
            <div id="photos" className={this.state.id === 'photos' ? 'show modalwrap': 'modalwrap'}>
              {photos.map((photo, index) => (
                <Photos
                  key={index}
                  img={photo.img}
                />
              ))}
            </div>
            <div id="tour" className={this.state.id === 'tour' ? 'show modalwrap': 'modalwrap'}>
              <h2>Upcoming Dates</h2>
              <ul>
                <li className="event">
                  <div className="wrap">
                    <span className="date">01.09.2019</span>
                    <span className="venue">Hordern Pavilion</span>
                  </div>
                  <div className="wrap">
                    <span className="location">Sydney, NSW</span>
                    <span className="continent">Australia</span>
                  </div>
                  <a href="https://www.livenation.com.au/show/1207348/anderson-paak-and-the-free-nationals/sydney/2019-01-09/en" target="_BLANK" rel="noopener noreferrer" className="buy">Tickets</a>
                </li>
                <li className="event">
                  <div className="wrap">
                    <span className="date">01.10.2019</span>
                    <span className="venue">Festival Hall</span>
                  </div>
                  <div className="wrap">
                    <span className="location">Melbourne, VIC</span>
                    <span className="continent">Australia</span>
                  </div>
                  <a href="https://www.livenation.com.au/show/1207352/anderson-paak-and-the-free-nationals/melbourne/2019-01-10/en" target="_BLANK" rel="noopener noreferrer" className="buy">Tickets</a>
                </li>
                <li className="event">
                  <div className="wrap">
                    <span className="date">01.12.2019</span>
                    <span className="venue">Logan Campbell Centre</span>
                  </div>
                  <div className="wrap">
                    <span className="location">Auckland</span>
                    <span className="continent">New Zealand</span>
                  </div>
                  <a href="https://www.livenation.co.nz/show/1207362/anderson-paak-and-the-free-nationals/auckland/2019-01-12/en" target="_BLANK" rel="noopener noreferrer" className="buy">Tickets</a>
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
      </div>
    );
  }
}

export default App;
