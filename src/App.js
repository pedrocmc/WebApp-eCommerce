import './App.css';
import Header from './Header';
import Slider from "./components/Slider";
import { Shop } from './shop/shop';
import Rodape from './rodape';

function App() {
  return (
    <div className="App">
        <Header/>
        <Slider/>
        <Shop/>
        <Rodape/>
    </div>
  );
}

export default App;
