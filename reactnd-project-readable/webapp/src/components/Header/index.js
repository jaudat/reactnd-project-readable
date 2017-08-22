import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Header = (props) => (
  <header className='header'>
    <Link id='brand-name' to='/'>Reddit Clone</Link>
  </header>
)

export default Header