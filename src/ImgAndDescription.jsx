import React from 'react';
import tedImg from './Assets/Public.Hist.The.Thinker.jpg';
import openBookImg from './Assets/open-book-svgrepo-com.svg';
import writingHandImg from './Assets/writing-hand-skin-1-svgrepo-com.svg';
import micImg from './Assets/microphone-svgrepo-com.svg';
import outdoorsImg from './Assets/camping-svgrepo-com.svg';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

export default function ImgAndDescription() {
  return (
    <div className="img-description-content-wrapper">
      <img src={tedImg} className="ted-img-styles"></img>



      <div className="title-description-container">
        <h1>Professor Ted Karamanski</h1>
        <h3>
          <em>Public History Director, Loyola University Chicago</em>
        </h3>

        <div className="attributes-container">
          <div className="historian-label-emoji-container">
            <img src={openBookImg} className="book-img-styles"></img>

            <h4>Historian</h4>
          </div>

          <div className="author-label-emoji-container">
            <img src={writingHandImg} className="author-img-styles"></img>
            <h4>Author</h4>
          </div>

          <div className="speaker-label-emoji-container">
            <img src={micImg} className="speaker-mic-img-styles"></img>
            <h4>Speaker</h4>
          </div>

          <div className="outdoors-label-emoji-container">
            <img src={outdoorsImg} className="outdoors-img-styles"></img>
            <h4>Outdoorsman</h4>
          </div>
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

        <div className="description-contact-me-btn-container">
          <NavLink to="/Contact">
          <button>Contact Me</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
