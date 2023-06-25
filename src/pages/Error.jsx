import * as React from 'react'
import { useNavigate, Link, useRouteError } from 'react-router-dom'
import { HomeIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/solid'


const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className='error'>
      <h1>Oops! It looks like we have a problem.</h1>
      <p>{error.message || error.statusText}</p>
      <div className='flex-md'>
        <button className='btn btn--dark' 
          onClick={() => navigate(-1) }>
          <ArrowUturnLeftIcon width={20}/>
          <span>Go back to previous page</span>
        </button>
        <Link to='/'
        className='btn btn--dark'
        >
          <HomeIcon width={20}/>
          <span>Go to the homepage</span>
        </Link>
      </div>
    </div>
  )
}

export default Error