import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import CTextInput from '../TextInput/CTextInput';
import Entypo from 'react-native-vector-icons/Entypo';
import {EyEPassword} from '../eyeIcon/EyEPassword';
import {useTheme} from '@react-navigation/native';

export function TextInputPassword(props) {
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    EyEPassword();

  const colors = useTheme().colors;

  return (
    <View style={{position: 'relative', ...props.style}}>
      <CTextInput
        {...props}
        secureTextEntry={passwordVisibility}
        style={[styles.placeholderTextInputStyle]}
        placeholder={'Password'}
      />

      <View style={[styles.passIcon]}>
        <TouchableOpacity onPress={handlePasswordVisibility}>
          <Entypo name={rightIcon} size={22} color={colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  passIcon: {
    position: 'absolute',
    bottom: 15,
    right: 7,
    padding: 7,

    // backgroundColor: 'red'
  },
  placeholderTextInputStyle: {
    fontSize: 14,
    fontFamily: 'Cairo-Regular',
    textAlign: 'left',
  },
});
