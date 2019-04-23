import React, { Component } from 'react';

const shows = [
  // {
  //   key: '1',
  //   date: '12/29/2018',
  //   venue: 'Falls Festival',
  //   area: 'Lorne',
  //   country: 'AUSTRALIA',
  //   purchase: 'https://fallsfestival.com/lorne/tickets/'
  // },
  // {
  //   key: '2',
  //   date: '12/30/2018',
  //   venue: 'Falls Festival',
  //   area: 'Marion Bay',
  //   country: 'AUSTRALIA',
  //   purchase: 'https://fallsfestival.com/marion-bay/tickets/'
  // },
  // {
  //   key: '3',
  //   date: '12/31/2018',
  //   venue: 'Falls Festival',
  //   area: 'Byron Bay',
  //   country: 'AUSTRALIA',
  //   purchase: 'https://fallsfestival.com/byron-bay/tickets/'
  // },
  // {
  //   key: '4',
  //   date: '01/05/2019',
  //   venue: 'Fall Festival',
  //   area: 'Fremantle',
  //   country: 'Australia',
  //   purchase: 'https://fallsfestival.com/fremantle/tickets/'
  // },
  // {
  //   key: '5',
  //   date: '01/09/2019',
  //   venue: 'Horden Pavilion',
  //   area: 'SYDNEY, NSW',
  //   country: 'AUSTRALIA',
  //   purchase: 'https://www.livenation.com.au/show/1207348/anderson-paak-and-the-free-nationals/sydney/2019-01-09/en'
  // },
  // {
  //   key: '6',
  //   date: '01/10/2019',
  //   venue: 'Festival Hall',
  //   area: 'MELBOURNE, VIC',
  //   country: 'AUSTRALIA',
  //   purchase: 'https://www.livenation.com.au/show/1207352/anderson-paak-and-the-free-nationals/melbourne/2019-01-10/en'
  // },
  // {
  //   key: '7',
  //   date: '01/12/2019',
  //   venue: 'Spark Arena',
  //   area: 'AUCKLAND',
  //   country: 'NEW ZEALAND',
  //   purchase: 'https://www.livenation.co.nz/show/1207362/anderson-paak-and-the-free-nationals/auckland/2019-01-12/en'
  // },
  // {
  //   key: '8',
  //   date: '02/11/2019',
  //   venue: 'The Masonic',
  //   area: 'SAN FRANCISCO, CA',
  //   country: 'USA',
  //   purchase: 'https://www.ticketmaster.com/event/1C00557DE67597E5'
  // },
  // {
  //   key: '9',
  //   date: '02/13/2019',
  //   venue: 'The Fillmore',
  //   area: 'Denver, CO',
  //   country: 'USA',
  //   purchase: 'https://www.ticketmaster.com/event/1E00557EE12F2C08'
  // },
  // {
  //   key: '10',
  //   date: '02/15/2019',
  //   venue: 'The Fillmore',
  //   area: 'Detroit, MI',
  //   country: 'USA',
  //   purchase: 'https://www.ticketmaster.com/event/0800557EE65062A1'
  // },
  // {
  //   key: '11',
  //   date: '02/16/2019',
  //   venue: 'The Riviera Theatre',
  //   area: 'Chicago, IL',
  //   country: 'USA',
  //   purchase: 'https://www.ticketfly.com/purchase/event/1797766?utm_medium=bks'
  // },
  // {
  //   key: '12',
  //   date: '02/18/2019',
  //   venue: 'Coco Cola Roxy Theatre',
  //   area: 'Atlanta, GA',
  //   country: 'USA',
  //   purchase: 'https://www.ticketmaster.com/event/0E00557DBB412702'
  // },
  // {
  //   key: '13',
  //   date: '02/19/2019',
  //   venue: 'The Fillmore Charlotte',
  //   area: 'Charlotte, NC',
  //   country: 'USA',
  //   purchase: 'http://www.ticketmaster.com/event/2D00557E91AE2695'
  // },
  // {
  //   key: '14',
  //   date: '02/20/2019',
  //   venue: 'MGM National Harbor',
  //   area: 'Washington, DC',
  //   country: 'USA',
  //   purchase: 'https://www.ticketmaster.com/event/1500557EE4F25429'
  // },
  // {
  //   key: '15',
  //   date: '02/22/2019',
  //   venue: 'Hammerstein Ballroom',
  //   area: 'New York, NY',
  //   country: 'USA',
  //   purchase: 'https://www.ticketmaster.com/event/0000557E0E66A426'
  // },
  // {
  //   key: '16',
  //   date: '02/23/2019',
  //   venue: 'Orpheum Theatre',
  //   area: 'Boston, MA',
  //   country: 'USA',
  //   purchase: 'https://www.ticketmaster.com/event/0100557EECBB911F'
  // },
  // {
  //   key: '17',
  //   date: '02/24/2019',
  //   venue: 'The Fillmore',
  //   area: 'Philadelphia, PA',
  //   country: 'USA',
  //   purchase: 'https://www.ticketmaster.com/event/0200557E0838AB59'
  // },
  // {
  //   key: '18',
  //   date: '02/26/2019',
  //   venue: 'The Rebel',
  //   area: 'Toronto, ON',
  //   country: 'Canada',
  //   purchase: 'https://www.ticketmaster.ca/event/1000557EC682310A'
  // },
  {
    key: '19',
    date: '03/04/2019',
    venue: 'Spektrum',
    area: 'Oslo',
    country: 'Norway',
    purchase: 'https://www.livenation.no/show/1241850/anderson-paak-and-the-free-nationals-andy-s-beach-club-world-tour/Oslo/2019-03-04/no'
  },
  {
    key: '20',
    date: '03/05/2019',
    venue: 'Annexet',
    area: 'Sweden',
    country: 'Stockholm',
    purchase: 'https://www.axs.com/events/365155/anderson-paak-the-free-nationals-tickets'
  },
  {
    key: '21',
    date: '03/07/2019',
    venue: 'Royal Arena',
    area: 'Copenhagen',
    country: 'Denmark',
    purchase: 'https://www.livenation.dk/show/1241618/anderson-paak-and-the-free-nationals-andy-s-beach-club-world-tour/copenhagen/2019-03-07/dk'
  },
  {
    key: '22',
    date: '03/09/2019',
    venue: 'AFAS Live',
    area: 'Amsterdam',
    country: 'Holland',
    purchase: 'https://www.livenation.nl/show/1241708/anderson-paak-and-the-free-nationals/amsterdam%20zuidoost/2019-03-09/nl'
  },
  {
    key: '23',
    date: '03/10/2019',
    venue: 'Antwerp',
    area: 'Brussels',
    country: 'Belgium',
    purchase: 'https://fr.livenation.be/show/1237930/anderson-paak-and-the-free-nationals/antwerpen/2019-03-10/fr'
  },
  {
    key: '24',
    date: '03/12/2019',
    venue: 'Zenith',
    area: 'Paris',
    country: 'France',
    purchase: 'https://www.livenation.fr/show/1241663/anderson-paak-and-the-free-nationals/paris/2019-03-12/fr'
  },
  {
    key: '25',
    date: '03/15/2019',
    venue: 'Alexandra Palace',
    area: 'London',
    country: 'UK',
    purchase: 'https://www.livenation.co.uk/show/1237468/anderson-paak-and-the-free-nationals/london/2019-03-15/en'
  },
  {
    key: '26',
    date: '03/16/2019',
    venue: 'O2 Victoria Warehouse',
    area: 'Manchester',
    country: 'UK',
    purchase: 'https://www.livenation.co.uk/show/1237471/anderson-paak-and-the-free-nationals/manchester/2019-03-16/en'
  },
  {
    key: '27',
    date: '03/18/2019',
    venue: 'O2 Academy',
    area: 'Glasgow',
    country: 'Scot',
    purchase: 'https://www.livenation.co.uk/show/1237718/anderson-paak-and-the-free-nationals/glasgow/2019-03-18/en'
  },
  {
    key: '28',
    date: '03/19/2019',
    venue: 'Olympia Theatre',
    area: 'Dublin',
    country: 'IRE',
    purchase: 'https://www.ticketmaster.ie/venueartist/198239/2028144'
  },
  {
    key: '29',
    date: '03/20/2019',
    venue: 'Olympia Theatre',
    area: 'Dublin',
    country: 'IRE',
    purchase: 'https://www.ticketmaster.ie/search?q=paak&datestart=2019-03-20'
  },
  {
    key: '30',
    date: '03/22/2019',
    venue: 'Columbiahalle',
    area: 'Berlin',
    country: 'Germany',
    purchase: 'https://www.livenation.de/show/1241726/anderson-paak-and-the-free-nationals-andy-s-beach-club-world-tour/berlin/2019-03-22/de'
  },
  {
    key: '31',
    date: '03/23/2019',
    venue: 'Jahrhunderthalle',
    area: 'Frankfurt',
    country: 'Germany',
    purchase: 'https://www.livenation.de/show/1241728/anderson-paak-and-the-free-nationals-andy-s-beach-club-world-tour/frankfurt/2019-03-23/de'
  },
  {
    key: '32',
    date: '03/25/2019',
    venue: 'Fabrique',
    area: 'Milan',
    country: 'Italy',
    purchase: 'https://www.livenation.it/show/1241031/anderson-paak-and-the-free-nationals-andy-s-beach-club-world-tour-/Milano/2019-03-25/it'
  },
  {
    key: '33',
    date: '03/26/2019',
    venue: 'Tonhalle',
    area: 'Munich',
    country: 'Germany',
    purchase: 'https://www.livenation.de/show/1241730/anderson-paak-and-the-free-nationals-andy-s-beach-club-world-tour/münchen/2019-03-26/de'
  },
  {
    key: '34',
    date: '03/27/2019',
    venue: 'Gasometer',
    area: 'Vienna',
    country: 'Austria',
    purchase: 'https://www.livenation.de/show/1241732/anderson-paak-and-the-free-nationals-andy-s-beach-club-world-tour/vienna/2019-03-27/de'
  },
  {
    key: '35',
    date: '04/12/2019',
    venue: 'Coachella',
    area: 'Indio, CA',
    country: 'USA',
    purchase: 'https://www.coachella.com/'
  },
  {
    key: '36',
    date: '04/19/2019',
    venue: 'Coachella',
    area: 'Indio, CA',
    country: 'USA',
    purchase: 'https://www.coachella.com/'
  },
  {
    key: '37',
    date: '5/11/2019',
    venue: 'FORM: Arcosanti',
    area: 'Mayer, AZ',
    country: 'USA',
    purchase: 'https://experienceform.com'
  },
  {
    key: '38',
    date: '5/25/2019',
    venue: 'Boston Calling',
    area: 'Boston, MA',
    country: 'USA',
    purchase: 'https://bostoncalling.com/tickets/'
  },
  {
    key: '39',
    date: '05/17/2019',
    venue: 'Ascend Amphitheater',
    area: 'Nashville, TN',
    country: 'USA',
    purchase: 'https://www.ticketmaster.com/event/1B00565B59B613BB',
    vip: 'https://www.laneone.com/events/anderson-paak/e/4FC7H688?utm_source=andersonpaak.com&utm_medium=web&utm_campaign=artistwebsite'
  },
  {
    key: '40',
    date: '05/20/2019',
    venue: 'Jacobs Pavilion at Nautica',
    area: 'Cleveland, OH',
    country: 'USA',
    purchase: 'https://www.ticketmaster.com/event/0500565A16E2A03E',
    vip: 'https://www.laneone.com/events/anderson-paak/e/8DV9VFNB?utm_source=andersonpaak.com&utm_medium=web&utm_campaign=artistwebsite'
  },
  {
    key: '41',
    date: '05/21/2019',
    venue: 'The Met',
    area: 'Philadelphia, PA',
    country: 'USA',
    purchase: 'https://www.ticketmaster.com/event/02005656299CF229',
    vip: 'https://www.laneone.com/events/anderson-paak/e/8RRS6W6F?utm_source=andersonpaak.com&utm_medium=web&utm_campaign=artistwebsite'
  },
  {
    key: '42',
    date: '05/23/2019',
    venue: 'Mohegan Sun Arena',
    area: 'Uncasville, CT',
    country: 'USA',
    purchase: 'https://www.ticketmaster.com/event/1D00565AF4134350',
    vip: 'https://www.laneone.com/events/anderson-paak/e/FKR97K6F?utm_source=andersonpaak.com&utm_medium=web&utm_campaign=artistwebsite'
  },
  {
    key: '43',
    date: '05/26/2019',
    venue: 'The Pavilion at Rock Row',
    area: 'Westbrook, ME',
    country: 'USA',
    purchase: 'https://www.ticketmaster.com/event/0100565AB5F56086',
    vip: 'https://www.laneone.com/events/anderson-paak/e/LK77T7SD?utm_source=andersonpaak.com&utm_medium=web&utm_campaign=artistwebsite'
  },
  {
    key: '44',
    date: '05/28/2019',
    venue: 'MECU Pavilion',
    area: 'Baltimore, MD',
    country: 'USA',
    purchase: 'https://www.ticketmaster.com/event/1500565BA9D626DD',
    vip: 'https://www.laneone.com/events/anderson-paak/e/NWJTCPM3?utm_source=andersonpaak.com&utm_medium=web&utm_campaign=artistwebsite'
  },
  {
    key: '45',
    date: '05/30/2019',
    venue: 'Madison Square Garden',
    area: 'New York, NY',
    country: 'USA',
    purchase: 'https://www.ticketmaster.com/event/3B005659D6172B63',
    vip: 'https://www.laneone.com/events/anderson-paak/e/HGWJ7W9T?utm_source=andersonpaak.com&utm_medium=web&utm_campaign=artistwebsite'
  },
  {
    key: '46',
    date: '06/01/2019',
    venue: 'RBC Echo Beach',
    area: 'Toronto, ON',
    country: 'USA',
    purchase: 'https://www.ticketmaster.ca/event/1000565AA0411BCB',
    vip: 'https://www.laneone.com/events/anderson-paak/e/SHVSPTKQ?utm_source=andersonpaak.com&utm_medium=web&utm_campaign=artistwebsite'
  },
  {
    key: '47',
    date: '06/02/2019',
    venue: 'Meadow Brook Amphitheatre',
    area: 'Detroit, MI',
    country: 'USA',
    purchase: 'https://www.ticketmaster.com/event/0800565A1A4695BD',
    vip: 'https://www.laneone.com/events/anderson-paak/e/MLKFJ9HH?utm_source=andersonpaak.com&utm_medium=web&utm_campaign=artistwebsite'
  },
  {
    key: '48',
    date: '06/04/2019',
    venue: 'Huntington Bank Pavilion at Northerly Island',
    area: 'Chicago, IL',
    country: 'USA',
    purchase: 'https://www.ticketmaster.com/event/0400565A95191A8A',
    vip: 'https://www.laneone.com/events/anderson-paak/e/337M8N2F?utm_source=andersonpaak.com&utm_medium=web&utm_campaign=artistwebsite'
  },
  {
    key: '49',
    date: '06/06/2019',
    venue: 'Red Hat Amp',
    area: 'Raleigh, NC',
    country: 'USA',
    purchase: 'https://www.ticketmaster.com/event/2D00565AD1B66FE5',
    vip: 'https://www.laneone.com/events/anderson-paak/e/KDHJTN74?utm_source=andersonpaak.com&utm_medium=web&utm_campaign=artistwebsite'
  },
  {
    key: '50',
    date: '06/07/2019',
    venue: 'State Bank Amphitheater at Chastain Park',
    area: 'Atlanta, GA',
    country: 'USA',
    purchase: 'https://www.ticketmaster.com/event/0E00565AB9D04511',
    vip: 'https://www.laneone.com/events/anderson-paak/e/72JH9ZQQ?utm_source=andersonpaak.com&utm_medium=web&utm_campaign=artistwebsite'
  },
  {
    key: '51',
    date: '06/08/2019',
    venue: 'Bold Sphere Music at Champions Square',
    area: 'New Orleans, LA',
    country: 'USA',
    purchase: 'https://www.ticketmaster.com/event/1B00565A2FFBBE04',
    vip: 'https://www.laneone.com/events/anderson-paak/e/27N8VPSH?utm_source=andersonpaak.com&utm_medium=web&utm_campaign=artistwebsite'
  },
  {
    key: '52',
    date: '06/11/2019',
    venue: 'Revention Music Center',
    area: 'Houston, TX',
    country: 'USA',
    purchase: 'https://www.ticketmaster.com/event/3A00565ADC4853A3',
    vip: 'https://www.laneone.com/events/anderson-paak/e/4TMQFW83?utm_source=andersonpaak.com&utm_medium=web&utm_campaign=artistwebsite'
  },
  {
    key: '53',
    date: '06/12/2019',
    venue: 'Toyota Music Factory',
    area: 'Dallas, TX',
    country: 'USA',
    purchase: 'https://www.ticketmaster.com/event/0C00565A45919173',
    vip: 'https://www.laneone.com/events/anderson-paak/e/9RNSV4K4?utm_source=andersonpaak.com&utm_medium=web&utm_campaign=artistwebsite'
  },
  {
    key: '54',
    date: '06/14/2019',
    venue: 'Red Rocks Amphitheater',
    area: 'Denver, CO',
    country: 'USA',
    purchase: 'http://axs.com/events/371011/anderson-paak-the-free-nationals-tickets?skin=redrocks',
    vip: 'https://www.laneone.com/events/anderson-paak/e/SQZNWKBP?utm_source=andersonpaak.com&utm_medium=web&utm_campaign=artistwebsite'
  },
  {
    key: '55',
    date: '06/16/2019',
    venue: 'The Pearl',
    area: 'Las Vegas, NV',
    country: 'USA',
    purchase: 'https://www.ticketmaster.com/event/17005659A86E2791',
    vip: 'https://www.laneone.com/events/anderson-paak/e/T3TC388B?utm_source=andersonpaak.com&utm_medium=web&utm_campaign=artistwebsite'
  },
  {
    key: '56',
    date: '06/19/2019',
    venue: 'PNE Amphitheatre',
    area: 'Vancouver, BC',
    country: 'USA',
    purchase: 'https://ticketleader.ca/events/anderson-paak',
    vip: 'https://www.laneone.com/events/anderson-paak/e/NS6Z9FZQ?utm_source=andersonpaak.com&utm_medium=web&utm_campaign=artistwebsite'
  },
  {
    key: '57',
    date: '06/20/2019',
    venue: 'WaMu Theater @ CenturyLink Field',
    area: 'Seattle, WA',
    country: 'USA',
    purchase: 'https://www.ticketmaster.com/event/0F00565A86571CC3',
    vip: 'https://www.laneone.com/events/anderson-paak/e/77L84826?utm_source=andersonpaak.com&utm_medium=web&utm_campaign=artistwebsite'
  },
  {
    key: '58',
    date: '06/22/2019',
    venue: 'McMenamins Edgefield',
    area: 'Portland, OR',
    country: 'USA',
    purchase: 'https://www.etix.com/ticket/p/6952173/anderson-paak-best-teef-in-the-game-tour-with-special-guest-thundercat-troutdale-mcmenamins-edgefield-amphitheater?cobrand=edgefieldconcerts',
    vip: 'https://www.laneone.com/events/anderson-paak/e/RV8KVN82?utm_source=andersonpaak.com&utm_medium=web&utm_campaign=artistwebsite'
  },
  {
    key: '59',
    date: '06/26/2019',
    venue: 'Cal Coast Credit Union Open Air Theatre',
    area: 'San Diego, CA',
    country: 'USA',
    purchase: 'https://www.ticketmaster.com/event/0A005661EA634155',
    vip: 'https://www.laneone.com/events/anderson-paak/e/R49PZS6K?utm_source=andersonpaak.com&utm_medium=web&utm_campaign=artistwebsite'
  },
  {
    key: '60',
    date: '06/27/2019',
    venue: 'Bill Graham Civic Center',
    area: 'San Francisco, CA',
    country: 'USA',
    purchase: 'https://www.ticketmaster.com/event/0A005661EA634155',
    vip: 'https://www.laneone.com/events/anderson-paak/e/222ML9PK?utm_source=andersonpaak.com&utm_medium=web&utm_campaign=artistwebsite'
  },
  {
    key: '61',
    date: '06/29/2019',
    venue: 'The Forum',
    area: 'Los Angeles, CA',
    country: 'USA',
    purchase: 'https://www.ticketmaster.com/event/0900568FFAAF509C',
    vip: 'https://www.laneone.com/events/anderson-paak/e/BF6DGDF3?utm_source=andersonpaak.com&utm_medium=web&utm_campaign=artistwebsite'
  },
  {
    key: '62',
    date: '7/13/19',
    venue: 'Forecastle Festival',
    area: 'Louisville, KY',
    country: 'USA',
    purchase: 'https://forecastlefest.com/tickets/'
  },
  {
    key: '63',
    date: '08/24/2019',
    venue: 'Reading Festival',
    area: 'Reading',
    country: 'UK',
    purchase: 'https://www.readingfestival.com/tickets'
  },
  {
    key: '64',
    date: '08/24/2019',
    venue: 'Leeds Festival',
    area: 'Wetherby',
    country: 'UK',
    purchase: 'https://www.readingfestival.com/tickets'
  },
  {
    key: '65',
    date: '08/28/2019',
    venue: 'Dimensions Festival',
    area: 'Fort Punta Christo, Pula',
    country: 'Croatia',
    purchase: 'https://dimensionsfestival.com'
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
    });
    return (
      <ul id="tours">
        {tours}
      </ul>
    );
  }
}

export default Tour;