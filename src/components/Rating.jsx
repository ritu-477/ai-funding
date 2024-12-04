import React from 'react'
import businessImg from '../assets/images/webp/business-image.webp'
import trustImg from '../assets/images/webp/trustpilot.webp'

const Rating = () => {
  return (
      <div className='bg-charcoal-black md:pt-[87px] md:pb-[89px] py-[52px]'>
          <div className='max-w-[1167] container mx-auto'>
              <div className='flex lg:flex-row xl:gap-[104px] flex-wrap md:gap-[80px] gap-[52px] justify-center'>
                  <div className='flex flex-col items-center'>
                      <img className='max-w-[83px] pb-[10px]' src={businessImg} alt="business-image" />
                      <p className='md:text-custom-5xl text-white md:leading-custom-7xl text-[32px] leading-[43.93px] abril-semibold'>‘A’ Rating</p>
                  </div>
                  <div className='flex flex-col items-center'>
                      <p className='sm:text-[19px] pb-[10px] sm:leading-custom-3xl font-poppins font-normal text-[12.15px] leading-5 text-center text-white'>Average store growth</p>
                      <p className='md:text-custom-5xl text-white md:leading-custom-7xl text-[32px] leading-[43.93px] abril-semibold'>400%</p>
                  </div>
                  <div className='flex flex-col items-center'>
                      <img className='max-w-[83px] pb-[10px]' src={trustImg} alt="trust-image" />
                      <p className='md:text-custom-5xl text-white md:leading-custom-7xl text-[32px] leading-[43.93px] abril-semibold'>Excellent</p>
                  </div>
                  <div className='flex flex-col items-center'>
                      <p className='sm:text-[19px] pb-[10px] sm:leading-custom-3xl font-poppins font-normal text-[12.15px] leading-5 text-center text-white'>Funding given</p>
                      <p className='md:text-custom-5xl text-white md:leading-custom-7xl text-[32px] leading-[43.93px] abril-semibold'>$450M+</p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Rating