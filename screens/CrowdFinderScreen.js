import React from 'react';
import { Text, View, TouchableOpacity,StyleSheet,Image} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class CrowdFinderScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      location: []
    }
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        console.log(position);
      },
      function(error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  }
   
    finder=()=>{
     <Text style= {{marginRight:30}}>this.state.location</Text>
    }

render(){
  return (
    <View style={styles.container}>
      <TouchableOpacity
      style= {styles.CrowdFinderButton}
      onPress= {this.finder()}>
            <Text>CrowdFinder</Text>
     </TouchableOpacity>
    </View>
  );
}
}


const styles = StyleSheet.create({
  CrowdFinderButton:{
    backgroundColor: "cyan",
    marginTop: 50,
    marginLeft: 70,
    borderWidth : 1, 
    borderColor: 'rgba(0,0,0,1.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 45,
  }
})