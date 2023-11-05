import React, { useContext, useEffect } from 'react'
import { Context } from '../App'

import Gallery from '../components/Gallery'


const GalleryPage = () => {


  return (
    <div className='gallery-page-container'>

        <Gallery />

    </div>
  )
}

export default GalleryPage