import React, {useState} from 'react';
import {View, Image, ScrollView, KeyboardAvoidingView} from 'react-native';
import CTextInput from '../../../components/TextInput/CTextInput';
import {AppButton} from '../../../components/AppButton';
import {CText} from '../../../components/CText/CText';
import {BackIcon} from '../../../components/BackIcon/BackIcon';
import {LoginPhoto} from '../../../constants/constants';
import CheckBox from '@react-native-community/checkbox';
import {Styles} from '.';
import {TextInputPassword} from '../../../components/TextInputPassword/TextInputPassword';

export default SignUp = props => {
  const navigation = props.navigation; // navigation from props

  // navigate
  const HandleSignIn = () => {
    navigation.navigate('Home');
  };

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <KeyboardAvoidingView
      style={Styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Image style={Styles.loginPhotoStyle} source={LoginPhoto} />
        <BackIcon style={Styles.BackIconStyle} />
        <CText type="Bold" style={Styles.floatTxt}>
          Sign up to your{'\n'} account
        </CText>
        <CTextInput
          style={Styles.txtInputContainer}
          title="User name"
          placeholder="Enter your name"
        />

        <CTextInput
          style={Styles.txtInputContainer}
          title="Email"
          placeholder="Enter your email"
        />
        <TextInputPassword
          style={Styles.txtInputContainer}
          title=" Password"
          placeholder="Enter your Password"
        />
        <TextInputPassword
          style={Styles.txtInputContainer}
          title="confirm Password"
          placeholder="Enter your Password"
        />
        <View style={Styles.containerTxtAndCheck}>
          <CText maxLength={50}>
            I accept & agree terms conditions {'\n'} & privacy policy
          </CText>
          <CheckBox
            style={Styles.checkBoxStyle}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            tintColors={{true: '#5B4DBC', false: 'gray'}}
          />
        </View>

        <AppButton
          onPress={HandleSignIn}
          style={Styles.FontBtnStyle}
          wrapperStyle={Styles.containerBtn}
          title="sign Up"
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
