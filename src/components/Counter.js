import React, { Component } from 'react'


export class Counter extends Component {
    constructor(props) {
        super(props)

        this.state ={
            count:0,
            colour:'black'
        }
    }
    increment() {
        this.setState(
        {
            count:this.state.count + 1,
            colour:this.state.count>=0?this.state.colour='green':this.state.colour='red'
        })
    }
    reset() {
        this.setState({
            count:0,
            colour:this.state.colour='black'
        })
        
    }
    decrement() {
        this.setState({
            count:this.state.count - 1,
            colour:this.state.count<=0?this.state.colour='red':this.state.colour='green'
        }
          )
        
    }
    render() {
        return (
            <div>
            <div style={{fontSize:'30px'}}>    COUNTER  </div>
            <div style={{fontSize:'90px',color:this.state.colour}}>{this.state.count}</div>
            <button onClick={() => this.increment()}>Increment</button>
            <button onClick={() => this.reset() }>Reset</button>
            <button onClick={() => this.decrement()}>Decrement</button>
            </div>
        )
    }
}

export default Counter
