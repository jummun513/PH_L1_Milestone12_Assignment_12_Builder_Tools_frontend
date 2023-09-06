import { Link } from "react-router-dom";
import './TopOffer.css';
import { styled } from "styled-components";
import { useEffect } from "react";
import Aos from "aos";

const TopOffer = () => {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className="bg-[#f3f3f3] pt-36 md:pt-48">
            <div className='mx-auto xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl
xxl:max-w-screen-xxl px-2 md:px-3 lg:px-20'>
                <div className="md:flex">
                    <CardContainer1
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                        data-aos-once="false"
                        data-aos-mirror="true" className="on-hover-card mb-6 sm:mb-10 md:mb-0 flex justify-between overflow-hidden items-center md:w-1/2 md:me-2 lg:me-8 min-w-[300px] h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px]">
                        <div className="w-1/2 card-zoom-image bg-topOffer2 h-full transition-all duration-[1.5s] ease-in-out transform bg-center bg-contain bg-no-repeat"></div>
                        <div className="w-[60%] sm:w-1/2 z-10">
                            <p className="text-sm md:text-lg text-primary">TAKE AN ADDITIONS</p>
                            <h2 className="text-sm md:text-2xl text-slate-50 mt-2 md:mt-4 font-black font-sans">Big Grinding Machine</h2>
                            <p className="text-xs md:text-sm my-1">Get 20% off your order only $100.00</p>
                            <Link><button className="btn mt-1 md:mt-5 btn-xs md:btn-sm lg:btn-md bg-gradient-to-r from-grad to-primary border border-primary text-white hover:border-secondary">Buy Now</button></Link>
                        </div>
                    </CardContainer1>
                    <CardContainer2 data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                        data-aos-once="false"
                        data-aos-mirror="true" className="on-hover-card flex flex-row-reverse justify-between overflow-hidden items-center md:w-1/2 min-w-[300px] h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px]">
                        <div className="w-1/2 card-zoom-image bg-topOffer1 h-full transition-all duration-1000 ease-in-out transform bg-center bg-contain bg-no-repeat"></div>
                        <div className="w-[70%] sm:w-1/2 z-10 ps-5 lg:ps-10">
                            <p className="text-lg sm:text-2xl md:text-4xl lg:text-6xl text-primary"><sup>OFF </sup>50%</p>
                            <p className="text-xs md:text-sm my-1">Get 20% off your order only $100.00</p>
                            <Link><button className="btn mt-1 md:mt-5 btn-xs md:btn-sm lg:btn-md bg-gradient-to-r from-grad to-primary border border-primary text-white hover:border-secondary">Buy Now</button></Link>
                        </div>
                    </CardContainer2>
                </div>
            </div>
        </div>
    );
};

export default TopOffer;

const CardContainer1 = styled.div`
background: rgb(0,0,0);
background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(48,48,48,1) 100%);
`

const CardContainer2 = styled.div`
background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(48,48,48,1) 100%);
`