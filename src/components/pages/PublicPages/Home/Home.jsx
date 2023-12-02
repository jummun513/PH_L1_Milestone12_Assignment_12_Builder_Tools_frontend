import Banner from './Banner/Banner';
import TopOffer from './TopOffer/TopOffer';
import Category from './Category/Category';
import FeatureTools from './FeatureTools/FeatureTools';
import Quote from './Quote/Quote';
import BigOffer from './BigOffer/BigOffer';
import Summary from './Summary/Summary';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopOffer></TopOffer>
            <Category></Category>
            <FeatureTools></FeatureTools>
            <Quote></Quote>
            <BigOffer></BigOffer>
            <Summary></Summary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;