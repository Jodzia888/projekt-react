import React, {useEffect, useState} from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';

  function App() {
    const [city, setCity] = useState("")
    const [wetherData, setWetherData] = useState(null)


    useEffect(()=>{
      getWetherData()
    },[city])

    function getWetherData(){
      //cos

    }

    return (
      <div className="App">
        <Form value={city} setValue={setCity} />
        {city}
        <Result wetherData={wetherData}/>
    </div>
    );
  }


export default App;
