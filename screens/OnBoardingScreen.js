import React from 'react';
import { View, Text, Image, Dimensions, ActivityIndicator , StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Onboarding from 'react-native-onboarding-swiper';
import { StatusBar } from "expo-status-bar";
import { AntDesign } from '@expo/vector-icons';

const Dots = ({selected}) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

  return (
      <View 
          style={{
              width:6,
              height: 6,
              marginHorizontal: 3,
              backgroundColor
          }}
      />
  );
}


const Skip = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16}}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16}}>Next</Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16}}>Done</Text>
  </TouchableOpacity>
);
const {width} = Dimensions.get("window")
const AspectRatio = 750 / 1125
const height = width * AspectRatio

export default class OnBoardingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      loading: true,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('first_time').then((value) => {
      this.setState({ showRealApp: !!value, loading: false });
    });
  }

  _onDone = () => {
    AsyncStorage.setItem('first_time', 'true').then(() => {
      this.setState({ showRealApp: true });
        this.props.navigation.navigate('LoginScreen');
    });
  };

  _onSkip = () => {
    AsyncStorage.setItem('first_time', 'true').then(() => {
      this.setState({ showRealApp: true });
        this.props.navigation.navigate('LoginScreen');
    });
  };

 

  render() {
    if (this.state.loading){ 
    return (
    <ActivityIndicator size="large" />
    )}





    if (this.state.showRealApp) {
      return( 
        <View style={{flex: 1, backgroundColor: "#030D34"}}>
        <StatusBar barStyle="light-content"/>
        <View style={{backgroundColor: "white"}}>
        <View style={styles.parent}>
        <Image style={styles.child} source={require('../assets/Loginbg.png')} />
        </View>
        </View>
        <View style={{flex: 1, overflow: "hidden"}}>
        <Image style={{...StyleSheet.absoluteFillObject, width: width, height: height, top: -height * 0.67}} source={require('../assets/Loginbg.png')} />
        <View style={{flex:1, borderRadius: 90, borderTopLeftRadius:0 , backgroundColor: "white"}}>
        
        <View style={{paddingTop: 60}}>
        <Text style={styles.text}>Expiree</Text>
        
        <View style={styles.inputContainer}>
        <View style={styles.iconStyle}>
        <AntDesign name= "mail" size={25} color="#666" />
      </View>
        <TextInput
        placeholder="Enter your Email " 
        style={styles.body}
        placeholderTextColor= "grey" 
        keyboardType="email-address"
        autoCorrect="false"
        />
        </View>
        
        <View style={styles.passwordContainer}>
        <View style={styles.iconStyle}>
        <AntDesign name= "lock" size={25} color="#666" />
      </View>
        <TextInput
        style={styles.body}
        placeholder="Enter your Password" 
        placeholderTextColor= "grey" 
        secureTextEntry={true}
        />
        </View>
        
        <View style={{alignItems: "center", marginTop: 8}}>
        <TouchableOpacity style={styles.buttonContainer}
        onPress = {() => {this.props.navigation.navigate("AddProduct")}}>
        <Text style={styles.buttonText}>SignIn</Text>
        </TouchableOpacity>
        </View>
        
        
        <TouchableOpacity 
        style={styles.forgotButton} 
        onPress={() => {this.props.navigation.navigate("SignUpScreen")}}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
        </TouchableOpacity> 

        
         <View style={{alignItems: "center", marginTop: 8}}>
         <TouchableOpacity
           style={styles.googleSigninContainer}>
            <AntDesign name="google" size={24} style={{padding: 8}}/> 
            <Text>Sign In with Google</Text>
          </TouchableOpacity>
         </View>
       
        
        </View>
        </View>
        </View>
        <View style={{height:100, backgroundColor: "#030D34"}}>
        </View>
        </View>
      )
       }
        
       




       else {
      return (
       
          <Onboarding
          SkipButtonComponent={Skip}
          NextButtonComponent={Next}
          DoneButtonComponent={Done}
          DotComponent={Dots}
          onDone={this._onDone}
          onSkip={this._onSkip}
          pages={[
            {
              backgroundColor: '#a6e4d0',
              image: <Image source={require('../assets/on1.png')} />,
              title: 'Connect to the World',
              subtitle: 'A New Way To Connect With The World',
            },
            {
              backgroundColor: '#fdeb93',
              image: <Image source={require('../assets/on2.png')} />,
              title: 'Share Your Favorites',
              subtitle: 'Share Your Thoughts With Similar Kind of People',
            },
            {
              backgroundColor: '#e9bcbe',
              image: <Image source={require('../assets/on3.png')} />,
              title: 'Become The Star',
              subtitle: "Let The Spot Light Capture You",
            },
          ]}
          />
        
      );
    }
  }
}



const styles = StyleSheet.create({
  parent : {
    borderBottomLeftRadius: 100,
    overflow : 'hidden',
    height: height * 0.63,
  },
    child : {
    width :width,
    height: height,
  },
  text:{
    fontSize : 28,
    color: "#030D34",
    fontFamily: "SFProDisplay-Semibold",
    textAlign: "center"
  },

  inputContainer: {
    height: 56,
    width: "80%",
    marginTop: 40,
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: "solid",
    borderColor: "grey",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 40
  },
  passwordContainer: {
    height: 56,
    width: "80%",
    marginTop: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: "solid",
    borderColor: "grey",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 40
  },
  buttonContainer: {
    width: 250,
    height: 54,
    backgroundColor: "#2CB9B0",
    borderRadius: 30,
    padding: 10,
   marginTop: 30
  },
  googleSigninContainer: {
    width: 240,
    height: 54,
    backgroundColor: "#2CB9B0",
    borderRadius: 30,
    padding: 10,
   marginTop: 15,
   flexDirection: "row",
   alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    alignItems: "center",
    textAlign: "center",
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
    textAlign: "center"
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: "#696969"
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
})