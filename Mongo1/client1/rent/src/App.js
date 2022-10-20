import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
function App() {
  const [HouseName,setName]=useState("");
  const [HousePrice,setPrice]=useState(0);
  const [Months,setMonths]=useState(0);
  const [HouseList,setHouseList]=useState([]);
  useEffect(()=>{
    axios.get("/display").then((response)=>{
      setHouseList(response.data);
    })
  },[]);
  const addToList=()=>{
    axios.post("/newhouse",{HouseType:HouseName,HousePrice:HousePrice,months:Months,});
    console.log(HouseName,HousePrice,Months);
  }
  return (
    <div className="App">
      <h1> Houses CATALOG </h1>
<label>HouseType  :</label>
<input type="text" 
onChange={(event)=>setName(event.target.value)}/><br/>
<label>HousePrice  :</label>
<input type="text" 
onChange={(event)=>setPrice(event.target.value)}/><br/>
<label>no.of Months  :</label>
<input type="text" 
onChange={(event)=>setMonths(event.target.value)}/><br/>
<button onClick={addToList}>Add details</button>
    <h1>List of rented Houses</h1>
    {HouseList.map((val,key)=>{
  return <div key={key} className = "hello">
    <h1>{val.HouseName}</h1>
    <h1>{val.HousePrice}</h1>
    <h1>{val.Months}</h1>
  </div>
  })}
    </div>
  );
}

export default App;