import axios from "axios";

export const login = (data) => {
    axios.post("https://fakestoreapi.com/auth/login",data).then((response) => {
        console.log(response);
        localStorage.setItem('token', response.data.token);
        window.location.href = "/product";
    }).catch((error) => {
        console.error(error);
    });
}