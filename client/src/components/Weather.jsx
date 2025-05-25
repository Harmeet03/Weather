import { useEffect } from "react"
import { useState } from "react"

const Weather = ({ data }) => {
    if(!data){
        return <p className="text-center text-2xl text-gray-400 py-40 transition-all"> Kindly enter a city </p>
    }
    
    if(data.cod !== 200){
        return <p className="text-center text-2xl text-red-400 py-40 transition-all"> Kindly enter valid city </p>
    }

    const iconCode = data.weather[0].icon
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    return(
        <>
            <div className="bg-white pt-8 flex flex-col gap-2 lg:w-250 lg:m-auto lg:rounded-2xl lg:p-4">
                <h1 className="text-center text-4xl"> {data.name}, {data.sys.country} </h1>
                <h1 className="text-center text-gray-400 text-2xl "> {data.weather[0].description} </h1>
            </div>

            <div className="flex flex-col lg:grid grid-cols-2 lg:gap-4 lg:w-250 lg:m-auto lg:pt-4">
                <div className="flex flex-row items-center gap-2 py-8 justify-center text-right bg-white border-b-1 border-gray-300 lg:border-none lg:rounded-2xl">
                    <img className="w-30" src={iconUrl} alt="Not Found"/>
                    <div className="flex flex-col text-3xl gap-2">
                        <p className="text-6xl"> {data.main.temp}<span className="text-2xl">°C</span> </p>
                        <p className="text-gray-400"> {data.weather[0].main} </p>
                    </div>
                </div>
                
                <div className="flex flex-row-reverse items-center gap-8 py-8 justify-center bg-white border-b-1 border-gray-300 lg:border-none lg:rounded-2xl">
                    <img className="w-40 rounded-xl" src='https://imgs.search.brave.com/GKoau3LXA9sr0Ipva3BfYt9yFqp76VLoAtp1J4764Vk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTQz/NzY1NTIvcGhvdG8v/d2luZHktZGF5Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1q/cTJSeWNYNDJqSnJj/RmZQYW9BVzQ3SmZP/bUViSUJUbTl6Q0Jm/VkxLNTAwPQ' alt="Not Found"/>
                    <div className="flex flex-col text-3xl gap-2">
                        <p className="text-gray-400"> Wind: </p>
                        <p className="text-5xl"> {data.wind.speed}<span className="text-2xl">KpH</span> </p>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-8 py-8 justify-center bg-white border-b-1 border-gray-300 lg:border-none lg:rounded-2xl">
                    <img className="w-40 rounded-xl" src='https://imgs.search.brave.com/9Ieq3c-3a5WEAQfgPazLzX17USeBrU_xwRKDJkor_Wc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzU5LzMzLzM0/LzM2MF9GXzc1OTMz/MzQ1Nl9VZzJyTHds/TnE2ZVBEZ1VuV2cy/VUUxNXpYNHQ5anVm/ai5qcGc' alt="Not Found"/>
                    <div className="flex flex-col text-3xl gap-2">
                        <p className="text-gray-400"> Feels like: </p>
                        <p className="text-5xl"> {data.main.feels_like}<span className="text-2xl">°C</span> </p>
                    </div>
                </div>

                <div className="flex flex-row-reverse items-center gap-8 py-8 justify-center bg-white border-b-1 border-gray-300 lg:border-none lg:rounded-2xl">
                    <img className="w-40 rounded-xl" src='https://imgs.search.brave.com/DJ4pzYbmSNTe9GQuVduOZlDzGEHBHSsOcHuDdeLIqs4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTEz/NTk4MjU1Ni9waG90/by9hZXJpYWwtdmll/dy1vZi1tb3JuaW5n/LW1pc3QtaW4teW9u/bmUtdmFsbGV5LWZy/YW5jZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9OEY2NHFU/Z0dialZURzh5Wkst/eThMbXMxRWE5M3NW/QUN6WnNKZW9FM0Fl/Yz0' alt="Not Found"/>
                    <div className="flex flex-col text-3xl gap-2">
                        <p className="text-gray-400"> Humidity: </p>
                        <p className="text-5xl"> {data.main.humidity}<span className="text-2xl">%</span> </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center gap-16 py-8 justify-center bg-white lg:w-250 lg:m-auto lg:rounded-2xl lg:mt-4">
                <div className="flex flex-col text-3xl gap-2">
                    <p className="text-gray-400"> Min: </p>
                    <p className="text-5xl"> {data.main.temp_min}<span className="text-2xl">°C</span> </p>
                </div>
                <div className="flex flex-col text-3xl gap-2">
                    <p className="text-gray-400"> Max: </p>
                    <p className="text-5xl"> {data.main.temp_max}<span className="text-2xl">°C</span> </p>
                </div>
            </div>

            <footer className="text-center py-16 px-4 flex flex-col gap-4 border-gray-300 border-t-1 lg:border-none">
                <logo className="text-4xl"> TempX </logo>
                <p className="text-xl"> This website is for demonstration of my skills purpose only. No copyright intended </p>
            </footer>
        </>
    )
}

export default Weather