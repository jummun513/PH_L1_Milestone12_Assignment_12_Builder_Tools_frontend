import { Rating } from "@mui/material";

const Review = (item) => {
    const { image, name, description, rating } = item.item;

    return (
        <div className="relative flex w-full max-w-[30rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none px-3 md:px-5">
            <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                <img
                    src={image !== "" ? image : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"}
                    alt={name + " image"}
                    className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                />
                <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row sm:justify-between items-center sm:w-full md:w-auto lg:w-full">
                    <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {name}
                    </h5>
                    <div className="5 flex items-center gap-0">
                        <Rating name="half-rating-read" precision={0.5} defaultValue={Number(rating)} readOnly />
                    </div>
                </div>
            </div>
            <div className="mb-6 p-0">
                <p className="block font-sans text-sm md:text-base font-light lg:font-normal leading-relaxed text-inherit antialiased">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Review;