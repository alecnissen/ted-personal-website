import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from './Assets/prof-ted-lecture-photo.png';
import img2 from './Assets/prof-ted-lecture-photo-2.png';
import img3 from './Assets/prof-ted-lecture-photo-3.png';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function LatestNews() {
  return (
    <> 
    <div className='latest-news-content-wrapper'>
      <h1>Latest News</h1>



      <div className='news-container'> 
       
       <div className='news-content-container'>


        <ul> 
       <li> <a href='https://www.historians.org/perspectives-article/awards-prizes-and-honors-to-be-conferred-at-the-135th-annual-meeting-december-2021/' target='_blank'>Awarded Herbert Feis Award in Public History (2021)</a> </li>
        <li><a href='https://ncph.org/history-at-work/reflecting-on-the-founders-award/' target='_blank'>Winner of the Founders Award (2021)</a></li>
        <li><a href='https://classicchicagomagazine.com/celebrating-chicago-the-queen-of-the-lakes/' target='_blank'>Celebrating Chicago, the Queen of the Lakes (2021)</a></li>
        <li><a href='https://jobs.luc.edu/history/news/2019stories/archive/proftheodorekaramanskihonoredwithlifetimeachievementaward.shtml' target='_blank'>Prof. Theodore Karamanski Honored with Lifetime Achievement Award (2019)</a></li>
        </ul>
        
        
        </div>
      
      </div>




    </div>
    </>
  )
}
