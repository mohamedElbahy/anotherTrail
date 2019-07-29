import React,{Component}from 'react';
import { Image, ScrollView, TouchableOpacity, View} from "react-native"
import axios from "axios";
import {Card, Text} from "react-native-elements";
import {Actions} from 'react-native-router-flux';
// import codePush from 'react-native-code-push';
class UsersList extends Component{

    state = {users: [],temp:""};

    componentDidMount() {

        axios.get("https://api.github.com/users")
            .then(response => this.setState({users: response.data}));
    }
    pressedCard(user)
    {
        console.log("working !!");
        Actions.Details({user});
    }
    renderUsers() {
        return this.state.users.map((user, i) =>
            <TouchableOpacity onPress={()=>this.pressedCard(user)} key={i}>
                <Card title={"hello"}>
                    <View  style={{alignItems: "center"}}>
                        <Image source={{uri: user.avatar_url}} style={{width: 300, height: 300, borderRadius: 150}}/>
                    </View>
                    <Text>{user.login}</Text>
                </Card>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <ScrollView>
                {this.renderUsers()}

            </ScrollView>
        );
    }
}

export default UsersList;
