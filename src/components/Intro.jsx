import React from 'react'
import { Form } from 'react-router-dom'
import { UserPlusIcon } from '@heroicons/react/24/solid' 
import illustration from '../assets/illustration.jpg'

const Intro = () => {
  return (
    <div className='intro'>
      <div>
        <h1>
            Take Control of <span className='accent'>Your Money</span>
        </h1>
        <p>
            Invest in yourself. Start your journey today.
        </p>
        <Form methods='post'>
            <input type="text" name='userName' required 
            placeholder='Please enter your name' 
            aria-label='Your Name' 
            autoComplete='given-name'
            />
            <button type='submit' className='btn btn--dark'>
                <span>Create Account</span>
                <UserPlusIcon/>
            </button>
        </Form>
      </div>
      <img src={illustration} alt="person with money" />
    </div>
  )
}

export default Intro
