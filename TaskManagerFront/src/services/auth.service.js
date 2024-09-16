import axiosInstance from "../adapters/axiosInstance";

export const login = async (email, password) => {
    try {
        const result = await axiosInstance.post("/auth/login", { email, password });
        return result.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            throw Error(error.response.data); 
        }
    }
};
