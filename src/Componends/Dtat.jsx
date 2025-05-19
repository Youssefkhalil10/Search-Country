import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Dtat({ countryName }) {
    const [Data, setData] = useState(null);
    const [error, seterror] = useState('')

    useEffect(()=>{
        if(countryName ==='') return;

        let queryName = countryName.trim().toLowerCase();
        if (queryName === 'israel') {
          queryName = 'palestine';
        } 
        axios.get(`https://restcountries.com/v3.1/name/${queryName}`)
        .then((response)=>{
          if(response.data && response.data.length >0){
            setData(response.data[0]);
            seterror('');
            console.log(response.data);
          }

        })
        .catch((error)=>{
            seterror(error.message);
            setData(null);
        })
    },[countryName])
  return (
    <div className="container mt-4 text-center border-1 shadow w-25">
      {error && <p className="text-danger">{error}</p>}
      {Data && Data.name && Data.name.common && (
        <>
          <h3>{Data.name.common}</h3>
          <p>{Data.name.official}</p>
          <img src={Data.flags.png} alt="Flag" style={{ width: '150px' }} />
          <p><span className=' fw-bold '>Capital:</span> {Data.capital}</p>
          <p><span className=' fw-bold '>TimeZone:</span>  {Data.timezones}</p>

          <p><span className=' fw-bold '>Currencies: </span>
          {Object.values(Data.currencies)[0]?.name} (
          {Object.values(Data.currencies)[0]?.symbol})</p>

          <p><span className=' fw-bold '>Continents:</span>  {Data.continents}</p>
          <p><span className=' fw-bold '>Population:</span>  {Data.population}</p>
        </>
      )}
    </div>
  )
}
