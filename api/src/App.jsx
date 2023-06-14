import { useState, useEffect } from 'react'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products").then((result) => {
      result.json().then((resp) => {
        // console.log("result", resp);
        setData(resp);
      })
    })
  }, []);
  console.log(data)
  return (
    <>

      <h1>Api Call</h1>
      <h3>Limit:{data.limit}</h3>
      <h3>Total:{data.total}</h3>
    </>
  )
}

export default App
