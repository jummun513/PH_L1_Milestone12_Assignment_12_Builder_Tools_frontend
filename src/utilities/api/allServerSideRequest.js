import axios from "axios";

export const getAllData = async (endpoint) => {
    const res = await axios.get(
        `${import.meta.env.VITE_serverSideLink}/api/v1/${endpoint}`
    );
    return res.data;
};