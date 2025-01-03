import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import logo from '../../assets/image/navbar-logo.png'




const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext)

    const handleLogOut = () => {
        logOutUser()
        .then(() => {
            console.log('succesfully log out')
        })
        .catch(error => {
            console.log(error.massage)
        })
    }

    const links = <>
       <Link to='/'> <li><a>Home</a></li></Link>
       <Link to='/jobs'> <li><a>All job</a></li></Link>
        <Link to='/myApplication'><li><a>My Application</a></li></Link>
        <li><a>Item 3</a></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className="flex">
                        <img className="hidden md:inline-block" src={logo} alt="" />
                    <a className="btn btn-ghost text-2xl md:text-3xl">Job Portal</a>

                    </div>
                    </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <> <button onClick={handleLogOut} className="btn">Log out</button> </> : <>

                            <Link to='/register'>Register</Link>
                            <Link to='/login'><button className="btn">Login</button></Link>
                        </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;