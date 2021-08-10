import React, { Component } from 'react'
import { ViewBase, StyleSheet, Text, ActivityIndicator } from 'react-native'
import firebase from 'firebase';

export default class LoadingScreen extends Component {
  
    componentDidMount() {
        this.checkIfLoggedIn();
      }
    
      checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged(
          function(user) {
            console.log('AUTH STATE CHANGED CALLED ')
            if (user) {
              this.props.navigation.navigate('AllProducts');
            } else {
              this.props.navigation.navigate('LoginScreen');
            }
          }.bind(this)
        );
      };
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent:"center",
    },
})