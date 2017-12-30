import React, { Component } from 'react';

class Result extends React.Component {
  render() {
    return (
      [<div id="weather"><p>{this.props.temperature} &deg;C</p>
      <p>{this.props.desc}</p></div>]
      .concat(this.props.icons.filter((elem, pos, arr) => {
        return arr.indexOf(elem) == pos
      })
      .map(id => <img id="icon" src={`http://openweathermap.org/img/w/${id}.png`} alt="weather icon"/>))
    );
  }
};

export default Result;
