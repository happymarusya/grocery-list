import './App.css';
import image from './shopping.webp';
import imageTwo from './man.webp';
import { Grocery } from './Grocery';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <img src={image} alt='Shopping' width="200px"/>
      </div>

      <div className='container'>
        <h1>Grocery List</h1>
      </div>

      <Grocery/>

      <div className='container' >
        <img src={imageTwo} alt="Man" width="200px"/>
      </div>
      
    </div>
  );
}

export default App;
