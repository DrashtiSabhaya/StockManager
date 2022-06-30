import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/Colors';

const PortfolioScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PortfolioScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default PortfolioScreen;
