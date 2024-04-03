import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export function BackIcon(props) {
  const {style, onPress} = props;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, style]}
      onPress={() => {
        navigation.goBack();
      }}>
      <Image
        style={styles.backStyle}
        source={require('../../assets/images/vector.png')}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    height: 50,
    width: 50,
    borderRadius: 20,
    backgroundColor: '#B7BAE4',
  },
  backStyle: {
    height: undefined,
    width: 10,
    aspectRatio: 8 / 14,
    margin: 15,
    alignSelf: 'center',
    position: 'absolute',
  },
});
