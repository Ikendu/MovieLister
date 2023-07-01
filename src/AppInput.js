import React from 'react';
import { useState } from 'react';

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

                <Displayit />
                <DisplayitII />
            </div>
        )
    }
};
class Navibar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
        activeUsers: null
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                activeUsers: 202000
            })   
        }, 2500 )        
    }    
    render(){
        return(
        <>
            <h2>Username: {this.props.name}</h2>
            <p>Active Users: {this.state.activeUsers}</p>
        </>
            
        )
    }
}
class Displayit extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        display: true
        }
        this.handleDisplay = this.handleDisplay.bind(this);
    }   

     handleDisplay() {
        this.setState((state) => ({
            display: !state.display
        }))
    }
    render(){
        if(this.state.display){
        return(
        <>
            <button onClick={this.handleDisplay}>Remove</button>
            <h1>I'm Up here</h1>
        </>
        )
        } else {
            return(
            <>
                <button onClick={this.handleDisplay}> Display</button>
            </>
            )
        }
    }
}
class DisplayitII extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        display: true
        }
        this.handleDisplay = this.handleDisplay.bind(this);
    }   

     handleDisplay() {
        this.setState({
            display: !this.state.display
        })
    }
    render(){
        return(
        <>
            <button onClick={this.handleDisplay}>Toggle Display</button>
            {this.state.display && <h1>I'm Up here</h1>}
        </>
        )
    }      
}

export default App;