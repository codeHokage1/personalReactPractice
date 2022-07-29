import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import service1 from "./images/service1.png";
import star from "./images/Star 1.png";

function App() {
  const servicesForCards = [
    {
      image: service1,
      star: star,
      rating: "5.0",
      ratingNum: "6",
      lessonTitle: "Bball lessons with Katie Zaferes",
      price: "$200",
      isSoldOut: false
    },
    {
      image: service1,
      star: star,
      rating: "5.0",
      ratingNum: "6",
      lessonTitle: "Life lessons with Katie Zaferes",
      price: "$136",
      isSoldOut: true
    },
    {
      image: service1,
      star: star,
      rating: "4.0",
      ratingNum: "6",
      lessonTitle: "Guitar lessons with John Zaferes",
      price: "$631",
      isSoldOut: false
    },
    {
      image: service1,
      star: star,
      rating: "5.0",
      ratingNum: "6",
      lessonTitle: "Life lessons with Katie Zaferes",
      price: "$136",
      isSoldOut: true
    },
  ];

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="cards-container">
        {servicesForCards.map((service) => {
          return (
            <Card
              // image={service.image}
              // star={service.star}
              // rating={service.rating}
              // ratingNum={service.ratingNum}
              // lessonTitle={service.lessonTitle}
              // price={service.price}
              // isSoldOut={service.isSoldOut}

              {...service}  // all of the above is the same thing as this one line
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
