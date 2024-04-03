import {StyleSheet} from 'react-native';

const textColor = 'white';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#5B4DBC',
    borderColor: '#5B4DBC',
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: textColor,
    fontFamily: 'Poppins-Regular',
  },
  disabled: {
    opacity: 0.3,
  },
});

export default styles;
