import { Fragment, useState } from "react";
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


const ProductsPage = () => {
    
    const [cart, setCart] = useState([
        {
            id: 1,
            qty:1,
            name: "Sepatu Baru",
            description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
            price: 500000,
            image: "/images/shoes-1.jpg"
        }
    ]);

    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = "/login";
    };

    const handleAddToCart = (id) => {
       if(cart.find((item) => item.id === id)){
           setCart(
               cart.map((item) => 
               item.id === id ? {...item, qty: item.qty + 1} : item
               )
           );
       } else{
        setCart([...cart, { id, qty:1 }]);
       }
    };

    return (
     <Fragment>
        <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
            {email}
            <Button classname="ml-5 bg-black" onClick={handleLogout}>
                Logout
                </Button>

        </div>

        <div className="flex justify-center py-5">   
        <div className="w-4/6 flex-wrap">

        {products.map( (product) =>
         <CardProduct key={product.id}>
            <CardProduct.Header image={product.image}/>
            <CardProduct.Body title={product.name}>
            {product.description} 
            </CardProduct.Body>
            <CardProduct.Footer 
                price={product.price} 
                id={product.id}
                handleAddToCart = {handleAddToCart} 
            />
        </CardProduct>
        )}
        </div>
        
        <div className="w-2/6">
        <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2"> Cart</h1>
        <hr className="my-2"/>
        <table className="text-left table-auto border-separate border-spacing-x-5 ">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((item)=>{
                    const product = products.find((product) => product.id === item.id);
                    return(
                        <tr key={item.id}>
                            <td>{product.name}</td>
                            <td>
                                Rp{""}
                            {product.price.toLocaleString('id-ID', {
                                styles:'currency',
                                currency:'IDR' 
                                }) }
                            </td>
                            <td>{item.qty}</td>
                            <td>Rp {(item.qty * product.price).toLocaleString('id-ID', {
                                styles:'currency',
                                currency:'IDR' 
                                })}</td>
                        </tr>
                    );
                    })}
            </tbody>
        </table>
        </div>
    
        </div>
     </Fragment>   
   
    );

};

export default ProductsPage;