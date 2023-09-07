import Banner from "./Banner/Banner";
import BigOffer from "./BigOffer/BigOffer";
import Category from "./Category/Category";
import TopOffer from "./TopOffer/TopOffer";
import FeatureProducts from "./FeatureProducts/FeatureProducts";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopOffer></TopOffer>
            <Category></Category>
            <FeatureProducts></FeatureProducts>
            <BigOffer></BigOffer>
        </div>
    );
};

export default Home;