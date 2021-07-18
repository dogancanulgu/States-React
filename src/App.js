import {useState} from "react";


function App() {
  const [name, setName] = useState("Doğancan");
  const [age, setAge] = useState(27);
  const [friends, setFriends] = useState(["Ahmet", "Murat"]);

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


    </div>
  );
}

export default App;
