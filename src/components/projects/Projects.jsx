import React from 'react'
import POOL_IMG from '../../assets/projects/pool.gif'
import TOWER_POWER_IMG from '../../assets/projects/tower_power.png'
import RAY_TRACER from '../../assets/projects/ray_tracer.png'
import TEMP from '../../assets/logo.png'

import './projects.css'

const ProjectItem = ({title, img, alt, githubLink, subtitle, btn_name}) => {
  return (
    <article className='project__item'>
        <div className="project__item-image">
          <img src={img} alt={alt}/>
        </div>
        <h2>
          {title}
        </h2>
        <div className='project__item-cta'>
          <a href={githubLink} className='btn btn-primary'>{btn_name}</a>
        </div>
        <small className='text-light'>
          {subtitle}
        </small>
    </article>
  )
}

const projects = [
  {
    title: 'Pool Game',
    img: POOL_IMG,
    githubLink: 'https://github.com/pforderique/6.4400-final-project',
    subtitle: 'Created with Piero Orderique. A 2D pool game with physics simulations.',
    alt: 'Description',
    btn_name: 'Github',
  },
  {
    title: 'Ray Tracer',
    img: RAY_TRACER,
    githubLink: 'https://github.com/GuessHuIAm/ray_tracer',
    subtitle: 'A ray tracer with antialiasing and three different camera projections.',
    alt: 'Description',
    btn_name: 'Github',
  },
  {
    title: 'Tower Power',
    img: TOWER_POWER_IMG,
    githubLink: 'https://github.com/GuessHuIAm/tower-power',
    subtitle: 'Created with Megan Yeo and Nithya Gottipati. A classic tower defense game!',
    alt: 'Description',
    btn_name: 'Github',
  }
]

function Projects() {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container project__container">
        {projects.map(item => <ProjectItem {...item} />)}
      </div>
    </section>
  )
}

export default Projects
