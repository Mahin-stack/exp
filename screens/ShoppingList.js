// import React,{ Component } from "react";
// import { View, Text, FlatList, TouchableOpacity, SafeAreaView, TextInput, Alert, StyleSheet} from "react-native";
// import db from '../config';

// export default class ShoppingList extends Component {
//   constructor(props){
//       super(props);
//       this.state={
//         todoTasks: [],
//         newTaskName: "",
//         docId :""
//       }
//   }
//   createUniqueId() {
//     return Math.random().toString(36).substring(7);
//   }
//   componentDidMount(){
//     this.unsubscribe = db.collection("shop_lists").onSnapshot((querySnapshot) => {
//       const todos = []
//       querySnapshot.forEach((doc) => {
//         todos.push({
//           id: doc.id,
//           taskName: doc.data().taskName
//         });
//       });
//       this.setState({
//         todoTasks: todos,
//       })
//     })
//   }

//   onPressAdd = () => {
//     db.collection("shop_lists").add({
//       taskName : this.state.newTaskName,
//       id: this.createUniqueId()
//     })
//       this.setState({newTaskName : ""})
//   }

//     render() {
//         return (
//       <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
//         <View style={styles.header}>
//           <Text style={styles.text}>Shopping List</Text>
//         </View>
//         <View style={styles.footer}>
//           <View style={styles.inputContainer}>
//           <TextInput 
//            style={styles.input}
//            placeholder=" Name"
//            placeholderTextColor= "grey"
//            onChangeText={(text) => {
//              this.setState({
//               newTaskName: text
//              })
//            }}
//            value={this.state.newTaskName}
//            />
//           </View>

//           <TouchableOpacity onPress={this.onPressAdd()}>
//           <View style={styles.iconContainer}>
//             <Text>+</Text>
//           </View>
//         </TouchableOpacity>
//         </View>

//         <FlatList 
//           data={this.state.todoTasks}
//           style={styles.container}
//           contentContainerStyle={{padding: 20, paddingBottom: 100}}
//           renderItem={ ({ item, index }) => {
//            return(
//            <View style={styles.listItem}>
//            <TouchableOpacity>
//              <Text style={styles.text}>{item.taskName}</Text>
//            </TouchableOpacity>
//            </View>
//            )
//           }}
//           keyExtractor={(item, index) => item.taskName}
//          >
//          </FlatList>
//       </SafeAreaView>
//         )
//     }
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     backgroundColor: "#fff",
//   },
//   header: {
//     padding: 20,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between"
//   },
//   text: {
//     fontWeight: "bold",
//     fontSize: 20,
//     color: "black"
//   },
//   footer: {
//     top: 10,
//     color: "grey",
//     width: "100%",
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 20
//   },
//   inputContainer: {
//     backgroundColor: "#fff",
//     elevation: 40,
//     flex: 1,
//     marginVertical: 20,
//     height: 50,
//     marginRight: 20,
//     borderWidth: 1,
//     borderStyle: "solid",
//     borderColor: "grey",
//     borderRadius: 8,
//     paddingHorizontal: 20,
//     justifyContent: "center"
//   },
//   iconContainer: {
//     width: 50,
//     height: 50,
//     backgroundColor: "#d2d7d3",
//     elevation: 40,
//     borderRadius: 25,
//     alignItems: "center",
//     justifyContent: "center",
//    },
//    listItem : {
//     padding: 20,
//     backgroundColor: "#e8ecf1",
//     flexDirection: "row",
//     elevation: 12,
//     borderRadius: 7,
//     marginVertical: 10
//   },
//    text: {
//      fontSize: 17 ,
//       fontWeight: 'bold'
//    },
// })

import React, { Component } from 'react';
import {View, Text , StyleSheet} from 'react-native';

export default class ShoppingList extends Component {
    render() {
        return (
            <View style={styles.cont}>
                <Text> Dummy </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
})
