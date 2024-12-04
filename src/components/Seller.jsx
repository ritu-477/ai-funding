import React from 'react'
import Heading from '../common/Heading'
import Button from '../common/Button'
import BackToTop from './BackToTop'
import womenImg from '../assets/images/webp/women-image.webp'
import mobileImg from '../assets/images/webp/women-moblie-image.webp'

const Seller = () => {
  return (
      <div className='md:py-12 pt-[51px] pb-[90px] relative'>
          <div className='container'>
              <div className='flex lg:justify-between lg:flex-row flex-col max-w-[1240px] mx-auto'>
                  <div className='flex flex-col justify-center max-lg:items-center'>
                      <Heading className='pt-[14px] lg:text-start text-center md:max-w-[401px] max-w-[306px]' text='Become an 8 figure seller with AI funding' />
                      <div className='mt-5'>
                          <Button className='py-[10px] px-11' text={'Apply now'} />
                      </div>
                  </div>
                  <div className='mt-[43px] hidden md:flex max-lg:justify-center max-lg:items-center'>
                      <img className='max-w-[440px]' src={womenImg} alt="women-image" />
                  </div>
                  <div className='absolute left-0 bottom-[-240px] md:hidden block'>
                      <img className='max-w-[345px] w-full' src={mobileImg} alt="mobile-image" />
                  </div>
            </div>
          </div>

          <BackToTop/>
    </div>
  )
}

export default Seller