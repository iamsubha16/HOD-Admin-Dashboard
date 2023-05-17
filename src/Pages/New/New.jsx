import React, { useState } from 'react'

import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar"

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

import "./new.scss"

function New({ inputs, title }) {

    const [file, setFile] = useState("");

    return (
        <div className='new'>
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1 className='title'>{title}</h1>
                </div>
                <div className="buttom">
                    <div className="left">
                        <Avatar
                            alt="Remy Sharp"
                            src={file ? URL.createObjectURL(file) : "https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"}
                            sx={{ width: 256, height: 256 }}
                        />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor='file'>
                                    Image : <DriveFolderUploadIcon className='uploadIcon' />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={
                                        e => setFile(e.target.files[0])
                                    }
                                    style={{ display: "none" }} >
                                </input>
                            </div>

                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}

                            <Button variant="contained" className='submitBtn'>Submit</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New