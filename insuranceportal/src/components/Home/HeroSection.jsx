
// const HeroSection = () => {
//     return (
//         <div className="container p-0" style={{
//             zIndex: 0,
//         }}>
//             {/* Hero Section with background */}
//             <div className="row no-gutters vh-100 align-items-center">
//                 {/* Left Section */}
//                 <div className="col-12 col-md-6 text-md-left px-4">
//                     <h1 className="display-4 fw-bold text-dark mb-4">
//                         Your New Insurance Friends
//                     </h1>
//                     <p className="lead text-dark mb-6">
//                         Welcome to India’s Leading Insurance Broker
//                         servicing its customer through 4000
//                         distributors in over 2500 locations in India. We offer personalized insurance solutions to make your life easier.
//                     </p>
//                     <button className="btn btn-warning btn-lg">
//                         Get Started
//                     </button>
//                 </div>

//                 {/* Right Section (Image in Circular Box) */}
//                 <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
//                     <img
//                         src="/hero/hero1.svg" // Replace with your image path
//                         alt="Insurance"
//                         className="w-50 h-100 object-cover"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroSection;


import React from "react";
import "../../App.css";

const HeroSection = () => {
  const insuranceOptions = [
    {
      title: "Car",
      description: "Low prices for safe drivers",
      offer: "₹200 off till 31 Mar '25",
      image: "", // Replace with your actual image path
    },
    {
      title: "Bike",
      description: "Get it in 1 minute",
      offer: "",
      image: "/images/bike.png", // Replace with your actual image path
    },
    {
      title: "Travel",
      description: "With visa included",
      offer: "",
      image: "/images/travel.png", // Replace with your actual image path
    },
    {
      title: "Health",
      description: "100% bills covered",
      offer: "No room rent limit",
      image: "/images/health.png", // Replace with your actual image path
    },
    {
      title: "Life",
      description: "Flexible coverage",
      offer: "",
      image: "/images/life.png", // Replace with your actual image path
    },
  ];

  return (
    <div
      className="hero-section text-center text-white"
      style={{
        background: "linear-gradient(180deg, #1c1c1c, #000000)",
        padding: "6rem 2rem",
        color: "#fff",
      }}
    >
      {/* Hero Heading */}
      <h1 className="display-3 fw-bold mb-3">
        We are India's #1 insurance app
      </h1>
      <p className="lead mb-5">What would you like to insure?</p>

      {/* Insurance Options */}
      <div className="row justify-content-center g-3">
        {insuranceOptions.map((option, index) => (
          <div
            key={index}
            className="col-12 col-md-4 col-lg-2"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              className="card text-start p-3"
              style={{
                background: "#1e1e1e",
                borderRadius: "1rem",
                boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
                width: "100%",
                height: "100%",
                color: "#fff",
              }}
            >
              <div className="card-body">
                <h5 className="card-title fw-bold">{option.title}</h5>
                <p className="card-text">{option.description}</p>
                {option.offer && (
                  <span
                    className="badge bg-danger text-white"
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                    }}
                  >
                    {option.offer}
                  </span>
                )}
                <div className="mt-3">
                  <img
                    src={option.image}
                    alt={option.title}
                    style={{
                      width: "80%",
                      height: "auto",
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-5">
        <button className="btn btn-primary btn-lg px-4 py-2 fw-bold">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
