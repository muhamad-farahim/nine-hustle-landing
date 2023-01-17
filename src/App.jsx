import React from 'react';
import Bar from './components/Bar';
import Hero from './components/Hero';
import HeroAboutSeparator from './components/HeroAboutSeparator'
import About from './components/About';
import AboutBenefitsSeparator from './components/AboutBenefitsSeparator';
import Benefits from './components/Benefits';
import BenefitsFooterSeparator from './components/BenefitsFooterSeparator';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

import './components/scss/app.scss';

function App() {
  return (
    <>
        <Bar />
        <Hero />
        <HeroAboutSeparator />
        <About />
        <AboutBenefitsSeparator />
        <Benefits />
        <BenefitsFooterSeparator />
        <Footer />
        <Copyright />
    </>
  )
}

export default App