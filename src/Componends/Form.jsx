import React, { useState } from 'react'

export default function Form({ onSearch }) {
    const [CountryName, setCountryName] = useState('');
    function handelSearch(){
        onSearch(CountryName);
    }
  return (
    <>
    <div className="contet text-center mt-3">
      <h1>Know Your Country</h1>
      <input type="text" 
      name="" 
      id="" 
      value={CountryName}
        className='me-3 rounded-3 border-1' 
        onChange={(e)=>{setCountryName(e.target.value);}}/>
      <button className=' btn btn-success' onClick={handelSearch}>Search</button>
    </div>
    </>
  )
}
