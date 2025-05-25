import './App.css';
import { Helmet } from 'react-helmet';
import React, { useEffect, useState } from "react";
import logo from './assets/Weather.png'

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(true);
  const [none, setNone] = useState(false);
  let s_error = document.getElementById('search_error');
  let srv_error = document.getElementById('server_error');
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ca2c79f29c31549b8e4e93c97cf0a293&units=metric`);

  const FetchData = async (e) => {
    
  }

  return (
    <>
      <Search/>
      <Weather/>
    </>
  );
}

export default App;