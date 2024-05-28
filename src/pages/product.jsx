import { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import { getProduct } from "../services/product.service";
import { getUserName } from "../services/auth.service";



const ProductsPage = () => {

    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProduct] = useState([]);
    const [usernane, setUsername] = useState("");

   /* get data from local storage */
    useEffect(() => {  
        /*converse JSON string to javascript value*/
        setCart(JSON.parse(localStorage.getItem('cart')) || []);
     }, []);

     useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            setUsername(getUserName(token));
        }else{
            window.location.href = "/login";
        
        }
        setUsername(getUserName(token));
     }, []);

     useEffect(() => {
        getProduct(data => {
            setProduct(data);
        
        });
    });
    
     /* total price of added cart item and save it to local storage */
     useEffect(() => {
        if( products.length > 0 
            && cart.length > 0) {
            const totalPrice = cart.reduce((acc, item,)=>{
                const product = products.find((product) => product.id === item.id);
                return acc + (product.price * item.qty);
            },0);
            setTotalPrice(totalPrice);
            /*converse javascript value to JSON string*/
            localStorage.setItem('cart', JSON.stringify(cart));
        }
     }, [cart, products]);

     /* handle logout by deleting data from local storage*/
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('password');
        window.location.href = "/login";
    };

    /* add item to cart, add the same item +1 if already added */ 
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

    const totalPriceRef = useRef(null);

    useEffect(() => {
        if(cart.length > 0) {
            totalPriceRef.current.style.display = 'table-row';
        }else{
            totalPriceRef.current.style.display = 'none';
        }
    });

    console.log(totalPriceRef);

    return (
     <Fragment>
        <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
            {usernane && <p>Welcome, {usernane}</p>}
            <Button classname="ml-5 bg-black" onClick={handleLogout}>
                Logout
                </Button>

        </div>

        <div className="flex justify-center py-5">   
        <div className="w-4/6 flex-wrap">
        { products.length > 0 
        && products.map( (product) =>
         <CardProduct key={product.id}>
            <CardProduct.Header image={product.image}/>
            <CardProduct.Body title={product.title}>
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
                {products.length > 0 
                && cart.map((item)=>{
                    const product = products.find((product) => product.id === item.id);
                    return(
                        <tr key={item.id}>
                            <td>{product.title.substring(0,10)}...</td>
                            <td>
                                ${""}
                            {product.price.toLocaleString('id-ID', {
                                styles:'currency',
                                currency:'USD' 
                                }) }
                            </td>
                            <td>{item.qty}</td>
                            <td>$ {(item.qty * product.price).toLocaleString('id-ID', {
                                styles:'currency',
                                currency:'USD' 
                                })}</td>
                        </tr>
                    );
                    })}
                 <tr ref={totalPriceRef}>
                        <td colSpan={3}>
                           <b> Total Price </b> 
                            </td>
                        <td>
                            <b>
                            ${" "}
                            { (totalPrice).toLocaleString('id-ID', {
                                styles:'currency',
                                currency:'IDR' 
                                }) }
                            </b>
                       
                        </td>
                            </tr> 
            </tbody>

        </table>
        </div>
    
        </div>
     </Fragment>   
   
    );

};

export default ProductsPage;