import React from 'react';
import './scss/category-card.scss';

function CategoryCard({image, children}) {
  return (
    <a href="/">
      <div className='category-card'>
          <img src={image} alt="" />
          <h5>{children}</h5>
      </div>
    </a>
  )
}

export default CategoryCard;