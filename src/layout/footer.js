import React, { Component } from 'react';

import heard from '../assets/img/SVG/heard.svg';

import facebook from '../assets/img/SVG/facebook.svg';
import instagram from '../assets/img/SVG/instagram.svg';
import twitter from '../assets/img/SVG/twitter.svg';
import youtube from '../assets/img/SVG/youtube.svg';

class Footer extends Component{
    render(){
       return (
          <footer>
            <article id="social">
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
              <div className="showMobile">© 2018 Anderson .Paak</div>
              <div className="showMobile sign">Built By <a href="https://beheard.la" target="_BLANK" rel="noopener noreferrer"> <img src={heard} alt="The INiT Group" /></a></div>
            </article>
            <p id="legal" className="hideMobile">
            	<span>© 2018 Anderson .Paak</span>
              <span className="sign">Built By <a href="https://beheard.la" target="_BLANK" rel="noopener noreferrer"> <img src={heard} alt="The INiT Group" /></a></span>
            </p>
          </footer>
       );
    }
}

export default Footer;
