import img1 from '../../../../assets/images/user.png'
import img from '../../../../assets/images/tools.png'
import img2 from '../../../../assets/images/like.png'
import Aos from 'aos';
import { useEffect } from 'react';

const Summary = () => {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className=''>
            <div className='relative bg-statBg bg-no-repeat bg-center bg-cover rotate-180 w-full h-[70rem] xsm:h-[80rem] sm:h-[110rem] md:h-[120rem] xl:h-[90rem] xxl:h-[100rem] flex flex-col justify-center items-center'>
                <div className='bg-white opacity-[0.7] w-full h-full absolute top-0 blur-sm'></div>
                <div className='relative rotate-180 z-10 mx-auto xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl
        xxl:max-w-screen-xxl px-2 md:px-3 lg:px-5 flex flex-col items-center'>
                    <h1 className='text-lg xsm:text-xl md:text-4xl lg:text-5xl xl:text-7xl font-sans text-gray-950 font-black'>Our Monthly Business Statistics</h1>
                    <div className="grid xl:grid-cols-2 gap-y-4 xsm:gap-y-5 md:gap-y-10 justify-center items-center mt-16 md:mt-32">
                        <div
                            data-aos="zoom-in-up"
                            data-aos-delay="0"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-once="false" className="bg-white shadow-md lg:shadow-lg flex items-center justify-center border-s-[10px] xl:border-s-0 xl:border-e-[5px] border-primary w-[300px] xsm:w-[360px] sm:w-[600px] min-w-fit px-2 py-5 xsm:px-5 xsm:py-10 sm:px-10 sm:py-20">
                            <div className="pe-6 sm:pe-8 w-1/5 sm:w-1/4">
                                <img src="https://img.icons8.com/plasticine/100/view.png" alt="view" />
                            </div>
                            <div>
                                <h3 className="text-xl sm:text-2xl text-gray-600 font-semibold font-serif">Page Views</h3>
                                <p className="text-primary font-black text-2xl sm:text-5xl font-sans my-2">2.5M+</p>
                                <p className="text-sm sm:text-xl text-gray-500 font-mono">21% more than last month</p>
                            </div>
                        </div>
                        <div
                            data-aos="zoom-in-up"
                            data-aos-delay="100"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-once="false" className="bg-white shadow-md lg:shadow-lg flex items-center justify-center border-e-[10px] xl:border-e-0 xl:border-s-[5px] border-primary w-[300px] xsm:w-[360px] sm:w-[600px] min-w-fit px-2 py-5 xsm:px-5 xsm:py-10 sm:px-10 sm:py-20">
                            <div className="pe-6 sm:pe-8 w-1/5 sm:w-1/4">
                                <img src={img2} alt='' />
                            </div>
                            <div>
                                <h3 className="text-xl sm:text-2xl text-gray-600 font-semibold font-serif">Total Likes</h3>
                                <p className="text-primary font-black text-2xl sm:text-5xl font-sans my-2">25.6K</p>
                                <p className="text-sm sm:text-xl text-gray-500 font-mono">21% more than last month</p>
                            </div>
                        </div>
                        <div
                            data-aos="zoom-in-down"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-once="false" className="bg-white shadow-md lg:shadow-lg flex items-center justify-center border-s-[10px] xl:border-s-0 xl:border-e-[5px] border-primary w-[300px] xsm:w-[360px] sm:w-[600px] min-w-fit px-2 py-5 xsm:px-5 xsm:py-10 sm:px-10 sm:py-20">
                            <div className="pe-6 sm:pe-8 w-1/5 sm:w-1/4">
                                <img src={img} alt="view" />
                            </div>
                            <div>
                                <h3 className="text-xl sm:text-2xl text-gray-600 font-semibold font-serif">Stock Tools</h3>
                                <p className="text-primary font-black text-2xl sm:text-5xl font-sans my-2">1,230+</p>
                                <p className="text-sm sm:text-xl text-gray-500 font-mono"><span className='p-1 bg-blue-500 font-bold text-white rounded'>&#8598;</span> 90 (14%)</p>
                            </div>
                        </div>
                        <div
                            data-aos="zoom-in-down"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-once="false" className="bg-white shadow-md lg:shadow-lg flex items-center justify-center border-e-[10px] xl:border-e-0 xl:border-s-[5px] border-primary w-[300px] xsm:w-[360px] sm:w-[600px] min-w-fit px-2 py-5 xsm:px-5 xsm:py-10 sm:px-10 sm:py-20">
                            <div className="pe-6 sm:pe-8 w-1/5 sm:w-1/4">
                                <img src={img1} alt="view" />
                            </div>
                            <div>
                                <h3 className="text-xl sm:text-2xl text-gray-600 font-semibold font-serif">New Register</h3>
                                <p className="text-primary font-black text-2xl sm:text-5xl font-sans my-2">1,200+</p>
                                <p className="text-sm sm:text-xl text-gray-500 font-mono"><span className='p-1 bg-blue-500 font-bold text-white rounded'>&#8598;</span> 90 (14%)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;