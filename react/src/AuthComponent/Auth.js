import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Auth() {
    const navigate = useNavigate();

    useEffect(() => {
        var path = window.location.pathname;
        if (path === "/admin" || path === "/manageusers" || path === "/addcategory" || path === "/addsubcategory") {
            if (!localStorage.getItem("token") || localStorage.getItem("role") !== "admin")
                navigate("/logout")
        }
        else if (path === "/user") {
            if (!localStorage.getItem("token") || localStorage.getItem("role") !== "user")
                navigate("/logout");
        }
        else {
            if (localStorage.getItem("role") === "admin")
                navigate("/admin");
            else
                navigate("/user");
        }
    }, []);

    return (
        <div></div>
    )
}

export default Auth