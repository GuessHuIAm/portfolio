import React from 'react'
import IMG1 from '../../assets/logo.png'
import IMG2 from '../../assets/logo.png'
import IMG3 from '../../assets/logo.png'

import './portfolio.css'

const PortfolioItem = ({title, img, githubLink, liveDemoLink, alt}) => {
  return (
    <article className='portfolio__item'>
      <div className='portfolio__item-image'>
        <img src={img} alt={alt} />
        <h2>
          {title}
        </h2>
        <div className='portfolio__item-cta'>
          <a href={githubLink} className='btn'>Github</a>
          <a href={liveDemoLink} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
        </div>
      </div>
    </article>
  )
}

const portfolioItems = [
  {
    title: 'Under Construction',
    img: IMG1,
    githubLink: 'https://github.com',
    liveDemoLink: 'https://github.com',
    alt: 'Description'
  },
  {
    title: 'Under Construction',
    img: IMG2,
    githubLink: 'https://github.com',
    liveDemoLink: 'https://github.com',
    alt: 'Description'
  },
  {
    title: 'Under Construction',
    img: IMG3,
    githubLink: 'https://github.com',
    liveDemoLink: 'https://github.com',
    alt: 'Description'
  },
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {portfolioItems.map(item => <PortfolioItem {...item} />)}
      </div>
    </section>
  )
}

export default Portfolio
