import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Contact() {
  return (
    <> 
    <Header></Header>
    <div className='contact-us-content-wrapper'>
      <h1>Connect With Me!</h1>


    <form className='contact-us-form' name='contact-form' netlify> 
      
        <div className='fname-lname-email-container'> 
            <div className='fname-container'>
                <label>First Name *</label>
                <input type='text'></input>
            </div>
            <div className='lname-container'>
                <label>Last Name *</label>
                <input type='text'></input>
            </div>

            <div className='email-container'> 
            <label>E-Mail *</label>
            <input type='email'></input>
            </div>

            
        </div>


        <div className='phone-container-date-time-container'>

            <div className='phone-container'>
            <label>Phone Number *</label>
            <input type='phone'></input>
            </div>


          <div className='event-date-container'> 
            <label>Event Date *</label> 
            <input type='text'></input>
          </div>

          <div className='event-time-container'> 
            <label>Event Time *</label>
            <input type='text'></input>
          </div>



        </div> 

        


        <div className='hours-venue-name-address-wrapper'>
        <div className='hours-needed-wrapper'>
          <div className='hours-needed-container'> 
          <label>Hours Needed *</label>
          <input type='text'></input>

          </div>
        </div>

        <div className='venue-name-wrapper'>
          <div className='venue-name-container'> 
          <label>Venue Name *</label>
          <input type='text'></input>
          </div>
        </div>


      
          <div className='venue-address-container'> 
            <label>Venue Address *</label>
            <input type='text'></input>
          </div>


        </div>



    <div className='message-wrapper'>
      <div className='message-container'>
        <label>Your Message</label>
        <textarea></textarea>
      </div>

    <div className='submit-btn-container'>
    <button type='submit'>Submit</button>
    </div>

    </div>


    </form>



    </div>
    <Footer></Footer>
    </>
  )
}
