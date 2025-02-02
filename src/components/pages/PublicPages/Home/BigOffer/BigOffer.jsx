import { Link } from 'react-router-dom';
import p_img from '../../../../../assets/images/offer/product-1.png';
import Countdown from 'react-countdown';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const BigOffer = () => {
    useEffect(() => {
        AOS.init();
    }, [])


    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <div></div>
        } else {
            return <div className='flex justify-start items-center'>
                <div data-aos="flip-up" data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false" className='h-[75px] w-[75px] md:h-24 md:w-24 flex flex-col justify-center items-center rounded-full bg-[#402E32] text-lg md:text-2xl font-bold p-3 md:p-5 mr-1 md:mr-2'>{days} <hr className='w-full' /> <span className='text-sm md:text-lg font-normal'>Days</span></div>
                <div data-aos="flip-left" data-aos-offset="200"
                    data-aos-delay="150"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false" className='h-[75px] w-[75px] md:h-24 md:w-24 flex flex-col justify-center items-center rounded-full bg-[#402E32] text-lg md:text-2xl font-bold p-3 md:p-5 mr-1 md:mr-2'>{hours} <hr className='w-full' /> <span className='text-sm md:text-lg font-normal'>Hours</span></div>
                <div data-aos="flip-down" data-aos-offset="200"
                    data-aos-delay="250"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false" className='h-[75px] w-[75px] md:h-24 md:w-24 flex flex-col justify-center items-center rounded-full bg-[#402E32] text-lg md:text-2xl font-bold p-3 md:p-5 mr-1 md:mr-2'>{minutes} <hr className='w-full' /> <span className='text-sm md:text-lg font-normal'>Minutes</span></div>
                <div data-aos="flip-right" data-aos-offset="200"
                    data-aos-delay="350"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false" className='h-[75px] w-[75px] md:h-24 md:w-24 flex flex-col justify-center items-center rounded-full bg-[#402E32] text-lg md:text-2xl font-bold p-3 md:p-5'>{seconds} <hr className='w-full' /> <span className='text-sm md:text-lg font-normal'>Seconds</span></div>
            </div>;
        }
    };


    return (
        <div>
            <h1 data-aos="fade-down"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
                className='relative top-6 sm:top-10 md:top-14 lg:top-20 xl:top-28 xxl:top-36 font-black text-7xl sm:text-9xl md:text-[10rem] lg:text-[14rem] xl:text-[18rem] xxl:text-[21rem] text-center text-slate-200 mx-auto xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl'>Big Offer</h1>
            <div className='bg-gradient-to-b from-grad to-primary h-[36rem] sm:h-[52rem] md:h-[60rem] lg:h-[56rem] xl:h-[48rem] xxl:h-[43rem]'>
                <div className='flex flex-col-reverse lg:flex-row pt-14 md:pt-32 lg:pt-56 pb-20 mx-auto xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl px-2 md:px-3 lg:px-5'>
                    <div className='text-white pt-8 lg:pt-0 md:text-left lg:w-[40%] mt-5 lg:mt-0'>
                        <h2 className='text-xl sm:text-2xl lg:text-5xl uppercase'>Deals of the weeks</h2>
                        <p className='text-3xl sm:text-5xl lg:text-8xl mt-3 lg:mt-5 font-[900]'>SALE <span>50<sup>%</sup></span> OFF</p>
                        <h3 className='text-xl sm:text-2xl font-semibold mt-5 lg:mt-10'>Concrete saw Cutting Abrasive</h3>
                        <p className='text-xl sm:text-2xl font-semibold mt-3'><strike>$98.00 </strike><span className='text-[#683B21]'>Now: $72.45</span></p>
                        <div className='mt-10 mb-8'>
                            <Countdown date={Date.now() + 66096000000} renderer={renderer} />
                        </div>
                        <p><Link to='/'><button className='btn btn-wide btn-sm sm:btn-md lg:btn-lg border-none bg-gradient-to-r from-grad to-primary text-white'>Hurry Up..!</button></Link></p>
                    </div>
                    <div className='p-3 sm:p-0 lg:w-[60%] lg:ps-5'>
                        <img data-aos="zoom-in-up" data-aos-offset="200"
                            data-aos-delay="0"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-once="false"
                            className='w-full h-auto' src={p_img} alt="Product Image" />
                    </div>
                </div>
            </div>
            <div className='bg-[#f3f3f3] h-[60rem] xsm:h-[65rem] sm:h-[48rem] lg:h-[36rem] mx-auto xsm:max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-xxl xxl:max-w-screen-xxxl'>
                <div className='mx-auto pt-60 xsm:pt-72 sm:pt-60 md:pt-[18rem] lg:pt-72 xxl:pt-80 xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl px-2 md:px-3 lg:px-5'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-y-0 md:gap-x-5'>
                        <div data-aos="fade-up" data-aos-offset="200"
                            data-aos-delay="0"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-once="false"
                            className="card flex-col sm:flex-row card-side bg-[#402E32] shadow-xl rounded-none">
                            <figure><img className='h-24 w-24 object-cover p-3' src='https://i.ibb.co/rsvxfNR/delivery.png' alt='' /></figure>
                            <div className="card-body text-slate-50 flex flex-col items-center sm:items-start">
                                <h2 className="card-title -mt-5 sm:mt-0">FREE SHIPPING</h2>
                                <p>Worldwide from $75 to start and other.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-offset="200"
                            data-aos-delay="0"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-once="false" className="card flex-col sm:flex-row text-center sm:text-left card-side bg-primary shadow-xl rounded-none">
                            <figure><img className='h-24 w-24 object-cover p-3' src='https://i.ibb.co/PmB7MB4/support.png' alt='' /></figure>
                            <div className="card-body text-slate-50 flex flex-col items-center sm:items-start">
                                <h2 className="card-title -mt-5 sm:mt-0">ONLINE SUPPORT</h2>
                                <p>24/7 Customer Help & Customer Support.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-offset="200"
                            data-aos-delay="0"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-once="false" className="card flex-col sm:flex-row card-side bg-grad shadow-xl rounded-none">
                            <figure><img className='h-24 w-24 object-contain md:object-cover p-3' src='https://i.ibb.co/5460ZbN/return.png' alt='' /></figure>
                            <div className="card-body text-slate-50 flex flex-col items-center sm:items-start">
                                <h2 className="card-title -mt-5 sm:mt-0">100% MONEY BACK</h2>
                                <p>In 365day any problem can be returned.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BigOffer;