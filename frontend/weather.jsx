import React from 'react';

class Weather extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      weather: null
    };
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather(pos) {


    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200) {
          const jsonify = JSON.parse(xmlhttp.responseText);
          this.setState({weather: jsonify});
        }
    };

    let lattitude = pos.coords.lattitude;
    let longitude = pos.coords.longitude;
    const apiKey = 'ec33bdff3450bd19b2b158fe87bad9cd';
    xmlhttp.open("GET", `http://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}` + apiKey, true);
    xmlhttp.send();
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition();
    // const coorlink = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}`
  }

  render() {
    return(
      <div classname='weather'>
        <h1>Weather</h1>
        <h2>{this.state.weather.name}</h2>
        <h2>{this.state.weather.tempeature}</h2>
      </div>
    );
  }
}

export default Weather;
