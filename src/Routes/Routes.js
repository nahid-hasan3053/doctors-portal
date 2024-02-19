import DashboardLayout from "../Layout/DashboardLayout";
import Appointment from "../Pages/Appointment/Appointment";
import AddDoctor from "../Pages/Dashboard/AddDoctor";
import AllUsers from "../Pages/Dashboard/AllUsers";
import ManageDoctor from "../Pages/Dashboard/ManageDoctor";
import MyAppointment from "../Pages/Dashboard/MyAppointment";
import Login from "../Pages/Form/Login";
import Register from "../Pages/Form/Register";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home");

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <PrivateRoute><Appointment></Appointment></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/managedoctor',
                element: <AdminRoute><ManageDoctor></ManageDoctor></AdminRoute>
            }
        ]
    }
])