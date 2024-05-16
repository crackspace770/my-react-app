import { useRouteError } from "react-router-dom";

const ErrorPage = () =>{
    const error = useRouteError();

    return (
        <div className="flex justify-center min-h-screen items-center flex-col">
        <h1 className="font-bold text-3xl">Opps</h1>
        <p className="my-5 text-xl">Sorry, unexpected error has occured</p>
        <p className="text-lg">{error.stausText || error.message}</p>
        </div>
       
    );
};

export default ErrorPage;