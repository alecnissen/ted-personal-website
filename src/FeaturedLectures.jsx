import React from 'react';
import img1 from './Assets/prof-ted-lecture-photo.png';
import img2 from './Assets/prof-ted-lecture-photo-2.png';
import img3 from './Assets/prof-ted-lecture-photo-3.png';
import img4 from './Assets/prof-ted-lecture-photo-4.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardBody } from 'react-bootstrap';

export default function FeaturedLectures() {
  return (
    <div className="featured-lectures-content-wrapper">
      <h1>Featured Lectures</h1>

      <div className="featured-lectures-video-container">


        

        <Card className="featured-lecture-container">
        <a href="https://www.youtube.com/watch?v=PElhjHIbyd0" target="_blank">
            <h1>The Civil War as an Indian War</h1>
          </a>
          <img src={img1} className="lecture-img-2-styles" alt='Image of Ted speaking on the topic of: The Civil War as an Indian War'></img>

          <Card.Body>
          

            <a href="https://www.youtube.com/watch?v=PElhjHIbyd0" target="_blank">
            <button className='watch-lecture-btn-styles'>Watch Lecture</button>
            </a>

          </Card.Body>
        </Card>


        <Card className="featured-lecture-container">
        <a href="https://www.youtube.com/watch?v=qh3JLgjEKkk&t=148s" target="_blank">
            <h1>Illinois, Chicago, and the Civil War</h1>
          </a>
          <img src={img2} className="lecture-img-2-styles" alt='Image of Ted speaking on the topic of: Illinois, Chicago, and the Civil War'></img>

          <Card.Body>
            

            <a href="https://www.youtube.com/watch?v=qh3JLgjEKkk&t=148s" target="_blank">
            <button className='watch-lecture-btn-styles'>Watch Lecture</button>
            </a>

          </Card.Body>
        </Card>


        <Card className="featured-lecture-container">
          <a href="https://www.youtube.com/watch?v=_7IKl0tDXEA&t=161s" target="_blank">
            <h1>Calumet: The Region & The Anthropocene</h1>
          </a>
          <img src={img3} className="lecture-img-2-styles" alt='Image of Ted speaking on the topic of: Calumet: The Region & The Anthropocene'></img>

          <Card.Body>
            

            <a href="https://www.youtube.com/watch?v=_7IKl0tDXEA&t=161s" target="_blank">
            <button className='watch-lecture-btn-styles'>Watch Lecture</button>
            </a>

          </Card.Body>
        </Card>

        
      </div>
    </div>
  );
}
