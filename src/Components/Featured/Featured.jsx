import React from 'react'

import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import "./featured.scss"

function Featured() {
    const revenueToday = {
        title: "Target",
        value: -4577,
        icon: <KeyboardArrowDownIcon fontSize='small' />,
    }
    const revenueWeek = {
        title: "Last Week",
        value: 6745,
        icon: <KeyboardArrowUpIcon fontSize='small' />,
    }
    const revenueMonth = {
        title: "Last Month",
        value: 10986,
        icon: <KeyboardArrowUpIcon fontSize='small' />,
    }
    return (
        <div className='featured'>
            <div className="top">
                <h1>Total Revenue</h1>
                <MoreVertIcon />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text='70%' strokeWidth={8} />
                </div>
                <div className="title">
                    <p>Total Sales made today</p>
                </div>
                <div className="amount"><p>6000</p></div>
                <div className="description"><p>Previous Transaction proceding. Last payments may not be included</p></div>

                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">{revenueToday.title}</div>
                        <div className={revenueToday.value > 0 ? "itemResult positive" : "itemResult negative"}>
                            {revenueToday.icon}
                            <div className="resultAmount"> {"₹"}{Math.abs(revenueToday.value)}</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">{revenueWeek.title}</div>
                        <div className={revenueWeek.value > 0 ? "itemResult positive" : "itemResult negative"}>
                            {revenueWeek.icon}
                            <div className="resultAmount"> {"₹"}{Math.abs(revenueWeek.value)}</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">{revenueMonth.title}</div>
                        <div className={revenueMonth.value > 0 ? "itemResult positive" : "itemResult negative"}>
                            {revenueMonth.icon}
                            <div className="resultAmount"> {"₹"}{Math.abs(revenueMonth.value)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured