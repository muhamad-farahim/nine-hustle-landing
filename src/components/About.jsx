import React from 'react';
import CategoryCard from './CategoryCard';

import './scss/about.scss';

function About() {
  return (
    <section className='about'>
      <div className="about__container-top">
        <div className="about__container-top__description-container">
          <div className="about__container-top__description-container__title">
            <h1>NINE HUSTLE</h1>
            <h1>CONNECTING YOU</h1>
          </div>
          <h5 className='about__container-top__description-container__desc'>
            Seperti kata pepatah, walaupun sayur di pegunungan dan ikan di laut mereka akan bertemu juga di dalam piring makan, pun sama halnya walaupun freelancer di sabang dan client di merauke mereka akan bertemu juga di Nine Hustle
          </h5>  
        </div>
        <div className="about__container-top__image-container">
          <img src="/images/about/image 1.png" alt="" />
          <div className="about__container-top__image-container__fade"></div>
        </div>
      </div>
      <div className="about__container-bottom">
        <h1 className="about__container-bottom__title">What are you looking for?</h1>
        <div className="about__container-bottom__categories-container">
          <CategoryCard image="/images/about/unsplash__CK8u2I4_qw.png">Desain Logo</CategoryCard>
          <CategoryCard image="/images/about/Group 181 1.png">Fotografi Wisuda</CategoryCard>
          <CategoryCard image="/images/about/unsplash_CrigF9q5qvA.png">Fotografi Pre-Wed</CategoryCard>
          <CategoryCard image="/images/about/unsplash_H3bUrt4t1ZI.png">Videografi</CategoryCard>
        </div>
      </div>
    </section>
  )
}

export default About;