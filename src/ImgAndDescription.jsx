import React from 'react';
import tedImg from './Assets/Viking.Karamanski.Pic.2.jpeg';

export default function ImgAndDescription() {
  return (
    <div className="img-description-content-wrapper">
      <img src={tedImg}></img>

      <div className="title-description-container">
        <h1>Professor Ted Karamanski</h1>
        <h3>
          <em>Public History Director, Loyola University Chicag</em>o
        </h3>

        <div className='attributes-container'>
          <h4>Historian</h4>
          <h4>Author</h4>
          <h4>Speaker</h4>
          <h4>Outdoorsman</h4>
        </div>

        <div className="description-container">
          <p>
            Theodore J. Karamanski is Professor of Public History at Loyola University. He is author
            of ten books and numerous articles related to history, archaeology, historic
            preservation, and maritime history. He has been a heritage consultant for the USA
            National Park Service, the BBC, The History Channel, Travel Channel, Weather Channel,
            and National Geographic Magazine. His work has been featured in numerous international
            outlets including the New York Times and Newsweek. He has twice been named teacher of
            the year at Loyola University and has received a lifetime achievement award from the
            American Historical Association. Dr. Karamanski has led student and adult tour groups in
            Vietnam, Western Europe, and Eastern Europe. He is a passionate outdoorsman active in
            hiking, biking, canoeing, and mountain climbing. As a public historian Dr. Karamanski
            frequently speaks to general adult audiences, and he enjoys sharing the past with
            interested individuals.
          </p>
        </div>

        <div className='description-contact-me-btn-container'>
          <button>Contact Me</button>
        </div>


      </div>
    </div>
  );
}
