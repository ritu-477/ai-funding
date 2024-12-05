import React from 'react'
import Header from '../common/Header';
import Button from '../common/Button';
import graphImg from '../assets/images/webp/graph-image.webp'
import balanceImg from '../assets/images/webp/export-balance.webp'
import revenueImg from '../assets/images/webp/revenue-image.webp'
import salesSource from '../assets/images/webp/sales-source.webp'
import upcomingFunds from '../assets/images/webp/upcoming-funds.webp' 

const Hero = () => {
  return (
      <div className='bg-hero bg-cover bg-no-repeat bg-center'>
          <Header />
          <div className='container'>
              <div className='max-w-[1199px] pr-0 container max-md:mr-0 pt-[242px] md:pb-[224px] pb-[60px] ms-auto mr-[74.11px]'>
                  <div className='md:justify-between max-md:gap-[77px] max-md:flex-wrap justify-center md:flex hidden'>
                      <div className='flex flex-col'>
                          <h1 className='lg:text-custom-6xl lg:leading-custom-6xl text-custom-4xl leading-custom-5xl font-bold sm:abril-bold abril-semibold text-white max-w-[478px]'>Get AI funding for your store</h1>
                          <p className='font-medium font-poppins sm:pt-6 pt-3 text-white sm:text-custom-xl sm:leading-custom-3xl text-lg max-w-[408px]'>AI technology that predicts, plans, and protects your cash flow.</p>
                          <div className='sm:mt-6 mt-3'><Button className='py-[10px] px-11' text={'Get funded'} /></div>
                      </div>
                      <div className='flex flex-col'>
                          <div className='relative'>
                              <img src={graphImg} className='max-w-[247.47px]' alt="graph-image" />
                              <img className='absolute top-[-40px] left-[-40px] max-w-[159px]' src={balanceImg} alt="balance-image" />
                              <img className='absolute bottom-[-20px] right-0 xl:right-[-38px] max-w-[145px]' src={revenueImg} alt="balance-image" />
                          </div>
                          <img className='max-w-[249.7px] mt-[28.42px] translate-x-[-77px]' src={salesSource} alt="sales-source" />
                      </div>
                  </div>
                  <div className='max-md:flex hidden flex-col gap-[77px] relative'>
                      <div className='flex justify-end items-end'>
                          <img className='max-w-[190px]' src={upcomingFunds} alt="upcoming-funds" />

                      </div>
                      <div className='flex flex-col justify-center ps-4 pr-[30px]'>
                          <h1 className='lg:text-custom-6xl lg:leading-custom-6xl text-custom-4xl leading-custom-5xl font-bold sm:abril-bold abril-semibold text-white max-w-[478px]'>Get AI funding for your store</h1>
                          <p className='font-medium font-poppins sm:pt-6 pt-3 text-white sm:text-custom-xl sm:leading-custom-3xl text-lg max-w-[408px]'>AI technology that predicts, plans, and protects your cash flow.</p>
                          <div className='sm:mt-6 mt-3'><Button className='py-[10px] px-11' text={'Get funded'} /></div>
                      </div>
                  </div>
              </div>
         </div>

    </div>
  )
}

export default Hero