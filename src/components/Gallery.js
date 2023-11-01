import React from 'react'
import image1 from '../../assets/bigsur.jpg'
import image2 from '../../assets/maui.jpeg'
import image3 from '../../assets/sandiego.jpg'
import image4 from '../../assets/yosemite.jpg'

const Gallery = () => {
    const images = [image1, image2, image3, image4];
  return (
    <div id='gallery-container'>
        {images.map((el, idx)=> (
            <img className="gallery-images" key={idx} src={el} alt={`image ` + idx} />
        ))}
    </div>
  )
}

export default Gallery