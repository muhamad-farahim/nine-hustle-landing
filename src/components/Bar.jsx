import React from 'react';
import './scss/bar.scss';

function Bar() {
  return (
    <div className='bar'>
      <span>Kamu seorang freelancer? Jadi bagian dari nine hustle yuk!</span>
      <a href="/" className='bar__link'>
        <span>Daftar Freelancer</span>
        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 12.5L8.6 11.05L12.15 7.5H0V5.5H12.15L8.6 1.95L10 0.5L16 6.5L10 12.5Z" fill="white"/>
        </svg>
      </a>
    </div>
  )
}

export default Bar