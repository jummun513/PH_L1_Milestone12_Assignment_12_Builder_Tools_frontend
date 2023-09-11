import Banner from "./Banner/Banner";
import BigOffer from "./BigOffer/BigOffer";
import Category from "./Category/Category";
import TopOffer from "./TopOffer/TopOffer";
import FeatureTools from "./FeatureTools/FeatureTools";
import Quote from "./Quote/Quote";
import Reviews from "./Reviews/Reviews";
import Summary from "./Summary/Summary";

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