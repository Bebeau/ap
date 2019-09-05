import React, { Component } from 'react';

class Date extends Component {
  render() {
    let displayDate = (this.props.date).replace(/-/g, ".");
    return(
      <li className="event" key={this.props.key}>
        <div className="wrap first">
          <span className="date">{displayDate}</span>
          <span className="venue">{this.props.venue}</span>
        </div>
        <div className="wrap second">
          <div className="location">{this.props.city}</div>
          <div className="country">{this.props.country}</div>
        </div>
        <div className="wrap third">
          <a href={this.props.link} target="_BLANK" rel="noopener noreferrer" className="buy">Tickets</a>
        </div>
      </li>
    )
  }
}

class Tour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      currentDate: new Date()
    };
  }
  componentDidMount() {
    fetch('https://cdn.seated.com/api/public/v1/artists/ba112bb4-a9d5-4562-8616-5cc9119756d7/tour-events', {
      method: 'GET',
      headers: new Headers({
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
          'Authorization': '82c25885-1c98-4cae-943f-8bf556736a99'
      })
    })
    .then((res) => res.json())
    .then((tourDates) => {
      tourDates.data.map(item => {
        // console.log(item.attributes)
        this.setState({
          dates: this.state.dates.concat(item)
        })
        return null;
      })
    })
    .catch(function(error) {
       console.log(error)
    });
  }
  render() {
    if (!this.state.dates){
        return null
    }
    return (
      <ul id="tours">
        {this.state.dates.map((date, index) => (
          <Date
            key={index}
            id={date.id}
            date={date.attributes['starts-at-date-local']}
            venue={date.attributes['venue-display-name']}
            city={date.attributes['venue-formatted-address']}
            country={date.attributes['venue-country']}
            link={date.attributes['primary-link-url']}
          />
        ))}
      </ul>
    )
  }
}

export default Tour;