import {React, useState} from 'react'
import {AiOutlineHome, AiOutlineUser, AiOutlineFolder, AiOutlineLaptop, AiOutlineMessage} from 'react-icons/ai'

import './navbar.css'

const navLinks = [
  { href: "#", icon: <AiOutlineHome /> },
  { href: "#about", icon: <AiOutlineUser /> },
  { href: "#experience", icon: <AiOutlineLaptop /> },
  { href: "#portfolio", icon: <AiOutlineFolder /> },
  { href: "#contact", icon: <AiOutlineMessage /> }
]

function NavLink({ href, icon }) {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <a href={href} onClick={() => setActiveNav(href)} className={activeNav === href ? 'active' : ''}>
      {icon}
    </a>
  )
}

function NavBar() {
  return (
    <nav>
      {navLinks.map(({ href, icon }) => (
        <NavLink href={href} icon={icon} />
      ))}
    </nav>
  )
}

export default NavBar