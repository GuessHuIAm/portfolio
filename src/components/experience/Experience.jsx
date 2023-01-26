import React from 'react'
import {SiHtml5, SiCss3, SiJavascript, SiPython,
  SiNodedotjs, SiC, SiCplusplus, SiCsharp, SiOcaml,
  SiReact, SiGit, SiDocker, SiKubernetes, SiUnity,
  SiPostman, SiAmazonaws, SiBootstrap, SiDjango,
  SiFlask, SiCelery, SiMacos, SiUbuntu, SiWindows,
  SiLinux, SiOpengl, SiJava, SiJenkins, SiR} from 'react-icons/si'
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

const languages = [
  { title: 'Python', subtitle: 'Experienced', icon: <SiPython />},
  { title: 'HTML', subtitle: 'Experienced', icon: <SiHtml5 />},
  { title: 'JavaScript', subtitle: 'Experienced', icon: <SiJavascript />},
  { title: 'CSS', subtitle: 'Experienced', icon: <SiCss3 />},
  { title: 'C', subtitle: 'Experienced', icon: <SiC />},
  { title: 'C++', subtitle: 'Intermediate', icon: <SiCplusplus />},
  { title: 'C#', subtitle: 'Intermediate', icon: <SiCsharp />},
  { title: 'Java', subtitle: 'Intermediate', icon: <SiJava />},
  { title: 'R', subtitle: 'Intermediate', icon: <SiR />},
  { title: 'MySQL', subtitle: 'Intermediate', icon: <GrMysql />},
  { title: 'OCaml', subtitle: 'Intermediate', icon: <SiOcaml />},
]

const tools = [
  { title: 'Git', subtitle: 'Experienced', icon: <SiGit />},
  { title: 'Unity', subtitle: 'Experienced', icon: <SiUnity />},
  { title: 'OpenGL', subtitle: 'Experienced', icon: <SiOpengl />},
  { title: 'AWS', subtitle: 'Intermediate', icon: <SiAmazonaws />},
  { title: 'Postman', subtitle: 'Intermediate', icon: <SiPostman />},
  { title: 'Docker', subtitle: 'Intermediate', icon: <SiDocker />},
  { title: 'Kubernetes', subtitle: 'Intermediate', icon: <SiKubernetes />},
  { title: 'Celery', subtitle: 'Intermediate', icon: <SiCelery />},
  { title: 'Jenkins', subtitle: 'Intermediate', icon: <SiJenkins />},
]

const frameworks = [
  { title: 'Flask', subtitle: 'Experienced', icon: <SiFlask />},
  { title: 'React', subtitle: 'Intermediate', icon: <SiReact />},
  { title: 'Node.js', subtitle: 'Intermediate', icon: <SiNodedotjs />},
  { title: 'Bootstrap', subtitle: 'Intermediate', icon: <SiBootstrap />},
  { title: 'Django', subtitle: 'Intermediate', icon: <SiDjango />},
]

const operatingSystems = [
  { title: 'macOS', subtitle: 'Experienced', icon: <SiMacos />},
  { title: 'Windows 10', subtitle: 'Experienced', icon: <SiWindows />},
  { title: 'Linux', subtitle: 'Experienced', icon: <SiLinux />},
  { title: 'Ubuntu', subtitle: 'Intermediate', icon: <SiUbuntu />},
]
    
function Experience() {
    return (
    <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">

      <div className="experience__languages">
        <h3>Languages</h3>
        <div className="experience__content">
          {languages.map(({title, subtitle, icon}) => <ExperienceDetail title={title} subtitle={subtitle} icon={icon}/>)}
        </div>
      </div>

      <div className="experience__tools">
        <h3>Tools</h3>
        <div className="experience__content">
          {tools.map(({title, subtitle, icon}) => <ExperienceDetail title={title} subtitle={subtitle} icon={icon}/>)}
        </div>
      </div>

      <div className="experience__frameworks">
        <h3>Frameworks</h3>
        <div className="experience__content">
          {frameworks.map(({title, subtitle, icon}) => <ExperienceDetail title={title} subtitle={subtitle} icon={icon}/>)}
        </div>
      </div>

      <div className="experience__frontend">
        <h3>Operating Systems</h3>
        <div className="experience__content">
          {operatingSystems.map(({title, subtitle, icon}) => <ExperienceDetail title={title} subtitle={subtitle} icon={icon}/>)}
        </div>
      </div>

    </div>

  </section>
  )
}

export default Experience
