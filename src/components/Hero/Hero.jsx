import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import heroImage from '../../assets/hero_image.png'
import heroImageBack from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='left-h'>
        <Header />
        <div className='the__best__ad'>
          <div></div>
          <span>the best fitness club in the town</span>
        </div>
        {/* hero heading */}
        <div className='hero-text'>
          <div>
            <span className='stroke__text'>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape your body to your ideal shape
              and to achieve your goals.
            </span>
          </div>
        </div>
        {/* figures */}
        <div className='figures'>
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            {' '}
            <span>+900</span>
            <span>members joined</span>
          </div>
          <div>
            {' '}
            <span>+100</span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className='hero__buttons'>
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>
        </div>
      </div>
      <div className='right-h'>
        <button className='btn'>Join Now</button>
        <div className='heart__rate'>
          <img src={Heart} alt='heart' />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        {/* hero images */}

        <img src={heroImage} alt='heroImage' className='hero-image' />
        <img
          src={heroImageBack}
          alt='heroImageBack'
          className='hero-image-back'
        />

        {/* calories */}

        <div className='calories'>
          <img src={Calories} alt='Calories' />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
