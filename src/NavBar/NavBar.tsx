import * as React from "react";
import "./NavBar.css";

export function NavBar(props: any) {
    return (
        <header className='nav-bar'>
            <div className='fade left'></div>
            <div className='nav-buttons'>
                {props.pages.map((page, index) => {
                    let classes = ['nav-button', props.pageIndex === index ? 'active' : ''];
                    return (
                        <div key={index} className={classes.join(' ')} onClick={() => props.setPage(index)}>
                            {page.name}
                        </div>
                    );
                })}
            </div>
            <div className='fade right'></div>
        </header>
    );
}