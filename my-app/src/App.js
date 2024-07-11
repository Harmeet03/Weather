import './App.css';
import { Helmet } from 'react-helmet';
import React, { useEffect, useState } from "react";

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(true);
  const [none, setNone] = useState(false);
  let s_error = document.getElementById('search_error');
  let srv_error = document.getElementById('server_error');

  const FetchData = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ca2c79f29c31549b8e4e93c97cf0a293&units=metric`);

      if(response.ok){
        console.log(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ca2c79f29c31549b8e4e93c97cf0a293&units=metric`);
        setLoading(false);
        const data = await response.json();
        setWeather(data);
        setNone(false);
        s_error.style.display = 'none';
        srv_error.style.display = 'none';
      }
      else{
        console.log('Error in fetching data');
        setLoading(false)
        s_error.style.display = 'block';
        srv_error.style.display = 'none';
        setNone(true);
      }
    }
    catch(error){
      console.log('Server error: ', error);
      setLoading(false);
      s_error.style.display = 'none';
      srv_error.style.display = 'block';
      setNone(true);
    }
  }

  if(!weather){
    return setLoading(true);
  }

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Oswald:wght@300&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Helmet>

      <form className='search' onSubmit={FetchData}>
        <input name='search' type='text' placeholder='Enter city' required onChange={(e) => setCity(e.target.value)}></input>
        <button type='submit'><i className='fa fa-search'></i></button>
      </form>

      {loading ? (
        <p> Search for Weather Updates </p>
      ) 
      : (
        none ? (
          <p> Oops.. </p>
        ) 
        : (
          <div className='content' id='content'>
            <div className='place'>
              <h1> {weather.name}, {weather.sys?.country} </h1>
            </div>
            
            <div className='temp_detail'>
              <div className='left'>
                <img src={`https://openweathermap.org/img/wn/${weather.weather && weather.weather[0].icon}@2x.png`} alt='not available'></img>
                <p> {weather.weather && weather.weather[0].main} </p>
              </div>
              <div className='right'>
                <div className='temp'>
                  <h3> Temperature </h3>
                  <p> {weather.main?.temp} °C </p>
                </div>
                <div className='extra'>
                  <div className='wind'>
                    <h3> Wind </h3>
                    <p> {weather.wind?.speed} KM/H </p>
                  </div>
                  <div className='humidity'>
                    <h3> Humidity </h3>
                    <p> {weather.main?.humidity}% </p>
                  </div>
                  <div className='feels'>
                    <h3> Feels Like </h3>
                    <p> {weather.main?.feels_like}°C </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )
      )}

      <p id='search_error' style={{display: 'none'}}> Kindly Search the correct place </p>
      <p id='server_error' style={{display: 'none'}}> Server Error. </p>
    </>
  );
}

export default App;