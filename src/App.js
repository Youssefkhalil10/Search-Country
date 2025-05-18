import logo from './logo.svg';
import './App.css';
import Form from './Componends/Form';
import Dtat from './Componends/Dtat';
import { useState } from 'react';

function App() {
  const [countryName, setcountryName] = useState('');
  function handelSearch(name){
    setcountryName(name);
  }
  return (
<>
    <Form onSearch={handelSearch}/>
    <Dtat countryName={countryName}/>
</>
  );
}

export default App;
