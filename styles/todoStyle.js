import { Dimensions, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#fff",
  },
  inputContainer: {
    width: "80%",
    paddingTop: 12,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "grey",
    borderRadius: 8
  },
input : {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: "black",
    fontWeight: 'bold',
},
  buttonContainer: {
    width: 50,
    backgroundColor: "#ff5a66",
    borderRadius: 50,
  //  paddingTop: 12,
    marginRight: 10
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  proText : {
    color: '#95a5a6', 
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: 'center',
    alignItems: 'center',
   marginTop: -150
  },
  listItem : {
    padding: 20,
    backgroundColor: "#e8ecf1",
    flexDirection: "row",
    elevation: 12,
    borderRadius: 7,
    marginVertical: 10
  },
   text: {
     fontSize: 17 ,
      fontWeight: 'bold'
   },
})
export {styles};