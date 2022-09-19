import React from 'react';
import {View} from 'react-native';
import Animation from './Animation';

const ScreenWrapper = ({children}) => {
  return (
    <Animation>
      <View style={{padding: 50, backgroundColor: 'lightBlue'}}>
        {children}
      </View>
    </Animation>
  );
};

export default ScreenWrapper;
