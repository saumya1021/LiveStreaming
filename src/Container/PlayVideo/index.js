import React, {Component} from 'react';

import {Text, TouchableOpacity, View, Image} from 'react-native';
import {PLAY} from '../../utils/common';
import Video from 'react-native-video';
import {styles} from './style';

export default class PlayVideo extends Component {
  state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    paused: true,
  };

  video: Video;

  onLoad = data => {
    this.setState({duration: data.duration});
  };

  onProgress = data => {
    this.setState({currentTime: data.currentTime});
  };

  onEnd = () => {
    this.setState({paused: true});
    this.video.seek(0);
  };

  onAudioBecomingNoisy = () => {
    this.setState({paused: true});
  };

  onAudioFocusChanged = (event: {hasAudioFocus: boolean}) => {
    this.setState({paused: !event.hasAudioFocus});
  };

  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      return (
        parseFloat(this.state.currentTime) / parseFloat(this.state.duration)
      );
    }
    return 0;
  }

  renderRateControl(rate) {
    const isSelected = this.state.rate === rate;

    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({rate});
        }}>
        <Text
          style={[
            styles.controlOption,
            {fontWeight: isSelected ? 'bold' : 'normal'},
          ]}>
          {rate}x
        </Text>
      </TouchableOpacity>
    );
  }

  renderResizeModeControl(resizeMode) {
    const isSelected = this.state.resizeMode === resizeMode;

    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({resizeMode});
        }}>
        <Text
          style={[
            styles.controlOption,
            {fontWeight: isSelected ? 'bold' : 'normal'},
          ]}>
          {resizeMode}
        </Text>
      </TouchableOpacity>
    );
  }

  renderVolumeControl(volume) {
    const isSelected = this.state.volume === volume;

    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({volume});
        }}>
        <Text
          style={[
            styles.controlOption,
            {fontWeight: isSelected ? 'bold' : 'normal'},
          ]}>
          {volume * 100}%
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    // const flexCompleted = this.getCurrentTimePercentage() * 100;
    // const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;
    const {paused} = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.fullScreen}
          onPress={() => this.setState({paused: !this.state.paused})}>
          <Video
            ref={(ref: Video) => {
              this.video = ref;
            }}
            source={{
              uri:
                'https://stream.mux.com/365fk7MmjqmQK8Ov6lE9zSA3100vPj6Y3.m3u8',
            }}
            style={styles.fullScreen}
            rate={this.state.rate}
            paused={this.state.paused}
            volume={this.state.volume}
            muted={this.state.muted}
            resizeMode={this.state.resizeMode}
            onLoad={this.onLoad}
            onProgress={this.onProgress}
            onEnd={this.onEnd}
            onAudioBecomingNoisy={this.onAudioBecomingNoisy}
            onAudioFocusChanged={this.onAudioFocusChanged}
            repeat={false}
          />
          {paused && (
            <View style={styles.playContainer}>
              <Image source={PLAY} style={{height: 60, width: 60}} />
            </View>
          )}
        </TouchableOpacity>

        <View style={styles.controls}>
          <View style={styles.generalControls}>
            {/* <View style={styles.rateControl}>
              {this.renderRateControl(0.25)}
              {this.renderRateControl(0.5)}
              {this.renderRateControl(1.0)}
              {this.renderRateControl(1.5)}
              {this.renderRateControl(2.0)}
            </View> */}

            <View style={styles.volumeControl}>
              {this.renderVolumeControl(0.5)}
              {this.renderVolumeControl(1)}
              {this.renderVolumeControl(1.5)}
            </View>

            <View style={styles.resizeModeControl}>
              {this.renderResizeModeControl('cover')}
              {this.renderResizeModeControl('contain')}
              {this.renderResizeModeControl('stretch')}
            </View>
          </View>

          {/* <View style={styles.trackingControls}>
            <View style={styles.progress}>
              <View style={[styles.innerProgressCompleted, { flex: flexCompleted }]} />
              <View style={[styles.innerProgressRemaining, { flex: flexRemaining }]} />
            </View>
          </View> */}
        </View>
      </View>
    );
  }
}
