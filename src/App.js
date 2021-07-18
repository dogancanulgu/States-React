import {useState} from "react";


function App() {
  const [name, setName] = useState("Doğancan");
  const [age, setAge] = useState(27);
  const [friends, setFriends] = useState(["Ahmet", "Murat"]);
  const [address, setAddress] = useState({ title: "İstanbul", zip: 34188});

  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
      <h2>{age}</h2>

      <button onClick={() => setName("Ahmet")}>Change Name</button>
      <button onClick={() => setAge(25)}>Change Age</button>
      <hr />
      <br />
      <h2>Friends</h2>
      {
        friends.map( (friend, index) => (
        <div key={index}>{friend}</div>))
      }
      <button onClick={() => setFriends([...friends, "Ayşe"])}>Add New Friend</button>
      <hr />
      <br />

    <h2>Address</h2>
    <div>{address.title} {address.zip}</div>
    <br />

    <button onClick={() => setAddress({...address, title:"Ankara", zip:44444})}>Change the Address</button>



    </div>
  );
}

export default App;
