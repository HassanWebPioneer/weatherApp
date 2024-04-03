import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image, Text} from 'react-native';

export function SocialBtn(props) {
  const {title, icon, style, onPress} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.btnstyle, {backgroundColor: 'white'}, style]}>
      <Image
        style={{height: 30, width: 30, alignSelf: 'center'}}
        source={icon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnstyle: {
    width: '18%',
    height: 53,
    borderRadius: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
});
