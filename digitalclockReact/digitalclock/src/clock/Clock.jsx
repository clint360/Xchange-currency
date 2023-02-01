import { Component } from "react";
import "./clock.css"

class Clock extends Component {
  constructor() {
    super();
    this.state = {
       time: "10pm",
    }
  }
  render () {
    return <div className="bigclass">
    {this.state.time}
    </div>
  }
}


export default Clock;