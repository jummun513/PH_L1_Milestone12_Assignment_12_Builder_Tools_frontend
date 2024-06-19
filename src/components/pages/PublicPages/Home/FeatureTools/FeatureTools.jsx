import { styled } from "styled-components";
import img from "../../../../../assets/images/banner.jpg";
import './FeatureTools.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Loading from '../../../../shared/Loading/Loading';
import ToolsCard from "../../../../shared/ToolsCard/ToolsCard";
import { Link } from "react-router-dom";
import { useGetAllTools } from "../../../../../utilities/hooks/tools.hook";

const FeatureTools = () => {
    const { data, isError, isLoading, error } = useGetAllTools();

    if (isLoading) {
        return <div className="h-[80vh] flex justify-center items-center"><Loading></Loading></div>;
    }

    if (error && isError) {
        return <div>Error: {error.message}</div>;
    }

    const mandatory = data.filter(item => item.category.includes('Mandatory')).slice(0, 8);
    const ladderStair = data.filter(item => item.category.includes('Ladder' || 'Stairs')).slice(0, 8);
    const electric = data.filter(item => item.category.includes('Electric')).slice(0, 8);
    const heavy = data.filter(item => item.category.includes('Heavy')).slice(0, 8);



    return (
        <div className="h-fit">
            <BackGround className="relative bg-primary h-80 sm:h-72 bg-no-repeat bg-contain bg-center">
                <div className="h-full w-full absolute backdrop-blur-sm top-0"></div>
                <div className="relative z-10 w-full h-full flex flex-col py-4 md:py-14 justify-between items-center text-white">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-black font-sans">Featured Tools</h1>
                        <p className="text-slate-600 font-semibold text-xs sm:text-sm lg:text-lg mt-3">You contribute over half of your life
                            operating. Let us help you find the right fit for you or your corporation.</p>
                    </div>
                </div>
            </BackGround>
            <div className="relative -top-48 sm:-top-36 md:-top-32 lg:-top-20 z-10 mx-auto xsm:max-w-screen-xsm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl
xxl:max-w-screen-xxl px-2 md:px-3 lg:px-5">
                <Tabs>
                    <TabList id='#nestedNav' className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center text-lg font-bold text-gray-950 px-10'>
                        <Tab className='bg-[#f1f1f1] cursor-pointer py-3 text-sm md:text-base px-5 font-bold flex items-center justify-center hover:bg-black hover:text-white duration-200 ease-linear'>Mandatory Tools</Tab>
                        <Tab className='bg-[#f1f1f1] cursor-pointer py-3 text-sm md:text-base px-5 font-bold flex items-center justify-center hover:bg-black hover:text-white duration-200 ease-linear'>Ladder & Stair</Tab>
                        <Tab className='bg-[#f1f1f1] cursor-pointer py-3 text-sm md:text-base px-5 font-bold flex items-center justify-center hover:bg-black hover:text-white duration-200 ease-linear'>Electric Tools</Tab>
                        <Tab className='bg-[#f1f1f1] cursor-pointer py-3 text-sm md:text-base px-5 font-bold flex items-center justify-center hover:bg-black hover:text-white duration-200 ease-linear'>Heavy Tools</Tab>
                    </TabList>
                    <TabPanel>
                        <div>
                            <CardContainer>
                                {
                                    mandatory.map((item, idx) => <ToolsCard key={idx} data={item}></ToolsCard>)
                                }
                            </CardContainer>
                            <p className="text-center mt-20 md:mt-32"><Link><button className="btn btn-wide text-slate-50">See All Tools</button></Link></p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <CardContainer>
                                {
                                    ladderStair.map((item, idx) => <ToolsCard key={idx} data={item}></ToolsCard>)
                                }
                            </CardContainer>
                            <p className="text-center mt-20 md:mt-32"><Link><button className="btn btn-wide text-slate-50">See All Tools</button></Link></p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <CardContainer>
                                {
                                    electric.map((item, idx) => <ToolsCard key={idx} data={item}></ToolsCard>)
                                }
                            </CardContainer>
                            <p className="text-center mt-20 md:mt-32"><Link><button className="btn btn-wide text-slate-50">See All Tools</button></Link></p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <CardContainer>
                                {
                                    heavy.map((item, idx) => <ToolsCard key={idx} data={item}></ToolsCard>)
                                }
                            </CardContainer>
                            <p className="text-center mt-20 md:mt-32"><Link><button className="btn btn-wide text-slate-50">See All Tools</button></Link></p>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default FeatureTools;


const BackGround = styled.div`
background-image: url(${img});
`

const CardContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
place-items: center;
align-items:center;
justify-content: center;
grid-row-gap: 30px;
@media (max-width: 768px) {
    grid-row-gap: 20px;
}
`