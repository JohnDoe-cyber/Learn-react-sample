import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard.js';
import { useState, useEffect } from 'react'


// https://api.covid19india.org/data.json




function App() {

  const [ProdData, setProdData] = useState([])

  const fetchProdData = async () => {
    // https://api.covid19india.org/data.json


    let REACT_APP_BASE_URL = 'https://api.covid19india.org';
    const res = await fetch(`${REACT_APP_BASE_URL}/data.json`)
    const data = await res.json()

    return data
  }

  useEffect(() => {
    const getProdData = async () => {
      const ProdDataFromServer = await fetchProdData()
      setProdData(ProdDataFromServer)
    }
    getProdData()
  }, [])
  
  


  console.log(ProdData)

  return (
    <div className="App">
      <Dashboard ABC={ProdData} />
    </div>
  );
}


export default App;
