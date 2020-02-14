import React from 'react';
import {PermissionsAndroid} from 'react-native';

class CommonHelper {
  checkPermission = async (name: string) =>
    new Promise(resolve =>
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS[name])
        .then(async granted => {
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch(() => resolve(false)),
    );
}

export default CommonHelper;
