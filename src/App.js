import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';

import JokesList from './Components/joke'
import Button from './Components/button'

import './App.css';

class App extends Component {

    constructor(props){
        super(props)

    }
    state={
        jokes:[

        ]
    }

    componentDidMount() {
        this.getJokes()
    }

    getJokes=()=>{
        fetch('https://api.chucknorris.io/jokes/random').then(response => {
      if (response.ok) {
          return response.json()


      }
      throw new Error('Something went wrong with network request');
    }).then(joke=>{this.setState({jokes:[...this.state.jokes,{id:joke.id,text:joke.value}]})}).catch(error => {
      console.log(error);
    })



    }
  render() {
    console.log(this.state.jokes)
    return (
      <div className="App">
          <Button onClick={this.getJokes}/>
          {this.state.jokes.length!==0?<JokesList jokes={this.state.jokes} />:null}
      </div>
    );
  }
}

export default App;
