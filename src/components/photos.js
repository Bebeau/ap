import React from 'react';

import photo1 from '../assets/img/photos/1.jpg';
import photo2 from '../assets/img/photos/2.jpg';
import photo3 from '../assets/img/photos/3.jpg';
import photo4 from '../assets/img/photos/4.jpg';
import photo5 from '../assets/img/photos/5.jpg';
import photo6 from '../assets/img/photos/6.jpg';
import photo7 from '../assets/img/photos/7.jpg';
import photo8 from '../assets/img/photos/8.jpg';
import photo9 from '../assets/img/photos/9.jpg';
import photo10 from '../assets/img/photos/10.jpg';
import photo11 from '../assets/img/photos/11.jpg';
import photo12 from '../assets/img/photos/12.jpg';
import photo13 from '../assets/img/photos/13.jpg';
import photo14 from '../assets/img/photos/14.jpg';
import photo15 from '../assets/img/photos/15.jpg';
import photo16 from '../assets/img/photos/16.jpg';
import photo17 from '../assets/img/photos/17.jpg';
import photo18 from '../assets/img/photos/18.jpg';

const photos = [
  {
    key: '1',
    img: [photo1]
  },
  {
    key: '2',
    img: [photo18]
  },
  {
    key: '3',
    img: [photo2]
  },
  {
    key: '4',
    img: [photo3]
  },
  {
    key: '5',
    img: [photo4]
  },
  {
    key: '6',
    img: [photo5]
  },
  {
    key: '7',
    img: [photo6]
  },
  {
    key: '8',
    img: [photo7]
  },
  {
    key: '9',
    img: [photo8]
  },
  {
    key: '10',
    img: [photo9]
  },
  {
    key: '11',
    img: [photo10]
  },
  {
    key: '12',
    img: [photo11]
  },
  {
    key: '13',
    img: [photo12]
  },
  {
    key: '14',
    img: [photo13]
  },
  {
    key: '15',
    img: [photo14]
  },
  {
    key: '16',
    img: [photo15]
  },
  {
    key: '17',
    img: [photo16]
  },
  {
    key: '18',
    img: [photo17]
  }
]

class Photos extends React.Component {
  render() {
    const Photos = photos.map(item => {
      return (
        <img src={item.img} alt="" key={item.key} />
      )
    });
    return (
      <div>
        {Photos}
      </div>
    )
  }
};

export default Photos;