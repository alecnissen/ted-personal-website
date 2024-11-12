import React from 'react'
import indianSvg from './Assets/indian-1-svgrepo-com.svg';
import civilWarImg from './Assets/lincoln-2-svgrepo-com.svg';
import militaryImg from './Assets/military-medal-svgrepo-com.svg';
import vikingImg from './Assets/viking-svgrepo-com.svg';

export default function ExpertiseCards() {
  return (
    <div className='expertise-cards-content-wrapper'>
     

            <div className='areas-of-expertise-header-container'>
            <h1>Areas Of Expertise</h1>
            </div>


        <div className='expertise-cards-container'>


            <div className='expertise-card'>
                <h1>Indian History</h1>
                
                <div className='expertise-img-container'>
                <img src={indianSvg}></img>
                </div>

            </div>

            <div className='expertise-card'>
                <h1>Civil War</h1>
                
                <div className='expertise-img-container'>
                <img src={civilWarImg}></img>
                </div>

            </div>

            <div className='expertise-card'>
                <h1>Military History</h1>
                
                <div className='expertise-img-container'>
                <img src={militaryImg}></img>
                </div>

            </div>

            <div className='expertise-card'>
                <h1>Vikings</h1>
                
                <div className='expertise-img-container'>
                <img src={vikingImg}></img>
                </div>

            </div>



        </div>


    </div>
  )
}
