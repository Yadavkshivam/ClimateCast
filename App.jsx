import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [city,setCity]=useState('')
  let [weather,setWeather]=useState()
  let submitHandler = (e)=>{

    const shiva = "44b66457168ca6db30e2bd2339033eaf";

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${shiva}&units=metric`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`API error: ${res.statusText}`);
      }
      return res.json();
    })
  
      .then((data) => {
        console.log("Forecast for", city, ":", data);
        setWeather(data)
      })
      .catch((err) => console.error("Error fetching weather:", err),
      setWeather(undefined));
      
    
    e.preventDefault();
    console.log("abhi ham form ka data pahuch gye hai")
    console.log(city)
    setCity('');

  }
  const buttonHandler =()=>{
  
  }

  return (
    <>
     <div className='flex flex-col items-center bg-gray-600 h-screen justify-center'>
      <h1 className="text-white text-5xl font-serif">Climate Cast</h1>
    <form onSubmit={submitHandler} >
      <input className='bg-gray-500 px-3 mt-5 text-white' placeholder='Enter your city'
    type='text' value={city} onChange={(e)=>setCity(e.target.value)}  ></input>
      <button onClick={buttonHandler} className='bg-green-600 rounded  hover:bg-green-800 px-2' >Search</button>
    </form>

    <div className=' flex flex-col flex-centre px-10 py-10 border-rounded-xl w-[400px] bg-gray-600 mx-auto shadow-9g mt-15'>
      {
        weather!==undefined
        ?
        <>
      <h1 className="text-2xl text-emerald-200" >{weather.city.name}</h1>
      <h3 className='text-xl text-emerald-300'>{weather.list[0].main.temp} °C</h3>
      <p className='text-yellow-400 '>{weather.list[0].dt_txt} </p>
      <p className='text-yellow-400'>{weather.list[0].weather[0].description} </p>
      <img className='border-2 border-yellow-400 rounded-full w-20 h-20 mx-auto'
      src={`http://openweathermap.org/img/w/${weather.list[1].weather[0].icon}.png`} alt="weather icon" />
      
      </>
      :
      <h1 className='text-2xl text-white'>Please enter a valid city name....</h1>
     }
     </div>
     </div>
     </>
  )
}

export default App
