import React, { Component } from 'react';
import SearchBox from './SearchBox';
import Results from './Results';
import './App.css';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      weatherResults: [],
      noError: true,
     };

    this.showWeather = this.showWeather.bind(this);
    this.showError = this.showError.bind(this);
    this.cancelError = this.cancelError.bind(this);
    this.search = this.search.bind(this);
  }

  showWeather(data) {
    this.setState({
      weatherResults: data,
    })
  };

  showError() {
    this.setState({
      noError: false,
    })
  }

  cancelError() {
    this.setState({
      noError: true,
    })
  }

  search(URL) {
    axios({
      method:'get',
      url: URL,
      responseType: 'json'
    })
      .then(function(response) {
        this.showWeather(response.data);
        this.cancelError();
      }.bind(this))
      .catch(function(error) {
        this.showError()
      }.bind(this));
  };


  render() {
    if(this.state.noError) {
      return (
        <div>
        <div id="bgdiv"><img id="bg" src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.weatherResults.name}
        &zoom=13&size=2000x350&scale=2&key=AIzaSyAWS5ItrY0EnZ8pk5eXYGtphuzlHCxUSyY`}/></div>
          <SearchBox search={this.search}/>
          {(!this.state.weatherResults) ? <div /> : <Results weatherResults={this.state.weatherResults} />}
        </div>
      )
    }
      return(
        [<SearchBox search={this.search}/>,
          <div id="bgdiv"><img id="bg" src={`https://maps.googleapis.com/maps/api/staticmap?
        &zoom=13&size=2000x350&scale=2&key=AIzaSyAWS5ItrY0EnZ8pk5eXYGtphuzlHCxUSyY`}/></div>,
        <div id="data">
          <p>City not found, try again</p>
        </div>]
      )
    }
  }

export default App;
