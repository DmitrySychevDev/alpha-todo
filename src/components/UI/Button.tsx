import React, { FC } from 'react'

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
  danger?: boolean
}

const Button: FC<ButtonProps> = ({ children, onClick, danger = false }) => {
  const buttonClass = danger
    ? 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
    : 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
