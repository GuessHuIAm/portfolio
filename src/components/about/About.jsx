import React from 'react'
import ME from '../../assets/headshot.jpg'
import {MdOutlineApartment, MdWork, MdBrush} from 'react-icons/md'

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
  {title: 'Based In', subtitle: 'Brooklyn, NY and Cambridge, MA.', icon: <MdOutlineApartment />},
  {title: 'Experience', subtitle: 'Student, teaching fellow, game developer, and backend intern.', icon: <MdWork />},
  {title: 'Hobbies', subtitle: 'Drawing, running, and cooking.', icon: <MdBrush />}
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
          Welcome to my portfolio! My name is Michael and I'm currently a student at Harvard University
          studying Computer Science, Economics, and Visual Arts. I'm passionate about using technology to
          connect people and bring them together, and always looking for interesting projects to contribute to!
          I believe that my unique combination of technical skills
          and creative thinking allows me to approach problems from different angles and come up with
          innovative solutions. When I'm not coding, you'll find me looking for my next inspiration to sketch,
          running around the city, or cooking up a new recipe.
          I'm excited to share my projects and skills with you, and I
          look forward to connecting with you!
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>
    </section>
  )
}

export default About