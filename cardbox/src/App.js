import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Sdata from './Sdata.js'

function App() {
  return (
    <>
    {Sdata.map((val, i, Sdata) => {
      return <Card
      key = {val.id}
      pimage = {val.pimage}
      cimage = {val.cimage}
      fname = {val.fname}
      ></Card>
     }
     )}
     </>
  );
}

export default App;
