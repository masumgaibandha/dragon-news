import React from 'react'
import swimmingImage from "../assets/swimming.png"
import classImmage from "../assets/class.png"
import playgroundImage from "../assets/playground.png"
import addImage from "../assets/bg.png"
const QZone = () => {
  return (
    <div className='bg-base-200 p-3'>
      <h1 className='font-semibold text-xl mb-5'>Q-Zone</h1>
       <div className='space-y-5'>
        <img src={swimmingImage} alt="" />
        <img src={classImmage} alt="" />
        <img src={playgroundImage} alt="" />
        <img src={addImage} alt="" />
      </div>
    </div>
  )
}

export default QZone