import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Auth() {
    const navigate = useNavigate();

    useEffect(() => {
        var path = window.location.pathname;

        // If the user is trying to access an admin-only route, check if they are logged in as an admin
        if (path === "/admin" || path === "/manageusers" || path === "/addcategory" || path === "/addsubcategory") {
            if (!localStorage.getItem("token") || localStorage.getItem("role") !== "admin")
                navigate("/logout");
        }
        // If the user is trying to access a user-only route, check if they are logged in as a user
        else if (path === "/user") {
            if (!localStorage.getItem("token") || localStorage.getItem("role") !== "user")
                navigate("/logout");
        }
        // For any other route, check if the user is logged in and redirect them to the appropriate dashboard
        else {
            if (localStorage.getItem("role") === "admin")
                navigate("/admin");
            else if (localStorage.getItem("role") === "user")
                navigate("/user");
            else
                navigate("/"); // If the user is not logged in, redirect them to the visitor homepage
        }
        
    }, []);

    return (
        <div></div>
    )
}

export default Auth;
