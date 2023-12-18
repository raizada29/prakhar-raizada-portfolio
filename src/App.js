import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftNavigatingStrip from './Components/LeftNavigatingStrip';
import MainPortFolio from './Components/MainPortFolio';
import RightNavigatingStrip from './Components/RightNavigatingStrip';
function App() {
  return (
    <div className="superContainer">
   <Header/>
   <div className="mainContainer">
   <LeftNavigatingStrip/>
   <MainPortFolio/>
   <RightNavigatingStrip/>
   </div>
   </div>
  );
}

export default App;
