import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

export class PlatformTouchable extends React.Component {
  render() {
    const {style, children, ...rest} = this.props;

    const Touchable =
      Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

    return (
      <Touchable {...rest}>
        <View style={style}>{children}</View>
      </Touchable>
    );
  }
}
