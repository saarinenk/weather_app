import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.createSearch = this.createSearch.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  };

  handleEnter(event) {
    if(event.keyCode == 13){
      this.createSearch;
    }
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  };

  createSearch() {
      var location = this.state.value;
      var URL = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&APPID=dea560842d3e852a682f3ea93448017a';
      this.props.search(URL);
  }

  handleKeyPress(e) {
  if (e.key === 'Enter') {
    this.createSearch();
    this.setState({value: ''})
    }
  }

  render() {
    return (
      <div>
        <input id="input" type="text" placeholder="Insert city here" value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
        <input type="submit" onKeyPress={this.handleKeyPress} onClick={this.createSearch} />
      </div>
    );
  }
};

export default SearchBox;
