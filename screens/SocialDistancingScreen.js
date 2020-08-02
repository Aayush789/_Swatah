import React from 'react';
import { Text, View, TouchableOpacity,StyleSheet,Image} from 'react-native';
import AppHeader from '../components/AppHeader';

export default class SocialDistancing extends React.Component {
    constructor(){
      super();
      this.state = {}
    }

render(){
  return (
    <View style={styles.container}>
      <TouchableOpacity
      style= {styles.SocialDistancing}>
            <Text>Social Distancing</Text>
      </TouchableOpacity>
      </View>
      
  );
}
}

const styles = StyleSheet.create({
  SocialDistancing:{
    backgroundColor: "cyan",
    marginLeft: 70,
    marginBottom: 80, 
    borderWidth : 1, 
    borderColor: 'rgba(0,0,0,1.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 45,
  },
  text:{
    color:'#fff'
  },
});