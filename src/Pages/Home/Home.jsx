import React from 'react'

import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from '../../Components/Navbar/Navbar'
import Widget from '../../Components/Widget/Widget'
import Featured from '../../Components/Featured/Featured'
import Chart from '../../Components/Chart/Chart'

import "./home.scss"

function Home() {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="users" />
                    <Widget type="orders" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>

                <div className="charts">
                    <Featured />
                    <Chart />
                </div>

            </div>

        </div>
    )
}

export default Home