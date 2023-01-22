import React from 'react'
import CV from '../../assets/resume.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn primary'>Let's Talk</a>
    </div>
  )
}

export default CTA