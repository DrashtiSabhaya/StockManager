import React from 'react';
import {StyleSheet, View, I18nManager} from 'react-native';

let direction = I18nManager.isRTL ? 'right' : 'left';
let opDirection = I18nManager.isRTL ? 'Left' : 'Right';

function percentToDegrees(percent) {
  return percent * 3.6;
}

interface Props {
  color: string;
  shadowColor: string;
  bgColor?: string;
  radius: number;
  borderWidth: number;
  percent: number;
  children?: React.ReactNode;
  containerStyle?: object;
  outerCircleStyle?: object;
}

const ProgressCircle = ({
  color,
  shadowColor,
  bgColor,
  radius,
  borderWidth,
  percent,
  children,
  containerStyle,
  outerCircleStyle,
}: Props) => {
  const computeDerivedState = () => {
    const percentage = Math.max(Math.min(100, percent), 0);
    const needHalfCircle2 = percentage > 50;
    let halfCircle1Degree;
    let halfCircle2Degree;

    if (needHalfCircle2) {
      halfCircle1Degree = 180;
      halfCircle2Degree = percentToDegrees(percentage);
    } else {
      halfCircle1Degree = percentToDegrees(percentage);
      halfCircle2Degree = 0;
    }

    return {
      halfCircle1Degree,
      halfCircle2Degree,
      halfCircle2Styles: {
        backgroundColor: needHalfCircle2 ? color : shadowColor,
      },
    };
  };

  const renderHalfCircle = (
    rotateDegrees: number,
    halfCircleStyles?: object,
  ) => {
    return (
      <View
        style={[
          styles.leftWrap,
          {
            width: radius,
            height: radius * 2,
          },
        ]}>
        <View
          style={[
            styles.halfCircle,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              width: radius,
              height: radius * 2,
              borderRadius: radius,
              overflow: 'hidden',
              transform: [
                {translateX: radius / 2},
                {rotate: `${rotateDegrees}deg`},
                {translateX: -radius / 2},
              ],
              backgroundColor: color,
              ...halfCircleStyles,
            },
          ]}
        />
      </View>
    );
  };

  const renderInnerCircle = () => {
    const radiusMinusBorder = radius - borderWidth;
    return (
      <View
        style={[
          styles.innerCircle,
          {
            width: radiusMinusBorder * 2,
            height: radiusMinusBorder * 2,
            borderRadius: radiusMinusBorder,
            backgroundColor: bgColor,
            ...containerStyle,
          },
        ]}>
        {children}
      </View>
    );
  };

  const {halfCircle1Degree, halfCircle2Degree, halfCircle2Styles} =
    computeDerivedState();

  return (
    <View
      style={[
        styles.outerCircle,
        {
          width: radius * 2,
          height: radius * 2,
          borderRadius: radius,
          backgroundColor: shadowColor,
          ...outerCircleStyle,
        },
      ]}>
      {renderHalfCircle(halfCircle1Degree)}
      {renderHalfCircle(halfCircle2Degree, halfCircle2Styles)}
      {renderInnerCircle()}
    </View>
  );
};

const styles = StyleSheet.create({
  outerCircle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftWrap: {
    position: 'absolute',
    top: 0,
    [`${direction}`]: 0,
  },
  halfCircle: {
    position: 'absolute',
    top: 0,
    left: 0,
    [`borderTop${opDirection}Radius`]: 0,
    [`borderBottom${opDirection}Radius`]: 0,
  },
});

export default ProgressCircle;
