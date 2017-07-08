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

    let latitude = pos.coords.latitude;
    let longitude = pos.coords.longitude;
    const apiKey = '&APPID=' + 'ec33bdff3450bd19b2b158fe87bad9cd';
    xmlhttp.open("GET", `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}` + apiKey, true);
    xmlhttp.send();
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.getWeather);
    // const coorlink = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}`
  }

  render() {
    return(
      <div classname='weather'>
        <h1>Weather</h1>
        {this.state.weather ?
        <div>
          <h2>{this.state.weather.name}</h2>
          <h2>{this.state.weather.main.temp}</h2> </div> : "loading weather"
        }
      </div>
    );
  }
}

export default Weather;
