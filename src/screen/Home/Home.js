import React, {useState} from 'react';
import {View, Image, Alert, ActivityIndicator} from 'react-native';
import {CText} from '../../components/CText/CText';
import {BackIcon} from '../../components/BackIcon/BackIcon';
import {getWeatherData} from '../../Api/api';
import {BackGroundHome} from '../../constants/constants';
import {Styles} from './Styles';
import {SearchBar} from '../../components/SearchBar/SearchBar';
import {WeatherCard} from '../../components/weatherCard/WeatherCard'; // Import WeatherCard component

export default Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = value => {
    setSearchValue(value);
    console.log('Search value:', value);
  };

  const fetchData = async searchTerm => {
    try {
      setLoading(true);
      const data = await getWeatherData(searchTerm);
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      Alert.alert('Error fetching weather data:');
      setLoading(false);
    }
  };

  const handleSearchSubmit = () => {
    if (searchValue) {
      fetchData(searchValue);
    }
  };

  return (
    <View style={{margin: 5}}>
      <Image style={Styles.ImgBackGround} source={BackGroundHome} />
      <View style={Styles.iconContainerAndTitle}>
        <BackIcon />
        <CText style={Styles.titleStyle}>App Weather</CText>
      </View>
      <SearchBar
        placeholder="Enter City Name"
        onChangeSearch={handleSearchChange}
        value={searchValue}
        onSearchSubmit={handleSearchSubmit}
      />
      {weatherData && <WeatherCard item={weatherData} />}
    </View>
  );
};
