import React from 'react';
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { styles } from './style';


class Dashboard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <ImageBackground source={require('./../../../assests/live.gif')} style={styles.imgContainer}>
          <TouchableOpacity style={styles.joinBtn}>
            <Text style={styles.fontStyle}>Join</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.joinBtn}>
            <Text style={styles.fontStyle}> Go Live</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    )
  }
}


export default Dashboard;