import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
    this.tick = this.tick.bind(this);
  }

  render() {
    return (
      <div className="clock">
        <h1>Clock</h1>
        <h2>{this.state.time.toLocaleTimeString()}</h2>
      </div>
    );
  }

  tick() {
    this.setState({time: new Date()});
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }


}

export default Clock;
