import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [value , setValue] = useState('')
  const [countryone , setcountryone] = useState('USD')
  const [countrywo , setcountrytwo] = useState('JPY')
  const [inputValue , setInputValue] = useState(0)
  const CountriesCurrency = [
    "USD", "JPY", "BGN", "CZK", "DKK", "GBP", "HUF", "PLN", "RON", "SEK", "CHF", "ISK", "NOK", "TRY", "AUD", "BRL", "CAD", "CNY", "HKD", "IDR", "ILS", "INR", "KRW", "MXN", "MYR", "NZD", "PHP", "SGD", "THB", "ZAR",
  ]
  useEffect(()=>{
  const Apicall = async ()=>{
    const res = await fetch(`https://api.frankfurter.app/latest?amount=${inputValue}&from=${countryone}&to=${countrywo}`)
    const data = await res.json()
    
    if (data.rates && data.rates[countrywo]) {
      setValue(data.rates[countrywo]);
    // console.log(data);
    // console.log(data.rates);
    }
  }
  Apicall()
  },[inputValue,countryone,countrywo])
  return (
    <>
      <div className='main'>
        <div className='converter-box'>
          <h1>Curreny Converter</h1>
          <h3>{value}</h3>
          <div className='amount'>
            <input 
            type='number' 
            placeholder='Enter Amount' 
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}/>
          </div>
          <div className='Amount'>
            <div className='country-one'>
              <h3>From</h3>
              <select value={countryone} onChange={(e)=>setcountryone(e.target.value)}>
                {CountriesCurrency.map((a,b)=> <option key={b}>{a}</option>)}
              </select>
            </div>
            <div className='country-two'>
              <h3>To</h3>
              <select value={countrywo} onChange={(e)=>setcountrytwo(e.target.value)}>
                {CountriesCurrency.map((a,b)=> <option key={b}>{a}</option>)}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
