import './App.css';
import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import ListItems from './components/ListItems';
function App() {
  const [reqEndPoint, setReqEndPoint] = useState('users');
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = "https://jsonplaceholder.typicode.com/";

  useEffect(() => {
    // setIsLoading(!isLoading);
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqEndPoint}`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(!isLoading)
      }
    }

    fetchItems();
  }, [reqEndPoint])

  return (
    <div className="App">
      <Form reqEndPoint={reqEndPoint} setReqEndPoint={setReqEndPoint} />
      {
        isLoading ? <p>Loading Results ....</p> : <ListItems items={items} />
      }
    </div>
  );
}

export default App;
