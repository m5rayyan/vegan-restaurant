import React from 'react'

function UL({ulClass , children}) {
  return (
    <ul className={ulClass} >
        {children}
    </ul>
  )
}

export default UL