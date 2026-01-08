import React from 'react'

const Container = ({children, className}) => {
  return (
   <>
     <div className={`max-w-256 mx-auto ${className}`}>{children}</div>
   </>
  )
}

export default Container