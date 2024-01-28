import React, { FC } from 'react'

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
