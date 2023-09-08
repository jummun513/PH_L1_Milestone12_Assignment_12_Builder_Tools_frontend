import styled from "styled-components";
import img from '../../../../assets/images/quote_background.jpg';
import img1 from '../../../../assets/images/quote-foreground.png';

const Quote = () => {
    return (
        <div className="bg-black xsm:mt-10 sm:mt-48 lg:mt-72 xl:mt-96 mb-36 xl:mb-48">
            <Background>
                <div className="flex justify-between items-center mx-auto xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl
xxl:max-w-screen-xxl px-2 md:px-3 lg:px-5">
                    <div className="w-[60%] sm:w-[65%] me-3 sm:me-5 md:me-10 xxl:w-[60%]">
                        <p className="text-xs xsm:text-sm md:text-base flex items-top xl:text-5xl"> <span className="text-primary xl:text-9xl font-mono text-sm xsm:text-base sm:text-lg md:text-5xl lg:text-7xl font-bold">&ldquo;</span> &nbsp; Masonic labor is purely a labor of love. He who seeks to draw Masonic wages in gold and silver will be disappointed. The wages of a Mason are in the dealings with one another; sympathy begets sympathy, kindness begets kindness, helpfulness begets helpfulness, and these are the wages of a Mason. &nbsp; <span className="text-primary font-mono text-sm xsm:text-base font-bold sm:text-lg md:text-5xl lg:text-7xl xl:text-9xl">&rdquo;</span></p>
                        <p className="text-primary text-sm xsm:text-base md:text-xl xl:text-2xl font-bold xsm:mt-2 sm:mt-3 md:mt-5 xl:mt-10 md:ms-5 lg:ms-10 xl:ms-20">Benjamin Franklin</p>
                    </div>
                    <div className="w-[40%] sm:w-[35%] grid place-items-end">
                        <img className="-mt-16 sm:-mt-32 xxl:-mt-60" src={img1}></img>
                    </div>
                </div>
            </Background>
        </div>
    );
};

export default Quote;

const Background = styled.div`
background-image: url(${img});
background-repeat: no-repeat;
background-position: center;
`