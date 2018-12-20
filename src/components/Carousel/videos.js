import React, { Component } from 'react';
import Slider from 'react-slick';
// import YouTube from 'react-youtube';
import './carousel.scss';

import play from '../../assets/img/SVG/play.svg';

const videos = [
  // {
  //   index: '7',
  //   thumb: 'https://img.youtube.com/vi/FbSU5iNQ_20/maxresdefault.jpg',
  //   url: 'https://www.youtube.com/embed/FbSU5iNQ_20',
  //   title: ".Paak House: Los Angeles, CA"
  // },
  {
    index: '1',
    thumb: 'https://img.youtube.com/vi/u749Hi0gDVM/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/u749Hi0gDVM',
    title: "TINTS"
  },
  {
    index: '2',
    thumb: 'https://img.youtube.com/vi/AMYxwDMobQc/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/AMYxwDMobQc',
    title: "Andy's Oxnard Carnival + Live Listening"
  },
  {
    index: '3',
    thumb: 'https://img.youtube.com/vi/7PmUtmfTmbg/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/7PmUtmfTmbg',
    title: "Bubblin'"
  },
  {
    index: '4',
    thumb: 'https://img.youtube.com/vi/N6rusSDuv-Y/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/N6rusSDuv-Y',
    title: "Bubblin' Challenge"
  },
  {
    index: '5',
    thumb: 'https://img.youtube.com/vi/-OqrcUvrbRY/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/-OqrcUvrbRY',
    title: 'Come Down'
  },
  {
    index: '6',
    thumb: 'https://img.youtube.com/vi/y_Ka5wiQBEw/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/y_Ka5wiQBEw',
    title: 'The Season / Carry Me / The Waters'
  }
]

class VideoSlider extends Component {
  constructor() {
    super()
    this.state = {
      playing: false,
      url: ''
    }
  }
  playVideo = (url) => {
    this.setState({ 
      playing: true,
      url: url
    });
  }
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const slides = videos.map(item => {
      return (
        <div key={item.index}>
          <div className="slide">
            <h2>{item.title}</h2>
            <div className="slideContent" onClick={this.playVideo.bind(this, item.url)}>
              {this.state.playing && this.state.url === item.url ? (
                <iframe src={this.state.url} title={item.title} frameborder="0" allowfullscreen></iframe>
              ) : (
                <div className="placeholder">
                  <img className="playButton" src={play} alt="play" />
                  <img src={item.thumb} alt={item.title} />
                </div>
              ) };
            </div>
          </div>
        </div>
      )
    });
    return (
      <Slider {...settings}>
        {slides}
      </Slider>
    );
  }
}

export default VideoSlider;