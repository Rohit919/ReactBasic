import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [input, setName] = useState({
    fname : "",
    lname : "",
    mnum : null,
    email : "",
    password : ""
  });
  const takeInput = (e) => {
    const {value, name} = e.target;
    setName((prevalue) => {
      if(name === "fname"){
        return {
          fname : value,
          lname : prevalue.lname,
          mnum : prevalue.mnum,
          email : prevalue.email,
          password : prevalue.password
        }

      } else if(name === "lname"){
        return {
          fname : prevalue.fname,
          lname : value,
          mnum : prevalue.mnum,
          email : prevalue.email,
          password : prevalue.password
        }
        
      } else if(name === "mnum"){
        return {
          fname : prevalue.fname,
          lname : prevalue.lname,
          mnum : value,
          email : prevalue.email,
          password : prevalue.password
        }
        
      } else if(name === "email"){
        return {
          fname : prevalue.fname,
          lname : prevalue.lname,
          mnum : prevalue.mnum,
          email : value,
          password : prevalue.password
        }
      } else {
        return {
          fname : prevalue.fname,
          lname : prevalue.lname,
          mnum : prevalue.mnum,
          email : prevalue.email,
          password : value
        }
        
      }
    })
  }
  const formSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted")
  }
  return (
    <>
    <h2>Controled Component</h2>
    <form onSubmit = "formSubmit">
      <ul>
        <li>
            FirstName : <input type = "text" value = {input.fname} name = "fname" onChange = {takeInput} />
        </li><br/>
        <li>
            LastName : <input type = "text" value = {input.lname} name = "lname" onChange = {takeInput}/>
        </li>
        <li><br/>
            Mobile No : <input type = "number" value = {input.number} name = "mnum" onChange = {takeInput} />
        </li>
        <li><br/>
            Email : <input type = "email" value = {input.email} name = "email" onChange = {takeInput} />
        </li>
        <li><br/>
            Password : <input type = "password" value = {input.pass} name = "pass" onChange = {takeInput} />
        </li>
        <button type = "submit" > Submit</button>
      </ul>
    </form>
    </>
  );
}

export default App;
