import React, { Component } from 'react';
import axios from "axios";

class App extends Component {
  state = {
    hello: null
  }
  componentDidMount(){
    axios.get('/hello')
    .then(res => this.setState({hello: res.data}))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        {this.state.hello ?
          <div> {this.state.hello} </div>
          : <div>no llego</div>}
      </div>
    );
  }

}

export default App;
