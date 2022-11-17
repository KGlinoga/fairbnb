import React from "react"
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
import data from "./data"

export default function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
        title={item.title}
        desc={item.description}
        price={item.price}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        openSpots={item.openSpots}
      />
    )
  })


  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

