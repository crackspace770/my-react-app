import InputForm from "../Elements/Input/";
import Button from "../Elements/Button";

const FormRegister = () => {

    return (
        <form action="">

            
            <InputForm
           label ="Fullname" 
           type="text" 
           placeholder="Insert your name" 
           name = "fullName"/>

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

            <InputForm 
           label ="confirm password" 
           type="password" 
           placeholder="******" 
           name = "confirmPassword"/>
      
         
         <Button>Register</Button>
         
        
         </form>
    );

};

export default FormRegister