import Banner from "./Banner/Banner";
import BigOffer from "./BigOffer/BigOffer";
import Category from "./Category/Category";
import TopOffer from "./TopOffer/TopOffer";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopOffer></TopOffer>
            <Category></Category>
            <BigOffer></BigOffer>
        </div>
    );
};

export default Home;