
import './App.css';
import Faq from './components/Faq';
import GetSupply from './components/GetSupply';
import Hero from './components/Hero';
import Platforms from './components/Platforms';
import Rating from './components/Rating';
import Seller from './components/Seller';

function App() {
  return (
    <div>
      <Hero />
      <Platforms /> 
      <GetSupply />
      <Rating />
      <Faq />
      <Seller />
      
    </div>
  );
}

export default App;