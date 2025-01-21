import React from 'react';
import Header from './Header';
import bioPageImg from './Assets/2023.field.trip.2.jpg';
import Footer from './Footer';
import capImg from './Assets/teacher-svgrepo-com (1).svg';
import travelImg from './Assets/travel-svgrepo-com.svg';
import bookImg from './Assets/books-stack-of-three-svgrepo-com.svg';
import tvImg from './Assets/flatscreen-tv-svgrepo-com.svg';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react'

export default function BiographyPage() {

  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0)
  }, [pathname]);


  return (
    <>
      <Header></Header>
      <div className="biography-page-content-wrapper">
        <div className="biography-page-content-container">
          {/* <h1 className="biography-page-header-text">
            Biography
          </h1> */}

          <div className="biography-page-row-container">
          
            <img src={bioPageImg} className="biography-page-img-styles"></img>

            <div className="biography-page-description-container">
              <h1>Bringing The Joy And Wonder of Public History</h1>
              <h1>Connecting People Through History</h1>
              <p>
                Theodore Karamanski is a Professor of History and Public History Director at Loyola
                University Chicago, where he has taught for over three decades. He founded Loyola's
                Public History Program, the first of its kind in the Midwest, and served as its
                director for several terms. Karamanski is a founding director and past president of
                the National Council on Public History (NCPH) and has received multiple honors,
                including the Frederick Jackson Turner Award and the Herbert Feis Award for
                contributions to public history. He has also been named Graduate Faculty Member of
                the Year and Faculty Member of the Year at Loyola University Chicago. Karamanski is
                a prolific author in American Indian, Civil War, and nineteenth-century American
                history, with numerous books and articles to his name. His work has earned
                recognition, including awards from the Illinois State Historical Society and Choice.
                In addition to his academic work, Karamanski has had a distinguished career as a
                public historian, serving in various roles for the National Park Service, the United
                States Forest Service, and historical projects related to Native American history
                and preservation. He is an active member of multiple boards, including the Illinois
                Historic Sites Advisory Board and the Editorial Board of the Journal of the Illinois
                State Historical Society.
              </p>
            </div>
          </div>
        </div>

        <div className='biography-cards-content-container'> 
        <div className="biography-cards-container">
          <div className="biography-card">
            25+ Years Teaching Experience
            <img src={capImg}></img>
          </div>
          <div className="biography-card">
            Traveling Public Historian & Speaker
            <img src={travelImg}></img>
          </div>
          <div className="biography-card">
            Author of 12 Historical Books
            <img src={bookImg}></img>
          </div>
          <div className="biography-card">
            TV Appearances on the History Channel
            <img src={tvImg}></img>
          </div>
        </div>
        </div>



        <div className="bio-page-closing-quote-container">
          <p>
            <i>
              "My goal is to connect people through the diverse stories of history, bringing the
              past to life in a way that enlightens and inspires. I strive to share the wonder and
              mystery of history with the world, creating a deeper understanding of our shared
              heritage. Through my work, I aim to bridge the gaps between cultures and generations,
              creating a more connected and informed society."
            </i>

            <br></br>

            <i>
              <em>
                <b>- Ted Karamanski</b>
              </em>
            </i>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}


