import React from 'react'

const Logo = () => {
  return (
    <svg
      class={`w-8 ${color} text-teal-accent-400`}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      strokeLinejoin="round"
      strokeWidth="2"
      strokeLinecap="round"
      strokeMiterlimit="10"
      stroke="currentColor"
      fill="none"
    >
      <rect x="3" y="1" width="7" height="12" />
      
    </svg>
  )
}

export default Logo