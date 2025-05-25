import './App.css';
import Search from './components/Search.jsx';
import Weather from './components/Weather.jsx'
import { useState } from 'react';

const App = () => {
  const [weatherData, setWeatherData] = useState(null)

  return (
    <>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </head>
      <div className='min-h-screen lg:bg-gray-100 lg:pb-5'>
        <Search sendData={setWeatherData}/>
        <Weather data={weatherData}/>
      </div>
    </>
  );
}

export default App;