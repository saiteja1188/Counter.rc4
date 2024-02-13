import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncreaseCount = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-Container">
        <h1 className="heading">
          The Button has been Clicked
          <br /> <span className="counter-value">{count}</span> times
        </h1>
        <p className="description">Click the button to Increase the count</p>
        <div>
          <button className="button" onClick={this.onIncreaseCount}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
