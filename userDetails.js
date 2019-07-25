import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Card} from "react-native-elements";

const UserDetails =(props)=>{
        console.log(props);
    return(
        <View>
            <Card title={props.user.login}>
                <View  style={{alignItems: "flex-start"}}>
                    <Image source={{uri: props.user.avatar_url}} style={{width: 300, height: 300,alignSelf:"center",marginBottom:5}}/>
                </View>
                <Text>
                   Type: {props.user.type}
                </Text>
                <Text>
                    Organizations URL: {props.user.organizations_url}
                </Text>
            </Card>
        </View>
    );
};
export default UserDetails;
