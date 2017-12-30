import React, { Component } from 'react';
import Result from './Result';

class Results extends React.Component {
  render() {
    if (!this.props.weatherResults.weather) return <div/>
    return (
      <div id="data">
        <h1>{this.props.weatherResults.name}, {this.props.weatherResults.sys.country}</h1>
        <Result desc={this.props.weatherResults.weather.reduce((a, b) => a.concat(b.main + " "), "")}
        temperature={(this.props.weatherResults.main.temp - 273.15).toFixed(1)}
        icons={this.props.weatherResults.weather.map(function(a) {return a.icon})}
        location={this.props.weatherResults.name} />
      </div>
    );
  }
};

export default Results;
