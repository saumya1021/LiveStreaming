import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {NodeCameraView} from 'react-native-nodemediaclient';
import {styles} from './styles';
import {FLIP, FLASH, START, STOP, PAUSE} from './../../utils/common';

class LiveVideo extends React.Component {
  state = {
    publish: false,
    flashenable: false,
  };

  startLive = () => {
    this.setState(
      {
        publish: true,
      },
      () => this.vb.start(),
    );
  };

  stopLive = () => {
    this.vb.stop();
    this.setState({
      publish: false,
    });
  };

  flash = () => {
    this.state.flashenable = !this.state.flashenable;
    this.vb.flashEnable(this.state.flashenable);
  };

  render() {
    const {publish} = this.state;

    return (
      <View style={styles.container}>
        <NodeCameraView
          style={{flex: 1}}
          ref={vb => {
            this.vb = vb;
          }}
          outputUrl={
            'rtmp://live.mux.com/app/c7f43e3f-35e1-ffce-db2f-c2ea5a2a37e9'
          }
          camera={{cameraId: 1, cameraFrontMirror: false}}
          audio={{bitrate: 32000, profile: 1, samplerate: 44100}}
          video={{
            preset: 12,
            bitrate: 400000,
            profile: 1,
            fps: 15,
            videoFrontMirror: false,
          }}
          autopreview={true}
        />
        <View style={styles.btnContainer}>
          <View style={styles.flipContainer}>
            <TouchableOpacity
              onPress={() => {
                this.vb.switchCamera();
                this.state.flashenable = false;
              }}>
              <Image source={FLIP} style={styles.flipIcon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={this.flash}>
              <Image source={FLASH} style={styles.flashIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity onPress={this.startLive}>
              {!publish ? (
                <Image source={START} style={styles.startIcon} />
              ) : (
                <Image source={PAUSE} style={styles.startIcon} />
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={this.stopLive}>
              <Image source={STOP} style={styles.startIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  componentWillUnmount() {
    this.vb.stop();
  }
}

export default LiveVideo;
