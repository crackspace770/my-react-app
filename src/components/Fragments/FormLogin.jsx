import InputForm  from "../Elements/Input/";
import Button from "../Elements/Button";

const FormLogin = () => {

    return (
        <form action="">

            <InputForm
           label ="email" 
           type="email" 
           placeholder="example@mail.com" 
           name = "Email"/>
 
         
            <InputForm 
           label ="password" 
           type="password" 
           placeholder="******" 
           name = "Password"/>
      
         
         <Button>Login</Button>
         
        
         </form>
    );

};

export default FormLogin;