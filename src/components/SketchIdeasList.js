import React from 'react'

import SketchIdeaCard from './SketchIdeaCard.js'

class SketchIdeasList extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.sketches)
  }
  render() {
    const allSketches = this.props.sketches.map(sketchInfo => {
      return <SketchIdeaCard sketch={sketchInfo} key={Math.random()} />
    })
    return (
      <div className="ui cards">
        {allSketches}
      </div>
    )
  }
}

export default SketchIdeasList
