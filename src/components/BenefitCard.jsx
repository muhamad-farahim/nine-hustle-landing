import React from 'react';
import './scss/benefit-card.scss';

function Benefits({image, title, children}) {
  return (
    <div className='benefit-card'>
      <img src={image} alt='' />
      <div className="benefit-card__body">
        <h5 className='benefit-card__body__title'>{title}</h5>
        <h5 className='benefit-card__body__desc'>{children}</h5>
      </div>
    </div>
  )
}

export default Benefits;