import React from 'react';
import './scss/hero.scss';

function Hero() {
  return (
    <section className='hero'>
      <img className="hero__logo" src='/images/hero/Group 20 2.png' alt='' />
      <div className='hero__title'>
        <h1>NINE HUSTLE</h1>
        <h1>F<span className='hero__title__o'><span className='hero__title__o__inner'></span></span>R YOUR</h1>
        <h1 className='hero__title__rotate'>
          <span id='needs'>NEEDS</span>
          <span id='career'>CAREER</span>
          <span id='experience'>EXPERIENCE</span>
          <span id='future'>FUTURE!</span>
        </h1>
      </div>
      <div className="hero__images">
        <img data-image-id="1" src="/images/hero/Rectangle 1.png" alt="" />
        <img data-image-id="2" src="/images/hero/Rectangle 3 (2).png" alt="" />
        <img data-image-id="3" src="/images/hero/Rectangle 3 (1).png" alt="" />
        <img data-image-id="4" src="/images/hero/Rectangle 3.png" alt="" />
        <img data-image-id="5" src="/images/hero/Rectangle 4.png" alt="" />
        <img data-image-id="6" src="/images/hero/Rectangle 4 (1).png" alt="" />
        <img data-image-id="7" src="/images/hero/Rectangle 4 (2).png" alt="" />
        <img data-image-id="8" src="/images/hero/Rectangle 4 (3).png" alt="" />
      </div>
    </section>
  )
}

export default Hero;