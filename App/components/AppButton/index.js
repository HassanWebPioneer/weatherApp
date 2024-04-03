import {ActivityIndicator, Text} from 'react-native';
import {PlatformTouchable} from './PlatformTouchable';
import React from 'react';
import styles from './styles';

export function AppButton(props) {
  const {title, wrapperStyle, style, isLoading, disabled, ...rest} = props;

  return (
    <PlatformTouchable
      {...rest}
      disabled={disabled || isLoading}
      style={[styles.wrapper, wrapperStyle, disabled ? styles.disabled : null]}>
      {isLoading ? <ActivityIndicator /> : <Text style={style}>{title}</Text>}
    </PlatformTouchable>
  );
}
