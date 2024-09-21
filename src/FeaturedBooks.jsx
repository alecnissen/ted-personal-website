import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import book1Img from './Assets/ted-book-img-book1.png'

export default function FeaturedBooks() {
  return (
    <div className="featured-books-content-wrapper">
        <h1>Featured Books & Lectures</h1>
      <div className="featured-books-container">

        <Card className="featured-book-container">
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <img src={book1Img}></img>
          <Card.Body>
            {/* <Card.Title>Rally Round the Flag: Chicago and the Civil War</Card.Title> */}
            <h1>Rally Round the Flag: Chicago and the Civil War</h1>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </Card.Text> */}

            <p> 
            Some quick example text to build on the card title and make up the bulk of the card's
            content. 
            </p>
            
            <button>Find Book</button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
