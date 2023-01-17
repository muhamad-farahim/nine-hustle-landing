import React from 'react';
import BenefitCard from './BenefitCard';

import './scss/benefits.scss';

function Benefits() {
  return (
    <section className='benefits'>
        <h1 className='benefits__title'>
            <span>WHY</span>
            <span className='benefits__title__word-group'>
                <span className='benefits__title__word-group__regular'>YOU</span>
                <span>SHOULD</span>
                <span className='benefits__title__word-group__regular'>USE</span>
            </span>
            <span className='benefits__title__orange'>NINE HUSTLE?</span>
        </h1>
      <div className='benefits__card-container'>
        <BenefitCard image='/images/benefits/icons8-cash-100 1.png' title="Murah Tanpa Biaya Layanan">
            Tentukan sendiri freelancer yang cocok dengan budget anda tanpa khawatir ada biaya layanan
        </BenefitCard>
        <BenefitCard image='/images/benefits/icons8-trust-100 2.png' title="Freelancer Terpercaya">
            Tidak perlu khawatir dengan kualitas freelancer di Nine Hustle, kami memberi 100% garansi uang kembali jika terjadi penipuan pada platform kami.
        </BenefitCard>
        <BenefitCard image='/images/benefits/icons8-name-tag-100 1.png' title="Akses Freelancer">
            Temukan freelancer dari berbagai kategori untuk kebutuhan bisnis anda atau buat projek dan biarkan freelancer yang mencari anda
        </BenefitCard>
      </div>
    </section>
  )
}

export default Benefits;