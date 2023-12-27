import React from 'react'

const Footer = () => {
    const curryear=new Date().getFullYear();
  return (
    <footer>
      <p>copyright©{curryear}</p>
    </footer>
  )
}

export default Footer
