import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/app' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/app/counter' activeClassName='route--active'>
      Counter
    </Link>
    {' . '}
    <Link to='/app/bundle' activeClassName='route--active'>
      Bundle
    </Link>
  </div>
)

export default Header
