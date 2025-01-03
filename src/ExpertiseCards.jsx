import React from 'react'
import indianSvg from './Assets/indian-1-svgrepo-com.svg';
import civilWarImg from './Assets/lincoln-2-svgrepo-com.svg';
import militaryImg from './Assets/military-medal-svgrepo-com.svg';
import vikingImg from './Assets/viking-svgrepo-com.svg';
import anchorImg from './Assets/boat-anchor-svgrepo-com (1).svg';
import publicHistoryImg from './Assets/library-book-svgrepo-com.svg';
import environmentIcon from './Assets/planet-earth-world-earth-svgrepo-com.svg'
import canadianHistoryIcon from './Assets/maple-leaf-svgrepo-com.svg';

export default function ExpertiseCards() {
  return (
    <div className='expertise-cards-content-wrapper'>
     

            <div className='areas-of-expertise-header-container'>
            <h1>Areas Of Expertise</h1>
            </div>


        <div className='expertise-cards-container'>




        <div className='expertise-card'>
                <h1>Maritime History</h1>
                
                <div className='expertise-img-container'>
                <img src={anchorImg}></img>
                </div>

        </div>

        <div className='expertise-card'>
                <h1>Public History</h1>
                
                <div className='expertise-img-container'>
                <img src={publicHistoryImg}></img>
                </div>

        </div>

            <div className='expertise-card'>
                <h1>Indian History</h1>
                
                <div className='expertise-img-container'>
                <img src={indianSvg}></img>
                </div>

            </div>

            <div className='expertise-card'>
                <h1>Civil War History</h1>
                
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
                <h1>Viking History</h1>
                
                <div className='expertise-img-container'>
                <img src={vikingImg}></img>
                </div>

            </div>

            <div className='expertise-card'>
                <h1>Canadian History</h1>
                
                <div className='expertise-img-container'>
                <img src={canadianHistoryIcon}></img>
                </div>

            </div>

            <div className='expertise-card'>
                <h1>Environment History</h1>
                
                <div className='expertise-img-container'>
                <img src={environmentIcon}></img>
                </div>

            </div>



        </div>


    </div>
  )
}
