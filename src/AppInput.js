import React from 'react';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({
            input: event.target.value
        })
    }

    render(){
        return(
            <div>
                <input onChange={this.handleChange} value={this.state.input} />
                <h2>User input is displayed below</h2>
                <h3>{this.state.input}</h3>
            </div>
        )
    }
};

export default App;