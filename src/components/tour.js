import React, { Component } from 'react';

const shows = [
  {
    key: '1',
    date: '01.09.2019',
    venue: 'Horden Pavilion',
    area: 'SYDNEY, NSW',
    country: 'AUSTRALIA',
    purchase: 'https://www.livenation.com.au/show/1207348/anderson-paak-and-the-free-nationals/sydney/2019-01-09/en'
  },
  {
    key: '2',
    date: '01.10.2019',
    venue: 'Festival Hall',
    area: 'MELBOURNE, VIC',
    country: 'AUSTRALIA',
    purchase: 'https://www.livenation.com.au/show/1207352/anderson-paak-and-the-free-nationals/melbourne/2019-01-10/en'
  },
  {
    key: '3',
    date: '01.12.2019',
    venue: 'Logan Campbell Centre',
    area: 'AUCKLAND',
    country: 'NEW ZEALAND',
    purchase: 'https://www.livenation.co.nz/show/1207362/anderson-paak-and-the-free-nationals/auckland/2019-01-12/en'
  },
  {
    key: '4',
    date: '02.11.2019',
    venue: 'The Masonic',
    area: 'SAN FRANSISCO, CA',
    country: 'USA',
    purchase: 'https://www.ticketmaster.com/event/1C00557DE67597E5'
  },
  {
    key: '5',
    date: '02.13.2019',
    venue: 'The Fillmore',
    area: 'Denver, CO',
    country: 'USA',
    purchase: 'https://www.ticketmaster.com/event/1E00557EE12F2C08'
  },
  {
    key: '6',
    date: '02.15.2019',
    venue: 'The Fillmore',
    area: 'Detroit, MI',
    country: 'USA',
    purchase: 'https://www.ticketmaster.com/event/0800557EE65062A1'
  },
  {
    key: '7',
    date: '02.16.2019',
    venue: 'The Riviera Theatre',
    area: 'Chicago, IL',
    country: 'USA',
    purchase: 'https://www.ticketfly.com/purchase/event/1797766?utm_medium=bks'
  },
  {
    key: '8',
    date: '02.18.2019',
    venue: 'Coco Cola Roxy Theatre',
    area: 'Atlanta, GA',
    country: 'USA',
    purchase: 'https://www.ticketmaster.com/event/0E00557DBB412702'
  },
  {
    key: '9',
    date: '02.19.2019',
    venue: 'The Fillmore Charlotte',
    area: 'Charlotte, NC',
    country: 'USA',
    purchase: 'http://www.ticketmaster.com/event/2D00557E91AE2695'
  },
  {
    key: '10',
    date: '02.20.2019',
    venue: 'MGM National Harbor',
    area: 'Washington, DC',
    country: 'USA',
    purchase: 'https://www.ticketmaster.com/event/1500557EE4F25429'
  },
  {
    key: '11',
    date: '02.22.2019',
    venue: 'Hammerstein Ballroom',
    area: 'New York, NY',
    country: 'USA',
    purchase: 'https://www.ticketmaster.com/event/0000557E0E66A426'
  },
  {
    key: '12',
    date: '02.23.2019',
    venue: 'Orpheum Theatre',
    area: 'Boston, MA',
    country: 'USA',
    purchase: 'https://www.ticketmaster.com/event/0100557EECBB911F'
  },
  {
    key: '13',
    date: '02.24.2019',
    venue: 'The Fillmore',
    area: 'Philadelphia, PA',
    country: 'USA',
    purchase: 'https://www.ticketmaster.com/event/0200557E0838AB59'
  },
  {
    key: '14',
    date: '02.26.2019',
    venue: 'The Rebel',
    area: 'Toranto, ON',
    country: 'USA',
    purchase: 'https://www.ticketmaster.ca/event/1000557EC682310A'
  },
  {
    key: '15',
    date: '02.26.2019',
    venue: 'The Rebel',
    area: 'Toranto, ON',
    country: 'USA',
    purchase: 'https://www.ticketmaster.ca/event/1000557EC682310A'
  },
  {
    key: '16',
    date: '03.04.2019',
    venue: 'Spectrum',
    area: 'Oslo',
    country: 'Norway',
    purchase: 'https://www.livenation.no/show/1241850/anderson-paak-and-the-free-nationals-andy-s-beach-club-world-tour/Oslo/2019-03-04/no'
  },
  // {
  //   key: '17',
  //   date: '03.05.2019',
  //   venue: 'Annexet',
  //   area: 'Stockholm',
  //   country: 'Sweden',
  //   purchase: ''
  // },
  {
    key: '18',
    date: '03.07.2019',
    venue: 'Royal Arena',
    area: 'Copenhagen',
    country: 'Denmark',
    purchase: 'https://www.livenation.dk/show/1241618/anderson-paak-and-the-free-nationals-andy-s-beach-club-world-tour/copenhagen/2019-03-07/dk'
  },
  {
    key: '19',
    date: '03.09.2019',
    venue: 'AFAS Live',
    area: 'Amsterdam',
    country: 'Holland',
    purchase: 'https://www.livenation.nl/show/1241708/anderson-paak-and-the-free-nationals/amsterdam%20zuidoost/2019-03-09/nl'
  },
  {
    key: '20',
    date: '03.10.2019',
    venue: 'Lotto Arena',
    area: 'Brussels',
    country: 'Belgium',
    purchase: 'https://fr.livenation.be/show/1237930/anderson-paak-and-the-free-nationals/antwerpen/2019-03-10/fr'
  },
  {
    key: '21',
    date: '03.12.2019',
    venue: 'Zenith',
    area: 'Paris',
    country: 'France',
    purchase: 'https://www.livenation.fr/show/1241663/anderson-paak-and-the-free-nationals/paris/2019-03-12/fr'
  },
  {
    key: '22',
    date: '03.15.2019',
    venue: 'Alexandra Palace',
    area: 'London',
    country: 'UK',
    purchase: 'https://www.livenation.co.uk/show/1237468/anderson-paak-and-the-free-nationals/london/2019-03-15/en'
  },
  {
    key: '23',
    date: '03.16.2019',
    venue: 'O2 Victoria Warehouse',
    area: 'Manchester',
    country: 'UK',
    purchase: 'https://www.livenation.co.uk/show/1237471/anderson-paak-and-the-free-nationals/manchester/2019-03-16/en'
  },
  {
    key: '24',
    date: '03.18.2019',
    venue: 'O2 Academy',
    area: 'Glasgow',
    country: 'Scot',
    purchase: 'https://www.livenation.co.uk/show/1237718/anderson-paak-and-the-free-nationals/glasgow/2019-03-18/en'
  },
  {
    key: '25',
    date: '03.19.2019',
    venue: 'Olympia',
    area: 'Dublin',
    country: 'IRE',
    purchase: 'https://www.ticketmaster.ie/venueartist/198239/2028144'
  },
  {
    key: '26',
    date: '03.22.2019',
    venue: 'Columbiahalle',
    area: 'Berlin',
    country: 'Germany',
    purchase: 'https://www.livenation.de/show/1241726/anderson-paak-and-the-free-nationals-andy-s-beach-club-world-tour/berlin/2019-03-22/de'
  },
  {
    key: '27',
    date: '03.23.2019',
    venue: 'Jahrhunderthalle',
    area: 'Frankfurt',
    country: 'Germany',
    purchase: 'https://www.livenation.de/show/1241728/anderson-paak-and-the-free-nationals-andy-s-beach-club-world-tour/frankfurt/2019-03-23/de'
  },
  {
    key: '28',
    date: '03.25.2019',
    venue: 'Fabrique',
    area: 'Milan',
    country: 'Italy',
    purchase: 'https://www.livenation.it/show/1241031/anderson-paak-and-the-free-nationals-andy-s-beach-club-world-tour-/Milano/2019-03-25/it'
  },
  {
    key: '29',
    date: '03.26.2019',
    venue: 'Tonhalle',
    area: 'Munich',
    country: 'Germany',
    purchase: 'https://www.livenation.de/show/1241730/anderson-paak-and-the-free-nationals-andy-s-beach-club-world-tour/münchen/2019-03-26/de'
  },
  {
    key: '30',
    date: '03.27.2019',
    venue: 'Gasometer',
    area: 'Vienna',
    country: 'Austria',
    purchase: 'https://www.livenation.de/show/1241732/anderson-paak-and-the-free-nationals-andy-s-beach-club-world-tour/vienna/2019-03-27/de'
  }
]

class Tour extends Component {
  render() {
    const tours = shows.map(item => {
      return (
        <li className="event" key={item.key}>
          <div className="wrap">
            <span className="date">{item.date}</span>
            <span className="venue">{item.venue}</span>
          </div>
          <div className="wrap">
            <span className="location">{item.area}</span>
            <span className="country">{item.country}</span>
          </div>
          <a href={item.purchase} target="_BLANK" rel="noopener noreferrer" className="buy">Tickets</a>
        </li>
      )
    });
    return (
      <ul id="tours">
        {tours}
      </ul>
    );
  }
}

export default Tour;