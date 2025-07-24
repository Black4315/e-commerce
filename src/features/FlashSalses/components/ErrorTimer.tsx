"use client"

import CountdownTimer from "./CountdownTimer"

const ErrorTimer = () => {
  return (
    //   <div className='text-danger-500'>
    //       Oops! Couldn’t load the sale or timer. Refresh to try again.
    //   </div>  
    <CountdownTimer endDate={new Date()} onTimerEnd={() => { }} />
  )
}

export default ErrorTimer