import React from 'react'
import getImg from '../assets/images/webp/get-image.webp'
import forecastingImg from '../assets/images/webp/forcasting-image.png'
import Icon from '../common/Icons'
import Heading from '../common/Heading'
import Button from '../common/Button'
import womenMobile from '../assets/images/forecasting-mobile.webp'

const GetSupply = () => {
    return (
        <div className='bg-creamy md:py-[120px] py-[60px]'>
            <div className='max-w-[1098px] md:ms-[98px] md:mr-auto max-md:mr-0'>
                <div className='lg:flex-row flex flex-col md:gap-[50px] xl:gap-[100px] gap-10'>
                    <div className='relative max-lg:flex max-lg:justify-center max-lg:text-center'>
                        <img className='max-w-[218px] absolute top-[61px] lg:left-[-90px] md:left-0 md:block hidden' src={forecastingImg} alt="forecasting-image" />
                        <img className='lg:max-w-[480px] max-w-[387px] md:block hidden' src={getImg} alt="women-image" />
                    </div>
                    <div className='lg:w-[364px] w-full flex flex-col max-sm:px-8'>
                        <div className='flex flex-col max-lg:justify-center max-lg:items-center'>
                            <Icon iconName='numberOne' />
                            <Heading className='pt-[14px] lg:text-start text-center md:max-w-[363px] max-w-[306px]' text='Get an AI evaluation of your supply chain needs' />
                            <p className='sm:text-custom-xl lg:text-start text-center lg:max-w-[347px] w-full font-semibold font-poppins pt-2 sm:leading-custom-3xl text-lg text-ink-black'>
                                By analyzing your sales velocity and growth potential.
                            </p>
                            <div className='mt-5'>
                                <Button className='py-[6px] px-5' text={'Apply now'} />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end ps-5'>
                        <img className='max-w-[360px] md:hidden block' src={womenMobile} alt="women-image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetSupply
