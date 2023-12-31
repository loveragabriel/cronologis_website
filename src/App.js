import './App.css';
import NavBar from './components/NavBar';
import BoxTextHome from './components/BoxTexHome';
import WhatWeDo from './components/WhatWeDo';
import TapeServices from './components/TapeServices';
import ContactForm  from './components/ContactForm';
import { Footer } from './components/Footer';
import CardServices from './components/CardServices';
import ScrollToTopButton from './components/ScrollToTopButton';


function App() {
  return (
    <div className="">
      <NavBar />
      <BoxTextHome />
      <TapeServices />
      <WhatWeDo />
      <CardServices/>
      <ContactForm />
      <ScrollToTopButton/>
      <Footer></Footer>

    </div>
  );
}
export default App;
