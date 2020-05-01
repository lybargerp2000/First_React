import React, {Component} from 'react';

class Die extends Component {
    state = {
        value: null,
        numberOfSides: null
    }
    componentDidMount(){
        let result = this.setDieValue();
        this.setState({
            value: result,
            numberOfSides: this.props.numberOfSides
        });
    }
    setDieValue(){
        return Math.floor(Math.random() * this.props.numberOfSides) + 1;
    }
    getUserInput(){
        return prompt("What is your favorite movie?");
    }
    render() {
        return (
            <div>
                <h1>Die number of sides: {this.state.numberOfSides}</h1>
                <h1>Die value: {this.state.value}</h1>
                
                <button onClick={() => this.props.buttonClick(this.getUserInput())}>
                    Click me!
                </button>
            </div>
        );
    }
}
export default Die;