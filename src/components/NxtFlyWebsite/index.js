import {Component} from 'react'
import{BiMenu,} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {BsFacebook,BsInstagram,BsGithub} from 'react-icons/bs'
import {TiSocialTwitterCircular} from 'react-icons/ti'
import Popup from 'reactjs-popup'
import './index.css'

class NxtFly extends Component{

  state = {locationInput:'', noOfGuestsInput : '', arrivalInput:'', leavingInput:'', fullName:'', emailInput:'',textareaInput:'', signUpEmail:'' }

    onChangeLocation = event => {
      this.setState({locationInput : event.target.value})
    }

    onChangeNoOfGuests = event => {
      this.setState({noOfGuestsInput : event.target.value})
    }

    onChangeArrival = event => {
      this.setState({arrivalInput : event.target.value})
    }
    onChangeLeaving = event => {
      this.setState({leavingInput : event.target.value})
    }
    onChangeFullName = event => {
      this.setState({fullName : event.target.value})
    }
    onChangeEmail = event => {
      this.setState({emailInput : event.target.value})
    }
    onChangeTextArea = event => {
      this.setState({textareaInput : event.target.value})
    }
    onChangeSignUpEmail = event => {
      this.setState({signUpEmail : event.target.value})
    }

    submitForm = event => {
      event.preventDefault()
      this.setState({locationInput:'',noOfGuestsInput:'',arrivalInput : '',leavingInput:''})
    }

    senMessage = event => {
      this.setState({fullName:'', emailInput:'', textareaInput:''})
    }

    signUpForDiscount = event => {
      this.setState({signUpEmail : ''})
    }

