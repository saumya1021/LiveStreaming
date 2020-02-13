import React from 'react';
import {View, Image} from 'react-native';

class Splash extends React.Component {
  componentDidMount() {
    const {navigate} = this.props.navigation;
    setTimeout(() => {
      navigate('Dashboard');
    }, 1500);
  }
  render() {
    return (
      <View style={{flex: 1, width: '100%', height: '100%'}}>
        <Image
          source={require('./../../../assests/live.gif')}
          style={{flex: 1, resizeMode: 'stretch'}}
        />
      </View>
    );
  }
}

export default Splash;
