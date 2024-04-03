import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  ImgBackGround: {
    height: undefined,
    width: '100%',
    aspectRatio: 375 / 124,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'relative',
  },
  titleStyle: {
    fontSize: 24,
    color: 'white',
    marginTop: 24,
    marginLeft: 20,
  },
  iconContainerAndTitle: {
    flexDirection: 'row',
    position: 'absolute',
    left: '5%',
    top: '5%',
  },
});
