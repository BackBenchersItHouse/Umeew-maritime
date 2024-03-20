import React from 'react'

const DisplayErrorPage = () => {
  return (
    <div>
    <p className='text-red-600'>Something went wrong!</p>
    <p className='text-red-600'>{error.statusText || error.message}</p>
    <p className='text-xl'>Please Go To <Link to='/' className='text-2xl font-bold text-secondary'>Home</Link></p>
</div>
  )
}

export default DisplayErrorPage