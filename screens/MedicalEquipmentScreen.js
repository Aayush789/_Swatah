import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import AppHeader from '../components/AppHeader';

import Hyperlink from 'react-native-hyperlink';

export default class MedicalEquipmentScreen extends React.Component {
    constructor(props){
      super(props);
      this.state = {}
    }

render(){
  return (
    <View style={styles.container}>
      <Hyperlink
    linkDefault
    linkStyle={ { color: '#2980b9', fontSize: 20, alignSelf: 'center',marginLeft: 80 } }
    linkText={ url => url === 'https://delhifightscorona.in/data/hospital-beds/' ? 'Medical Equipment' : url }
     >
     <Text style= {styles.text}>
       https://delhifightscorona.in/data/hospital-beds/ 
     </Text>
     </Hyperlink>
    </View>
  );
}
}


const styles = StyleSheet.create({
  container:{
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color:'cyan'
  },
  text:{
    color:'white'
  },
})