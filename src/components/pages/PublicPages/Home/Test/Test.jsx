import img1 from '../../../../assets/images/user.png'
import img from '../../../../assets/images/tools.png'
import img2 from '../../../../assets/images/like.png'

const Test = () => {
    return (
        <div className=''>
            <h1 className='text-7xl font-sans text-gray-950 font-black'>Our Monthly Business Statistics</h1>
            <div className="stats shadow mt-20">
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <img width="100" height="100" src={img2} alt='' />
                    </div>
                    <div className="stat-title">Total Likes</div>
                    <div className="stat-value text-primary">25.6K</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <img width="100" height="100" src="https://img.icons8.com/plasticine/100/view.png" alt="view" />
                    </div>
                    <div className="stat-title">Page Views</div>
                    <div className="stat-value text-secondary">2.6M</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <img width="100" height="100" src={img1} alt="" />
                    </div>
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">&#8598; 90 (14%)</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <img width="100" height="100" src={img} alt="" />
                    </div>
                    <div className="stat-title">Stock Tools</div>
                    <div className="stat-value text-primary">1,200</div>
                    <div className="stat-desc">&#8600; 90 (14%)</div>
                </div>
            </div>
        </div>
    );
};

export default Test;