import React from 'react';
import './index.css';
import './App.css'

const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];
const MyProducts = () => {
    const productNames = products.map(product => <li key={product.id} 
        style={{color: product.id === 1? 'magenta' : 'white'}}>{product.title}</li>)
    return (<ul>{productNames}</ul>)
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
        </>
    )
}


export default App;