import axios from "axios";

export const getAllData = async (endpoint) => {
    const res = await axios.get(
        `${import.meta.env.VITE_serverSideLink}/api/v1/${endpoint}`
    );
    return res.data;
};

export const deleteSingleData = async (endpoint) => {
    return await axios.delete(
        `${import.meta.env.VITE_serverSideLink}/api/v1/${endpoint}`
    );
};

export const addBlogs = async (endpoint, data) => {
    return await axios.post(
        `${import.meta.env.VITE_serverSideLink}/api/v1/${endpoint}`,
        data,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
};

// export const putData = async (endpoint, data) => {
//     return await axios.put(
//         `${import.meta.env.VITE_serverSideLink}/api/${endpoint}`,
//         data,
//         {
//             headers: {
//                 "Content-Type": "multipart/form-data",
//             },
//         }
//     );
// };

export const patchData = async (endpoint, data) => {
    return await axios.patch(
        `${import.meta.env.VITE_serverSideLink}/api/v1/${endpoint}`,
        data,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
};