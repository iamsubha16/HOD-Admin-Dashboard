import React from 'react'

import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from '../../Components/Navbar/Navbar'
import Widget from '../../Components/Widget/Widget'
import Featured from '../../Components/Featured/Featured'
import Chart from '../../Components/Chart/Chart'
import Table from '../../Components/Table/Table'

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
                    <Chart aspect={2.4 / 1} title={"LAst 6 months Revenue"} />
                </div>

                <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <Table />
                </div>

            </div>

        </div>
    )
}

export default Home