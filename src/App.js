import './App.css';
import NavBar from './components/NavBar';
import PplPage from './components/ContainerPpl';
import BoxTextHome from './components/BoxTexHome';
import TapeServices from './components/TapeServices';

function App() {
  return (
    <div className="">
      <NavBar/>
      <BoxTextHome/>
      <TapeServices/>
      <PplPage></PplPage>
    </div>
  );
}
export default App;
