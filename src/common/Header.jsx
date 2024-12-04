import React from 'react'
import navLogo from '../assets/images/webp/header-logo.webp'
 
const Header = () => {
  return (
      <div className='max-w-[1433px] mx-auto'>
          <div className='p-6'>
              <a href="/"><img className='max-w-[50px]' src={navLogo} alt="nav-logo" /></a>
         </div>
    </div>
  )
}

export default Header;