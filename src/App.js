import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API, APIKEY } from './API';

const App = () => {

  const [cityName, setCityName] = useState({})
  const [data, setData] = useState({})






  const getWeater = async (e) => {
    e.preventDefault()
    // axios.get(API + "London" + APIKEY)
    //   .then(response => console.log(response.data))
    //   .catch(err => console.log(err))

    const response = await axios.get(API + cityName + APIKEY)
    // setInfo(response?.data)
    console.log(response?.data);
    setData(response?.data)
  }



  // useEffect(() => {
  //   getWeater()
  // }, [])


  return (
    <div>
      <form onSubmit={getWeater}>
        <input onChange={(e) => setCityName(e.target.value)} type="text" value={cityName} placeholder='City name' />
        <button >Search</button>
      </form>
      <div className='output'>

        <h1>{data.name}</h1>
        {/* <h2>{"Координаты по lat: " + data.coord.lat}</h2>
        <h2>{"Координаты по lon: " + data.coord.lon}</h2> */}



      </div>

    </div>
  );
};

export default App;