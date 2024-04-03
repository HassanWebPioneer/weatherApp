import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {CText} from '../CText/CText';

export default function CTextInput(props) {
  const colors = useTheme();

  const {
    placeholder,
    title,
    secureTextEntry,
    style,
    placeholderStyle,
    keyboardType,
    multiline,
    numberOfLines,
    img,
    ...rest
  } = props;
  const [text, onChangeText] = useState('');

  const [Focused, setFocused] = useState(false);

  return (
    <View style={[styles.container, style]}>
      <View
        style={[
          styles.inputContainer,
          {borderColor: Focused ? '#5B4DBC' : '#E1E8EB'},
        ]}>
        {img ? <Image source={img} style={styles.photoIcon} /> : null}
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: colors.background,
              color: colors.text,
              fontFamily: 'Poppins-Regular',
            },
          ]}
          onChangeText={onChangeText}
          value={text}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholderTextColor={'#8C8B8B'}
          keyboardType={keyboardType}
          multiline={multiline}
        />
      </View>
      {title && (
        <CText
          style={[
            styles.textStyle,
            {color: Focused ? 'black' : colors.text},
            {backgroundColor: 'white', borderRadius: 15},
          ]}>
          {title}
        </CText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    position: 'relative',
  },
  input: {
    height: 55,
    flex: 1,
    textAlignVertical: 'center',
    paddingLeft: 30,
  },
  photoIcon: {
    width: 20,
    aspectRatio: 20 / 20,
    position: 'absolute',
    left: 5,
    top: '55%',
    transform: [{translateY: -10}],
  },
  textStyle: {
    fontSize: 16,
    position: 'absolute',
    width: 'auto',
    paddingHorizontal: 10,
    color: 'blue',
    left: 15,
    margin: 5,
    top: -20,
  },
});
