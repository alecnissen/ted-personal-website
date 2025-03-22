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
      <img src={tedImg1} alt='Image of Ted in Northern Ontario Canada in 1980'></img>
        <Carousel.Caption>
          
          <strong className='img-description-text'> <em>Northern Ontario Canada (1980)</em> </strong>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={tedImg2} alt='Image of Ted fishing in Northern Ontario Canada in 1980'></img>
        <Carousel.Caption>
        <strong className='img-description-text'> <em>Northern Ontario Canada (1980)</em> </strong>
        </Carousel.Caption>
      </Carousel.Item>






      <Carousel.Item>
      <img src={tedImg15} alt='Image of Ted boating in Northern Ontario Canada in 1980'></img>
        <Carousel.Caption>
         
        <strong className='img-description-text'> <em>Northern Ontario Canada (1980)</em> </strong>
        </Carousel.Caption>
      </Carousel.Item>




      <Carousel.Item>
      <img src={tedImg3} alt='Image of Ted and friend in Yukon River in 1981'></img>
        <Carousel.Caption>
          
        <strong className='img-description-text'> <em>Yukon River (1981)</em> </strong>
        </Carousel.Caption>
      </Carousel.Item>






      <Carousel.Item>
      <img src={tedImg6} alt='Image of Ted and friends at the summit of Mount Shuksan Climb in 2004'></img>
        <Carousel.Caption>
        
        <strong className='img-description-text'> <em>Mount Shuksan Climb (2004)</em> </strong>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={tedImg5} alt='Image of Ted and a couple of students at Loyola University Graduation in 2015' ></img>
        <Carousel.Caption>
        <strong className='img-description-text'> <em>Loyola University Graduation (2015)</em> </strong>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={tedImg4} alt='Image of Ted after a lecture at the Chicago Maritime Museum'></img>
        <Carousel.Caption>
        <strong className='img-description-text'> <em>Lecture at Chicago Maritime Museum</em> </strong>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={tedImg9} alt='Image of Ted before a diving expedition'></img>
        <Carousel.Caption>
        <strong className='img-description-text'> <em>Diving Expedition</em> </strong>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={tedImg10} alt='Image of Ted with wife Eileen at Taj Mahal'></img>
        <Carousel.Caption>
        <strong className='img-description-text'> <em>Taj Mahal visit with wife Eileen</em> </strong>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={tedImg14} alt='Image of Ted with wife Eileen attending an Indian wedding in 2024'></img>
        <Carousel.Caption>
        <strong className='img-description-text'> <em>Attending An Indian Wedding (2024)</em> </strong>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={tedImg11} alt='Image of Ted being interviewed in Chicago for the company WTTW'></img>
        <Carousel.Caption>
        <strong className='img-description-text'> <em>WTTW Interview (2018)</em> </strong>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={tedImg12} alt='Image of Ted lecturing on Viking River Cruise'></img>
        <Carousel.Caption>
        <strong className='img-description-text'> <em>Lecture On Viking River Cruise</em> </strong>
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item>
      <img src={tedImg13} alt='Image of Ted lecturing at Loyola University Chicago'></img>
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
