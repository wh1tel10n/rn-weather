import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    // console.log(data);
    this.setState({ isLoading: false, temp: data.main.temp });
  };
  getLocation = async () => {
    // const location = await Location.getCurrentPositionAsync();
    // console.log(location);
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      // this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you.","So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    // return <Loading />;
    // const { isLoading } = this.state;
    // return isLoading? <Loading/> : null;
    const { isLoading, temp } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} />;
  }
}
