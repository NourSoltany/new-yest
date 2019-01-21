import React from 'react';

export class NavBar extends React.Component {

  render() {
    const places = ['Kobenhavn', 'Hamburg', 'Athens', 'Santorini'];

    return (
      <nav className={this.props.styling}>
        {places.map((place, position) => <li key={position}><a href={'#' + place}>{place}</a></li>)}
      </nav>
    );
  }

}
