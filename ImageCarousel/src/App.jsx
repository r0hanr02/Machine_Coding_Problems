import { useEffect, useState } from "react";
import "./App.css";
import { Images } from "./constant/data";

function App() {
  const images = Images;
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    let timer = setInterval(handleNext, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    // My Version
    // <div className="ImageContainer">
    //   <button className="prev" onClick={handlePrev}>
    //     Prev
    //   </button>
    //   {images.length > 0 && (
    //     <img src={images[currentIndex]} alt={`slide-${currentIndex}`} />
    //   )}
    //   <button className="next" onClick={handleNext}>
    //     {" "}
    //     Next
    //   </button>
    // </div>

    <div className="carousel">
      <button className="prev" onClick={handlePrev}>
        Prev
      </button>

      <div className="viewport">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Images.map((src, i) => (
            <img key={i} src={src} className="slide" />
          ))}
        </div>
      </div>

      <button className="next" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default App;
