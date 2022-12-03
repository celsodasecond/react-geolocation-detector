import React, { Component } from 'react'
import ReactDOM from 'react-dom'


export default class App extends Component {
  // NEW FUNCTION belongs to JS | Original way to initialize State
  constructor(props) {
    super(props)

    // State Object | Any update will subject to re-rendering
    this.state = { latitude: null, errorMessage: '' }

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
          {this.state.latitude}
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