// Using useEffect() to fetch data and appropriately render them

import React, { useState } from 'react'

const USeEffectProject = () => {

  const [items, setItems] = useState([]);

  const API_URL2 = 'https://jsonplaceholder.typicode.com';

  const fetchItems = async (url) => {
    try {
      const response = await fetch(url);
      const gottenItems = await response.json();
      setItems(gottenItems);
    } catch (error) {
      console.log(error);
    }
  }


  const getUsers = () => {
    const url = `${API_URL2}/users`;
    fetchItems(url);
  }

  const getPosts = () => {
    const url = `${API_URL2}/posts`;
    fetchItems(url);
  }

  const getComments = () => {
    const url = `${API_URL2}/comments`;
    fetchItems(url);
  }

  return (
      <div>
          <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto'}}>
              <button className="button" onClick={getUsers}>Users</button>
              <button className="button" onClick={getPosts}>Posts</button>
              <button className="button" onClick={getComments}>Comments</button>
          </div>
          <ul>
            {
              items.length === 0 ? <p>Click on a button above to display values</p> :
                items.map(item => (
                    <li key={item.id}>{JSON.stringify(item)}</li>
                ))
            }  
          </ul>

    </div>
  )
}

export const ProjectItem = () => {

}

export default USeEffectProject