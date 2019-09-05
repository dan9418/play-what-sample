import * as React from "react";
import "./NavBar.css";

export function NavBar(props: any) {
    return (
        <header className='nav-bar'>
            <div className='nav-button active'>
                Overview
            </div>
            <div className='nav-button'>
                API
            </div>
            <div className='nav-button'>
                Tutorial
            </div>
        </header>
    );
}