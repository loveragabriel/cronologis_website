import './App.css';
import NavBar from './components/NavBar';
import BoxTextHome from './components/BoxTexHome';
import WhatWeDo from './components/WhatWeDo';
import TapeServices from './components/TapeServices';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="">
      <NavBar />
      <BoxTextHome />
      <TapeServices />
      <WhatWeDo />
      <ContactForm />
      <Footer></Footer>
    </div>
  );
}
export default App;
