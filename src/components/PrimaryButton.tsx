import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

interface Props {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  color?: string;
  style?: object;
  titleStyle?: object;
}

const PrimaryButton = ({
  title,
  onPress,
  disabled,
  color = Colors.primaryColor,
  style,
  titleStyle,
}: Props) => {
  return (
    <TouchableOpacity
      style={{...styles.btnContainer, ...style, backgroundColor: color}}
      onPress={onPress}
      disabled={disabled}>
      <Text style={{...styles.titleText, ...titleStyle}}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    paddingVertical: 15,
    backgroundColor: Colors.primaryColor,
    marginHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  titleText: {
    fontFamily: Fonts.Bold,
    color: Colors.white,
    fontSize: 16,
  },
});

export default PrimaryButton;
