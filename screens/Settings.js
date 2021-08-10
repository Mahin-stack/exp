import React,{ Component } from "react";
import { View, Text } from "react-native";
import MyHeader from "../components/MyHeader";
import { styles } from "../styles/styles";

export default class Settings extends Component {
    render() {
        return (
           <View style={{flex: 1}}>
         <MyHeader navigation={this.props.navigation} title="Settings"/>
           </View>
        )
    }
}