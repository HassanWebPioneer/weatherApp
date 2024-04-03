import React, {useMemo} from 'react';
import {StyleSheet, Text} from 'react-native';

export function CText(props) {
  const {children, maxLength: propMaxLength, ...rest} = props;
  const fontFamily = props.type ? 'Poppins-' + props.type : 'Poppins-Regular';

  const maxLength = propMaxLength || 25;

  const limitedText = useMemo(() => {
    const text = children || '';
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  }, [children, maxLength]);

  return (
    <Text {...rest} style={[styles.defaultStyle, props.style, {fontFamily}]}>
      {limitedText}
    </Text>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
});
