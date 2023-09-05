/* eslint-disable react/prop-types */
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import './Category.css'
import { useState } from "react";
import { PiLadder } from 'react-icons/pi';
import { LuConstruction } from 'react-icons/lu';
import { BsTools } from 'react-icons/bs';
import { MdElectricalServices } from 'react-icons/md';
import { GiRobotGrab, GiFreemasonry } from 'react-icons/gi';



const Category = () => {
    const [, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: {
            perView: 3,
            spacing: 15,
        },
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return (
        <div className="mt-48 mb-60 bg-[#DFE0DF]">
            <div className="mx-auto xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl
        xxl:max-w-screen-xxl px-2 md:px-3 lg:px-5">
                <h1 className="text-center uppercase font-black text-gray-950 text-5xl">Shop By Category</h1>
                <p className="text-lg text-center mt-8 text-gray-600">You contribute over half of your life operating. Let us help you find the right fit for you or your corporation.</p>
            </div>
            <div className="bg-white py-8 md:py-10 mt-16">
                <div className="navigation-wrapper mx-auto xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl
        xxl:max-w-screen-xxl px-10 md:px-12 xl:px-16">
                    <div ref={sliderRef} className="keen-slider">
                        <div className="keen-slider__slide number-slide1">
                            <div className="text-zinc-500 min-w-fit w-fit min-h-fit h-fit hover:cursor-pointer bg-transparent hover:text-primary duration-150 ease-linear flex flex-col md:flex-row justify-center items-center">
                                <PiLadder className="h-10 w-10 sm:h-14 sm:w-14 lg:h-20 lg:w-20"></PiLadder>
                                <p className="text-xs md:text-sm lg:text-xl text-center">Ladder Stairs</p>
                            </div>
                        </div>
                        <div className="keen-slider__slide number-slide2">
                            <div className="text-zinc-500 min-w-fit w-fit min-h-fit h-fit hover:cursor-pointer bg-transparent hover:text-primary duration-150 ease-linear flex flex-col md:flex-row justify-center items-center">
                                <LuConstruction className="h-10 md:me-2 w-10 sm:h-14 sm:w-14 lg:h-20 lg:w-20"></LuConstruction>
                                <p className="text-xs md:text-sm lg:text-xl text-center">Warning Boards</p>
                            </div>
                        </div>
                        <div className="keen-slider__slide number-slide3">
                            <div className="text-zinc-500 min-w-fit w-fit min-h-fit h-fit hover:cursor-pointer bg-transparent hover:text-primary duration-150 ease-linear flex flex-col md:flex-row justify-center items-center">
                                <BsTools className="h-10 md:me-2 w-10 sm:h-14 sm:w-14 lg:h-20 lg:w-20"></BsTools>
                                <p className="text-xs md:text-sm lg:text-xl text-center">Hand Tools</p>
                            </div>
                        </div>
                        <div className="keen-slider__slide number-slide4">
                            <div className="text-zinc-500 min-w-fit w-fit min-h-fit h-fit hover:cursor-pointer bg-transparent hover:text-primary duration-150 ease-linear flex flex-col md:flex-row justify-center items-center">
                                <MdElectricalServices className="h-10 md:me-2 w-10 sm:h-14 sm:w-14 lg:h-20 lg:w-20"></MdElectricalServices>
                                <p className="text-xs md:text-sm lg:text-xl text-center">Electrical Tools</p>
                            </div>
                        </div>
                        <div className="keen-slider__slide number-slide5">
                            <div className="text-zinc-500 min-w-fit w-fit min-h-fit h-fit hover:cursor-pointer bg-transparent hover:text-primary duration-150 ease-linear flex flex-col md:flex-row justify-center items-center">
                                <GiFreemasonry className="md:me-2 h-10 w-10 sm:h-14 sm:w-14 lg:h-20 lg:w-20"></GiFreemasonry>
                                <p className="text-xs md:text-sm lg:text-xl text-center">Mandatory Tools</p>
                            </div>
                        </div>
                        <div className="keen-slider__slide number-slide6">
                            <div className="text-zinc-500 min-w-fit w-fit min-h-fit h-fit hover:cursor-pointer bg-transparent hover:text-primary duration-150 ease-linear flex flex-col md:flex-row justify-center items-center">
                                <GiRobotGrab className="md:me-2 h-10 w-10 sm:h-14 sm:w-14 lg:h-20 lg:w-20"></GiRobotGrab>
                                <p className="text-xs md:text-sm lg:text-xl text-center">Heavy Tools</p>
                            </div>
                        </div>
                    </div>
                    {loaded && instanceRef.current && (
                        <>
                            <Arrow
                                left
                                onClick={(e) =>
                                    e.stopPropagation() || instanceRef.current?.prev()
                                }
                            />

                            <Arrow
                                onClick={(e) =>
                                    e.stopPropagation() || instanceRef.current?.next()
                                }
                            />
                        </>
                    )}
                </div >
            </div>
            <div className="h-[100vh] w-full">Hello</div>
        </div >
    );
};

export default Category;

function Arrow(props) {
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"
                }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path fill="#DFE0DF" className="hover:fill-primary duration-200 ease-in-out" d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path fill="#DFE0DF" className="hover:fill-primary duration-200 ease-in-out" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}
