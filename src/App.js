import Home from "./Component/Home/Home"
import About from "./Component/About/About"
import Benefit from './Component/Benefits/Benefits';
import AdhKari from './Component/Adhkari/Adhkari';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Benefit/>
      <AdhKari/>
      <Footer/>
    </div>
  );
}

export default App;
