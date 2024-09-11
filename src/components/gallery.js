import React, { useState, useRef } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [images, setImages] = useState([
    {
      src: "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
      alt: "Gallery Image 1",
    },
    {
      src: "https://media.istockphoto.com/id/495829576/photo/blue-and-yellow-macaw-on-the-nature.webp?s=1024x1024&w=is&k=20&c=QagaYE1Lilme4R8ucpb53SYPJgJugW6qU1qftaYpGoo=",
      alt: "Gallery Image 2",
    },
    {
      src: "https://media.istockphoto.com/id/155146030/photo/yellow-and-blue-macaw-feathers.jpg?s=1024x1024&w=is&k=20&c=bkXvcTmSmuax6ZJcOgQZABqaMD1fPsji0ZH-zntxGHE=",
      alt: "Gallery Image 3",
    },
    {
      src: "https://media.istockphoto.com/id/1317028021/photo/group-of-hyacinth-macaw.jpg?s=612x612&w=0&k=20&c=dgo06YaSIkvtGd8itpNk14RDSpesY1J1atcXlPufo0c=",
      alt: "Gallery Image 4",
    },
  ]);

  const scrollRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImage = {
        src: URL.createObjectURL(file),
        alt: file.name,
      };
      setImages([...images, newImage]);
    }
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="gallery">
      <div className="gallery-header">
        <button className="gallery-button">Gallery</button>
        <label className="add-image-button" htmlFor="file-input">
          + Add Image
        </label>
        <input
          id="file-input"
          type="file"
          className="input-file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        <div className="nav-buttons">
          <button className="scroll-button" onClick={scrollLeft}>
            {"<"}
          </button>
          <button className="scroll-button" onClick={scrollRight}>
            {">"}
          </button>
        </div>
      </div>
      <div className="images" ref={scrollRef}>
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
