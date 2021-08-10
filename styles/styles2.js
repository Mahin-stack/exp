import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

container:{
    flex:1,
    backgroundColor: "#fff",
  },

  viewContainer: {
   flex: 1,
   flexDirection: "row",
   padding: 18,
   marginBottom: 20 ,
   borderRadius : 16,
   backgroundColor : "white",
   shadowColor: "#000",
   shadowOffset: {
     width: 0,
     height : 10
   },
   shadowOpacity: 0.2,
   shadowRadius: 20,
  },
  
  img:{
   width: 100, 
   height: 100, 
   borderRadius: 100, 
   marginRight : 10
  },

  textContainer: {
   flex: 1, 
   justifyContent : "center",
   marginLeft : 5
  },

  text: {
    fontSize: 20 ,
     fontWeight: '700'
  },
  text2: {
    opacity: 0.7,
    fontSize: 15,
    color: "#f22613",
    fontWeight: "475" ,
  },
  text3: {
    opacity: 0.6,
    fontSize: 15,
    color: "#19b5fe",
  },
  text4: {
    opacity: 0.4,
    fontSize: 15,
    color: "#00e640",
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#29b6f6",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15
  },
})

export {styles};