import { styled } from "styled-components";
import img from "../../../../assets/images/banner.jpg";
import './FeatureProduct.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useQuery } from "react-query";
import fetchData from "../../../../hooks/fetchData";
import Loading from '../../../shared/Loading/Loading';

const FeatureProducts = () => {
    const { data, isLoading, error } = useQuery("toolsData", () => fetchData('http://localhost:8080/tools'));

    console.log(data);

    if (isLoading) {
        return <div className="h-[80vh] flex justify-center items-center"><Loading></Loading></div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="">
            <BackGround className="relative bg-primary h-72 bg-no-repeat bg-contain bg-center">
                <div className="h-full w-full absolute backdrop-blur-sm top-0"></div>
                <div className="relative z-10 w-full h-full flex flex-col py-12 justify-between items-center text-white">
                    <div className="text-center">
                        <h1 className="text-5xl font-black font-sans">Featured Products</h1>
                        <p className="text-slate-50 text-xs sm:text-sm md:text-lg mt-3">You contribute over half of your life
                            operating. Let us help you find the right fit for you or your corporation.</p>
                    </div>
                </div>
            </BackGround>
            <div className="relative -top-20 z-10 mx-auto xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl
xxl:max-w-screen-xxl px-2 md:px-3 lg:px-5">
                <Tabs>
                    <TabList id='#nestedNav' className='flex justify-center text-lg font-bold space-x-8 text-gray-950'>
                        <Tab className='bg-[#f1f1f1] cursor-pointer py-2 px-5 font-bold flex items-center hover:bg-black hover:text-white duration-200 ease-linear'>Mandatory Tools</Tab>
                        <Tab className='bg-[#f1f1f1] cursor-pointer py-2 px-5 font-bold flex items-center hover:bg-black hover:text-white duration-200 ease-linear'>Ladder & Stair</Tab>
                        <Tab className='bg-[#f1f1f1] cursor-pointer py-2 px-5 font-bold flex items-center hover:bg-black hover:text-white duration-200 ease-linear'>Electric Tools</Tab>
                        <Tab className='bg-[#f1f1f1] cursor-pointer py-2 px-5 font-bold flex items-center hover:bg-black hover:text-white duration-200 ease-linear'>Heavy Tools</Tab>
                    </TabList>
                    <TabPanel className="mt-40">
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel className="mt-40">
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel className="mt-40">
                        <h2>Any content 3</h2>
                    </TabPanel>
                    <TabPanel className="mt-40">
                        <h2>Any content 4</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default FeatureProducts;


const BackGround = styled.div`
background-image: url(${img});
`