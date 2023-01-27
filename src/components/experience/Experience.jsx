import React from 'react'
import ExperienceDetail from './ExperienceDetail'
import './experience.css'

const experienceData = [
  {
    title: "Backend Engineering Intern",
    positions: [
      {time: "Summer 2022", location: "Wayscript", link: "https://www.wayscript.com/",
       description: `Implemented file and folder download feature on a Flask application 
       to streamline the setup of standardized development environments. Enhanced security 
       by adding encryption to Redis caches. Improved runtime efficiency through automation 
       of email notifications using Render's Celery workers and optimization of Docker container 
       deployment on Kubernetes.`},
    ]
  },
  {
    title: "Research Assistant",
    positions: [
      {time: "Spring 2023", location: "LIT Lab", link: "https://lit.gse.harvard.edu/",
      description: `Improve the data collection platform, cleaning and standardizing the
      Pose and OpenFace data to allow for meaningful analysis, generating video data visualizations
      of the participants movement within the fabrication lab over a
      period of time, implementing basic clustering analysis methodologies
      and developing an algorithm to generate the lines of sight of
      each participant within the makerspace to analyze social interactions.`},
    ]
  },
  {
    title: "Teaching Fellow",
    positions: [
      {time: "Winter 2023", location: "CS50 for JDs", link: "https://cs50.harvard.edu/hls/2023/winter/",
       description: `Assisted with the instruction of 60+ students in three labs, provided critical
       feedback on student work, and held office hours on computer science materials including Python,
       web programming (HTML, CSS, JavaScript, SQL, Bootstrap), and
       computer networking. Led a seminar on AI art.`},
      {time: "Fall 2022", location: "CS50", link: "https://cs50.harvard.edu/college/2022/fall/",
       description: `Assisted with the instruction of 15+ students in weekly labs,
       provided critical feedback on student work, and held office hours and tutorials
       on introductory to intermediate-level computer science materials including C,
       Python, web programming (HTML, CSS, JavaScript, SQL), and image processing.`},
    ]
  },
  {
    title: "Developer",
    positions: [
      {time: "Fall 2022 - Spring 2023", location: "Harvard Game Devs", link: "",
       description: `Develop a personal 2D top-down action-adventure game and contribute to
       the development of a group rogue RPG project using C++ and Unity. Create art assets
       using Tiled and Procreate.`},
      {time: "Fall 2021 - Spring 2022", location: "Datamatch", link: "https://datamatch.me/",
       description: `Employed OpenAI API and Firebase to revamp the algorithms used in Harvard's
       Datamatch web application (matchmaking service used by over 50,000 college students at over
        30 schools) for the February 2022 launch.`},
    ]
  },
  {
    title: "Designer",
    positions: [
      {time: "Fall 2021 - Spring 2023", location: "The Harvard Crimson", link: "https://www.thecrimson.com/writer/1217465/Michael__Hu/",
       description: `Illustrate and edit graphics for the magazine's weekly issues and
       coordinate pitches between the writers and designers. Layout and design the Crimson's
      monthly 20-page magazine.`},
    ]
  },
  {
    title: "Outdoors Leader",
    positions: [
      {time: "Spring 2022 - Spring 2023", location: "Harvard First-Year Outdoors Program", link: "https://fop.fas.harvard.edu/",
       description: `Lead a week-long service trip in the outdoors for first-year Harvard freshmen
       before the start of the school year and offer support to students
       during their first year. Received wilderness and first-aid training
       as well as CPR certification.`},
    ]
  },
  {
    title: "Associate",
    positions: [
      {time: "Spring 2022", location: "Harvard College Consulting Club", link: "https://www.harvardconsulting.org/",
       description: `Work in a six-person case team to analyze performance management and talent
       retention strategies for a Fortune 500 manufacturing company.`},
    ]
  },
]

function Experience() {
    return (
    <section id='experience'>
    <h5>What I've Been Up To</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">
     {experienceData.map(item => {
      return (
      <article className="experience__item">
        <h2>{item.title}</h2>
        {item.positions.map(position => {
          return (
            <ExperienceDetail
            time={position.time}
            location={position.location}
            link={position.link}
            description={position.description}/>
          )
        }
        )
        }
        </article>)
        })
      }
     </div>

  </section>
  )
}

export default Experience
