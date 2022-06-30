import React from 'react';
import {StyleSheet, View} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import Colors from '../../constants/Colors';
import IntroSlider from './IntroSlider';
import CoinIcon from '../../assets/images/splash-coins.svg';
import {useNavigation} from '@react-navigation/native';
import {slideText} from '../../constants/contants';

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <CoinIcon style={styles.splashImage} />
      <IntroSlider data={slideText} />
      <PrimaryButton
        title="Get Started"
        onPress={() => {
          navigation.navigate('Dashboard');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
  },
  splashImage: {
    alignSelf: 'center',
    height: 240,
  },
});

export default SplashScreen;