    render(){
      const {locationInput, noOfGuestsInput, arrivalInput, leavingInput, fullName, emailInput, signUpEmail, textareaInput} = this.state
        return(
            <div className="bg-container">
            <nav className="nav-container">
              <div className="logo-section">
                <h1 className="logo-heading mr-0">NXT</h1>
                <img
                  src="https://res.cloudinary.com/dwlbneeh4/image/upload/v1693557060/134847629-airplane-logo-template-vector-illustration-icon-design-plane-icon-vector_rxujkf.jpg"
                  className="logo"
                  alt='company-logo'
                />
                <h1 className="logo-heading ml-0">
                  FLY <span className="logo-span">Travels</span>
                </h1>
              </div>
              <div className='menu-section-sm'>
              <Popup
              modal
              trigger={
                <button type="button" className="humberger-button">
                  <BiMenu color='#1cbde6' size={30}/>
                </button>
                }>
     {close => (
       <div className='menu-section-small'>
         <ul>
         <li className="list-item">
                  <a href="#home" className="anchor-element">
                    Home
                  </a>
                </li>
                <li className="list-item">
                  <a href="#feature" className="anchor-element">
                    Feature
                  </a>
                </li>
                <li className="list-item">
                  <a href="#about" className="anchor-element">
                    About
                  </a>
                </li>
                <li className="list-item">
                  <a href="#gallery" className="anchor-element">
                    Gallery
                  </a>
                </li>
                <li className="list-item">
                  <a href="#review" className="anchor-element">
                    Review
                  </a>
                </li>
                <li className="list-item">
                  <a href="#contact" className="anchor-element">
                    Contact
                  </a>
                </li>  
         </ul>
         <button
           type="button"
           className="trigger-button"
           onClick={() => close()}
         >
           <AiOutlineClose size={20}/>
         </button>
       </div>
     )}
        </Popup>
              </div>
              <div className="menu-section-lg">
                <li className="list-item">
                  <a href="#home" className="anchor-element">
                    Home
                  </a>
                </li>
                <li className="list-item">
                  <a href="#feature" className="anchor-element">
                    Feature
                  </a>
                </li>
                <li className="list-item">
                  <a href="#about" className="anchor-element">
                    About
                  </a>
                </li>
                <li className="list-item">
                  <a href="#gallery" className="anchor-element">
                    Gallery
                  </a>
                </li>
                <li className="list-item">
                  <a href="#review" className="anchor-element">
                    Review
                  </a>
                </li>
                <li className="list-item">
                  <a href="#contact" className="anchor-element">
                    Contact
                  </a>
                </li>
              </div>
            </nav>
            <div>
              <div className="second-section">
                <div className="top-container" id="home">
                  <div className="quote-section ">
                    <h1 className="quote">
                      We wonder for distraction, but we travel for fullfilment
                    </h1>
                  </div>
                  <form className="search-container" onSubmit={this.submitForm}>
                    <h1 className="search-heading">Search Your Destination</h1>
                    <div className="input-section">
                      <label className="label-text" htmlFor="location">
                        Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        placeholder="place you want to visit"
                        className="input-element"
                        value={locationInput}
                        onChange = {this.onChangeLocation}
                      />
                    </div>
                    <div className="input-section">
                      <label className="label-text" htmlFor="peoplesCount">
                        Guest Members
                      </label>
                      <input
                        type="number"
                        placeholder="Enter how many people"
                        id="peoplesCount"
                        className="input-element"
                        value={noOfGuestsInput}
                        onChange = {this.onChangeNoOfGuests}
                      />
                    </div>
                    <div className="input-section">
                      <label className="label-text" htmlFor="arrival">
                        Arrival
                      </label>
                      <input type="date" id="arrival" className="input-element" value={arrivalInput}
                        onChange = {this.onChangeArrival}/>
                    </div>
                    <div className="input-section">
                      <label className="label-text" htmlFor="leaving">
                        Leaving
                      </label>
                      <input type="date" id="leaving" className="input-element" value={leavingInput}
                        onChange = {this.onChangeLeaving}/>
                    </div>
                    <button type="submit" className="submit-button">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <br />
            <div className="third-section" id="feature">
              <h1 className="locations-heading">
                <span className="span-heading">F</span>eatured
                <span className="span-heading">L</span>ocation
              </h1>
              <div className="location-images">
                <div className="location-card">
                  <div className="location-img-section">
                    <button className="discount-button">-35%</button>
                  </div>
                  <div className="location-details">
                    <p className="location-name">Bali</p>
                    <p className="location-text">
                      Bali, the famed Island of the Gods, with its varied
                      landscape of hills and mountains, rugged coastlines and
                      sandy beaches, lush rice terraces, and volcanic hillsides
                      all providing a picturesque backdrop to its colorful, deeply
                      spiritual, and unique culture stakes a serious claim to be
                      paradise on earth.
                    </p>
                    <img
                      src="https://res.cloudinary.com/dwlbneeh4/image/upload/v1693595542/four-half-star-rating-illustration-260nw-1383756248_wvluuo.webp"
                      alt="stars"
                      className="rating-stars"
                    />
                    <button className="checkout-btn" type="button">
                      Checkout!
                    </button>
                  </div>
                </div>
                <div className="middle-location-card">
                  <img
                    src="https://res.cloudinary.com/dwlbneeh4/image/upload/v1693588272/swiss_yrlihb.webp"
                    alt="switzerland"
                    className="location-img"
                  />
                  <div className="location-details">
                    <p className="location-name ml-3">Switzerland</p>
                    <p className="location-text-middle ml-3">
                      One of the most iconic features of Switzerland is its
                      majestic mountains. With the Swiss Alps covering more than
                      60% of the country, it's no surprise that its statuesque
                      mountains draw you in. The snow-capped peaks and rugged
                      terrain make for some of the world's most spectacular views
                      and climbs.
                    </p>
                    <img
                      src="https://res.cloudinary.com/dwlbneeh4/image/upload/v1693595542/four-half-star-rating-illustration-260nw-1383756248_wvluuo.webp"
                      alt="swiszerland"
                      className="rating-stars ml-3"
                    />
                    <button className="checkout-btn pl-3" type="button">
                      Checkout!
                    </button>
                  </div>
                </div>
                <div className="location-card">
                  <div className="location-third-section">
                    <button className="discount-button">-15%</button>
                  </div>
                  <div className="location-details">
                    <p className="location-name">Paris</p>
                    <p className="location-text">
                      With beauty and romance in each and every part of it, it is
                      not an exaggeration to tell that it is the most beautiful
                      city in the world. The landmarks of Paris, like the
                      celebrated Eiffel tower and the Louvre Museum, are more
                      familiar than any other in the world. Like all great cities,
                      Paris is rich and populous.
                    </p>
                    <img
                      src="https://res.cloudinary.com/dwlbneeh4/image/upload/v1693595542/four-half-star-rating-illustration-260nw-1383756248_wvluuo.webp"
                      alt="stars"
                      className="rating-stars"
                    />
                    <button className="checkout-btn" type="button">
                      Checkout!
                    </button>
                  </div>
                </div>
              </div>
              <hr className="horizontal-line" />
              <div className="about-section" id="about">
                <h1 className="locations-heading">
                  <span className="span-heading">A</span>bout
                  <span className="span-heading">U</span>s
                </h1>
                <div className="about-bottom-section">
                  <img
                    src="https://res.cloudinary.com/dwlbneeh4/image/upload/v1693634555/Screenshot_739_ug9wqs.png"
                    alt="tourists"
                    className="tourists"
                  />
                  <div className="about-description-section">
                    <h1 className="about-heading">Why Choose Us</h1>
                    <p className="about-description">
                      Travel is the main thing you purchase that makes you more
                      extravagant”. We, at ‘NXTFLY’, swear by this and put stock
                      in satisfying travel dreams that make you perpetually rich
                      constantly.We offer the best limits on our top-rated visit
                      bundles to clients who pick our viable administrations over
                      and over. How about we remind you indeed that we don’t
                      expect to be your visit and travel specialists; we endeavor
                      to be your vacation accomplices until the end of time. Read
                      our best travel agency bios for social media.
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <div className="gallery-container" id="gallery">
                <h1 className="locations-heading">
                  <span className="span-heading">G</span>allery
                </h1>
                <div className="gallery-items">
                  <img
                    src="https://res.cloudinary.com/dwlbneeh4/image/upload/v1693640773/Screenshot_755_dmslxf.png"
                    alt="gallaery-img"
                    className="gallery-image"
                  />
                  <img
                    src="https://res.cloudinary.com/dwlbneeh4/image/upload/v1693640773/Screenshot_754_akvqqx.png"
                    alt="gallaery-img"
                    className="gallery-image"
                  />
                  <img
                    src="https://res.cloudinary.com/dwlbneeh4/image/upload/v1693640773/Screenshot_756_ssgnyi.png"
                    alt="gallaery-img"
                    className="gallery-image"
                  />
                  <img
                    src="https://res.cloudinary.com/dwlbneeh4/image/upload/v1693640773/Screenshot_758_qvljqz.png"
                    alt="gallaery-img"
                    className="gallery-image"
                  />
                  <img
                    src="https://res.cloudinary.com/dwlbneeh4/image/upload/v1693640773/Screenshot_757_dwyave.png"
                    alt="gallaery-img"
                    className="gallery-image"
                  />
                  <img
                    src="https://res.cloudinary.com/dwlbneeh4/image/upload/v1693640773/Screenshot_759_zmggug.png"
                    alt="gallaery-img"
                    className="gallery-image"
                  />
                  <img
                    src="https://res.cloudinary.com/dwlbneeh4/image/upload/v1693640774/Screenshot_760_ylqhiy.png"
                    alt="gallaery-img"
                    className="gallery-image"
                  />
                  <img
                    src="https://res.cloudinary.com/dwlbneeh4/image/upload/v1693640775/Screenshot_763_zkl9mj.png"
                    alt="gallaery-img"
                    className="gallery-image"
                  />
                  <img
                    src="https://res.cloudinary.com/dwlbneeh4/image/upload/v1693640775/Screenshot_765_cn1klz.png"
                    alt="gallaery-img"
                    className="gallery-image"
                  />
                  <img
                    src="https://res.cloudinary.com/dwlbneeh4/image/upload/v1693640775/Screenshot_762_hsgwwe.png"
                    alt="gallaery-img"
                    className="gallery-image"
                  />
                  <img
                    src="https://res.cloudinary.com/dwlbneeh4/image/upload/v1693640775/Screenshot_761_en68m8.png"
                    alt="gallaery-img"
                    className="gallery-image"
                  />
                  <img
                    src="https://res.cloudinary.com/dwlbneeh4/image/upload/v1693640775/Screenshot_764_eue4wh.png"
                    alt="gallaery-img"
                    className="gallery-image"
                  />
                  <img
                    src="https://res.cloudinary.com/dwlbneeh4/image/upload/v1693640775/Screenshot_766_wgw7nn.png"
                    alt="gallaery-img"
                    className="gallery-image"
                  />
                  <img
                    src="https://res.cloudinary.com/dwlbneeh4/image/upload/v1693640776/Screenshot_767_lcrhcm.png"
                    alt="gallaery-img"
                    className="gallery-image"
                  />
                </div>
              </div>
              <div className="review-container" id="review">
                <h1 className="locations-heading">
                  <span className="span-heading">R</span>eviews
                </h1>
                <div className="reviews-section">
                  <div className="review-card">
                    <img
                      src="https://res.cloudinary.com/dwlbneeh4/image/upload/v1693642269/Screenshot_773_qlqora.png"
                      className="review-img"
                      alt="reviewImage"
                    />
                    <p className="location-name">Vineetha</p>
                    <p className="review-description">
                      Most trusted travel company ,I’ve really enjoyed the way
                      Harshadh bro from Nxtfly travels receives you and guides you
                      to the most beautiful places in Maldives ,Very reasonable
                      prices with packages compared to other travel agencies ,I’ll
                      definitely recommend Nxtfly travels not only for couples but
                      also for bachelors,families and Friends.
                    </p>
                    <img
                      src="https://res.cloudinary.com/dwlbneeh4/image/upload/v1693642775/Screenshot_777_hmnbx8.png"
                      alt="stars"
                      className="stars-rating"
                    />
                  </div>
                  <div className="review-card">
                    <img
                      src="https://res.cloudinary.com/dwlbneeh4/image/upload/v1693642282/Screenshot_774_c1ac2b.png"
                      className="review-img"
                      alt="reviewImage"
                    />
                    <p className="location-name">Siddarth</p>
                    <p className="review-description">
                      Hello All, I am Jagdeesh from Hyderabad, India. This was our
                      first vist to Maldives. It was a very beautiful and amazing
                      experience. This was all possible because of Nxtfly travels.
                      The day we landed until we returned, everything was very
                      well taken care, including transport and hotel and resort.
                      Thank you once again Harsha for the hospitality and
                      management in making our trip a wonderful experience.
                    </p>
                    <img
                      src="https://res.cloudinary.com/dwlbneeh4/image/upload/v1693595542/four-half-star-rating-illustration-260nw-1383756248_wvluuo.webp"
                      alt="stars"
                      className="stars-rating"
                    />
                  </div>
                  <div className="review-card">
                    <img
                      src="https://res.cloudinary.com/dwlbneeh4/image/upload/v1693643222/Screenshot_779_fuimep.png"
                      className="review-img"
                      alt="reviewImage"
                    />
                    <p className="location-name">Vibha</p>
                    <p className="review-description">
                      I have been into Maldives for 5days and Nxtfly travels
                      provided best stay, food and adventures games. This is the
                      best travel agency I have never seen before. Thanks to jyoha
                      travels 👌👌. Everyone should try ones.
                    </p>
                    <img
                      src="https://res.cloudinary.com/dwlbneeh4/image/upload/v1693642775/Screenshot_777_hmnbx8.png"
                      alt="stars"
                      className="stars-rating"
                    />
                  </div>
                </div>
              </div>
              <br />
              <div className="contact-container" id="contact">
                <h1 className="locations-heading">
                  <span className="span-heading">C</span>ontact
                  <span className="span-heading">U</span>s
                </h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.9050975509!2d78.24323253450851!3d17.412608641195543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1693722779769!5m2!1sen!2sin" title='maps' width="1700" height="250" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className="address-details-container">
                  <div className="address-details">
                    <div className="address-description-section">
                      <div className="address-desc">
                        <i class="fa-solid fa-house home-icon"></i>
                        <h1 className="address-heading">Address</h1>
                      </div>
                      <p className="address-text">Hyderabad</p>
                      <p className="address-text">Telangana</p>
                      <p className="address-text">India-500001</p>
                    </div>
                    <div className="address-description-section">
                      <div className="address-desc">
                        <i class="fa-solid fa-envelope home-icon"></i>
                        <h1 className="address-heading">Email</h1>
                      </div>
                      <p className="address-text">xyz@gmail.com</p>
                    </div>
                    <div className="address-description-section">
                      <div className="address-desc">
                        <i class="fa-solid fa-phone home-icon"></i>
                        <h1 className="address-heading">Phone</h1>
                      </div>
                      <p className="address-text">+12345000</p>
                    </div>
                  </div>
                  <div className="get-in-touch-container">
                    <h1 className="get-in-touch-heading">Get In Touch</h1>
                    <div className="get-in-section">
                      <input
                        type="text"
                        className="get-in-input-element"
                        placeholder="Full Name"
                        value={fullName}
                        onChange = {this.onChangeFullName}
                      />
                      <input
                        type="email"
                        className="get-in-input-element"
                        placeholder="Email"
                        value={emailInput}
                        onChange = {this.onChangeEmail}
                      />
                    </div>
                    <textarea
                      rows="16"
                      col="10"
                      className="textarea-section"
                      value={textareaInput}
                      onChange={this.onChangeTextArea}
                    ></textarea>
                    <button type="button" className="message-button" onClick = {this.senMessage}>
                      Message
                    </button>
                  </div>
                </div>
              </div>
              <div className='last-container'>
                <h1 className='signup-heading'>Sign Up for 25% Discount</h1>
                <div className='signup-input-section'>
                  <input type='email' placeholder='Email' className='signup-email' value={signUpEmail}
                        onChange = {this.onChangeSignUpEmail}/>
                  <button type= 'button' className='signup-button' onClick={this.signUpForDiscount}>Sign Up</button>
                </div>
                <hr className='horizontal-line'/>
                <div className='signup-icons'>
                <BsFacebook size={20} color='#ffffff' className='facebook-icon' />
                <TiSocialTwitterCircular size={30} color='#ffffff' className='twitter-icon'/>
                <BsInstagram size={20} color='#ffffff' className='facebook-icon'/>
                <BsGithub size={20} color='#ffffff' className='git-icon'/>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default NxtFly