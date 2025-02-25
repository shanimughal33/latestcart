import React from "react";
import hero from '../../assets/hero.png'; // Image used in the img tag
import backgroundImage from '../../assets/images/foodherobg2.jpg'; // Import the background image
import PrimaryButton from "../Shared/PrimaryButton";

// Correct Bgstyle
const Bgstyle = {
  backgroundImage: `url(${backgroundImage})`, // Use the imported image
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: "100%",
  height: "100vh", // Ensure the height covers the viewport
  
};

const Hero = () => {
  return (
    <div  className="relative z-[1]">
      <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${backgroundImage})`,
        opacity: 0.2, // Apply opacity here (0.1 to 1, lower means more transparent)
      }}></div>
      <div className="container py-16 sm:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
          {/* Text content */}
          <div className="order-2 space-y-7 text-dark sm:order-1">
            <h1 data-aos="fade-up" className="text-5xl">
              Fresh And Healthy Meal Plan{" "}
              <span className="text-7xl text-secondary font-cursive">
                Delivery
              </span>{" "}
              In Pakistan
            </h1>
            <p data-aos="fade-up" data-aos-delay="300" className="lg:pr-64">
              Delicious Meals Delivered To Your Door
            </p>
            <div data-aos="fade-up" data-aos-delay="500">
              <PrimaryButton to="/fulladdtocart" /> {/* Pass the path as a prop */}
            </div>
          </div>
          {/* Image section */}
          <div data-aos="fade-up-right" className="relative z-30 order-1 sm:order-2">
            <img
              src={hero}
              alt="Hero"
              className="w-full sm:scale-125 sm:translate-y-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
