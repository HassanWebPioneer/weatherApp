import React from 'react';
import {Searchbar} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

export function SearchBar(props) {
  const {placeholder, style, onSearchSubmit} = props;
  const colors = useTheme().colors;

  return (
    <View>
      <Searchbar
        style={[styles.containerStyle, {backgroundColor: colors.card}, style]}
        placeholder={placeholder}
        inputStyle={{
          textAlign: 'left',
          paddingRight: 10,
          fontFamily: 'Poppins-Regular',
          color: colors.text,
        }}
        onChangeText={props.onChangeSearch}
        value={props.searchQuery}
        onSubmitEditing={props.onSubmitEditing}
        onIconPress={() => {
          if (onSearchSubmit) {
            onSearchSubmit();
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    margin: 10,
    borderRadius: 10,
    color: 'black',
  },
});
