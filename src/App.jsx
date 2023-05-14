import { useEffect, useState } from 'react';
import './App.scss';
import Cards from './components/Cards/Cards';

function App() {

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then(data => console.log(data));
  }, [])


  return (
    <div className="App">
      <div className="container">
        <h1 className='title'>React cards</h1>
        <button className='btn'>Get data</button>
        <section className='cards'>
            <Cards/>
        </section>
      </div>
    </div>
  );
}

export default App;
