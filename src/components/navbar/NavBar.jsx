import {React, useState} from 'react'
import {AiOutlineHome, AiOutlineUser, AiOutlineFolderOpen,
  AiOutlineLaptop, AiOutlineMessage, AiOutlineTool, AiOutlineBuild} from 'react-icons/ai'

import './navbar.css'

function NavBar() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('about')} className={activeNav === 'about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('experience')} className={activeNav === 'experience' ? 'active' : ''}><AiOutlineLaptop /></a>
      <a href="#skillset" onClick={() => setActiveNav('skillset')} className={activeNav === 'skillset' ? 'active' : ''}><AiOutlineTool /></a>
      <a href="#projects" onClick={() => setActiveNav('projects')} className={activeNav === 'projects' ? 'active' : ''}><AiOutlineBuild /></a>
      <a href="#portfolio" onClick={() => setActiveNav('portfolio')} className={activeNav === 'portfolio' ? 'active' : ''}><AiOutlineFolderOpen /></a>
      <a href="#contact" onClick={() => setActiveNav('contact')} className={activeNav === 'contact' ? 'active' : ''}><AiOutlineMessage /></a>
    </nav>
  )
}

export default NavBar