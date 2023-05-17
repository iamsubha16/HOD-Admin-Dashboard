import React from 'react'

import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar"
import Chart from "../../Components/Chart/Chart"
import List from "../../Components/Table/Table"

import Avatar from '@mui/material/Avatar';

import "./single.scss"

function Single() {
    return (
        <div className='single'>
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">
                            <button>Edit</button>
                        </div>
                        <h1 className='title'>Information</h1>
                        <div className="item">
                            <Avatar
                                alt="Remy Sharp"
                                src="https://www.pexels.com/photo/771742/download/"
                                sx={{ width: 250, height: 250 }}
                            />
                            <div className="details">
                                <h1 className='itemTitle'>Subhadip De</h1>
                                <div className="detailItem">
                                    <span className='itemKey'>Email: </span>
                                    <span className='itemValue'>isjefijeijf@gmail.com </span>
                                </div>
                                <div className="detailItem">
                                    <span className='itemKey'>Phone: </span>
                                    <span className='itemValue'>123456789 </span>
                                </div>
                                <div className="detailItem">
                                    <span className='itemKey'>Address </span>
                                    <span className='itemValue'>Kuch bhi location de do </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title={"last 6 months Users Spending"} />
                    </div>
                </div>
                <div className="buttom">
                    <h1 className='title'>Last Transactions</h1>
                    <List />
                </div>
            </div>
        </div>
    )
}

export default Single