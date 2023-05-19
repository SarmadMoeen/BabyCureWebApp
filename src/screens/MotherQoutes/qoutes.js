import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Quotes = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const quotes = [
    {
      id: 1,
      image: require("../../assets/quotes/images1.jpg").default,
    },
    {
      id: 2,
      image: require("../../assets/quotes/images1.jpg").default,
    },
    {
      id: 3,
      image: require("../../assets/quotes/images1.jpg").default,
    },
    // Add more quotes with their corresponding images here
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClosePreview = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Header />
      <section className="home_page">
        <div className="container-fluid py-5">
          <div className="text-center mx-5 pt-5">
            <h6 className="heading">Welcome to Baby Cure!</h6>
            <p className="para pt-3">
              "When the baby is going through growth spurts or mood changes, I use The Wonder Weeks to keep track of it all and why he behaves differently." – Devinda, Momatu team.
            </p>
          </div>
          <div className="row gy-5">
            {quotes.map((quote) => (
              <div
                key={quote.id}
                className="col-md-3 pt-5 mt-5 text-center"
              >
                <img
                  src={quote.image}
                  alt={`Quote ${quote.id}`}
                  className="quote-image"
                  onClick={() => handleImageClick(quote.image)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      {selectedImage && (
        <div className="image-preview">
          <div className="preview-overlay" onClick={handleClosePreview} />
          <img
            src={selectedImage}
            alt="Selected Quote"
            className="preview-image"
          />
        </div>
      )}
    </>
  );
};

export default Quotes;
