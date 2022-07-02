import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../constants/Colors';
import Header from '../../components/Header';
import DetailCard from './DetailCard';
import Icon from 'react-native-vector-icons/Ionicons';
import PrimaryButton from '../../components/PrimaryButton';
import Fonts from '../../constants/Fonts';
import ProjectionGraph from '../../assets/images/projection-graph.svg';
import MoneyIcon from '../../assets/images/icons/money.svg';
import Money180Icon from '../../assets/images/icons/money-180.svg';
import MoneyOutline from '../../assets/images/icons/money-outline.svg';
import People from '../../assets/images/icons/persons.svg';
import Wallet from '../../assets/images/icons/wallet.svg';
import ReLoad from '../../assets/images/icons/reload.svg';

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Header leftIcon="chevron-back" onLeftIconPress={navigation.goBack} />
      <ScrollView>
        <Text style={styles.title}>Family Plus Investments</Text>
        <DetailCard />
        <View style={styles.planContainer}>
          <View style={styles.planItem}>
            <TouchableOpacity style={styles.planIconContainer}>
              <MoneyIcon />
            </TouchableOpacity>
            <Text style={styles.planText}>FamilyPlus Savings</Text>
          </View>
          <View style={styles.planItem}>
            <TouchableOpacity style={styles.planIconContainer}>
              <Money180Icon />
            </TouchableOpacity>
            <Text style={styles.planText}>Invest in Stocks</Text>
          </View>
          <View style={styles.planItem}>
            <TouchableOpacity style={styles.planIconContainer}>
              <Icon name="person" size={20} color={Colors.primaryColor} />
            </TouchableOpacity>
            <Text style={styles.planText}>Early for kids</Text>
          </View>
        </View>
        <View style={styles.listContainer}>
          <View style={styles.listItem}>
            <Text style={styles.listMainText}>Portfolio</Text>
            <View style={styles.rowContainer}>
              <Text style={[styles.listMainText, styles.listPrimaryText]}>
                Aggressive
              </Text>
              <Icon name={'chevron-forward'} color={'#888789'} size={20} />
            </View>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listMainText}>Round-Up Settings</Text>
            <View style={styles.rowContainer}>
              <Text style={[styles.listMainText, styles.listPrimaryText]}>
                Automatic
              </Text>
              <Icon name={'chevron-forward'} color={'#888789'} size={20} />
            </View>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listMainText}>Recurring</Text>
            <View style={styles.rowContainer}>
              <Text style={[styles.listMainText, styles.listPrimaryText]}>
                $20/Monthly
              </Text>
              <Icon name={'chevron-forward'} color={'#888789'} size={20} />
            </View>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listMainText}>Beneficiary</Text>
            <View style={styles.rowContainer}>
              <Text style={[styles.listMainText, styles.listPrimaryText]}>
                1 Child
              </Text>
              <Icon name={'chevron-forward'} color={'#888789'} size={20} />
            </View>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listMainText}>One-time Investment</Text>
            <View style={styles.rowContainer}>
              <Icon name={'chevron-forward'} color={'#888789'} size={20} />
            </View>
          </View>
        </View>
        <View style={styles.transactionContainer}>
          <Text style={styles.transctionTitle}>Recent Transactions</Text>
          <View style={styles.listStyle}>
            <Icon
              color={Colors.primaryColor}
              size={30}
              name="checkmark-circle"
            />
            <View style={styles.detailBox}>
              <Text style={styles.listMainText}>One Time Investment</Text>
              <Text style={styles.listText}>Processing</Text>
            </View>
            <Text style={styles.amount}>$20</Text>
          </View>
          <View style={styles.listStyle}>
            <Icon
              color={Colors.primaryColor}
              size={30}
              name="checkmark-circle"
            />
            <View style={styles.detailBox}>
              <Text style={styles.listMainText}>Withdrawal</Text>
              <Text style={styles.listText}>Processing</Text>
            </View>
            <Text style={styles.amount}>$-8.00</Text>
          </View>
          <View style={styles.listStyle}>
            <Icon
              color={Colors.primaryColor}
              size={30}
              name="checkmark-circle"
            />
            <View style={styles.detailBox}>
              <Text style={styles.listMainText}>Round-Up Investment</Text>
              <Text style={styles.listText}>Processing</Text>
            </View>
            <Text style={styles.amount}>$10.36</Text>
          </View>
        </View>
        <PrimaryButton
          title="View all"
          onPress={() => {
            navigation.navigate('PortfolioScreen');
          }}
        />
        <View style={styles.graphContainer}>
          <Text style={styles.graphTitleText}>
            Hypothetical projection of $12000 at age 16
          </Text>
          <View style={styles.listItem}>
            <Text>Investment: $550</Text>
            <Text>Returns: $12,000</Text>
          </View>
          <ProjectionGraph style={styles.graph} />
        </View>
        <View style={styles.faqContainer}>
          <Text style={styles.transctionTitle}>Grow your Knowledge</Text>
          <View style={styles.listStyle}>
            <People style={styles.faqIcon} />
            <Text style={styles.listMainText}>What is Family Plus?</Text>
          </View>
          <View style={styles.listStyle}>
            <ReLoad style={styles.faqIcon} />
            <Text style={styles.listMainText}>How do Round-Ups work?</Text>
          </View>
          <View style={styles.listStyle}>
            <MoneyOutline style={styles.faqIcon} />
            <Text style={styles.listMainText}>What is FamilyPlus Savings?</Text>
          </View>
          <View style={styles.listStyle}>
            <Wallet style={styles.faqIcon} />
            <Text style={styles.listMainText}>
              How can I withdraw my money?
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  planContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  listContainer: {
    backgroundColor: Colors.greyLight,
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
  },
  listItem: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    color: Colors.textColor,
    fontFamily: Fonts.SemiBold,
    fontSize: 20,
    lineHeight: 30,
    marginBottom: 18,
  },
  planItem: {
    alignItems: 'center',
  },
  planIconContainer: {
    backgroundColor: Colors.lightBackground,
    height: 45,
    width: 45,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  planText: {
    color: Colors.smallTextColor,
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 15,
    marginTop: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listMainText: {
    fontFamily: Fonts.SemiBold,
    fontWeight: '600',
    color: Colors.textColor,
    fontSize: 14,
  },
  listPrimaryText: {
    color: Colors.primaryColor,
  },
  transactionContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 6,
  },
  transctionTitle: {
    fontFamily: Fonts.Bold,
    fontWeight: '700',
    color: Colors.textColor,
    fontSize: 16,
    padding: 10,
    backgroundColor: Colors.whiteLight,
  },
  detailBox: {
    marginHorizontal: 10,
    width: '70%',
  },
  listStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: Colors.whiteLight,
    borderRadius: 6,
  },
  listText: {
    color: Colors.textColor,
    fontSize: 12,
    lineHeight: 15,
    marginTop: 5,
  },
  amount: {
    color: Colors.textColor,
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'right',
    alignItems: 'flex-end',
    width: '15%',
  },
  graphContainer: {
    marginVertical: 30,
    marginHorizontal: 20,
    backgroundColor: Colors.primaryBackground,
    paddingVertical: 30,
  },
  graphTitleText: {
    width: 200,
    color: Colors.textColor,
    fontSize: 18,
    lineHeight: 30,
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  graph: {
    marginTop: 70,
    alignSelf: 'center',
  },
  faqContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  faqIcon: {
    marginRight: 15,
  },
});

export default Dashboard;
