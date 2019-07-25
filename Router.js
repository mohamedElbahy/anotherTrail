import React from 'react';
import UserList from './usersList'
import UserDetails from "./userDetails"
import { Scene , Router} from 'react-native-router-flux'

const RouterComponent =()=> {

        return (

            <Router>

                <Scene key="root">
                <Scene key="userList" component={UserList} title="All users" initial/>
                <Scene key="Details" component={UserDetails} title="User Details"/>
                </Scene>
            </Router>

        );
    };

export default RouterComponent;
