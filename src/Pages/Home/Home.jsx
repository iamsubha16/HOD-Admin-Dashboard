import React from 'react'

import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from '../../Components/Navbar/Navbar'
import Widget from '../../Components/Widget/Widget'

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

                <div className="charts">Charts</div>

            </div>

        </div>
    )
}

export default Home