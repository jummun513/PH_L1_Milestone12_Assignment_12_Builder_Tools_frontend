import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useEffect, useState } from "react";
import './Banner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LogoSlider from "./LogoSlider/LogoSlider";
import { useNavigate } from "react-router-dom";


const carousel = [
    "https://i.ibb.co/Vp99rD3/carousel-3.jpg",
    "https://i.ibb.co/djGq4tq/carousel-1.jpg",
    "https://i.ibb.co/YXMBcQ8/carousel-2.jpg",
]

const Banner = () => {
    const navigate = useNavigate();
    useEffect(() => {
        AOS.init();
    }, [])

    const [opacities, setOpacities] = useState([])

    const [sliderRef] = useKeenSlider({
        slides: carousel.length,
        loop: true,
        detailsChanged(s) {
            const new_opacities = s.track.details.slides.map((slide) => slide.portion)
            setOpacities(new_opacities)
        },
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
                    }, 5000)
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
    )

    return (
        <div className="relative">
            <div ref={sliderRef} className="fader">
                {carousel.map((src, idx) => (
                    <div
                        key={idx}
                        className="fader__slide"
                        style={{ opacity: opacities[idx] }}
                    >
                        <img src={src} />
                    </div>
                ))}
            </div>
            <div className="absolute left-0 right-0 mx-auto bottom-48 md:bottom-[20%] xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl px-3 lg:px-5">
                <div className="md:bg-[#44547d45] md:border-l-8 border-[#44547d] md:w-[70%] md:px-14 md:py-10 lg:px-20 lg:py-14 text-center md:text-left">
                    <div data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false">
                        <h1 className="text-primary text-xl xsm:text-2xl md:text-3xl xl:text-5xl text-center md:text-left">Jummun and Jaber established the Builder Tool Co.® in 1981.</h1>
                        <p className="text-justify mt-5 md:mt-8 md:text-left text-sm sm:text-base md:text-lg">Builder Tool’s product line is manufactured for the Professional Craftsman. Our tools are created for everyday use by the professional cement finisher, brick mason, asphalt paver, tile setter, plasterer, or drywall craftsman.</p>
                        <button onClick={() => navigate('/tools')} className="btn mt-3 md:mt-5 btn-sm lg:btn-md bg-gradient-to-r from-grad to-primary border border-primary text-white hover:border-secondary">All Products</button>
                    </div>
                </div>
            </div>
            <div className="w-full bg-gradient-to-t from-grad to-primary">
                <LogoSlider></LogoSlider>
            </div>
        </div>
    );
};

export default Banner;