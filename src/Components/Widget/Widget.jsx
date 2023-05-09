import React from 'react'

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

import "./widget.scss"

function Widget({ type }) {

    let data;

    switch (type) {
        case "users":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See All Users",
                icon: (
                    <PersonOutlineOutlinedIcon className='profile-icon' sx={{ color: 'crimson', backgroundColor: "lightcoral" }} />
                ),
                amount: 5099,
                diff: 12,
            }
            break;

        case "orders":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View All Orders",
                icon: (
                    <ShoppingCartOutlinedIcon className='profile-icon' sx={{ color: 'yellow', backgroundColor: "lightsalmon" }} />
                ),
                amount: 1000,
                diff: 9,
            }
            break;

        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View New Earning",
                icon: (
                    <MonetizationOnOutlinedIcon className='profile-icon' sx={{ color: 'green', backgroundColor: "lightgreen" }} />
                ),
                amount: 19045,
                diff: 5,
            }
            break;

        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "Show Details",
                icon: (
                    <AccountBalanceOutlinedIcon className='profile-icon' sx={{ color: 'purple', backgroundColor: "lightpink" }} />
                ),
                amount: 39770,
                diff: 20,
            }
            break;

        default:
            break;
    }
    return (
        <div className='widget'>
            <div className="left">
                <div className="title">{data.title}</div>
                <div className="counter">
                    {data.isMoney && "₹"} {data.amount}
                </div>
                <div className="link">{data.link}</div>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon className='icon' />
                    {data.diff} %
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget