import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnContainer: {
    position: 'absolute',
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
    padding: 10,
  },
  flipContainer: {
    backgroundColor: 'transparent',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  bottomContainer: {
    backgroundColor: 'transparent',
    height: '90%',
    alignSelf: 'center',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    padding: 10,
  },
  flashIcon: {
    width: 30,
    height: 35,
  },
  flipIcon: {
    width: 50,
    height: 50,
  },
  startIcon: {
    width: 50,
    height: 50,
    margin: 10,
  },
});
