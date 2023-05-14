import { useEffect, useState } from 'react';

import './App.scss';

import Cards from './components/Cards/Cards';
import Loading from './components/Loading/Loading';

function App() {

  const url = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);

 const getData = () => {
    fetch(url)
    .then((response) => response.json())
    .then(data => {
      setUsers(data);
    })
    .catch(err => {
      console.warn(err)
      alert("Ooops, there an error for getting data")
    })
 }

  const Users = () => {
    return(
      <div className="cards">
        {users.map((el, index) => {
          return(
            <Cards key = {index} id = {el.id} name ={el.name} email ={el.email} address = {el.address.street} phone = {el.phone}/>
          )
        })}
      </div>
    )
  }


  return (
    <div className="App">
      <div className="container">
        <h1 className='title'>React cards</h1>
        <button onClick={getData} className='btn'>Get data</button>
        <section className='body'>
            <Users/>
        </section>
      </div>
    </div>
  );
}

export default App;
