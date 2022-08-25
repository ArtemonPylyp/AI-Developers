import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";

import WhatWeDo from "./Components/WhatWeDo";
import Stages from "./Components/Stages";
import WhyUs from "./Components/WhyUs";
import Footer from "./Components/Footer";
import Main2 from "./Components/Main2";
function App() {
  return (
    <div className="App">
      <Header />
      <Main2/>      
      <About />
      <WhatWeDo />
      <Stages />
      <WhyUs />
      <Footer />
    </div>
  );
}

export default App;
