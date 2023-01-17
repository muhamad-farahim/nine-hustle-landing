import React from 'react';
import './scss/footer.scss';

function Footer() {
  return (
    <footer className='footer'>
        <div className="footer__main-container">
            <div className="footer__main-container__container-left">
                <div className="footer__main-container__container-left__container-top">
                    <div className="footer__main-container__container-left__container-top__persuasion">
                        <div className="footer__main-container__container-left__container-top__persuasion__title">
                            <h1>Yuk ! pakai aplikasi</h1>
                            <h1>Nine Hustle</h1>
                        </div>
                        <h5 className="footer__main-container__container-left__container-top__persuasion__desc-lg">Banyak kemudahan yang bisa kamu dapatkan</h5>
                        <h5 className="footer__main-container__container-left__container-top__persuasion__desc-md">Memudahkan kamu untuk mendapatkan Freelancer yang kamu mau.</h5>
                    </div>
                    <a href="/"><img className="footer__main-container__container-left__container-top__google-play-icon" src="/images/footer/Store=Google Play, Style=Brand, Size=lg.png" alt="Google Play Icon" /></a>
                </div>
                <div className="footer__main-container__container-left__smartphone-grid-md">
                    <img data-image-id="1" src="/images/footer/Group 183.png" alt="" />
                    <img data-image-id="2" src="/images/footer/Group 184.png" alt="" />
                    <img data-image-id="3" src="/images/footer/Group 185.png" alt="" />
                    <img data-image-id="4" src="/images/footer/Group 186.png" alt="" />
                    <img data-image-id="5" src="/images/footer/Group 185.png" alt="" />
                </div>
                <div className="footer__main-container__container-left__container-bottom">
                    <div className="footer__main-container__container-left__container-bottom__persuasion">
                        <h5>Jangan mau ketinggalan info</h5>
                        <h5>Nine Hustle</h5>
                    </div>
                    <div className="footer__main-container__container-left__container-bottom__separator-line"></div>
                    <h5 className="footer__main-container__container-left__container-bottom__connect-text">CONNECT WITH US</h5>
                    <div className="footer__main-container__container-left__container-bottom__social-media-icons">
                        <a href="/"><img src="/images/footer/vector-instagram.png" alt="Google Play Icon" /></a>
                        <a href="/"><img src="/images/footer/vector-linkedin.png" alt="Google Play Icon" /></a>
                        <a href="/"><img src="/images/footer/vector-tiktok.png" alt="Google Play Icon" /></a>
                    </div>
                </div>
            </div>
            <div className="footer__main-container__container-right">
                <div className="footer__main-container__container-right__smartphone-grid-lg">
                    <img data-image-id="1" src="/images/footer/Group 183.png" alt="" />
                    <img data-image-id="2" src="/images/footer/Group 184.png" alt="" />
                    <img data-image-id="3" src="/images/footer/Group 185.png" alt="" />
                    <img data-image-id="4" src="/images/footer/Group 186.png" alt="" />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;