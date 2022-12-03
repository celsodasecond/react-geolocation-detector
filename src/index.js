import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import HemisphereDisplay from './components/HemisphereDisplay'


export default class App extends Component {

  // New Way to Initialize States
  state = { latitude: null, errorMessage: '' }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude })
      },
      (error) => {
        this.setState({ errorMessage: error.message }) // Leaves the latitude untouched, only errorMessage is changed
      } // Failure Callback
    );
  }

  render() {
    if(this.state.errorMessage && !this.state.latitude){
      return(
        <div>
          {this.state.errorMessage}
        </div>
      )
    }

    if(!this.state.errorMessage && this.state.latitude){
      return(
        <div>
          <HemisphereDisplay latitude={this.state.latitude}/>
        </div>
      )
    }

    else{
      return(
        <div>
          Loading...
        </div>
      )
    }

  }
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)