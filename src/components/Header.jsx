import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <NavLink to='/'>Posts</NavLink>
      <NavLink to='/todo' style={{ marginLeft: '20px' }}>
        Todo
      </NavLink>
    </div>
  )
}
