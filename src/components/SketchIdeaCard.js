import React from 'react'

class SketchIdeaCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <div className="header">
            {this.props.sketch.title}
          </div>
          <div className="meta">
            <span className="date">Synopsis: {this.props.sketch.synopsis}</span>
          </div>
          <div className="description">
            <p>Number of Actors: {this.props.sketch.actorCount}</p>
            <p>Duration: {this.props.sketch.duration} minutes</p>
          </div>
        </div>
        <div className="extra content">
        <button className="ui button">Edit</button>
        <button className="ui button">Delete</button>
        <button className="ui disabled button">Gold Star</button>

        </div>
      </div>
    )
  }
}

export default SketchIdeaCard
