import React from "react"
import Card from "./components/Card";
// import Hero from "./components/Hero";
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Hero /> */}
      <section className="cards-list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
}

export default App;
