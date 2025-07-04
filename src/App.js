import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Activities from "./components/Activities";
import Hobbies from "./components/Hobbies";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Activities />
      <Hobbies />
      <Footer />
    </div>
  );
}

export default App;
