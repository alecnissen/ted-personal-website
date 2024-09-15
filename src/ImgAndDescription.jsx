import React from 'react'
import tedImg from './Assets/Viking.Karamanski.Pic.2.jpeg'

export default function ImgAndDescription() {
  return (
    <div className='img-description-content-wrapper'>
      <img src={tedImg}></img>

    <div className='title-description-container'>
        <h1>Professor Ted Karamanski</h1>
        <h3><em>Public History Director, Loyola University Chicag</em>o</h3>
    
    
        <div className='expertise-areas-container'>
            <h4>American Indian History</h4>
        </div>
    
    </div>

    </div>
  )
}
