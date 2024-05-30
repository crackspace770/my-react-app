import axios from "axios";

export const getProduct = async (callback) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        callback(response.data);
    } catch (error) {
        console.error(error);
    }
};

export const getDetailProduct = async (id, callback) => {
    axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((response) => {
        callback(response.data);
    })
    .catch((error) => {
        console.error(error);
    });
};