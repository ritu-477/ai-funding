import React from 'react'
import { PLATFORMS_DATA } from '../common/Helper' 

const Platforms = () => {
    return (
        <div className="bg-charcoal-black pt-[46px] pb-[54px]">
            <div className="max-w-[739px] mx-auto max-md:px-12">
                <p className="text-white md:hidden block pb-[30px] font-poppins text-sm leading-custom-2xl text-center">
                    MAIN SUPPORTED PLATFORMS
                </p>
                <div className="flex gap-11 md:gap-[52px] max-md:flex-wrap justify-center">
                    <p className="text-white md:block hidden font-poppins text-sm leading-custom-2xl">
                        MAIN SUPPORTED PLATFORMS
                    </p>
                    {PLATFORMS_DATA.map((platform) => (
                        <a
                            key={platform.id}
                            className="sm:max-w-[60px] max-w-[70px]"
                            href={platform.link}
                        >
                            <img src={platform.img} alt={platform.alt} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Platforms;