import { useEffect } from "react";
import AuthApi from "../../../api/auth";
import { useNavigate } from "react-router";
import { useAuth } from "../../../auth-context/auth.context";


const SignOut = () => {

    const history = useNavigate();
    const { setUser } = useAuth();
    let { user } = useAuth();

    const handleLogout = async () => {
        await AuthApi.Logout(user);
        await setUser(null);
        localStorage.removeItem("user");
        return history.push("/authentication/sign-in");
    };

    useEffect(() => {
        handleLogout();
    }, []);

    return null;
}
 
export default SignOut;

