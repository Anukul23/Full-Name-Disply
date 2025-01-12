import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [firstName , setfirstName] = useState("");
  const [lastName , setlastName] = useState ("");
  const [fullName , setfullName] = useState("");

  const handleformsubmit = (event)=>{
    event.preventDefault();
    setfullName(`Full Name : ${firstName} ${lastName}`)
  }

  const handlefirstName = (event)=>{
      setfirstName(event.target.value);
  }

  const handlelastName = (event) =>{
    setlastName(event.target.value)
  }
  return (
    <div className="App">
      <div>
        <h1>Full Name Display</h1>
        <form onSubmit={handleformsubmit}>
         <label> First Name : </label>
        <input type='text' value={firstName} onChange={handlefirstName} required />
        <br />
        <br/>
        <label>Last Name : </label>
        <input type='text' value={lastName}  onChange={handlelastName} required />
        <br />
        <br/>
        <button type='submit'>Submit</button>
        </form>

        {firstName !== "" && lastName !== "" &&(
          <p>{fullName}</p>
        )}
      </div>
    </div>
  );
}

export default App;
