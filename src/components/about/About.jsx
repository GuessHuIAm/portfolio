import React from 'react'
import ME from '../../assets/logo.png'
import {FaAward} from 'react-icons/fa'

import './about.css'

const Card = ({title, subtitle, icon}) => {
  return (
    <article className="about__card">
      {icon}
      <h5>{title}</h5>
      <small>{subtitle}</small>
    </article>
  )
}

const cards = [
  {title: 'Based In', subtitle: 'Brooklyn, NY and Cambridge, MA.', icon: <FaAward />},
  {title: 'Experience', subtitle: 'Student, teaching fellow, game developer, and backend intern.', icon: <FaAward />},
  {title: 'Hobbies', subtitle: 'Drawing, running, and cooking.', icon: <FaAward />}
]

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About me.' />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            {cards.map(({title, subtitle, icon}) => <Card title={title} subtitle={subtitle} icon={icon}/>)}
          </div>

          <p>
            Lorem, ipsum dolor sit ametconsectetur adipisicing elit. Eaque, doloribus.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>
    </section>
  )
}

export default About