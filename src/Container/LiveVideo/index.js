import React from 'react';
import { View,Text, Button } from 'react-native';
import {  NodeCameraView } from 'react-native-nodemediaclient';


class LiveVideo extends React.Component{

  componentWillUnmount() {
    this.vb.stop();
  }

  
  render() {
    return (
      <View >
        <NodeCameraView 
          style={{ height: 600 }}
          ref={(vb) => { this.vb = vb }}
          outputUrl = {"rtmp://live.mux.com/app/0e7f8ed2-4e54-ff14-4415-40da706fcbb6"}
          camera={{ cameraId: 1, cameraFrontMirror: false }}
          audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
          video={{ preset: 12, bitrate: 400000, profile: 1, fps: 15, videoFrontMirror: false }}
          autopreview={true}
        />
        <Button
          // onPress={() => {
          //   if (this.state.isPublish) {
          //     this.setState({ publishBtnTitle: 'Start Publish', isPublish: false });
          //     this.vb.stop();
          //   } else {
          //     this.setState({ publishBtnTitle: 'Stop Publish', isPublish: true });
          //     this.vb.start();
          //   }
          // }}
          onPress= { () => this.vb.switchCamera()}
          title={'switch camera'}
          color="#841584"
        />
        <Button
          // onPress={() => {
          //   if (this.state.isPublish) {
          //     this.setState({ publishBtnTitle: 'Start Publish', isPublish: false });
          //     this.vb.stop();
          //   } else {
          //     this.setState({ publishBtnTitle: 'Stop Publish', isPublish: true });
          //     this.vb.start();
          //   }
          // }}
          onPress= { () => this.vb.start()}
          title={'start'}
          color="green"
        />
      </View>
    )
      }
  }


export default LiveVideo;