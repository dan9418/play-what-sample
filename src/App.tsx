import "./App.css"
import * as React from "react";
import * as ReactDOM from "react-dom";

import { NavBar } from "./NavBar/NavBar";
import { Overview } from "./Pages/Overview/Overview";
import { Tutorial } from "./Pages/Tutorial/Tutorial";
import { Reference } from "./Pages/Reference/Reference";
import { HireMe } from "./Pages/HireMe/HireMe";
import { useState } from "react";

export type PageDef = {
    name: string;
    component: any;
}

const PAGES: PageDef[] = [
    {
        name: 'Overview',
        component: Overview
    },
    {
        name: 'API Tutorial',
        component: Tutorial
    },
    {
        name: 'Reference',
        component: Reference
    },
    {
        name: 'Hire Me',
        component: HireMe
    }
];

function App(props) {

    const [pageIndex, setPage] = useState(0);

    let Page = PAGES[pageIndex].component;

    return (
        <div>
            <NavBar pages={PAGES} pageIndex={pageIndex} setPage={setPage} />

            <div className='app-body'>
                <Page></Page>
            </div>
        </div>
    );

}

ReactDOM.render(<App />, document.querySelector("#app"));