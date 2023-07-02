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
                <hr />
                <Displayit />
                <hr />
                <DisplayitII />
                <hr />
                <UseTernary />
                <hr />
                <GameOfChance />
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
//Display based on state update
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

//Display when clicked and remove on another click using conditional && operator
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

//using ternary operator to run display based on age condition
class UseTernary extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input: '', userAge: ''
        }
        this.submit = this.submit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    submit(){
        this.setState(state => ({
            userAge: state.input
        }))
    }
    handleChange(event){
        this.setState({
            input: event.target.value, 
            userAge: ''
        })
    }

    render(){
        const submitButton = <button onClick={this.submit}>Submit</button>;
        const buttonLess = <button>You shall not enter</button>;
        const buttonUp = <button>Go inside</button>;

        return(
            <>
                <input onChange={this.handleChange} value={this.state.input} type='number'  />
                <br />
                {this.state.userAge === '' ? submitButton : this.state.userAge < 18 ? buttonLess : buttonUp}
            </>
            
        )
    }
}

//make decisions condtionary based on props passed
class GameOfChance extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        counter: 1
      }
      this.handleClick = this.handleClick.bind(this);  
    }
    handleClick(){
        this.setState({
            counter: this.state.counter + 1
        })
    }    
    render(){
    const expression = Math.random() >= 0.5;
        return(
            <div>
                <h3>Click to Play game</h3>
                <button onClick={this.handleClick} >Click here</button>
                <Result fiftyFifty={expression} />
                

            </div>
        )
    }    
}
class Result extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <h1>Result: {this.props.fiftyFifty? 'You Win': 'You Lose'}</h1>
        )
    }
}

export default App;