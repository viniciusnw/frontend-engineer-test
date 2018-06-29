import * as React from "react";
import "./../../assets/scss/App.scss";

export interface HomeProps {}

export class Home extends React.Component<HomeProps, undefined> {
    constructor(props) {
        super(props);
        alert();
    }

    render() {
        return (
            <div className="app">
                <h1>Hello World!</h1>
                <p>I am a react app! :D</p>
            </div>
        );
    }
}
