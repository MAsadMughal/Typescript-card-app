import { useState } from 'react';
import './App.css';
import List from './Components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Components/Form';

export interface IState {
  people: {
    name: string
    city: string
    image?: string
    address?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([]);
 
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="mt-5">My Owned List</h1>
        <Form setPeople={setPeople}  people={people}/>
                <List people={people} />
      </header>
    </div>
  );
}

export default App;
