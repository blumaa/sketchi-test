import React from 'react';
import './App.css';

import SketchIdeasList from './components/SketchIdeasList'
import NewSketchForm from './components/NewSketchForm'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      sketches: []
    }
  }

  handleAddSketch = (newSketch) => {
    this.setState({
      sketches: [...this.state.sketches, newSketch]
    }, console.log(this.state.sketches))
  }

  render() {

    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header centered">Sketchi</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <p>New Sketch Form</p>
              <NewSketchForm handleAddSketch={this.handleAddSketch}/>
            </div>
            <div className="twelve wide column">
              <SketchIdeasList sketches={this.state.sketches}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
