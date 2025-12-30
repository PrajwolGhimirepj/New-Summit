import React, { useState } from "react";
import "./Gallery.css";

const categories = ["All", "Sports", "College", "Eco", "Programs"];

const Gallery = ({ images = [], columns = 4 }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const placeholderCount = columns * 4;

  return (
    <section className="gallery-wrapper QuickSand-Regular">
      <div className="gallery-head Neu-Bold">
        <h2>Gallery</h2>
        <button className="add-image-btn">+ </button>
      </div>
      <div className="gallery-filters ">
        <div className="gallery-nav ">
          {categories.map((cat) => (
            <button
              key={cat}
              className={
                activeCategory === cat
                  ? "activeCatogary  QuickSand-Regular"
                  : "   notactiveCatogary  QuickSand-Regular "
              }
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div
        className="gallery-grid"
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {filteredImages.length > 0
          ? filteredImages.map((img, index) => (
              <div className="gallery-item" key={index}>
                <img src={img.src} alt={img.alt || "gallery"} />
              </div>
            ))
          : Array.from({ length: placeholderCount }).map((_, index) => (
              <div className="gallery-item placeholder" key={index} />
            ))}
      </div>
    </section>
  );
};

export default Gallery;
