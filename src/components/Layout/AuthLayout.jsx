import { Link } from "react-router-dom";

const AuthLayout = (props) =>{
    const {children, title, type} = props;
    return (
        <div className ="flex justify-center min-h-screen items-center">
             <div className="w-full max-w-xs">
 
        <h1 className="text-blue-600 text-3xl font-bold mb-2" >
        {title}
        </h1>  

    <p className="font-medium text-slate-500 mb-8" > 
    Welcome, Please enter your detail </p>

        {children}
        <Navigation type={type}/>
         
       {/* <p className="text-sm mt-5">
        {type === 'login '
         ? "Don't have an account?" 
         : "Already have an account?"}   
         
            <Link to={type === 'login' ? "/register" : "/login"} 
            className="text-blue-600"> 
            {type === 'login' ? "Register" : "Login"}
            </Link>

    </p>*/}

        </div>
    </div>
       
    );
};

const Navigation = ({type}) =>{
    if(type === 'login' ){
        return(
            <p className="text-sm mt-5 text-center">
                Don't have an account?
               
               <Link to="/register" className="font-bold text-blue-600"> 
               Register
               </Link>
               
            </p>
        );
    } else{
        return(
            <p className="text=sm mt-5 text-center">
            Already have an acoount?
            <Link to="/login" className="font-bold text-blue-600"> 
            Login
            </Link>    
         </p>
        );
    }
};

export default AuthLayout