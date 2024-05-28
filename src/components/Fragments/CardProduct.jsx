import Button from "../Elements/Button";

const CardProduct = (props) => {

    const {children} = props;

    return(
        <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-3 my-2 flex flex-col justify-between">
            {children}
        </div>
    );

};

const Header = (props) => {
    const {image}= props;
    return(
        <a href="#">
                <img src={image} alt="product" className="p-8 rounded-t-lg h-60 w-full object-cover"/>
            </a>
    );
}

const Body = (props) => {
    const {children, title} = props;
    return (
        <div className="px-5 pb-5 h-full">
        <a href="">
            <h5 className="text-xl font-semibold tracking-tight text-white">{title.substring(0,20)}...</h5>
        </a>
        <p className="text-s text-white">{children.substring(0,100)}</p>      
    
    </div>
    );
};

const Footer = (props) => {
    const{price, handleAddToCart, id} = props;
    return(
    <div className="flex items-center justify-between px-5 pb-5">
                <span className="text-xl font-bold text-white m-4"> ${price.toLocaleString('id-ID', {styles:'currency',currency:'USD' })}</span>
                
                <Button classname="bg-blue-500" onClick={()=>handleAddToCart(id)}> 
                add to cart
                </Button>
            </div>
    );
};


CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;