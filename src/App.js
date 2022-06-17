import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";

function App() {

    const [fruit, setFruit] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(null);


   const getr = () => {
       axios
           .get("https://practicefruitapp.herokuapp.com/item/get")
           .then(response => {
                   const tempvar = response.data;
                   setFruit(tempvar);
                   console.log(fruit);
               }
           )
   }


    const mapr = fruit.map(fruit => {
        return <div key={fruit.id} >
            <h2>{fruit.name}</h2>
            <h4>{fruit.price}</h4>
        </div>
    })

    useEffect(() => {
        getr()

    }, []);

   const postr = () =>{
       axios
           .post("https://practicefruitapp.herokuapp.com/item/add", {
               name: name,
               price: price
           })
           .then(response => console.log(response))
   }




  return (
    <div className="App">
      <header className="App-header">
          <h1>{name}</h1>
          <h1>{price}</h1>
          <form onSubmit={postr}>
              <input onChange={(event) => setName(event.target.value)} type="text" placeholder="fruit name" />
              <input onChange={(event) => setPrice(event.target.value)} type="float" placeholder="fruit price"/>
              <button type="submit">ADD</button>
          </form>
          {mapr}
      </header>
    </div>
  );
}

export default App;
