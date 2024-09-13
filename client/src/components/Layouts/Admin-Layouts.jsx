import { NavLink, Outlet, Navigate } from "react-router-dom";
import {FaUser} from "react-icons/fa"
import {FaMessage} from "react-icons/fa6"
import {FaRegListAlt} from "react-icons/fa"
import {FaHome} from "react-icons/fa"
import { useAuth } from "../../store/auth";

export const AdminLayout = ()=>{
    const {user, isLoading} = useAuth();
    console.log("Admin Layout", user);

    if (isLoading) {
        return <h1>Loading ...</h1>;
      }
    
      if (!user.isAdmin) {
        return <Navigate to="/" />;
      }
    
    return(
        <>
            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <li> <NavLink to="/admin/users" > <FaUser /> Users</NavLink> </li>
                            <li> <NavLink to="/admin/contacts" ><FaMessage/> Contacts</NavLink> </li>
                            <li> <NavLink to="/service" > <FaRegListAlt/> Services</NavLink> </li>
                            <li> <NavLink to="/" > <FaHome /> home</NavLink> </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Outlet />
        </>
    )
};