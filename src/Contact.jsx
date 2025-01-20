import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Contact() {

  // const [isSubmitted, setIsSubmitted] = useState(false);

  // const handleSubmit = (e) => { 
  //   setIsSubmitted(true);
  // };


  return (
    <> 
    <Header></Header>
    <div className='contact-us-content-wrapper'>
      <h1>Connect With Me!</h1>







    <form className='contact-us-form' name='contact-form' method='POST'> 
    <input type="hidden" name="form-name" value="contact-form" /> 
      
        <div className='fname-lname-email-container'> 
            <div className='fname-container'>
                <label for='first-name-input'>First Name *</label>
                <input type='text' name='first-name' id='first-name-input'></input>
            </div>
            <div className='lname-container'>
                <label for='last-name-input'>Last Name *</label>
                <input type='text' name='last-name' id='last-name-input'></input>
            </div>

            <div className='email-container'> 
            <label for='email-input'>E-Mail *</label>
            <input type='email' name='email' id='email-input'></input>
            </div>

            
        </div>


        <div className='phone-container-date-time-container'>

            <div className='phone-container'>
            <label for='phone-number-input'>Phone Number *</label>
            <input type='phone' name='phone' id='phone-number-input'></input>
            </div>


          <div className='event-date-container'> 
            <label for='event-date-input'>Event Date *</label> 
            <input type='text' name='event-date' id='event-date-input'></input>
          </div>

          <div className='event-time-container'> 
            <label for='event-time-input'>Event Time *</label>
            <input type='text' name='event-time' id='event-time-input'></input>
          </div>



        </div> 

        


        <div className='hours-venue-name-address-wrapper'>
        <div className='hours-needed-wrapper'>
          <div className='hours-needed-container'> 
          <label for='hours-needed-input'>Hours Needed *</label>
          <input type='text' name='hours-needed' id='hours-needed-input'></input>

          </div>
        </div>

        <div className='venue-name-wrapper'>
          <div className='venue-name-container'> 
          <label for='venue-name-input'>Venue Name *</label>
          <input type='text' name='venue-name' id='venue-name-input'></input>
          </div>
        </div>


      
          <div className='venue-address-container'> 
            <label for='address-input'>Venue Address *</label>
            <input type='text' name='address' id='address-input'></input>
          </div>


        </div>



    <div className='message-wrapper'>
      <div className='message-container'>
        <label for='message-box'>Your Message</label>
        <textarea name='message' type='text' id='message-box'></textarea>
      </div>

    <div className='submit-btn-container'>
    <button type='submit'>Submit</button>
    </div>

    </div>

    {/* {isSubmitted && <p>Your form has been submitted successfully!</p>} */}
    </form>



    </div>
    <Footer></Footer>
    </>
  )
}
