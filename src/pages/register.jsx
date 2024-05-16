import AuthLayout from "../components/Layout/AuthLayout";
import FormRegister from "../components/Fragments/FormRegister";


const RegisterPage = () => {
    
    return(
        <AuthLayout title = "Register" type="register">
             <FormRegister/>
            
        </AuthLayout>
    );
};

export default RegisterPage