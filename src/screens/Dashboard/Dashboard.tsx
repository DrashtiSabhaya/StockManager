import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import Colors from '../../constants/Colors';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Dashboard</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default Dashboard;
