import React from 'react';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: '', submit: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            input: event.target.value
        })
    }
    handleSubmit(event){
        this.setState({
            submit: this.state.input
        })
        event.preventDefault()
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input onChange={this.handleChange} value={this.state.input} />
                    <input type='submit'/>
                </form>
                <h2>User input is displayed below</h2>
                <h3>{this.state.input}</h3>
                <h3>Display below after submitting</h3>
                <h1>{this.state.submit}</h1>
                <Navibar name={this.state.submit}/>
            </div>
        )
    }
};
class Navibar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <h2>Username: {this.props.name}</h2>
        )
    }
}

export default App;