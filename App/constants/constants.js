export const SocialIcons = {
  googleIcon: require('../assets/socialicon/google.png'),
  twitterIcon: require('../assets/socialicon/twitter.png'),
  facebookIcon: require('../assets/socialicon/facebook.png'),
};

export const LoginIcons = {
  mailIcon: require('../assets/images/mail.png'),
  passIcon: require('../assets/images/lock.png'),
};

export const Colors = {};

export const LoginPhoto = require('../assets/images/photo.png');

export const BackGroundHome = require('../assets/images/background.png');

export const WeatherCardIcons = {
  calender: require('../assets/images/calendar.png'),
  locationPic: require('../assets/images/mapPic.png'),
};

export const sunIcon = require('../assets/images/sun.png');

export const HomeImg = require('../assets/images/ImageCard.png');

export const SunImg = require('../assets/images/sun.png');

// calculate date

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Month is zero-based, so add 1
const day = currentDate.getDate();

export const fullDate = `${year}-${month}-${day}`;
