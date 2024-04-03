import React from 'react';

import {View, Image, StyleSheet} from 'react-native';
import {CText} from '../CText/CText';
import {
  HomeImg,
  SunImg,
  WeatherCardIcons,
  fullDate,
} from '../../constants/constants';

export function WeatherCard(props) {
  const {item} = props; // comes from parent screen Home (item city weather)

  var celecios = Math.round((item.main.temp - 32) * (5 / 9));

  return (
    <View style={styles.container}>
      <Image style={styles.imgStyle} source={HomeImg} />

      <View style={styles.parentSunStyle}>
        <Image style={styles.sunIcon} source={SunImg} />
        <CText style={{marginTop: 10, fontSize: 22, color: 'white'}}>
          {celecios} C
        </CText>
      </View>

      <View style={styles.containerViewTxt}>
        <View style={styles.childContainerView}>
          <Image
            style={styles.calenderIcon}
            source={WeatherCardIcons.calender}
          />
          <CText style={{marginLeft: 8}}>{fullDate}</CText>
        </View>

        <View style={styles.childNameCityView}>
          <Image style={styles.mapIcon} source={WeatherCardIcons.locationPic} />
          <CText style={{marginTop: 2}}>{item.name}</CText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginTop: 10},
  imgStyle: {
    width: '95%',
    height: undefined,
    aspectRatio: 319 / 157,
    alignSelf: 'center',
    position: 'relative',
  },
  calenderIcon: {
    width: 20,
    aspectRatio: 13 / 12,
    height: undefined,
  },
  mapIcon: {
    aspectRatio: 26 / 30,
    width: 20,
    height: undefined,
    marginHorizontal: 7,
  },
  sunIcon: {
    height: undefined,
    width: 50,
    aspectRatio: 52 / 52,
    marginHorizontal: 8,
  },
  parentSunStyle: {
    flexDirection: 'row',
    position: 'absolute',
    left: '5%',
    top: '3%',
  },
  containerViewTxt: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    margin: 5,
    marginTop: -2,
  },
  childContainerView: {flexDirection: 'row', alignSelf: 'flex-end', margin: 13},
  childNameCityView: {flexDirection: 'row', marginTop: 10},
});
