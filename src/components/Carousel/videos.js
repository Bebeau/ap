import React, { Component } from 'react';
import Slider from 'react-slick';
// import YouTube from 'react-youtube';
import './carousel.scss';

import play from '../../assets/img/SVG/play.svg';

const videos = [
  {
    index: '1',
    thumb: 'https://img.youtube.com/vi/TgItkJCm09c/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/TgItkJCm09c',
    title: "Lockdown"
  },
  {
    index: '2',
    thumb: 'https://img.youtube.com/vi/3_tHANKrjnc/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/3_tHANKrjnc',
    title: "Don't Slack (With Justin Timberlake)"
  },
  {
    index: '3',
    thumb: 'https://img.youtube.com/vi/7Jj83FOlBF8/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/7Jj83FOlBF8',
    title: "Make It Better"
  },
  {
    index: '4',
    thumb: 'https://img.youtube.com/vi/K9cbbtLLg8Y/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/K9cbbtLLg8Y',
    title: "Haulin' / Best Teef In The Game Tour Trailer"
  },
  {
    index: '5',
    thumb: 'https://img.youtube.com/vi/okDHQpf1SUo/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/okDHQpf1SUo',
    title: "Ventura Trailer"
  },
  {
    index: '6',
    thumb: 'https://img.youtube.com/vi/gGs_MmATLms/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/gGs_MmATLms',
    title: "Tints / Vertical Video"
  },
  {
    index: '7',
    thumb: 'https://img.youtube.com/vi/u749Hi0gDVM/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/u749Hi0gDVM',
    title: "TINTS"
  },
  {
    index: '8',
    thumb: 'https://img.youtube.com/vi/AMYxwDMobQc/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/AMYxwDMobQc',
    title: "Andy's Oxnard Carnival + Live Listening"
  },
  {
    index: '9',
    thumb: 'https://img.youtube.com/vi/7PmUtmfTmbg/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/7PmUtmfTmbg',
    title: "Bubblin'"
  },
  {
    index: '10',
    thumb: 'https://img.youtube.com/vi/-OqrcUvrbRY/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/-OqrcUvrbRY',
    title: 'Come Down'
  },
  {
    index: '11',
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