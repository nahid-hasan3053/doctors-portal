import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Navbar = () =>{

    const {logOut, user} = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error => console.log(error))
    }

    const menueItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/appointment'>Appoitment</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        {   user?.uid? 
                <li><Link onClick={handleLogOut}>Logout</Link></li> :
            <>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </>
        }
    </>

    return(
    <div className="navbar bg-base-100 justify-between">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={1} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52">
                {menueItems}
            </ul>
            </div>
            <Link to='/' className="btn btn-ghost text-xl">DoctorsReturn</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {menueItems}
            </ul>
        </div>
        <label htmlFor='dashboard-drawer' tabIndex={2} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
    </div>
    )
}

export default Navbar;