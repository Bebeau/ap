import React, { Component } from 'react';

const shows = [
  {
    key: '1',
    date: '07/13/19',
    venue: 'Forecastle Festival',
    area: 'Louisville, KY',
    country: 'USA',
    purchase: 'https://forecastlefest.com/tickets/'
  },
  {
    key: '2',
    date: '07/25/19',
    venue: 'House of Vans',
    area: 'Chicago, IL',
    country: 'USA',
    purchase: 'https://www.chicagoreader.com/chicago/anderson-paak/Event?oid=70976977'
  },
  {
    key: '3',
    date: '08/11/19',
    venue: 'Outside Lands Festival',
    area: 'San Francisco, CA',
    country: 'USA',
    purchase: 'https://www.sfoutsidelands.com/tickets/'
  },
  {
    key: '4',
    date: '08/16/19',
    venue: 'Openair Gampel',
    area: 'Gampel',
    country: 'Switzerland',
    purchase: 'https://www.openairgampel.ch/2019/tickets'
  },
  {
    key: '5',
    date: '08/17/19',
    venue: 'Lowlands Festival',
    area: 'Biddinghuizen',
    country: 'Netherlands',
    purchase: 'https://lowlands.nl/'
  },
  {
    key: '6',
    date: '08/18/19',
    venue: 'Pukkelpop Festival',
    area: 'Hasselt',
    country: 'Belgium',
    purchase: 'https://tickets.pukkelpop.be/en/step1/'
  },
  {
    key: '7',
    date: '08/22/2019',
    venue: 'O2 Academy',
    area: 'Birmingham',
    country: 'UK',
    purchase: 'https://www.livenation.co.uk/artist/anderson-paak-and-the-free-nationals-tickets'
  },
  {
    key: '8',
    date: '08/24/2019',
    venue: 'Reading Festival',
    area: 'Reading',
    country: 'UK',
    purchase: 'https://www.readingfestival.com/tickets'
  },
  {
    key: '9',
    date: '08/25/2019',
    venue: 'Leeds Festival',
    area: 'Wetherby',
    country: 'UK',
    purchase: 'https://www.leedsfestival.com/tickets'
  },
  {
    key: '10',
    date: '08/27/2019',
    venue: 'Kino Šiška',
    area: 'Ljubljana',
    country: 'Slovenia',
    purchase: 'http://www.eventim.si/si/vstopnice/anderson-paak-the-free-nationals-ljubljana-kino-siska-526985/event.html'
  },
  {
    key: '11',
    date: '08/28/2019',
    venue: 'Dimensions Festival',
    area: 'Fort Punta Christo, Pula',
    country: 'Croatia',
    purchase: 'https://dimensionsfestival.com'
  },
  {
    key: '12',
    date: '08/31/2019',
    venue: 'Made In America Festival',
    area: 'Philadelphia, PA',
    country: 'USA',
    purchase: 'https://www1.ticketmaster.com/made-in-america-festival-2-day-philadelphia-pennsylvania-08-31-2019/event/0200556FCDAD66B0?dma_id=324&irgwc=1&clickid=yh2VDKxaPxyJRKuxTp3WVUkrUklWfxx5MTTBwE0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate'
  },
  {
    key: '13',
    date: '10/26/2019',
    venue: 'Hulaween Festival',
    area: 'Live Oak, FL',
    country: 'USA',
    purchase: 'https://suwanneehulaween.com/tickets/'
  }
]

class Tour extends Component {
  render() {
    const tours = shows.map(item => {
      var currentDate = (new Date().toDateString());
      var tourDate = (new Date(item.date).toDateString());
      var displayDate = (item.date).replace(/\//g, ".");
      if(new Date(tourDate) >= new Date(currentDate)) {
        return (
          <li className="event" key={item.key}>
            <div className="wrap first">
              <span className="date">{displayDate}</span>
              <span className="venue">{item.venue}</span>
            </div>
            <div className="wrap second">
              <div className="location">{item.area}</div>
              <div className="country">{item.country}</div>
            </div>
            <div className="wrap third">
              <a href={item.purchase} target="_BLANK" rel="noopener noreferrer" className="buy">Tickets</a>
              {item.vip ? (
                <a href={item.vip} target="_BLANK" rel="noopener noreferrer" className="buy vip">VIP</a>
              ) : null }
            </div>
          </li> 
        )
      }
      return null;
    });
    return (
      <ul id="tours">
        {tours}
      </ul>
    );
  }
}

export default Tour;