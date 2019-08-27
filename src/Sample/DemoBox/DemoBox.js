import React, { Component } from "react";
import "./DemoBox.css";

export class DemoBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.defaults;
    }

    render() {
        return (
            <div className="demo-box">
                
            </div>
        )
    }
}