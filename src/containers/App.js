import React, { Component } from 'react';
import '../styles/App.css';
import 'tachyons';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import ErrorBoundary from '../components/Errorboundary';



class App extends Component {
  constructor() {
    super()
    this.state = {
      robots :[],
      searchField: '',
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {this.setState({robots: users})})

  }

  getSearchValue = (event) => {
    const val = event.target.value
    this.setState({searchField: val})
  }

  render() {
    
    const {robots, searchField} = this.state
    const filteredRobots = robots.filter( robot => {
      return (robot.name.toLowerCase().includes(searchField.toLowerCase()))
    })
    if (!robots.length){
      return (
        <div className="f-subheadline lh-title tc">Loading...</div>
      )
    }
    return (
      <div className='tc'>
        <h1 className="f-subheadline lh-title">Robo~Friends</h1>
        <Searchbox searchValue = {this.getSearchValue} />
        <ErrorBoundary>
        <Cardlist robots = {filteredRobots}/>
        </ErrorBoundary>
        
        
      </div>
    )
  }

}

export default App;