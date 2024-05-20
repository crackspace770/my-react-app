import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
    {
        id: 1,
        name: "Sepatu Baru",
        description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        price: 500000,
        image: "/images/shoes-1.jpg"
    },
    {
        id: 2,
        name: "Sepatu Lama",
        description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        price: 500000,
        image: "/images/shoes-1.jpg"
    },
    {
        id: 3,
        name: "Neo Sepatu",
        description: "dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        price: 200000,
        image: "/images/shoes-1.jpg"
    }
];

const email = localStorage.getItem('email');
const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = "/login";
};

const ProductsPage = () => {

    return (
     <Fragment>
        <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
            {email}
            <Button classname="ml-5 bg-black" onClick={handleLogout}>
                Logout
                </Button>

        </div>
        <div className="flex justify-center py-5">   
        {products.map( (product) =>
         <CardProduct ley={product.id}>
            <CardProduct.Header image={product.image}/>
            <CardProduct.Body title={product.name}>
            {product.description} 
            </CardProduct.Body>
            <CardProduct.Footer price={product.price}/>
        </CardProduct>
        )}
        </div>
     </Fragment>   
   
    );

};

export default ProductsPage;