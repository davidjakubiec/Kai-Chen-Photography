import React, { useContext, useEffect } from 'react'
import { Context } from '../App'

import Gallery from '../components/Gallery'


const GalleryPage = () => {


  return (
    <div>
        <div className='gallery-title' >Gallery</div>
        <Gallery />

    </div>
  )
}

export default GalleryPage