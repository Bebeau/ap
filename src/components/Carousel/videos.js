import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import YouTube from 'react-youtube';
import './carousel.scss';

const videos = [
  {
    key: '1',
    id: 'u749Hi0gDVM',
    title: "TINTS"
  },
  {
    key: '2',
    id: '7PmUtmfTmbg',
    title: "Bubblin'"
  },
  {
    key: '3',
    id: 'N6rusSDuv-Y',
    title: "Bubblin' Challenge"
  },
  {
    key: '4',
    id: '-OqrcUvrbRY',
    title: 'Come Down'
  },
  {
    key: '5',
    id: 'y_Ka5wiQBEw',
    title: 'The Season / Carry Me / The Waters'
  }
]

class VideoSlider extends React.Component {
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
            <YouTube
              videoId={item.id}
            />
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