import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Card from 'react-bootstrap/Card';

export default function Publications() {
  return (
    <> 
    <Header></Header>
    <div className='publications-page-content-wrapper'>
      <h1 className='publications-header-text'>Publications & Lectures</h1>

        <div className='publications-page-content-container'> 
        <Card className="publications-card">
          {/* <img src={book1Img}></img> */}
          <Card.Body id="publications-card-body">
            <h1>Museums, Monuments, and National Parks: Toward a New Genealogy of Public History (Book Review)</h1>

            {/* <p>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p> */}

            <div className='publications-button-container'> 
            <button><a href='https://ecommons.luc.edu/history_facpubs/7/' target='_blank'>Find</a></button>
            </div>

          </Card.Body>
        </Card>

        <Card className="publications-card">
          {/* <img src={book1Img}></img> */}
          <Card.Body id="publications-card-body">
            <h1>History, Memory, and Historic Districts in Chicago (Article)</h1>

            {/* <p>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p> */}

            <div className='publications-button-container'> 
            <button><a href='https://ecommons.luc.edu/history_facpubs/10/' target='_blank'>Find</a></button>
            </div>

          </Card.Body>
        </Card>


        <Card className="publications-card">
          {/* <img src={book1Img}></img> */}
          <Card.Body id="publications-card-body">
            <h1>A Catholic History of the Heartland: The Rise and Fall of Mid-America: A Historical Review (Article)</h1>

            {/* <p>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p> */}

            <div className='publications-button-container'> 
            <button><a href='https://ecommons.luc.edu/history_facpubs/13/' target='_blank'>Find</a></button>
            </div>

          </Card.Body>
        </Card>


        <Card className="publications-card">
          {/* <img src={book1Img}></img> */}
          <Card.Body id="publications-card-body">
            <h1>Monuments to a Lost Nation (Article)</h1>

            {/* <p>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p> */}

            <div className='publications-button-container'> 
            <button><a href='https://ecommons.luc.edu/history_facpubs/22/' target='_blank'>Find</a></button>
            </div>

          </Card.Body>
        </Card>


        </div>

    </div>
    
    </>
  )
}
