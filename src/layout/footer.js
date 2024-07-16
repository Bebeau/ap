import React, { Component } from 'react';

import Mailchimp from 'react-mailchimp-form';

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
              <h6>Subscribe to Mailing List</h6>
              <Mailchimp
                action='https://gmail.us20.list-manage.com/subscribe/post?u=ba019c6be008d79b7b06e3f50&amp;id=9866411023'
                fields={[
                  {
                    name: 'EMAIL',
                    placeholder: 'Email...',
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
                    button: "Submit"
                  }
                }
              />
              <div className="showMobile">© {this.getYear()} Anderson .Paak</div>
              <div className="showMobile sign">Powered By <a href="https://hueunlimited.com" target="_BLANK" rel="noopener noreferrer">HUE</a></div>
              <div className="showMobile sign">Developed By <a href="https://cltdev.com" target="_BLANK" rel="noopener noreferrer">CLTDEV.com</a></div>
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
              <span className="sign">Powered By <a href="https://hueunlimited.com" target="_BLANK" rel="noopener noreferrer">HUE</a></span>
              <span className="sign">Developed By <a href="https://cltdev.com" target="_BLANK" rel="noopener noreferrer">CLTDEV.com</a></span>
            </p>
          </footer>
       );
    }
}

export default Footer;
