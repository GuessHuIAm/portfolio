import React from 'react'
import {SiHtml5, SiCss3, SiJavascript, SiPython,
  SiNodedotjs, SiC, SiCplusplus, SiCsharp, SiOcaml} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'

import './experience.css'

const ExperienceDetail = ({title, subtitle, icon}) => {
  return (
    <article className='experience__details'>
      <div className='experience__details-icon'>
        {icon}
      </div>
      <div>
        <h4>{title}</h4>
        <small className='text-light'>{subtitle}</small>
      </div>
    </article>
  )
}

const frontendSkills = [
  { title: 'HTML', subtitle: 'Experienced', icon: <SiHtml5 />},
  { title: 'CSS', subtitle: 'Experienced', icon: <SiCss3 />},
  { title: 'JavaScript', subtitle: 'Experienced', icon: <SiJavascript />},
]

const backendSkills = [
  { title: 'Python', subtitle: 'Experienced', icon: <SiPython />},
  { title: 'C', subtitle: 'Experienced', icon: <SiC />},
  { title: 'C++', subtitle: 'Experienced', icon: <SiCplusplus />},
  { title: 'C#', subtitle: 'Intermediate', icon: <SiCsharp />},
  { title: 'Node.js', subtitle: 'Intermediate', icon: <SiNodedotjs />},
  { title: 'MySQL', subtitle: 'Intermediate', icon: <GrMysql />},
  { title: 'OCaml', subtitle: 'Intermediate', icon: <SiOcaml />},
]
    
function Experience() {
    return (
    <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>
    <div className="container experience__container">

      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          {frontendSkills.map(({title, subtitle, icon}) => <ExperienceDetail title={title} subtitle={subtitle} icon={icon}/>)}
        </div>
      </div>

      <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
          {backendSkills.map(({title, subtitle, icon}) => <ExperienceDetail title={title} subtitle={subtitle} icon={icon}/>)}
        </div>
      </div>

    </div>
  </section>
  )
}

export default Experience
