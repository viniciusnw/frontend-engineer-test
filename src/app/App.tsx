import * as React from "react";
import { Home } from './Components/Home'

export interface AppProps {}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <Home />
        );
    }
}
