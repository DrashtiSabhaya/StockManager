import React from 'react';
import {ScrollView, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header';
import PrimaryButton from '../../components/PrimaryButton';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import ProgressCircle from './ProgressCircle';
import PieChart from 'react-native-pie-chart';

const PortfolioScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftIcon="chevron-back"
        rightIcon="help-circle-outline"
        onLeftIconPress={navigation.goBack}
      />
      <ScrollView>
        <Text style={styles.title}>Aggressive Portfolio</Text>
        <View style={styles.chartContainer}>
          <View style={styles.chartStyle}>
            <PieChart
              widthAndHeight={189}
              doughnut={true}
              series={[55, 5, 30, 10]}
              sliceColor={Colors.themeColor}
              coverRadius={0.45}
              coverFill={'#FFF'}
            />
          </View>
          <View style={styles.dataContainer}>
            <View style={styles.rowContainer}>
              <Icon name={'ellipse'} size={12} color={Colors.themeColor[0]} />
              <Text style={styles.graphText}>Large Company Stocks(VOO)</Text>
            </View>
            <View style={styles.rowContainer}>
              <Icon name={'ellipse'} size={12} color={Colors.themeColor[1]} />
              <Text style={styles.graphText}>Medium Company Stocks (IJH)</Text>
            </View>
            <View style={styles.rowContainer}>
              <Icon name={'ellipse'} size={12} color={Colors.themeColor[2]} />
              <Text style={styles.graphText}>
                International Company Stocks (IXUS)
              </Text>
            </View>
            <View style={styles.rowContainer}>
              <Icon name={'ellipse'} size={12} color={Colors.themeColor[3]} />
              <Text style={styles.graphText}>Small Company Stocks(IJR)</Text>
            </View>
          </View>
        </View>
        <View style={styles.statContainer}>
          <Text style={[styles.statText, styles.boldText]}>
            Prospective Outcome
          </Text>
          <Text style={styles.statText}>Risk:6</Text>
          <Text style={styles.statText}>Returns 10-15%</Text>
        </View>
        <View style={styles.listStyle}>
          <Text style={styles.listMainText}>Large Company Stocks(VOO)</Text>
          <ProgressCircle
            percent={55}
            radius={18}
            borderWidth={6}
            color={Colors.blueText}
            shadowColor={Colors.primaryBackground}
            bgColor={Colors.portfolioListbg}
            outerCircleStyle={styles.progressStyle}>
            <Text style={styles.progressText}>{'55%'}</Text>
          </ProgressCircle>
          <Icon name={'chevron-forward'} color={'#888789'} size={20} />
        </View>
        <View style={styles.listStyle}>
          <Text style={styles.listMainText}>Medium Company Stocks (IJH)</Text>
          <ProgressCircle
            percent={10}
            radius={18}
            borderWidth={6}
            color={Colors.blueText}
            shadowColor={Colors.primaryBackground}
            bgColor={Colors.portfolioListbg}
            outerCircleStyle={styles.progressStyle}>
            <Text style={styles.progressText}>{'10%'}</Text>
          </ProgressCircle>
          <Icon name={'chevron-forward'} color={'#888789'} size={20} />
        </View>
        <View style={styles.listStyle}>
          <Text style={styles.listMainText}>Small Company Stocks(IJR)</Text>
          <ProgressCircle
            percent={5}
            radius={18}
            borderWidth={6}
            color={Colors.blueText}
            shadowColor={Colors.primaryBackground}
            bgColor={Colors.portfolioListbg}
            outerCircleStyle={styles.progressStyle}>
            <Text style={styles.progressText}>{'5%'}</Text>
          </ProgressCircle>
          <Icon name={'chevron-forward'} color={'#888789'} size={20} />
        </View>
        <View style={styles.listStyle}>
          <Text style={styles.listMainText}>
            International Company Stocks (IXUS){' '}
          </Text>
          <ProgressCircle
            percent={30}
            radius={18}
            borderWidth={6}
            color={Colors.blueText}
            shadowColor={Colors.primaryBackground}
            bgColor={Colors.portfolioListbg}
            outerCircleStyle={styles.progressStyle}>
            <Text style={styles.progressText}>{'30%'}</Text>
          </ProgressCircle>
          <Icon name={'chevron-forward'} color={'#888789'} size={20} />
        </View>
        <PrimaryButton
          style={styles.buttonContainer}
          color={Colors.lightPrimary}
          title="This Portfolio is Selected"
          titleStyle={styles.buttonTitle}
          onPress={() => {}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  buttonTitle: {
    fontFamily: Fonts.Bold,
    fontWeight: '700',
    color: Colors.textColor,
    fontSize: 16,
  },
  title: {
    textAlign: 'center',
    color: Colors.darkText,
    fontFamily: Fonts.SemiBold,
    fontSize: 24,
    fontWeight: '700',
  },
  statContainer: {
    width: 175,
    marginHorizontal: 20,
    padding: 12,
    backgroundColor: Colors.portfolioListbg,
    marginVertical: 5,
  },
  statText: {
    fontFamily: Fonts.Regular,
    color: Colors.textColor,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 15,
  },
  listStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: Colors.portfolioListbg,
    borderRadius: 6,
    marginVertical: 5,
    marginHorizontal: 20,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  listMainText: {
    fontFamily: Fonts.SemiBold,
    fontWeight: '600',
    color: Colors.darkText,
    fontSize: 14,
    width: '80%',
  },
  boldText: {
    fontWeight: '700',
  },
  progressText: {
    fontWeight: '800',
    fontFamily: Fonts.Bold,
    color: Colors.darkText,
    fontSize: 8,
  },
  progressStyle: {
    marginHorizontal: 5,
  },
  chartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  graphText: {
    fontSize: 8,
  },
  dataContainer: {
    width: '30%',
    bottom: 0,
    right: 15,
    position: 'absolute',
  },
  chartStyle: {
    width: '65%',
    alignItems: 'flex-end',
  },
});

export default PortfolioScreen;
