import "./App.css"
import * as React from "react";
import * as ReactDOM from "react-dom";

import { NavBar } from "./NavBar/NavBar";
import { Overview } from "./Pages/Overview/Overview";
import { Tutorial } from "./Pages/Tutorial/Tutorial";
import { Reference } from "./Pages/Reference/Reference";
import { HireMe } from "./Pages/HireMe/HireMe";

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

export class App extends React.Component<any, any> {

    constructor(props) {
        super(props);

        this.state = {
            pageIndex: 0
        }
    }

    setPage = (index: number) => {
        this.setState({
            pageIndex: index
        });
    }

    render() {

        let Page = PAGES[this.state.pageIndex].component;

        return (
            <div>
                <NavBar pages={PAGES} pageIndex={this.state.pageIndex} setPage={this.setPage}/>

                <div className='app-body'>
                    <Page></Page>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#app"));