import * as React from "react";
import "./NavBar.css";

export function NavBar(props: any) {
    return (
        <header className='nav-bar'>
            {props.pages.map((page, index) => {
                let classes = ['nav-button', props.pageIndex === index ? 'active' : ''];
                return (
                    <div className={classes.join(' ')} onClick={() => props.setPage(index)}>
                        {page.name}
                    </div>
                );
            })}
        </header>
    );
}