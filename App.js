/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import Router from "./Router"
import codePush from 'react-native-code-push';
class App extends Component {
    componentDidMount(): void {
        codePush.sync({
            updateDialog: true,
            installMode: codePush.InstallMode.IMMEDIATE
        });
    }

    render() {
        return (

                <Router/>

        );
    }

}
export default  App;
