import React from 'react';

import appleWhite from '../assets/img/SVG/apple_white.svg';
import spotify from '../assets/img/SVG/spotify.svg';
import itunes from '../assets/img/SVG/itunes.svg';
import tidalWhite from '../assets/img/SVG/tidal_white.svg';
import google from '../assets/img/icons/googleplay.png';
import amazon from '../assets/img/SVG/amazon.svg';

import whoru from '../assets/img/albums/whoru.jpg';
import oxnard from '../assets/img/albums/oxnard.jpg';
import ventura from '../assets/img/albums/ventura.jpg';
import tints from '../assets/img/albums/tints.jpg';
import malibu from '../assets/img/albums/malibu.jpg';
import bubblin from '../assets/img/albums/bubblin.jpg';
import yesLawd from '../assets/img/albums/yesLawd.jpg';
import tillitsover from '../assets/img/albums/tillItsOver.jpg';
import venice from '../assets/img/albums/venice.jpg';
import lockdown from '../assets/img/albums/lockdown.jpg';
import lockdownRemix from '../assets/img/albums/lockdownRemix.jpg';

const albums = [
  {
    key: '1',
    artwork: [lockdownRemix],
    apple: 'https://music.apple.com/album/lockdown-remix-bundle-ep/1525943496?ls=1&app=music&at=11lEW&ct=yad926',
    spotify: 'https://open.spotify.com/album/419e6SC1wsLlE568jwy8Uk',
    itunes: 'https://music.apple.com/album/lockdown-remix-bundle-ep/1525943496?app=itunes',
    tidal: 'https://tidal.com/browse/album/150547164',
    google: 'https://play.google.com/music/preview/Bihpv53uklr4gndnqmnogcnridu?u=0',
    amazon: 'https://www.amazon.com/Lockdown-Remix-Bundle-Explicit-Anderson/dp/B08F22PT2B/ref=sr_1_1?dchild=1&keywords=anderson+paak+lockdown+remix&qid=1596777132&s=dmusic&sr=1-1&tag=smarturl-pivot-20'
  },
  {
    key: '2',
    artwork: [lockdown],
    apple: 'https://music.apple.com/album/lockdown-single/1519032499?ls=1&app=music&at=11lEW&ct=hp7fm1',
    spotify: 'https://open.spotify.com/album/7x8QTmOI3zN1V5xOq3Jko5',
    itunes: 'https://music.apple.com/album/lockdown-single/1519032499?app=itunes',
    tidal: 'https://listen.tidal.com/album/145479803/track/145479804',
    google: 'https://play.google.com/music/preview/Bvwukhme6clxsbcbf6r3rtipufa?u=0',
    amazon: 'https://www.amazon.com/dp/B08BCRXTDR?tag=smarturl-pivot-20'
  },
  {
    key: '3',
    artwork: [ventura],
    apple: 'https://itunes.apple.com/us/album/ventura/1456218234?app=music&ign-mpt=uo%3D4',
    spotify: 'https://open.spotify.com/album/0YF8PfcGbsKg5IaFyPnlyY',
    itunes: 'https://itunes.apple.com/us/album/ventura/1456218234?app=itunes&ign-mpt=uo%3D4',
    tidal: 'https://listen.tidal.com/album/107325494',
    google: 'https://play.google.com/music/preview/Bitdmrvdhbof25vmqgc7v4prjri?u=0',
    amazon: 'https://www.amazon.com/Ventura-Explicit-Anderson-Paak/dp/B07PQNN8XW?tag=smarturl-pivot-20'
  },
  {
    key: '4',
    artwork: [oxnard],
    apple: 'https://itunes.apple.com/album/oxnard/1439982774?ls=1',
    spotify: 'http://open.spotify.com/album/3rqqwtJE89WoWvMyPTvbZc',
    itunes: 'https://itunes.apple.com/album/oxnard/1439982774?ls=1&app=itunes',
    tidal: 'https://listen.tidal.com/album/98360379',
    google: 'https://play.google.com/music/m/Bdhowaxhgmcaeqrhlztg4sd2zke',
    amazon: 'http://amazon.com/dp/B07JMDLHGR'
  },
  {
    key: '5',
    artwork: [whoru],
    apple: 'https://itunes.apple.com/us/album/who-r-u/1439982774?i=1439983348&app=music',
    spotify: 'https://open.spotify.com/album/6Ml78jvSDFzJhLnXKyU30z',
    itunes: 'https://itunes.apple.com/us/album/who-r-u/1439982774',
    tidal: 'https://tidal.com/browse/album/98114488',
    google: 'https://play.google.com/store/music/album/Anderson_Paak_Who_R_U?id=Bpavhmq5eizsrv2zpm45zn4p5vm',
    amazon: 'https://www.amazon.com/Who-R-U-Explicit/dp/B07JM8LKS7?tag=smarturl-pivot-20'
  },
  {
    key: '6',
    artwork: [tints],
    apple: 'https://itunes.apple.com/us/album/tints-feat-kendrick-lamar-single/1437534355?app=music&ign-mpt=uo%3D4',
    spotify: 'https://open.spotify.com/track/1gnwGVoG7V08vMX3hyr90x?si=oLJ8DAv6TU6AIhHwkKBbUg',
    itunes: 'https://itunes.apple.com/us/album/tints-feat-kendrick-lamar-single/1437534355?app=music&ign-mpt=uo%3D4',
    tidal: 'https://tidal.com/album/96155864',
    google: 'https://play.google.com/store/music/album/Anderson_Paak_Tints_feat_Kendrick_Lamar?id=Brnbxp77jjsxpkfmmwjtg3tdhry&hl=en',
    amazon: 'https://www.amazon.com/Tints-feat-Kendrick-Lamar-Explicit/dp/B07HPX4F5Y/ref=sr_1_1?ie=UTF8&qid=1540537494&sr=8-1&keywords=anderson+paak+tints'
  },
  {
    key: '7',
    artwork: [bubblin],
    apple: 'https://itunes.apple.com/us/album/bubblin/1383381572?i=1383381915&app=music&ign-mpt=uo%3D4',
    spotify: 'https://open.spotify.com/album/6N1y1a5qnqN8pBkizOdMvk?si=A2y4GZEGQxq68qt9pu8jog',
    itunes: 'https://itunes.apple.com/us/album/bubblin/1383381572?i=1383381915&app=music&ign-mpt=uo%3D4',
    tidal: 'https://tidal.com/track/88736899',
    google: 'https://play.google.com/store/music/album?id=B756yrjl7kg2eofq2fqclykshsm&tid=song-Ttjpmct5y72vzsqhxxmng2gvx4a',
    amazon: 'https://www.amazon.com/dp/B07CZVG8QR/ref=ap_ws_tlw_trk6'
  },
  {
    key: '8',
    artwork: [malibu],
    apple: 'https://open.spotify.com/album/4VFG1DOuTeDMBjBLZT7hCK?si=2ZJdsZzsSQufftITqowCpg',
    spotify: 'https://open.spotify.com/album/4VFG1DOuTeDMBjBLZT7hCK?si=2ZJdsZzsSQufftITqowCpg',
    itunes: 'https://itunes.apple.com/us/album/malibu/1065681363?app=music&ign-mpt=uo%3D4',
    tidal: 'https://tidal.com/album/55010255',
    google: 'https://play.google.com/store/music/album/Anderson_Paak_Malibu?id=B562fkkr2nawzqrty3v5vr2x7fe',
    amazon: 'https://www.amazon.com/Malibu-Explicit-Anderson-Paak/dp/B0192ZU8TG/ref=ntt_mus_dp_dpt_1'
  },
  {
    key: '9',
    artwork: [tillitsover],
    apple: 'https://itunes.apple.com/us/album/til-its-over-single/1355644175?app=music&ign-mpt=uo%3D4',
    spotify: 'https://open.spotify.com/album/7z4UqvGprXWpQ0wo8ldLDA?si=giMbalMYQh2U1DfLF87KeQ',
    itunes: 'https://itunes.apple.com/us/album/til-its-over-single/1355644175?app=music&ign-mpt=uo%3D4',
    tidal: 'https://tidal.com/album/86783333',
    google: 'https://play.google.com/store/music/album?id=Be3blgz2r4f2fvsqxkzt4xihzre&tid=song-Tujidsxyffjurb2q5skhuosnd74',
    amazon: 'https://www.amazon.com/dp/B07BVTB4HB/ref=ap_ws_tlw_trk5'
  },
  {
    key: '10',
    artwork: [yesLawd],
    apple: 'https://itunes.apple.com/us/album/yes-lawd/1150640159?app=music&ign-mpt=uo%3D4',
    spotify: 'https://open.spotify.com/album/0K3FiXt6ekJTWaUku3LpHL?si=49_BbqGuSVaLPrV0QUFGxw',
    itunes: 'https://itunes.apple.com/us/album/yes-lawd/1150640159?app=music&ign-mpt=uo%3D4',
    tidal: 'https://tidal.com/album/82333145',
    google: 'https://play.google.com/store/music/album/NxWorries_Yes_Lawd?id=Bdo33c3q74gfnfizeivojzmfhka&hl=en',
    amazon: 'https://www.amazon.com/Yes-Lawd-Explicit-NxWorries/dp/B0786VTWKT/ref=sr_1_1?s=dmusic&ie=UTF8&qid=1540424593&sr=1-1-mp3-albums-bar-strip-0&keywords=nxworries'
  },
  {
    key: '11',
    artwork: [venice],
    apple: 'https://itunes.apple.com/us/album/venice/929712951?app=music&ign-mpt=uo%3D4',
    spotify: 'https://open.spotify.com/album/2DOiha5oI19Dmw5M9ryHD8?si=gfEotoYwQua5ZP2Vt8zGzQ',
    itunes: 'https://itunes.apple.com/us/album/venice/929712951?app=music&ign-mpt=uo%3D4',
    tidal: 'https://tidal.com/album/36796815',
    google: 'https://play.google.com/store/music/album/Anderson_Paak_Venice?id=Bhvutosdz6uiobdwusjlsnndkou',
    amazon: 'https://www.amazon.com/Venice-Explicit-Anderson-Paak/dp/B00P1K6Z3U/ref=ntt_mus_dp_dpt_2'
  }
]

