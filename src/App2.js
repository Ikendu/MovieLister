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

const MyButton = () => {
    const [count, setCount] = useState(0);

    const handleButton = () => {
       setCount(count + 1)
    }
    const resetCount = () => {
        setCount(0)
    }
    return (
        <>
            <button onClick={handleButton}>clicked {count} times</button><br />
            <button onClick={resetCount}>Reset</button>
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
            <MyButton/>
        </>
    )
}


export default App;