import React from 'react';
import './style.css';
import { HelpIcon, AccountCircle } from '@mui/icons-material';

export default function Navbar(){
    return(
        <div className="navbar">
            <div className="navbarWrapper">
                <div className="navLeft">
                    <img src="/.myproject/src/Full Logo_2Full color.png" alt="CU logo"/>
                </div>
                <div className="navRight">
                    <div className="navRightIcon">
                        <HelpIcon/><h2>Help</h2>
                    </div>
                    <div className="navRightIcon">
                        <AccountCircle/> <h2>ADMIN</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