class Albums extends React.Component {
  render() {
    const Albums = albums.map(item => {
      return (
        <article className="album" key={item.key}>
          <img src={item.artwork[0]} alt="" />
          {item.apple ? (
            <a className="apple" href={item.apple} target="_BLANK" rel="noopener noreferrer">
              <img src={appleWhite} alt="Apple Music" />
            </a>
          ) : null };
          {item.spotify ? (
            <a className="spotify" href={item.spotify} target="_BLANK" rel="noopener noreferrer">
              <img src={spotify} alt="Spotify" />
            </a>
          ) : null };
          {item.itunes ? (
            <a className="itunes" href={item.itunes} target="_BLANK" rel="noopener noreferrer">
              <img src={itunes} alt="iTunes" />
            </a>
          ) : null };
          {item.tidal ? (
            <a className="tidal" href={item.tidal} target="_BLANK" rel="noopener noreferrer">
              <img src={tidalWhite} alt="Tidal" />
            </a>
          ) : null };
          {item.google ? (
            <a className="google" href={item.google} target="_BLANK" rel="noopener noreferrer">
              <img src={google} alt="Google" />
            </a>
          ) : null };
          {item.amazon ? (
            <a className="amazon" href={item.amazon} target="_BLANK" rel="noopener noreferrer">
              <img src={amazon} alt="Amazon" />
            </a>
          ) : null };
        </article>
      )
    });
    return (
      <div>
        {Albums}
      </div>
    )
  }
};

export default Albums;