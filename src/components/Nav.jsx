import React from 'react'
import Logo from '../assets/logo-black.png'
import { Form, NavLink } from 'react-router-dom'

const Nav = ({userName}) => {
  return (
    <nav>
      <NavLink 
        to='/'
        aria-label='Go to the homepage'
      >
        <img src={Logo} alt="girlcode-logo" />
        <span>HomeBudget</span>
      </NavLink>
      {
        userName && (
            <Form
                method='post'
                action='/logout'
                onSubmit={(event) => {
                    if (!confirm("Delete user and data?")) {
                        event.preventDefault()
                    }
                }}
                >
                <button className='btn btn--warning' type='submit'>
                    <span>Delete User</span>
                </button>
            </Form>
        )
      }
    </nav>
  )
}

export default Nav