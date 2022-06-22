import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SmoothScroll from 'smooth-scroll';
// import 'particles.js/particles';
import 'particles.js/particles';
// images
// import githubImg from '../../img/github.png';
import instagramImg from '../../img/instagram.svg';
import twitterImg from '../../img/twitter.svg';
import linkedinImg from '../../img/linkedin.svg';
// css
import './hero.css';

const particlesJS = window.particlesJS;

const Hero = () => {
    const { t } = useTranslation('global');

    const handleScroll = () => {
        const scroll = new SmoothScroll(),
        elmt = document.getElementById('about');
        scroll.animateScroll(elmt);
    }

    useEffect(() => {
        const jsonPath = window.innerWidth <= 800 ? './particlesjs-mobile-config.json' : './particlesjs-config.json'; 
        particlesJS.load('hero-container', jsonPath);
    }, []);

    return ( 
        <div id="hero-container">
            <div className="hero-text">
                <h1 className="hero-title">John Michael Villamor</h1>
                <div className="hero-description">{t('hero.description')}</div>
                <div className="social-container">
                    <div className="social-item">
                        <a href="https://www.instagram.com/jmvillamor123/" target="_blank" rel="noopener noreferrer">
                            <img src={instagramImg} alt=".."/>
                        </a>
                    </div>
                    <div className="social-item">
                        <a href="https://twitter.com/micvillamor" target="_blank" rel="noopener noreferrer">
                            <img src={twitterImg} alt=".."/>
                        </a>
                    </div>
                    <div className="social-item">
                        <a href="https://www.linkedin.com/in/john-michael-villamor-a8170b233/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinImg} alt=".."/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="hero-button-container">
                <button onClick={handleScroll} className="learn-more-button">{t('hero.learn-more')}</button>
            </div>
        </div>
     );
}
 
export default Hero;