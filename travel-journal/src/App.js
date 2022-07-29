import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';

import { places } from './placesData';

function App() {
  return (
    <div className='project'>
      <Navbar />
      <div className='card-container'>
        {
          places.map(place => {
            return (
              <Card
                key={place.id}
                {...place}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
