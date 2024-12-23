import React from 'react';
import Header from './Header';
import bioPageImg from './Assets/2023.field.trip.2.jpg';
import Footer from "./Footer"
import capImg from "./Assets/teacher-svgrepo-com (1).svg"
import travelImg from "./Assets/travel-svgrepo-com.svg"
import bookImg from "./Assets/books-stack-of-three-svgrepo-com.svg"
import tvImg from "./Assets/flatscreen-tv-svgrepo-com.svg"

export default function BiographyPage() {
  return (
    <>
      <Header></Header>
      <div className="biography-page-content-wrapper">
        
        <h1 className="biography-page-header-text">
          Biography - Connecting people through history
        </h1>
        <div className="biography-page-content-container">
          <img src={bioPageImg} className="biography-page-img-styles"></img>

          <div className="biography-page-description-container">
            <h1>Bringing The Joy And Wonder of Public History</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores voluptatum
              dignissimos reprehenderit repellat ullam sint, molestias nisi placeat soluta expedita
              ducimus cum perspiciatis blanditiis ab illum unde optio! Itaque, dignissimos. Quo
              possimus nam, veniam veritatis esse, sint recusandae odio odit architecto commodi ipsa
              obcaecati officiis ea similique mollitia nostrum rem vel laboriosam aliquam libero
              officia? Excepturi tenetur nihil iure quisquam. Voluptas ullam rem obcaecati,
              accusantium ipsam, non illum ex dolorem quos assumenda ut aliquid voluptate fugiat
              voluptatibus id incidunt laboriosam! Suscipit omnis recusandae quas veniam laboriosam
              quidem necessitatibus voluptate eveniet.
            </p>
          </div>
        </div>


        <div className='biography-cards-container'> 
          <div className='biography-card'> 
            25+ Years Teaching Experience
            <img src={capImg}></img>
          </div>
          <div className='biography-card'> 
          Traveling Public Historian & Speaker
          <img src={travelImg}></img>
          </div>
          <div className='biography-card'> 
            Author of 10 Historical Books 
            <img src={bookImg}></img>
          </div>
          <div className='biography-card'> 
            TV Apperances on the History Channel
            <img src={tvImg}></img>
          </div>
        </div>

        
        <div className='bio-page-closing-quote-container'> 
        <p><i>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam illum distinctio fugiat laborum commodi ipsa provident illo cupiditate temporibus iure aliquam repellat architecto, dolor nisi earum, molestiae porro id. Quos?
        Animi iure aliquid quaerat qui laborum vel architecto dolores commodi! Quo a vero nemo velit minima quasi, eaque officiis voluptatibus dicta porro ea explicabo iusto ipsum, ut ad tenetur enim!
        Eius optio omnis veritatis, asperiores ut magni similique, hic sed temporibus unde quasi a repudiandae? Dicta harum, illo amet quaerat ab eos dolore voluptates possimus itaque optio, numquam ratione quia.</i>
        
        <br></br>
        
        <i><em><b>- Ted Karamanski</b></em></i>
        </p>
        </div>


      </div>
      <Footer></Footer>
    </>
  );
}
