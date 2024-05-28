import axios from "axios";

export const getProduct = async (callback) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        callback(response.data);
    } catch (error) {
        console.error(error);
    }
};