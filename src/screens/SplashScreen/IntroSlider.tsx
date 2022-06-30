import React, {useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const screen = Dimensions.get('window');
const ITEM_LENGTH: number = screen.width;

interface ImageCarouselProps {
  data: any;
}

const IntroSlider = ({data}: ImageCarouselProps) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList<any>>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const getItemLayout = (_data: any, index: number) => {
    const slide: number = Math.ceil(scrollX._value / ITEM_LENGTH);
    if (activeIndex !== slide) {
      setActiveIndex(slide);
    }

    return {
      length: ITEM_LENGTH,
      offset: ITEM_LENGTH * (index - 1),
      index,
    };
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={({item}) => {
          return (
            <Animated.View style={styles.itemContent}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.subTitleText}>{item.subTitle}</Text>
            </Animated.View>
          );
        }}
        getItemLayout={getItemLayout}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        bounces={false}
        decelerationRate={0}
        renderToHardwareTextureAndroid
        contentContainerStyle={styles.flatListContent}
        snapToInterval={ITEM_LENGTH}
        snapToAlignment="start"
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}
        maximumZoomScale={5}
        minimumZoomScale={1}
      />
      <View style={styles.bullets}>
        {data.map((item, key) => (
          <Icon
            key={key}
            name={'ellipse'}
            style={styles.bulletIcon}
            size={8}
            color={activeIndex === key ? Colors.primaryColor : Colors.greyColor}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  flatListContent: {
    alignItems: 'center',
  },
  itemContent: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: ITEM_LENGTH,
  },
  bullets: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  bulletIcon: {
    marginHorizontal: 2,
  },
  titleText: {
    width: 285,
    fontFamily: Fonts.Bold,
    color: Colors.darkText,
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 36,
    marginVertical: 5,
  },
  subTitleText: {
    width: 290,
    fontFamily: Fonts.Regular,
    color: Colors.darkText,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 21,
  },
});

export default IntroSlider;
