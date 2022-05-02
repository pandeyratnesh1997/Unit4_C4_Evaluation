
import "./App.css";
import {Routes,Route} from 'react-router-dom'; 
import {Navbar} from './components/Navbar';

import {Home} from './components/Home';
import {About} from './components/About';
import {Products} from './components/Products';
// import {Men} from './components/';
// import {About} from './components/About';
// import {About} from './components/About';
// import {About} from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/about" element={<About/>}/>
          <Route  path="/products" element={<Products/>}/>
        </Routes>
      </Navbar>
      
    </div>
  );
}

export default App;
