import {
  Footer,
  Header,
  Blog,
  Possibility,
  Fatures,
  WhatisGPT3,
} from "./containers/index";
import { Brand, CTA } from "./components/index";
import NavBar from "./components/navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <div>
        <Brand />
        <WhatisGPT3 />
        <Fatures />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;
