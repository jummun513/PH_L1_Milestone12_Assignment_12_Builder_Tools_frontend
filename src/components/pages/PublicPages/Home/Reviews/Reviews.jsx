import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Review from "./Review/Review";
import { useGetAllReviews } from "../../../../../utilities/hooks/reviews.hook";
import Loading from "../../../../shared/Loading/Loading";

const Reviews = () => {
    const { data, isError, isLoading, error } = useGetAllReviews();

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
                    spacing: 0
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
                    }, 3000)
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

    if (isLoading) {
        return <div className="h-[80vh] flex justify-center items-center"><Loading></Loading></div>;
    }

    if (error && isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="relative grid z-10 mb-40 md:mb-56 xl:mb-72">
            <div className="relative">
                <div className="bg-primary absolute pb-5 lg:pb-8 h-28 xsm:h-36 sm:h-44 md:h-48 lg:h-60 text-white font-mono font-bold text-lg xsm:text-xl sm:text-4xl md:text-4xl lg:text-6xl z-10 w-full blur-[1px] flex justify-center items-end">
                    What Say Our Happy Customers?
                </div>
                <div className="bg-primary absolute h-28 xsm:h-36 sm:h-44 md:h-48 lg:h-60 w-full top-0 z-10 opacity-75"></div>
                <div className="absolute z-20 text-white flex justify-center items-top w-full mt-8 md:mt-10 text-2xl xsm:text-3xl sm:text-5xl lg:text-7xl font-bold font-serif">Customer Reviews</div>
            </div>
            <div ref={sliderRef} className="keen-slider mt-48 sm:mt-60 md:mt-72 xl:mt-96 mx-auto xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl
xxl:max-w-screen-xxl">
                {data.map((item, idx) => {
                    return (
                        <div key={idx} className="keen-slider__slide flex justify-center items-center">
                            <Review item={item}></Review>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Reviews;