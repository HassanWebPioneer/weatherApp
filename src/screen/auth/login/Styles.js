import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: 'white',
    flex: 1,
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
  ORStyle: {
    textAlign: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    marginTop: 2,
    top: '67.8%',
    left: '43%',
    paddingHorizontal: 12,

    // marginTop: -20,
  },
  BackIconStyle: {position: 'absolute', top: 5},
  forgetTextStyle: {textAlign: 'right', margin: 15, marginTop: 0},
  FontBtnStyle: {color: 'white', fontSize: 18, fontFamily: 'Poppins-Bold'},
  BtnContainer: {height: 60, margin: 15, borderRaduis: 20},
});
