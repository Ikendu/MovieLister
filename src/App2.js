import {useState} from 'react';
import './App.css'

const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];
const MyProducts = () => {
    const myLists = products.map(product => <li style={{color: product.id===1? 'magenta':"white"}}
    key={product.id}>{product.title}</li>)
    return (<ul>{myLists}</ul>)
}



const AllClick = () => {
    const [count, setCount] = useState(0);

    const handleButton = () => {
        setCount(count + 1)
    }

    const resetClick = () => {
        setCount(0)
    }
    
    return (
        <>
            <MyButton onClick={handleButton} count={count} prop="Clicked No."/>
            <MyButton onClick={handleButton} count={count} prop="2nd Clicked No."/>
            <MyButton onClick={resetClick} prop="Reset"/>
        </>
    )
}

const MyButton = ({count, onClick, prop}) => {    
    return <>
            <button onClick={onClick}>{prop} {count}</button><br />
           </>
           
}


const LoneButton = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1)
    }
    const resetClick = () => {
        setCount(0)
    }
    return (
    <>
        <button onClick={handleClick}>Clicked {count} times</button> <br />
        <button onClick={resetClick}>Reset</button>
    </>
        
    )
}
const App = () => {
    return (
        <>
            <div className="container">
                <h1>Hello React</h1>                
            </div>
            <button>I am a button</button><br />
            <button>I am 2nd button</button>
            <MyProducts />
            <AllClick />
            <LoneButton/>
            <br />
            <LoneButton/>
        </>
    )
}


export default App;