import React, { useContext } from 'react';
import Navbar from '../Pages/SharedPages/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { useAdmin } from '../hooks/useAdmin';

const DashboardLayout = () => {

    const {user} = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet></Outlet>
                
                </div> 
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        <li><Link to='/dashboard'>My appointment</Link></li>
                        {   isAdmin &&
                            <>
                                <li><Link to='/dashboard/allusers'>All users</Link></li>
                                <li><Link to='/dashboard/adddoctor'>Add doctor</Link></li>
                                <li><Link to='/dashboard/managedoctor'>Manage doctor</Link></li>
                            </>
                        }
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;