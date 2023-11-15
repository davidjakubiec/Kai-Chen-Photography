import React, { useContext, useEffect, useRef, useState } from 'react'
import { Context } from '../App'
import GalleryDots from './GalleryDots'

    
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
    const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeoutId;

    const hideElement = () => {
      setIsVisible(false);
    };

    const resetTimer = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(hideElement, 1000); // 1000 milliseconds (1 second) of inactivity
    };

    const handleUserActivity = () => {
      setIsVisible(true);
      resetTimer();
    };

    // Add event listeners
    document.addEventListener('mousemove', handleUserActivity);
    document.addEventListener('keypress', handleUserActivity);
    document.addEventListener('touchstart', handleUserActivity);
    document.addEventListener('click', handleUserActivity);

    // Initial setup to start the countdown
    resetTimer();

    // Cleanup event listeners
    return () => {
      document.removeEventListener('mousemove', handleUserActivity);
      document.removeEventListener('keypress', handleUserActivity);
      document.removeEventListener('touchstart', handleUserActivity);
      document.removeEventListener('click', handleUserActivity);
      clearTimeout(timeoutId);
    };
  }, []);

    const dots = [];
    for (let i = 0; i < images.length; i++) {
      dots.push(<div className='gallery-dots' key={i}></div>)
    }

    useEffect(() => {
      const divs = document.querySelectorAll('.gallery-dots');

      divs.forEach((div, index) => {
        if (index === currImageIdx) {
          div.style.transition = 'background-color 0.5s ease-in-out';
          div.style.backgroundColor = 'white'; // Highlighted color
        } else {
          div.style.transition = 'background-color 0.5s ease-in-out';
          div.style.backgroundColor = ''; // Standard color
        }
      });
    }, [currImageIdx]);

    const scrollNext = () => {
      const scrollContainer = scrollContainerRef.current;
      const scrollWidth = scrollContainer.scrollWidth;
      const containerWidth = scrollContainer.clientWidth;
  
      const newPosition = scrollPosition + containerWidth;
      if (newPosition < scrollWidth && currImageIdx < images.length-1) {
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
        {/* <div className='captions'>{captions[currImageIdx]}</div> */}
        <div className='gallery-arrow-left-button' onClick={scrollPrev}>{isVisible && "<"}</div>
        <div className='gallery-arrow-right-button' onClick={scrollNext}>{isVisible && ">"}</div>
    </div>
        <div className='dots-container'>{dots}</div>
    </div>
  )
}

export default Gallery