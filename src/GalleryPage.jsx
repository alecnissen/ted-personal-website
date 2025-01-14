import React from 'react'
import Header from './Header'
import tedImg1 from './Assets/Northern.Quebec.1981.jpg'
import tedImg2 from './Assets/Salmon.Headwaters.Yukon.River.1981.jpg'
import tedImg3 from './Assets/Ted & Glenn.Yukon.River.1981 (1).jpg'
import tedImg4 from './Assets/Public.Hist.Maritime.Museum.jpg'
import tedImg5 from './Assets/aebe1d08-8741-46ba-85a7-201ba8781dd8.jpg'
import tedImg6 from './Assets/Cascades Climb.jpg'

export default function GalleryPage() {
  return (
    <> 
    <Header></Header>
    <div className='gallery-page-content-wrapper'>
      
        <div className='gallery-page-img-container'> 
            
            <img src={tedImg1}></img>
            <img src={tedImg2}></img>
            <img src={tedImg3}></img>
            <img src={tedImg6}></img>
            {/* <img src={tedImg4}></img>
            <img src={tedImg5}></img> */}
        </div>


    </div>
    </>
  )
}
