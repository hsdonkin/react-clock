import React from 'react'

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    }
  }

  // when component enters the DOM
  componentDidMount() {
    this.timerID = setInterval(
       () => this.tick(),
       1000
     )
  }
  // when component leaves the DOM
  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  // this updates the clock, setting the state property "date" to a new Date object
  tick() {
    console.log("tick")
    this.setState({
      date: new Date()
    });
  }



  render(){

    return(
      <div>
        <p>The time is {this.state.date.toLocaleString()}</p>
       </div>
    )
  }
}

export default Clock
