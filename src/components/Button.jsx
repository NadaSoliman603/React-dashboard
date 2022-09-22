import React from 'react'

export const Button = ({ bgColor, color, size, text, borderRadius }) => {
  return (
    <button type='button'
      style={{
        backgroundColor:bgColor,
        color:color,
        borderRadius: borderRadius
      }}
      className={`text-${size} p-2`}
    >{text  }</button>
  )
}
