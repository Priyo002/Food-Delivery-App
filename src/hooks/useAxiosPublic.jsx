import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://food-delivery-app-t6wc.onrender.com'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
