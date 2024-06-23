import { useState } from 'react';
import { AiTwotoneStar, AiFillHeart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const ToolsCard = (data) => {
    const { _id, img, heading, price, minOrder, quantity
    } = data.data;
    const navigate = useNavigate();
    const [favourite, setFavourite] = useState(false);




    return (
        <div className="relative flex w-[320px] lg:hover:bottom-1 flex-col rounded-xl bg-[#fefefe] bg-clip-border text-gray-700 shadow-md">
            <div className="mx-3 w-[300px] p-2 overflow-hidden mt-4 rounded-xl bg-[#f3f3f3] bg-clip-border text-gray-700">
                <img
                    src={img}
                    className="h-full w-full object-contain aspect-[4/3]"
                />
            </div>
            <div className="p-6 pb-2 flex justify-between items-center">
                <div className='flex items-center'><span onClick={() => setFavourite(!favourite)} className={`p-2 rounded-lg mr-2 cursor-pointer focus:ring-2 focus:ring-primary hover:bg-grad ${!favourite ? 'bg-black' : 'bg-grad'}`}><AiFillHeart className='text-white'></AiFillHeart></span> <span className={`text-sm ${favourite && 'text-green-600'}`}>{favourite ? 'Favourite' : 'Add to Favourites'}</span></div>
                <div className='flex items-center'><AiTwotoneStar className='text-yellow-400 h-6 w-6 mr-1'></AiTwotoneStar> <span className='text-sm'>5.0</span></div>
            </div>
            <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                        {heading}
                    </p>
                </div>
                <div>
                    <p className="block font-sans text-sm leading-normal text-gray-900 font-normal antialiased opacity-75">
                        Available stock: {quantity}<span className='font-normal'>pc.</span>
                    </p><p className="block font-sans text-sm leading-normal text-gray-900 font-normal antialiased opacity-75">
                        Minimum order: {minOrder}<span className='font-normal'></span>
                    </p>
                </div>
                <p className="block font-sans text-sm leading-normal text-gray-900 font-bold antialiased opacity-75">
                    <span className='text-base'>{price}</span> <span className='font-normal'>per unit pc.</span>
                </p>
            </div>
            <div className="p-6 pt-0">
                <button
                    onClick={() => navigate(`/tool/${_id}/purchase`)}
                    className="block w-full select-none rounded-lg bg-gradient-to-l text-slate-50 from-grad to-primary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                >
                    Order Now
                </button>
            </div>
        </div>
    );
};

export default ToolsCard;