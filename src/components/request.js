import {useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';
function Request() {
  const [studName,setName]=useState("");
  const [studNumber,setNumber]=useState(0);
  const [studList,setStudList]=useState([]);
const [upName,setUpName]=useState("");
  useEffect(()=>{
    axios.get("/display").then((response)=>{
      setStudList(response.data);
    })
  },[]);
  const addToList=()=>{
    axios.post("/newstud",{studName:studName, studNumber:studNumber,});
    console.log(studName,studNumber);
  }
  const updateName=(id)=>{
    axios.put("/upstud",{id:id,upName:upName,});
  }
  const deleteStud=(id)=>{
    axios.delete(`/delstud/${id}`);
    
  }
  return (
    <div className="App">
      <h1>Rental Data</h1>
<input type="text"
onChange={(event)=>setName(event.target.value)} placeholder="Tenant Name"/><br/>
<input type="number"
  onChange={(event)=>setNumber(event.target.value)} placeholder="flat number"/><br/>
<button onClick={addToList}>New Tenant</button>
    <h1>List of Tenants</h1>
    {studList.map((val,key)=>{
  return <div key={key} class="student">
    <h1>{val.name}</h1>
    <h1>{val.htno}</h1>
  <input type="text" onChange={(event)=>setUpName(event.target.value)} placeholder='Enter Name to Update'/>&nbsp;
  <button onClick={()=>updateName(val._id)}>Update Name</button><br/>
  <button onClick={()=>deleteStud(val._id)}>Delete</button>
  </div>
  })}
    </div>
  );
}

export default Request;
