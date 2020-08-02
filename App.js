import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native';
import GetLocation from 'react-native-get-location';
import { geolocated } from "react-geolocated";

import AppHeader from './components/AppHeader';

import CrowdFinderScreen from './screens/CrowdFinderScreen';
import SocialDistancingScreen from './screens/SocialDistancingScreen';
import MedicalEquipmentScreen from './screens/MedicalEquipmentScreen';

export default class App extends React.Component {
  state = {
    location: null,
    loading: false,
}

_requestLocation = () => {
    this.setState({ loading: true, location: null });

    GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 150000,
    })
        .then(location => {
            this.setState({
                location,
                loading: false,
            });
        })
        .catch(ex => {
            const { code, message } = ex;
            console.warn(code, message);
            if (code === 'CANCELLED') {
                Alert.alert('Location cancelled by user or by another request');
            }
            if (code === 'UNAVAILABLE') {
                Alert.alert('Location service is disabled or unavailable');
            }
            if (code === 'TIMEOUT') {
                Alert.alert('Location request timed out');
            }
            if (code === 'UNAUTHORIZED') {
                Alert.alert('Authorization denied');
            }
            this.setState({
                location: null,
                loading: false,
            });
        });
}


  render(){
    return (
      <View style={styles.container}>
        <AppHeader/>
         <CrowdFinderScreen/>
         <MedicalEquipmentScreen/>
         <SocialDistancingScreen/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
