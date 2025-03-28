import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react'
import tedImg from './Assets/Public.Hist.The.Thinker.jpg';
import { Helmet } from 'react-helmet-async';

export default function Publications() {

  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0)
  }, [pathname]);

  return (
    <> 

        <Helmet>
                <title>Theodore Karamanski's Offical Website Publications Page</title>
                <meta name="description" content="Explore the Publications page of Professor Emeritus Theodore Karamanski, traveling lecturer at Loyola University Chicago, featuring information and links to his books, articles, and book reviews." />
                <meta name="keywords" content="Professor Emeritus, Theodore Karamanski, Loyola University Chicago, Traveling Lecturer, Historian, Public Historian, Author of 12 Books, Books Written by Theodore Karamanski, Articles by Theodore Karamanski, Book Reviews by Theodore Karamanski, American History, Civil War History, Native American History, Nineteenth-Century History, Public History Publications, Historical Articles, Historical Research, History Books, History Lectures, History Speaker, Academic Author, History Scholar, History Educator, History Program Director, Historical Writing, Historical Reviews, National Council on Public History, NCPH, Historical Consultant, History Channel Appearances" />
                <meta property="og:title" content="Publications" />
                <meta property="og:description" content="Explore the Publications page of Professor Emeritus Theodore Karamanski, traveling lecturer at Loyola University Chicago, featuring information and links to his books, articles, and book reviews." />
                <meta property="og:image" content={tedImg} />
                <meta property="og:url" content="https://tedkaramanski.com/Publications" />
            </Helmet>



    <Header></Header>
    <div className='publications-page-content-wrapper'>
      

      <h1 className='books-header-text-container'>Books</h1>

      <div className='publications-page-book-container'> 

      <Card className="publications-card">
          
          <Card.Body id="publications-card-body">
            <h1>Fur Trade and Exploration: The Opening of the Far Northwest (Book)</h1>

        

            <div className='publications-button-container'> 
            <button><a href='https://ecommons.luc.edu/facultybooks/37/' target='_blank'>Learn More</a></button>
            </div>

          </Card.Body>
        </Card>

        <Card className="publications-card">
          
          <Card.Body id="publications-card-body">
            <h1>One Hundred Years: A History of Roofing in America (Book)</h1>

        

            <div className='publications-button-container'> 
            <button><a href='https://ecommons.luc.edu/facultybooks/38/' target='_blank'>Learn More</a></button>
            </div>

          </Card.Body>
        </Card>

        <Card className="publications-card">
         
         <Card.Body id="publications-card-body">
           <h1>Deep Woods Frontier: A History of Logging in Northern Michigan (Book)</h1>

       

           <div className='publications-button-container'> 
           <button><a href='https://ecommons.luc.edu/facultybooks/39/' target='_blank'>Learn More</a></button>
           </div>

         </Card.Body>
       </Card>

       <Card className="publications-card">
          
          <Card.Body id="publications-card-body">
            <h1>Schooner Passage: Sailing Ships and the Lake Michigan Frontier (Book)</h1>

            

            <div className='publications-button-container'> 
            <button><a href='https://ecommons.luc.edu/facultybooks/40/' target='_blank'>Learn More</a></button>
            </div>

          </Card.Body>
        </Card>

        <Card className="publications-card">
          <Card.Body id="publications-card-body">
            <h1>Maritime Chicago (Book)</h1>

        

            <div className='publications-button-container'> 
            <button><a href='https://ecommons.luc.edu/facultybooks/41/' target='_blank'>Learn More</a></button>
            </div>

          </Card.Body>
        </Card>


        <Card className="publications-card">
          
          <Card.Body id="publications-card-body">
            <h1>Rally 'round the Flag : Chicago and the Civil War (Book)</h1>

        

            <div className='publications-button-container'> 
            <button><a href='https://ecommons.luc.edu/facultybooks/220/' target='_blank'>Learn More</a></button>
            </div>

          </Card.Body>
        </Card>

        <Card className="publications-card">
          <Card.Body id="publications-card-body">
            <h1>Mastering the Inland Seas: How Lighthouses, Navigational Aids, and Harbors Transformed the Great Lakes and America (Book)</h1>

        

            <div className='publications-button-container'> 
            <button><a href='https://ecommons.luc.edu/facultybooks/219/' target='_blank'>Learn More</a></button>
            </div>

          </Card.Body>
        </Card>


        <Card className="publications-card">
          
          <Card.Body id="publications-card-body">
            <h1>Blackbird's Song:Andrew J. Blackbird and the Odawa People (Book)</h1>

        

            <div className='publications-button-container'> 
            <button><a href='https://ecommons.luc.edu/facultybooks/222/' target='_blank'>Learn More</a></button>
            </div>

          </Card.Body>
        </Card>




      </div>


      <h1 className='articles-header-text'>Articles</h1>

      <div className='articles-content-container'> 

      <Card className="publications-card">
          <Card.Body id="publications-card-body">
            <h1>A Catholic History of the Heartland: The Rise and Fall of Mid-America: A Historical Review (Article)</h1>

          

            <div className='publications-button-container'> 
            <button><a href='https://ecommons.luc.edu/history_facpubs/13/' target='_blank'>Learn More</a></button>
            </div>

          </Card.Body>
        </Card>


        <Card className="publications-card">
          
          <Card.Body id="publications-card-body">
            <h1>History, Memory, and Historic Districts in Chicago (Article)</h1>

            

            <div className='publications-button-container'> 
            <button><a href='https://ecommons.luc.edu/history_facpubs/10/' target='_blank'>Learn More</a></button>
            </div>

          </Card.Body>
        </Card>



        <Card className="publications-card">
          <Card.Body id="publications-card-body">
            <h1>Monuments to a Lost Nation (Article)</h1>

         

            <div className='publications-button-container'> 
            <button><a href='https://ecommons.luc.edu/history_facpubs/22/' target='_blank'>Learn More</a></button>
            </div>

          </Card.Body>
        </Card>


        <Card className="publications-card">
          <Card.Body id="publications-card-body">
            <h1>A Midwesterner's Reflections on Teaching Public History in China (Article)</h1>

         

            <div className='publications-button-container'> 
            <button><a href='https://ecommons.luc.edu/history_facpubs/70/' target='_blank'>Learn More</a></button>
            </div>

          </Card.Body>
        </Card>


        <Card className="publications-card">
          <Card.Body id="publications-card-body">
            <h1>The Beginning of Public History Ethics in the USA (Article)</h1>

        

            <div className='publications-button-container'> 
            <button><a href='https://ecommons.luc.edu/history_facpubs/72/' target='_blank'>Learn More</a></button>
            </div>

          </Card.Body>
        </Card>


        <Card className="publications-card">
          <Card.Body id="publications-card-body">
            <h1>What Price History: Politics, Commercialism, and Urban Preservation (Article)</h1>

        

            <div className='publications-button-container'> 
            <button><a href='https://ecommons.luc.edu/history_facpubs/69/' target='_blank'>Learn More</a></button>
            </div>

          </Card.Body>
        </Card>

        

        <Card className="publications-card">
          <Card.Body id="publications-card-body">
            <h1>State Citizenship As a Tool of Indian Persistence (Article)</h1>

        

            <div className='publications-button-container'> 
            <button><a href='https://ecommons.luc.edu/social_justice/17/' target='_blank'>Learn More</a></button>
            </div>

          </Card.Body>
        </Card>







      </div>

      <h1 className='book-reviews-header-text'>Book Reviews</h1>

      <div className='book-review-container'> 


      <Card className="publications-card">
          
          <Card.Body id="publications-card-body">
            <h1>Museums, Monuments, and National Parks: Toward a New Genealogy of Public History (Book Review)</h1>

          

            <div className='publications-button-container'> 
            <button><a href='https://ecommons.luc.edu/history_facpubs/7/' target='_blank'>Learn More</a></button>
            </div>

          </Card.Body>
        </Card>



        <Card className="publications-card">
          
          <Card.Body id="publications-card-body">
            <h1>Settler Colonial Strategies and Indigenous Resistance on the Great Lakes Lumber Frontier (Book Review)</h1>

            

            <div className='publications-button-container'> 
            <button><a href='https://ecommons.luc.edu/history_facpubs/61/' target='_blank'>Learn More</a></button>
            </div>

          </Card.Body>
        </Card>




      </div>







    </div>

    <Footer></Footer>
    
    </>
  )
}
