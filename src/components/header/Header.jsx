import React, { useState, useEffect } from 'react';
import CTA from './CTA';
import './header.css';
import HeaderSocials from './HeaderSocials';

const titles = ['Software Engineer', 'Game Developer', 'Artist', 'Animator'];

function Header() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [currentText, setCurrentText] = useState(' ');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isTyping) {
      let index = 0;
      const title = titles[currentTitle];
      const typingInterval = setInterval(() => {
        setCurrentText((prevText) => prevText + title[index]);
        index++;
        if (index === title.length) {
          clearInterval(typingInterval);
          setTimeout(() => {
            setIsTyping(false);
            setCurrentText('');
            setCurrentTitle((prevTitle) => (prevTitle + 1) % titles.length);
          }, 1000); // Pause before starting typing again
        }
      }, 100); // Typing speed

      return () => clearInterval(typingInterval);
    }
  }, [isTyping, currentTitle]);

  return (
    <header>
      <div className='container header__container'>
        <h5>Hello, world! I'm</h5>
        <h1>Michael Hu</h1>
        <h5 className='text-light' style={{ height: '24px' }}>{currentText}</h5>
        <CTA />
        <HeaderSocials />

        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;