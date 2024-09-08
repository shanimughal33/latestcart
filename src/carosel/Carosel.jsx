import React from "react";
import { useNavigate } from "react-router-dom"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const navigate = useNavigate(); // Use navigate hook to go to category pages

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const images = [
    {
      src: "https://example.com/food-image1.jpg",
      alt: "Delicious Pizza",
      category: "Pizza", // Category name must match the product.js category
    },
    {
      src: "https://example.com/food-image2.jpg",
      alt: "Fresh Sushi",
      category: "Sushi", // Example, add more categories as needed
    },
    {
      src: "https://example.com/food-image3.jpg",
      alt: "Tasty Burger",
      category: "Burgers", // This category will filter burgers
    },
  ];

  const handleClick = (category) => {
    // Navigate to category
    navigate(`/categories/${category}`);
  };

  return (
    <div className="carousel-container max-w-4xl mx-auto mt-8 p-4">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer"
            onClick={() => handleClick(image.category)} // Navigate on click
          >
            <img
              className="w-full h-96 object-cover rounded-lg shadow-lg"
              src={image.src}
              alt={image.alt}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-3xl text-white font-bold">{image.alt}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
