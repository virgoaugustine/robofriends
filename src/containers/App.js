import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.css';
import 'tachyons';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import ErrorBoundary from '../components/Errorboundary';

import { setSearchField, requestRobots } from '../actions';


const mapStateToProps = (state) => {
  return {
     searchField: state.searchRobots.searchField,
     robots: state.requestRobots.robots,
     isPending: state.requestRobots.isPending,
     errorState: state.requestRobots.errorState 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),

    onRequestRobots: () => dispatch(requestRobots())
  }
}


class App extends Component {

  componentDidMount(){
    this.props.onRequestRobots()
  }
 

  render() {
    

    const {searchField, onSearchChange, robots, isPending} = this.props
    const filteredRobots = robots.filter( robot => {
      return (robot.name.toLowerCase().includes(searchField.toLowerCase()))
    })
    if (isPending){
      return (
        <div>
        <h1>
          Loading...
        </h1>
        </div>
      )
    }
    return (
      <div className='tc app-body'>
        <h1>RoboFriends</h1>
        <Searchbox searchValue = {onSearchChange} />
        <ErrorBoundary>
        <Cardlist robots = {filteredRobots}/>
        </ErrorBoundary>
        
        
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);