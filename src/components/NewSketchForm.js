import React from 'react'

class NewSketchForm extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.props.handleAddSketch)
    return this.props.handleAddSketch(this.state)
  }


  handleChange = (event) => {
    const name = event.target.name
    this.setState({
      [name]: event.target.value
    }, console.log(this.state))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Title of Sketch
            <input id="username" name="title" type="text" onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Synopsis
            <input id="password" name="synopsis" type="text" onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Number of Actors
            <input id="password" name="actorCount" type="text" onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Duration
            <input id="password" name="duration" type="text" onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Add Sketch</button>
        </div>
      </form>
    )
  }
}

export default NewSketchForm
