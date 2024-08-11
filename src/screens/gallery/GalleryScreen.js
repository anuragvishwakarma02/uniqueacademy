import React from 'react'
import Carousels from '../../component/Carousel'
export default function GalleryScreen() {
  return (
    <>
      <Carousels axis='horizontal' infiniteLoop={true} autoPlay={true} interval={'2000'} transitionTime={'1000'} showThumbs={false} />
      <Carousels axis='horizontal' infiniteLoop={true} autoPlay={true} interval={'2000'} transitionTime={'1000'} showThumbs={false} />
    </>
  )
}
