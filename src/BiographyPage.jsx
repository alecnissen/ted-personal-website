import React from 'react';
import Header from './Header';
import bioPageImg from './Assets/2023.field.trip.2.jpg';
import Footer from "./Footer"

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
            Card 1
          </div>
          <div className='biography-card'> 
            Card 1
          </div>
          <div className='biography-card'> 
            Card 1
          </div>
          <div className='biography-card'> 
            Card 1
          </div>
        </div>




      </div>
      <Footer></Footer>
    </>
  );
}
