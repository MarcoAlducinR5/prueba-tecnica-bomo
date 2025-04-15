import { useState } from "react";

function App() {
  const baseUrl = 'http://localhost:8888/apiFrameworks/';
  const [data, setData] = useState([]);

  const peticionGet = async() => {
    await axios.get(baseUrl)
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }
  

  return (
    <h1 class="text-3xl font-bold underline text-pink-300">
      Hello world!
    </h1>

  );
}

export default App;
