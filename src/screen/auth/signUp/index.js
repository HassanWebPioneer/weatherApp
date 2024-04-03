import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 5,
  },
  loginPhotoStyle: {
    height: undefined,
    width: '100%',
    aspectRatio: 563 / 350,
    alignSelf: 'center',
    borderRadius: 25,
    borderBottomRightRadius: 3,
    position: 'relative',
  },
  floatTxt: {
    position: 'absolute',
    top: '10%',
    margin: 15,
    color: 'white',
    fontSize: 28,
  },
  txtInputContainer: {marginTop: 20, margin: 15},
  containerSocialBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  ORStyle: {textAlign: 'center', marginTop: 10},
  BackIconStyle: {position: 'absolute', top: 5},
  forgetTextStyle: {textAlign: 'right', margin: 15, marginTop: 0},
  FontBtnStyle: {color: 'white', fontSize: 18, fontFamily: 'Poppins-Bold'},
  checkBoxStyle: {marginVertical: -3, borderRadius: 50},
  containerTxtAndCheck: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    margin: 15,
  },
  containerBtn: {height: 60, margin: 15, borderRadius: 20},
});
