// import styled from "styled-components";
// import img from '../../../../assets/images/reviews-bg.svg';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Test from "../Test/Test";
import { useState } from "react";
// import styled from "styled-components";

const review = [
    { user: 1 },
    { user: 2 },
    { user: 3 },
    { user: 4 },
    { user: 5 },
    { user: 6 },
]

const Reviews = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        breakpoints: {
            "(max-width: 1536px)": {
                slides: {
                    perView: 2,
                    spacing: 10
                }
            },
            "(max-width: 768px)": {
                slides: {
                    perView: 1,
                }
            }
        },
        slides: {
            perView: 3,
            spacing: 10
        }
    },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    );

    return (
        <div className="relative grid z-10 mb-20">
            <div className="relative mt-40">
                <div className="bg-primary absolute z-10 w-full blur-[2px] flex justify-center items-center h-36 xsm:h-44 sm:h-56 md:h-72 text-white font-mono font-bold text-lg xsm:text-xl sm:text-4xl md:text-4xl lg:text-6xl">
                    What Says Our Happy Customers!
                </div>
                <div className="bg-primary absolute h-36 xsm:h-44 sm:h-56 md:h-72 w-full top-0 z-10 opacity-75"></div>
                <div className="absolute z-20 text-white flex justify-center items-top w-full mt-10 md:mt-16 text-2xl xsm:text-3xl sm:text-5xl lg:text-7xl font-bold font-serif">Customer Reviews</div>
            </div>
            <div className="relative mt-48 sm:mt-60 md:mt-96 px-2 md:px-3 lg:px-5">
                <div ref={sliderRef} className="keen-slider mx-auto xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl
xxl:max-w-screen-xxl">
                    {review.map((item, idx) => {
                        return (
                            <div className="keen-slider__slide flex justify-center items-center">
                                <Test key={idx} item={item}></Test>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Reviews;

// const Background = styled.div`
// background-image: url(${img});
// height: 800px;
// background-position: center;
// background-size: contain;
// opacity: 0.3;
// background-repeat: no-repeat;
// `

function Arrow(props) {
    const { left, onClick } = props;
    return (
        <svg
            onClick={onClick}
            className={`arrow ${left ? "arrow--left" : "arrow--right"
                }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {left && (
                <path fill="#DFE0DF" className="hover:fill-primary duration-200 ease-in-out" d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!left && (
                <path fill="#DFE0DF" className="hover:fill-primary duration-200 ease-in-out" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )

}