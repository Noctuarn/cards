import { useEffect, useState } from 'react';
import './App.scss';
import Cards from './components/Cards/Cards';

function App() {

  const url = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then(data => {
      setUsers(data);
    })
    .catch(err => {
      console.warn(err)
      alert("Ooops, there an error for getting data")
    })
  }, [])


  return (
    <div className="App">
      <div className="container">
        {console.log(users)}
        <h1 className='title'>React cards</h1>
        <button className='btn'>Get data</button>
        <section className='cards'>
            {users.map((el, index) => {
              return(
                <Cards key = {index} id = {el.id} name ={el.name} email ={el.email} address = {el.address.street} phone = {el.phone}/>
              )
            })}
        </section>
      </div>
    </div>
  );
}

export default App;
