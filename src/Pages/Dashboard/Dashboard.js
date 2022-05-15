import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile px-5 lg:px-0">
            <input id="dashboard-slider" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
                {/* <!-- Page content here --> */}
                <h2 className='text-3xl font-bold text-purple-600 mb-5'>My Appointments</h2>
                <Outlet></Outlet>
            </div> 
            <div className="drawer-side">
                <label htmlFor="dashboard-slider" className="drawer-overlay"></label> 
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Appointments</Link></li>
                    <li><Link to="/dashboard/review">Reviews</Link></li>
                    <li><Link to="/dashboard/history">My History</Link></li>
                    { admin && <li><Link to="/dashboard/users">All Users</Link></li>}
                </ul>
            
            </div>
        </div>
    );
};

export default Dashboard;