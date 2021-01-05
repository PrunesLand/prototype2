import React from 'react'
import Hero from './Components/Hero';
import NavBar from './Components/NavBar';
import { SliderData } from './data/SliderData';
import GlobalStyle from './GlobalStyles';


function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Hero slides={SliderData}/>
    </>

  );
}

export default App; 
