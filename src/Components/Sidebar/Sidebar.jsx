import React from 'react'

import Typography from '@mui/material/Typography';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import SystemSecurityUpdateGoodOutlinedIcon from '@mui/icons-material/SystemSecurityUpdateGoodOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';

import "./sidebar.scss"

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="top">
                <div className="logo">
                    <Typography variant="h5" gutterBottom sx={{ cursor: 'pointer' }}>
                        HOD LOGO
                    </Typography>
                </div>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <li>
                        <Inventory2Icon className="icon" />
                        <span>Products</span>
                    </li>
                    <li>
                        <PersonOutlineOutlinedIcon className="icon" />
                        <span>Users</span>
                    </li>
                    <li>
                        <ShoppingCartIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <QueryStatsIcon className="icon" />
                        <span>Statistics</span>
                    </li>
                    <li>
                        <CircleNotificationsOutlinedIcon className="icon" />
                        <span>Notification</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SystemSecurityUpdateGoodOutlinedIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <LoginOutlinedIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <ManageAccountsIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className="icon" />
                        <span>Log out</span>
                    </li>
                </ul>
            </div>
            {/* <hr /> */}
            <div className="buttom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar