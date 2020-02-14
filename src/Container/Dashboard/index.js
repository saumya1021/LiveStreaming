import React from 'react';
import {View, TouchableOpacity, Text, ImageBackground} from 'react-native';
import {styles} from './style';
import CommonHelper from '../../utils';

const Helper = new CommonHelper();

class Dashboard extends React.Component {

  async componentDidMount() {
    await Helper.checkPermission('CAMERA');
    await Helper.checkPermission('RECORD_AUDIO');
  }


  handlePress = name => {
    const {navigate} = this.props.navigation;
    if (name === 'join') {
      navigate('PlayVideo');
    }
    if (name === 'live') {
      navigate('LiveVideo');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('./../../../assests/live.gif')}
          style={styles.imgContainer}>
          <TouchableOpacity
            style={styles.joinBtn}
            onPress={() => this.handlePress('live')}>
            <Text style={styles.fontStyle}> Go Live</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.joinBtn}
            onPress={() => this.handlePress('join')}>
            <Text style={styles.fontStyle}>Join</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

export default Dashboard;
