import React, { useContext, useEffect, useRef, useState } from 'react'
import { Context } from '../App'

    
import image1 from '../../assets/bigsur.jpg'
import image2 from '../../assets/maui.jpeg'
import image3 from '../../assets/sandiego.jpg'
import image4 from '../../assets/yosemite.jpg'

const Gallery = () => {
    const images = [image1, image2, image3, image4];
    const captions = ['Big Sur Bixby Bridge', 'Maui', 'San Diego Torrey Pines Overlook', 'Yosemite'];

    const scrollContainerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [currImageIdx, setcurrImageIdx] = useState(0);

    const scrollNext = () => {
      const scrollContainer = scrollContainerRef.current;
      const scrollWidth = scrollContainer.scrollWidth;
      const containerWidth = scrollContainer.clientWidth;
  
      const newPosition = scrollPosition + containerWidth;
      if (newPosition < scrollWidth) {
        console.log("scrolltest")
        setScrollPosition(newPosition);
        setcurrImageIdx(currImageIdx+1);
        scrollContainer.scrollTo({ left: newPosition, behavior: 'smooth' });
      }
    };

    const scrollPrev = () => {
      const scrollContainer = scrollContainerRef.current;
      const containerWidth = scrollContainer.clientWidth;
  
      const newPosition = scrollPosition - containerWidth;
      if (newPosition >= 0) {
        setScrollPosition(newPosition);
        setcurrImageIdx(currImageIdx-1);
        scrollContainer.scrollTo({ left: newPosition, behavior: 'smooth' });
      }
    };


  const handleScroll = () => {
    setScrollPosition(scrollContainerRef.current.scrollLeft);
    setcurrImageIdx(Math.round(scrollContainerRef.current.scrollLeft/scrollContainerRef.current.clientWidth));
  };

    useEffect(() => {
      const container = scrollContainerRef.current;
      container.addEventListener('scroll', handleScroll);
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div>
    <div id='gallery-container' ref={scrollContainerRef}>
        {images.map((el, idx)=> (
            <img className="gallery-images" key={idx} src={el} alt={`image ` + idx} />
        ))}

    </div>
    
    <div className='button-container'>
        <div>{captions[currImageIdx]}</div>
        <img className='gallery-arrow-buttons' src='https://www.svgrepo.com/show/486232/left-arrow-backup-2.svg' onClick={scrollPrev}></img>
        <img className='gallery-arrow-buttons' src='https://www.svgrepo.com/show/520912/right-arrow.svg' onClick={scrollNext}></img>
    </div>
    </div>
  )
}

export default Gallery