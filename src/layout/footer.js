import React, { Component } from 'react';

import Mailchimp from 'react-mailchimp-form';

import heard from '../assets/img/SVG/heard.svg';

import facebook from '../assets/img/SVG/facebook.svg';
import instagram from '../assets/img/SVG/instagram.svg';
import twitter from '../assets/img/SVG/twitter.svg';
import youtube from '../assets/img/SVG/youtube.svg';

import youtubeMobile from '../assets/img/SVG/youtube_mobile.svg';

class Footer extends Component{
  getYear() {
    return new Date().getFullYear();
  }
    render(){
       return (
          <footer>
            <div className="emailForm">
              <Mailchimp
                action='https://beheard.us15.list-manage.com/subscribe/post?u=2ecae27fc6e77119152da8047&amp;id=c6bf77fa68'
                fields={[
                  {
                    name: 'EMAIL',
                    placeholder: 'Enter Email For Exclusives',
                    type: 'email',
                    required: true
                  }
                ]}
                messages={
                  {
                    sending: "Sending...",
                    success: "Thank you. You're on the list!",
                    error: "Oops, that didn't work.",
                    empty: "Please submit a vaild email address.",
                    duplicate: "This email address has already joined.",
                    button: "Subscribe"
                  }
                }
              />
              <div className="showMobile">© {this.getYear()} Anderson .Paak</div>
              <div className="showMobile sign">Built By <a href="instagram://user?username=beheardla" target="_BLANK" rel="noopener noreferrer"> <img src={heard} alt="@beheardla" /></a></div>
            </div>
            <article id="social" className="hideMobile">
              <a id="facebook" href="https://www.facebook.com/AndersonPaak" target="_BLANK" rel="noopener noreferrer">
                <img src={facebook} alt="" />
              </a>
              <a id="instagram" href="https://www.instagram.com/anderson._paak/" target="_BLANK" rel="noopener noreferrer">
                <img src={instagram} alt="" />
              </a>
              <a id="twitter" href="https://twitter.com/AndersonPaak" target="_BLANK" rel="noopener noreferrer">
                <img src={twitter} alt="" />
              </a>
              <a className="hideMobile" id="youtube" href="https://www.youtube.com/user/Breezylovejoy" target="_BLANK" rel="noopener noreferrer">
                <img src={youtube} alt="" />
              </a>
              <a className="showMobile" id="youtube" href="https://www.youtube.com/user/Breezylovejoy" target="_BLANK" rel="noopener noreferrer">
                <img src={youtubeMobile} alt="" />
              </a>
            </article>
            <p id="legal" className="hideMobile">
            	<span>© {this.getYear()} Anderson .Paak</span>
              <span className="sign">Built By <a href="https://instagram.com/beheardla" target="_BLANK" rel="noopener noreferrer"> <img src={heard} alt="@beheardla" /></a></span>
            </p>
          </footer>
       );
    }
}

export default Footer;
