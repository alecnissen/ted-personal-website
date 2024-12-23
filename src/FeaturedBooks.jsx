import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import book1Img from './Assets/ted-book-img-book1.png';
import book2Img from './Assets/ted-book-img-book2.png';
import book3Img from './Assets/ted-book-img-book3.png';
import book4Img from './Assets/ted-book-img-book4.png';

export default function FeaturedBooks() {
  return (
    <div className="featured-books-content-wrapper">
      <h1>Featured Books</h1>
      <div className="featured-books-container">
        <Card className="featured-book-container">
          <img src={book1Img}></img>
          <Card.Body id="book-card-body">
            <h1>Rally Round the Flag: Chicago and the Civil War</h1>

            {/* <p>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p> */}

            <button><a href='https://www.amazon.com/Rally-Round-Flag-Chicago-Civil/dp/0742551377' target='_blank'>Find Book</a></button>
            
          </Card.Body>
        </Card>

        <Card className="featured-book-container">
          <img src={book2Img}></img>
          <Card.Body id="book-card-body">
            <h1>Deep Woods Frontier: A History of Logging in Northern Michigan</h1>

            {/* <p>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p> */}

            <button><a href='https://www.amazon.com/Deep-Woods-Frontier-Northern-Michigan/dp/081432049X' target='_blank'>Find Book</a></button>
            
          </Card.Body>
        </Card>

        <Card className="featured-book-container">
          <img src={book3Img}></img>
          <Card.Body id="book-card-body">
            <h1>Mastering The Inland Seas</h1>

            {/* <p>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p> */}

            <button><a href='https://www.amazon.com/Mastering-Inland-Seas-Lighthouses-Navigational/dp/0299326306' target='_blank'>Find Book</a></button>
          </Card.Body>
        </Card>

        <Card className="featured-book-container">
          <img src={book4Img}></img>
          <Card.Body id="book-card-body">
            <h1>Schooner Passage: Sailing Ships and the Lake Michigan Frontier</h1>

            {/* <p>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p> */}

            <button><a href='https://www.amazon.com/Schooner-Passage-Sailing-Michigan-Frontier/dp/081432911X/ref=sr_1_1?crid=VTO4YIFTVSE8&dib=eyJ2IjoiMSJ9.7hK895d-GZqe6J5hKGlQlg.5jfbCiJKv1z01gaQVtObhKR731nazfjg1ALKLUweFKo&dib_tag=se&keywords=Schooner+Passage%3A+Sailing+Ships+and+the+Lake+Michigan+Frontier&qid=1734034862&s=books&sprefix=schooner+passage+sailing+ships+and+the+lake+michigan+frontier%2Cstripbooks%2C127&sr=1-1' target='_blank'>Find Book</a></button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
