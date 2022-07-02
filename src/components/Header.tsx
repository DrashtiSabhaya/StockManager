import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

interface Props {
  title?: string;
  leftIcon?: string;
  rightIcon?: string;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  disabled?: boolean;
  titleStyle?: object;
  iconColor?: string;
}

const Header = ({
  title,
  leftIcon,
  rightIcon,
  onLeftIconPress,
  onRightIconPress,
  disabled,
  titleStyle,
  iconColor,
}: Props) => {
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        {leftIcon && (
          <TouchableOpacity onPress={onLeftIconPress} disabled={disabled}>
            <Icon
              name={leftIcon}
              size={28}
              color={iconColor ? iconColor : Colors.primaryColor}
            />
          </TouchableOpacity>
        )}
        <Text style={titleStyle}>{title}</Text>
        {rightIcon && (
          <TouchableOpacity onPress={onRightIconPress} disabled={disabled}>
            <Icon
              name={rightIcon}
              size={28}
              color={iconColor ? iconColor : Colors.primaryColor}
            />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 15,
    paddingHorizontal: 5,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: Fonts.Bold,
    color: Colors.white,
    fontSize: 16,
  },
});

export default Header;
