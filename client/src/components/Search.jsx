import { useState } from "react"
import axios from 'axios'

const Search = ({ sendData }) => {
    const [city, setCity] = useState('')

    const handleSearch = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ca2c79f29c31549b8e4e93c97cf0a293&units=metric`)
            sendData(response.data)
            setCity('') 
            console.log("Data recieved")
        }
        catch(e){
            console.error('Error in fetching weather data ', e)
            sendData({ cod: 404, message: "City not found" });
        }
    }

    return(
        <>
            <form onSubmit={handleSearch} className="py-8 px-4 flex flex-col gap-8">
                <h1 className="text-center text-4xl">  
                    <span className="p-2 bg-white text-gray-500 rounded-lg lg:bg-gray-100"> TempX </span> 
                </h1>
                <div className="flex flex-row justify-center gap-2">
                    <input type="textbox" placeholder="Enter City" value={city} className="border p-4 rounded-xl border-gray-300 active:border-green-400 lg:bg-white focus:outline-none" onChange={(e) => setCity(e.target.value)} required/>
                    <button type="submit" className="fa fa-search py-4 border border-gray-300 rounded-xl px-3 lg:bg-white transition-all hover:cursor-pointer hover:scale-125"/>
                </div>
            </form>
        </>
    )
}

export default Search