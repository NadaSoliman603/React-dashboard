import React from 'react'

export const Header = ({title , cartegory}) => {
  return (
    <div className='mt-10'>
        <p className='text-gray-400'>{cartegory}</p>
        <p className='text-3xl font-extrabold tracking-tight text-slate-900'>{title}</p>

    </div>
  )
}
