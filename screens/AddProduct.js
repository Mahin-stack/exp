import React, { Component} from "react";
import {TextInput, View , ImageBackground, Alert, Text, TouchableOpacity} from 'react-native'
import {styles} from '../styles/styles'
import DatePicker from 'react-native-datepicker';
import * as ImagePicker from "expo-image-picker";
import db from '../config';
import { Avatar } from "react-native-elements";

export default class AddProduct extends Component {
  constructor(){
    super()
    this.state={
      date: new Date(),
      item: '',
      note: '',
      image: null,
      quantity: "",
    }
  }

  
  addItems = ( item, date, note, image, quantity) => {

    if(!item ||  !date){
      return Alert.alert("Please fill out all fields");
    }
    else {
      db.collection("item_details").add({
        "item": item,
        "date": date,
        "note": note, 
        "image": image,
        "quantity": quantity,
      })
        this.setState({
          date: new Date(),
          item: '',
          note: '',
          image: null,
          quantity: '',
        })
        return Alert.alert("Product added Successfully");
      }
    }

 pickImage = async () => {
  let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
  if (permissionResult.granted === false) {
         alert("Permission to access camera roll is required!");
         return;
     }
   let result = await ImagePicker.launchCameraAsync({
     mediaTypes: ImagePicker.MediaTypeOptions.All,
     allowsEditing: true,
     aspect: [4, 3],
     quality: 1,
   });
   if (!result.cancelled) {
     this.setState({image: result.uri})
   }
 };

  render(){
    return(
        <ImageBackground source={require("../assets/bg.jpg")} style={styles.container}
         imageStyle= {{opacity:0.2}} >
           <View>
           <Text style ={ styles.proText}>Add Product</Text>
           </View>

           <View style={{ flex: 0.3, justifyContent: "center", alignItems: "center",}}>
          <Avatar
            rounded
            size={"xlarge"}
            onPress={() => this.pickImage()}
            source={{ uri : this.state.image ? this.state.image : "https://logodix.com/logo/360469.png" }}
            showEditButton
          />

          </View>

        <View style={styles.inputContainer}>

          <TextInput
          style={styles.input}
            placeholder="Item Name"
            placeholderTextColor= "grey"
            onChangeText={(text) => {
              this.setState({
                item: text
              })
            }}
            value={this.state.item}
            />
          </View>

          <View style={styles.inputContainer}>
            <DatePicker 
             date={this.state.date} 
             style={{width: 200}}
             format="DD-MM-YYYY"
             minDate={new Date(Date.now()+(10 * 60 * 1000))}   
             confirmBtnText="Confirm"
             cancelBtnText="Cancel"
             is24Hour={true}
             customStyles={{
               dateIcon: { position: 'absolute', left: 0, top: 4, marginLeft: 0,},
               dateInput: { marginLeft: 36 },
             }}
             onDateChange={(date) => {
               this.setState({
                 date: date
               })
             }}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
            style={styles.input}
            placeholder="Note"
            placeholderTextColor= "grey"
            onChangeText={(text) => {
            this.setState({
            note: text
            })
            }}
            value={this.state.note}
            />
          </View>

          <View style={styles.inputContainer}>
          <TextInput
          style={styles.input}
            placeholder="Quantity [in pieces]"
            placeholderTextColor= "grey"
            keyboardType="number-pad"
            onChangeText={(text) => {
              this.setState({quantity: text})
            }}
            value={this.state.quantity}
            />
          </View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={()=>{
             this.props.navigation.navigate("AllProducts")
              this.addItems(this.state.item, this.state.date, this.state.note, this.state.image, this.state.quantity)
            }}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
      </ImageBackground>
    )
  }
}

           