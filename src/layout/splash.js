import React, { Component } from 'react';

import logo from '../assets/img/SVG/logo.svg';
import aftermath from '../assets/img/SVG/aftermath.svg';

import apple from '../assets/img/SVG/apple.svg';
import spotify from '../assets/img/SVG/spotify.svg';
import itunes from '../assets/img/SVG/itunes.svg';
import tidal from '../assets/img/SVG/tidal.svg';
import google from '../assets/img/SVG/google.svg';
import amazon from '../assets/img/SVG/amazon.svg';

import video from '../assets/video/still.mp4';
import poster from '../assets/video/poster.jpg';

class Splash extends Component{
	constructor() {
		super()
		this.state = {
		  active: false
		}
	}
	toggle = () => {
		const currentState = this.state.active;
    	this.setState({ active: !currentState });
	}
    render(){
       return (
       		<section className={this.state.active ? 'close': null} id="splash">
	       		<button onClick={this.toggle} >Enter Site</button>
	       		<article className="half">
	       			<div id="intro">
			       		<span className="universe">Starring</span>
			       		<img src={logo} alt="Anderson Paak" />
			       	</div>
		       		<h1 id="title" className="cooper">Tints</h1>
		       		<div id="feature">
						<div className="universe">and</div>
						<span className="cooper">Kendrick Lamar</span>
					</div>
					<div id="musicLinks">
						<p>Available Now</p>
						<a className="apple" href="https://geo.itunes.apple.com/us/artist/anderson-paak/855484536?mt=1&app=music" target="_BLANK" rel="noopener noreferrer">
							<img src={apple} alt="Apple Music" />
						</a>
				        <a className="spotify" href="https://open.spotify.com/artist/3jK9MiCrA42lLAdMGUZpwa" target="_BLANK" rel="noopener noreferrer">
							<img src={spotify} alt="Spotify" />
				        </a>
				        <a className="itunes" href="https://geo.itunes.apple.com/us/artist/anderson-paak/855484536?mt=1&app=music" target="_BLANK" rel="noopener noreferrer">
							<img src={itunes} alt="iTunes" />
				        </a>
				        <a className="tidal" href="https://tidal.com/browse/artist/5866385" target="_BLANK" rel="noopener noreferrer">
							<img src={tidal} alt="Tidal" />
				        </a>
				        <a className="google" href="https://play.google.com/store/music/artist/Anderson_Paak?id=Ats5opj5ynefptzg4lfukuonkki" target="_BLANK" rel="noopener noreferrer">
							<img src={google} alt="Google" />
				        </a>
				        <a className="amazon" href="https://www.amazon.com/Anderson-.Paak/e/B00SNBNCQM" target="_BLANK" rel="noopener noreferrer">
							<img src={amazon} alt="Amazon" />
				        </a>
					</div>
				</article>
				<article className="half image">
					<video autoplay="true" poster={poster}>
		              <source src={video} type="video/mp4" />
		            </video>
				</article>
				<img id="aftermath" src={aftermath} alt="Aftermath" />
          	</section>
       );
    }
}

export default Splash;
