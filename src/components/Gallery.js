import React, { useContext, useEffect, useRef, useState } from 'react'
import { Context } from '../App'

    
import image1 from '../../assets/bigsur.jpg'
import image2 from '../../assets/maui.jpeg'
import image3 from '../../assets/sandiego.jpg'
import image4 from '../../assets/yosemite.jpg'

const Gallery = () => {
    const images = [image1, image2, image3, image4];

    const scrollContainerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollNext = () => {
      const scrollContainer = scrollContainerRef.current;
      const scrollWidth = scrollContainer.scrollWidth;
      const containerWidth = scrollContainer.clientWidth;
  
      const newPosition = scrollPosition + containerWidth;
      if (newPosition < scrollWidth) {
        setScrollPosition(newPosition);
        scrollContainer.scrollTo({ left: newPosition, behavior: 'smooth' });
      }
    };

    const scrollPrev = () => {
      const scrollContainer = scrollContainerRef.current;
      const containerWidth = scrollContainer.clientWidth;
  
      const newPosition = scrollPosition - containerWidth;
      if (newPosition >= 0) {
        setScrollPosition(newPosition);
        scrollContainer.scrollTo({ left: newPosition, behavior: 'smooth' });
      }
    };

  return (
    <div>
    <div id='gallery-container' ref={scrollContainerRef}>
        {images.map((el, idx)=> (
            <img className="gallery-images" key={idx} src={el} alt={`image ` + idx} />
        ))}

    </div>
    <div className='button-container'>
        <button onClick={scrollPrev}>{"<"}</button>
        <button onClick={scrollNext}>{">"}</button>
    </div>
    </div>
  )
}

export default Gallery