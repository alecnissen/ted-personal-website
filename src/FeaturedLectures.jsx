import React from 'react';
import img1 from './Assets/prof-ted-lecture-photo.png';
import img2 from './Assets/prof-ted-lecture-photo-2.png';

export default function FeaturedLectures() {
  return (
    <div className="featured-lectures-content-wrapper">
      <h1>Featured Lectures</h1>

      <div className="featured-lectures-video-container">
        <div className="featured-lecture-container">
          <a href="https://www.youtube.com/watch?v=PElhjHIbyd0" target="_blank">
            <h1>The Civil War as an Indian War</h1>
          </a>

          <img src={img1} className="lecture-img-1-styles"></img>
        </div>

        <div className="featured-lecture-container">
          <a href="https://www.youtube.com/watch?v=PElhjHIbyd0" target="_blank">
            <h1>Illinois, Chicago, and the Civil War</h1>
          </a>

          <img src={img2} className="lecture-img-2-styles"></img>
        </div>
      </div>
    </div>
  );
}
