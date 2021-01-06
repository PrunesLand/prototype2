import React, {useState}from 'react'
import DropDown from './Components/DropDown';
import Hero from './Components/Hero';
import InfoSection from './Components/InfoSection';
import NavBar from './Components/NavBar';
import { InfoData } from './data/InfoData';
import { SliderData } from './data/SliderData';
import GlobalStyle from './GlobalStyles';



function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <NavBar toggle={toggle}/>
      <DropDown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData}/>
      <InfoSection {...InfoData}/>
    </>
  );
}

export default App; 
