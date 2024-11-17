import React from 'react'
import { NAVBAR_ITEMS } from '@/utility/constants'

const Navbar = () => {
  return (
    <div className = "flex gap-7 mx-5 my-3">
      {NAVBAR_ITEMS.map(item => {
        return <div key={item.id}>
            {item.label}
        </div>
      })}
    </div>
  )
}

export default Navbar
