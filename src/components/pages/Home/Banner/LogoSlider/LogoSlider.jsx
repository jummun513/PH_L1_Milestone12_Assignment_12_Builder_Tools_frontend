import Marquee from 'react-fast-marquee';
import MarqueeElement from './MarqueeElement/MarqueeElement';


const LogoSlider = () => {
  return (
    <div className="mx-auto xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl
    xxl:max-w-screen-xxl px-2 md:px-3 lg:px-5">
      <Marquee pauseOnHover={true} speed={100}>
        <MarqueeElement></MarqueeElement>
      </Marquee>
    </div>
  );
};

export default LogoSlider;