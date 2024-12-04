import React, { useRef, useState, useEffect } from 'react';
import { ACCORDION_ITEMS } from '../common/Helper';
import Heading from '../common/Heading';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0); 
    const contentRefs = useRef([]);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);  
    };

    useEffect(() => {
        if (contentRefs.current[activeIndex]) {
            contentRefs.current[activeIndex].style.height = `${contentRefs.current[activeIndex]?.scrollHeight}px`;
        }
    }, [activeIndex]);  

    return (
        <div className='bg-creamy md:pt-[70px] md:pb-[60px] max-md:py-14'>
            <div className='container'>
                <p className='text-sm leading-custom-2xl text-center text-gray font-poppins'>STILL HAVE QUESTIONS?</p>
                <Heading className='sm:pt-5 pt-[14px] md:pb-[84px] pb-10 text-center' text='Learn more with FAQ' />
                <div data-aos="fade-up" className='max-w-[1240px] mx-auto'>
                    {ACCORDION_ITEMS.map((item, index) => (
                        <div
                            key={index}
                            className="border-b border-[#DDDDDF] transition-all duration-500"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className={`flex items-center justify-between font-poppins w-full text-left text-charcoal-black text-lg leading-6 font-medium ${activeIndex === index ? 'p-4 sm:pt-[18px] pb-1 sm:px-4' : 'px-4 py-5'
                                    }`}
                            >
                                <span className='max-sm:max-w-[235px]'>{item.title}</span>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-0' : 'rotate-180'}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {activeIndex === index ? (
                                        <path d="M5 12H19" stroke="black" strokeWidth="1.48" />
                                    ) : (
                                        <>
                                            <path d="M12 5V19" stroke="black" strokeWidth="1.48" />
                                            <path d="M5 12H19" stroke="black" strokeWidth="1.48" />
                                        </>
                                    )}
                                </svg>
                            </button>
                            <div
                                ref={(el) => (contentRefs.current[index] = el)}
                                style={{
                                    height: activeIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px',
                                }}
                                className="overflow-hidden transition-all duration-500 ease-in-out"
                            >
                                <div className="p-[0_16px_16px_16px] sm:pb-2 sm:px-4 sm:pt-2 text-charcoal-black font-poppins font-normal text-lg leading-6">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
