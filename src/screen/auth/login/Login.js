import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import CTextInput from '../../../components/TextInput/CTextInput';
import {AppButton} from '../../../components/AppButton';
import {SocialBtn} from '../../../components/socialBtn/SocialBtn';
import {CText} from '../../../components/CText/CText';
import {BackIcon} from '../../../components/BackIcon/BackIcon';
import {SocialIcons} from '../../../constants/constants';
import {LoginIcons} from '../../../constants/constants';
import {LoginPhoto} from '../../../constants/constants';
import {Styles} from './Styles';

export default Login = props => {
  const navigation = props.navigation; // navigation from props

  // navigate
  const HandleSignIn = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={Styles.container}>
      <Image style={Styles.loginPhotoStyle} source={LoginPhoto} />
      <BackIcon style={Styles.BackIconStyle} />
      <CText type="Bold" style={Styles.floatTxt}>
        Sign in to your{'\n'} account
      </CText>
      <CTextInput
        img={LoginIcons.mailIcon}
        style={Styles.txtInputContainer}
        title="Email"
        placeholder="Enter your Email"
      />

      <CTextInput
        img={LoginIcons.passIcon}
        style={Styles.txtInputContainer}
        title="Password"
        placeholder="Enter your Password"
      />
      <CText style={Styles.forgetTextStyle}>ForgetPassword?</CText>

      <AppButton
        onPress={HandleSignIn}
        style={Styles.FontBtnStyle}
        wrapperStyle={Styles.BtnContainer}
        title="sign in"
      />
      <View
        style={{
          margin: 15,
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <CText style={Styles.ORStyle} type="Bold">
        OR
      </CText>

      <View style={Styles.containerSocialBtn}>
        <SocialBtn icon={SocialIcons.googleIcon} />
        <SocialBtn icon={SocialIcons.facebookIcon} />
        <SocialBtn icon={SocialIcons.twitterIcon} />
      </View>
    </View>
  );
};
