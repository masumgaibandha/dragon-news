import React from 'react'
import logo from "../assets/logo.png"
import { format } from 'date-fns'

const Header = () => {
  return (
    <div className='flex flex-col items-center space-y-3'>
      <img className='w-[400px]' src={logo} alt="" />
      <p className='text-accent text-[18px]'>Journalism Without Fear or Favour</p>
      <p className='font-semibold text-accent text-xl'>{format(new Date(), "PPPP")}</p>
    </div>
  )
}

export default Header