import React from 'react'
import Header from './Header'
import Footer from './Footer'
import tedImg1 from './Assets/Northern.Quebec.1981.jpg'
import tedImg2 from './Assets/Salmon.Headwaters.Yukon.River.1981.jpg'
import tedImg3 from './Assets/Ted & Glenn.Yukon.River.1981 (1).jpg'
import tedImg4 from './Assets/Public.Hist.Maritime.Museum.jpg'
import tedImg5 from './Assets/aebe1d08-8741-46ba-85a7-201ba8781dd8.jpg'
import tedImg6 from './Assets/Cascades Climb.jpg'
import tedImg7 from './Assets/New_Karamanski_picture1 (2).jpg'
import tedImg8 from './Assets/Image-1.jpeg'
import tedImg9 from './Assets/IMG_0615.jpeg'
import tedImg10 from './Assets/IMG_3217.jpeg'
import tedImg11 from './Assets/Karamanski.WTTW.Interview. 2018.png'
import tedImg12 from './Assets/Public.Hist.Public.Program.jpg'
import Carousel from 'react-bootstrap/Carousel';


export default function GalleryPage() {
  return (
    <> 
    <Header></Header>
    <div className='gallery-page-content-wrapper'>


    <Carousel className='gallery-img-slider'>
      <Carousel.Item>
      <img src={tedImg1}></img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={tedImg2}></img>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={tedImg3}></img>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


      
        {/* <div className='gallery-page-img-container-1'> 
            
            <img src={tedImg1}></img>
            <img src={tedImg2}></img>
            <img src={tedImg6}></img>
        </div>

        <div className='gallery-page-img-container-2'> 
            
            <img src={tedImg5}></img>
            <img src={tedImg8}></img>
            <img src={tedImg9}></img>
        </div>

        <div className='gallery-page-img-container-3'> 
        <img src={tedImg10}></img>
        <img src={tedImg11}></img>
        <img src={tedImg12}></img>
        </div> */}




    </div>

<Footer></Footer>
    </>
  )
}
