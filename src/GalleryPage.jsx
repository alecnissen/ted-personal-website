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
import tedImg13 from './Assets/2022.Lincoln.Karamanski (1).png'
import tedImg14 from './Assets/IMG_8855.jpeg'
import tedImg15 from './Assets/Northern Ontario 1980.jpg'
import Carousel from 'react-bootstrap/Carousel';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react'
import tedImg from './Assets/Public.Hist.The.Thinker.jpg';
import { Helmet } from 'react-helmet-async';



export default function GalleryPage() {

  const { pathname } = useLocation();

   useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

  return (
    <> 

             <Helmet>
                  <title>Theodore Karamanski's Offical Gallery Page</title>
                  <meta name="description" content="Explore the Gallery page of Professor Emeritus Theodore Karamanski from Loyola University Chicago, featuring photos of Theodore, his family, and his travels around the world." />
                  <meta name="keywords" content="Theodore Karamanski, Professor Emeritus, Loyola University Chicago, Theodore Karamanski Gallery, Family Photos, Travel Photos, World Travel, Historical Traveler, Professor and Traveler, Academic Historian, Personal Photos, Travel Photography, Gallery of Theodore Karamanski, Theodore Karamanski Family, World Explorer, Historical Scholar, Photographs of Theodore Karamanski, Theodore Karamanski Travels" />
                  <meta property="og:title" content="GalleryPage" />
                  <meta property="og:description" content="Explore the Gallery page of Professor Emeritus Theodore Karamanski from Loyola University Chicago, featuring photos of Theodore, his family, and his travels around the world." />
                  <meta property="og:image" content={tedImg} />
                  <meta property="og:url" content="https://tedkaramanski.com/GalleryPage" />
              </Helmet>

    <Header></Header>
    <div className='gallery-page-content-wrapper'>


    <Carousel className='gallery-img-slider'>
      <Carousel.Item>
      <img src={tedImg1}></img>
        <Carousel.Caption>
          
          <strong className='img-description-text'> <em>Northern Ontario Canada (1980)</em> </strong>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={tedImg2}></img>
        <Carousel.Caption>
        <strong className='img-description-text'> <em>Northern Ontario Canada (1980)</em> </strong>
        </Carousel.Caption>
      </Carousel.Item>






      <Carousel.Item>
      <img src={tedImg15}></img>
        <Carousel.Caption>
         
        <strong className='img-description-text'> <em>Northern Ontario Canada (1980)</em> </strong>
        </Carousel.Caption>
      </Carousel.Item>




      <Carousel.Item>
      <img src={tedImg3}></img>
        <Carousel.Caption>
          
        <strong className='img-description-text'> <em>Yukon River (1981)</em> </strong>
        </Carousel.Caption>
      </Carousel.Item>






      <Carousel.Item>
      <img src={tedImg6}></img>
        <Carousel.Caption>
        
        <strong className='img-description-text'> <em>Mount Shuksan Climb (2004)</em> </strong>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={tedImg5}></img>
        <Carousel.Caption>
        <strong className='img-description-text'> <em>Loyola University Graduation (2015)</em> </strong>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={tedImg4}></img>
        <Carousel.Caption>
        <strong className='img-description-text'> <em>Lecture at Chicago Maritime Museum</em> </strong>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={tedImg9}></img>
        <Carousel.Caption>
        <strong className='img-description-text'> <em>Diving Expedition</em> </strong>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={tedImg10}></img>
        <Carousel.Caption>
        <strong className='img-description-text'> <em>Taj Mahal visit with wife Eileen</em> </strong>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={tedImg14}></img>
        <Carousel.Caption>
        <strong className='img-description-text'> <em>Attending An Indian Wedding (2024)</em> </strong>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={tedImg11}></img>
        <Carousel.Caption>
        <strong className='img-description-text'> <em>WTTW Interview (2018)</em> </strong>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={tedImg12}></img>
        <Carousel.Caption>
        <strong className='img-description-text'> <em>Lecture On Viking River Cruise</em> </strong>
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item>
      <img src={tedImg13}></img>
        <Carousel.Caption>
        <strong className='img-description-text'> <em>Lecture At Loyola University Chicago</em> </strong>
        </Carousel.Caption>
      </Carousel.Item>



    </Carousel>





    </div>

<Footer></Footer>
    </>
  )
}
