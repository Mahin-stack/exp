import React, { Component } from "react";
import { View, Text, FlatList, Image} from "react-native";
import db from "../config";
import MyHeader from "../components/MyHeader";
import { StatusBar } from "expo-status-bar";
import Animated from "react-native-reanimated";
import { styles } from "../styles/styles2";
import { SwipeListView } from "react-native-swipe-list-view";
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const AnimatedList = Animated.createAnimatedComponent(SwipeListView);

const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;
//const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);
// //const expire = new Date(date.toLocaleDateString());
// const  today = new Date(Date.now()).toLocaleDateString().getTime()
// // let difference = new Date(expire).getTime() - new Date(today).getTime();

export default class AllProducts extends Component {
  scrollY= new Animated.Value(0);
  constructor() {
    super();
    this.state = {
      allItems: [],
    }
    this.requestRef = null;
  }

  getAllItems =()=>{
    this.requestRef = db.collection("item_details")
    .onSnapshot((snapshot)=>{
      var allItems = snapshot.docs.map(doc => doc.data());
        this.setState({
          allItems: allItems,
        });
      })
  }

    componentDidMount(){
      this.getAllItems()
    }
  
    componentWillUnmount(){
      this.requestRef();
    } 
   
    render(){

      return(
      <Animated.View style={styles.container}>
<MyHeader navigation = {this.props.navigation} title="All Products"/>  
        <AnimatedList       
        style={styles.container}
        keyExtractor={ (item) => item.id}
        data={this.state.allItems}
        onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {y: this.scrollY}}}],
        {useNativeDriver: true} 
      )}
       contentContainerStyle = {{
         padding: 20,
         paddingTop: StatusBar.currentHeight || 20
       }}
       renderItem = { ({ item, index }) => {
       const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 5)
          ]
          let scale = this.scrollY.interpolate({
            inputRange,
          outputRange :[1,1,1,0],
          })

          const opacityRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2)
          ]
          let opacity = this.scrollY.interpolate({
            inputRange: opacityRange,
          outputRange :[1,1,1,0],
          })
        return (
          <Animated.View 
          style={[styles.viewContainer, {transform : [{scale}] }, opacity ]}>
                <Image source = {{uri : item.image ? item.image : "https://www.vhv.rs/dpng/d/312-3120300_default-profile-hd-png-download.png"}} style={styles.img}/>
                   <View style={styles.textContainer}>
                   <Text style={styles.text}>{item.item}</Text>
                   <Text style={styles.text2}>Expiring on : {item.date.toLocaleString()}</Text>
                   <Text style={styles.text3}>Note : {item.note}</Text>
                   <Text style={styles.text4}>Quantity : {item.quantity}</Text>
                   </View>
          </Animated.View>
        )
       }}
       />
       </Animated.View>
    )
  }
}