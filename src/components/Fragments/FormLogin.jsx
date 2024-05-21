import InputForm  from "../Elements/Input/";
import Button from "../Elements/Button";

const FormLogin = () => {

    const handleLogin = (event) => {
        event.preventDefault();
        localStorage.setItem('email', event.target.email.value);
        localStorage.setItem('password', event.target.password.value);
        window.location.href = '/product';
    };

    return (
        <form onSubmit={handleLogin}>
        <InputForm
           label ="Email" 
           type="email" 
           placeholder="example@mail.com" 
           name = "email"/>
 
         
        <InputForm 
           label ="Password" 
           type="password" 
           placeholder="******" 
           name = "password"/>
      
         
         <Button classname = "bg-blue-500 w-full" type="submit">
            Login
            </Button>
         
        
         </form>
    );

};

export default FormLogin;