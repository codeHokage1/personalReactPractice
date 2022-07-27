import './App.css';
// import Header from './components/Header';
import Header2 from './components/Header2';
import Footer from './components/Footer';
import Main from './pages/Main';
import Project1Footer from './components/Project1Footer';
import Project1Main from './components/Project1Main';

function App() {
  console.log('TEsting')
  return (
    <div className='card-background'>
      <div className='card-body'>
        <Project1Main />
      </div>
      <Project1Footer />
    </div>

    
  );
}

export default App;
