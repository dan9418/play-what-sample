import "./App.css"
import * as React from "react";
import * as ReactDOM from "react-dom";

import { NavBar } from "./NavBar/NavBar";
import { Overview } from "./Pages/Overview";
import { Tutorial } from "./Pages/Tutorial";
import { Reference } from "./Pages/Reference";
import { HireMe } from "./Pages/HireMe";

export class App extends React.Component<any, any> {

    pages = [
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

        let Page = this.pages[this.state.pageIndex].component;

        return (
            <div className='sample-container'>

                <NavBar pages={this.pages} pageIndex={this.state.pageIndex} setPage={this.setPage}></NavBar>

                <div className='app-body'>
                    <Page></Page>
                </div>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#app"));