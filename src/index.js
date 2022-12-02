import React, { Component } from 'react'
import ReactDOM from 'react-dom'


export default class App extends Component {
  render() {
      window.navigator.geolocation.getCurrentPosition(
          (position) => console.log(position),
          (error) => console.log(error)// Failure Callback
      );

    return (
      <div>You are in the Northern Hemisphere!</div>
    )
  }
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)