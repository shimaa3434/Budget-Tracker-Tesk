
import { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';
import List from './List';
import Summary from './Summary';

function App() {
  const [tranasactions, setTranasactions] = useState([])

  const addTranasactions =(newItem)=>{
    setTranasactions([...tranasactions, newItem])
  }
 
  useEffect(()=>{
    localStorage.setItem("tranasactions",JSON.stringify(tranasactions));
  }, [tranasactions])

  useEffect(()=>{
    const getTranasaction = (JSON.parse(localStorage.getItem("tranasactions")) || []);
    setTranasactions(getTranasaction);
  },[])

  const deleteItem = (index) =>{ 
    const newTranasaction = [...tranasactions];
        newTranasaction.splice(index,1);
        setTranasactions(newTranasaction);
 }

 

  return (
    <div className="App mx-auto my-3">
      <h1 className='fs-1 fw-bolder fst-italic my-5'>Personal Budget Tracker Tesk </h1>
      <Form addTranasactions={addTranasactions}/>
      <Summary tranasactions={tranasactions}/>
      <List  tranasactions={tranasactions} deleteItem={deleteItem} setTranasactions={setTranasactions}/>
      

    </div>
  );
}

export default App;
