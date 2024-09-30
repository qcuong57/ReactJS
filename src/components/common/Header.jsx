import { Link } from 'react-router-dom'
import { navlink } from '../data/dummydata'
import logo from '../data/image/logo.png'
import { Menu } from '@mui/icons-material'
import React, { useState } from "react"

export const Header = () => {
  const [responsive, setResponsive] = useState(false)
  return (
    <><header><div className='container flexsb'>
      <div className='logo'>
        <img src={logo} alt="" data-aos='zoom-in-right' />
      </div>
      <div className={responsive ? "hideMenu" : "nav"}>
      {navlink.map((links, i) =>
          <Link key={i} to={links.url} data-aos='zoom-in-left'>{links.text}</Link>
        )}</div>
      <div>
        <button className='toggle' onClick={() => setResponsive(!responsive)}>
        <Menu className='icon'/>
        </button>
       
      </div>
    </div>
    </header></>
  )
}
