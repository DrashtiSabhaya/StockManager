import React, {useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import {statData} from '../../constants/contants';
import Circle from '../../assets/images/bg-circle.svg';
import CircleBottom from '../../assets/images/circle-bottom.svg';

const screen = Dimensions.get('window');
const ITEM_LENGTH: number = screen.width;

const DetailCard = () => {
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
        data={statData}
        renderItem={({item}) => {
          return (
            <Animated.View style={styles.itemContent}>
              <View style={styles.card}>
                <Circle style={styles.topCircle} />
                <Text style={styles.titleText}>${item.value}</Text>
                <Text style={styles.subTitleText}>{item.title}</Text>
                {item.id === 1 && (
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                      <Text style={styles.buttonText}>Add Money</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                      <Text style={styles.buttonText}>Withdraw</Text>
                    </TouchableOpacity>
                  </View>
                )}
                <CircleBottom style={styles.bottomCircle} />
              </View>
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
        {statData.map((item, key) => (
          <Icon
            key={key}
            name={activeIndex === key ? 'ellipse-outline' : 'ellipse'}
            style={styles.bulletIcon}
            size={12}
            color={Colors.primaryColor}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  flatListContent: {},
  itemContent: {
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
  card: {
    marginHorizontal: 20,
    backgroundColor: Colors.primaryColor,
    borderRadius: 6,
    overflow: 'hidden',
  },
  topCircle: {
    alignSelf: 'flex-start',
  },
  bottomCircle: {
    alignSelf: 'flex-end',
    marginTop: -20,
  },
  titleText: {
    fontFamily: Fonts.Bold,
    color: Colors.white,
    fontSize: 40,
    textAlign: 'center',
    marginTop: -30,
  },
  subTitleText: {
    fontFamily: Fonts.SemiBold,
    color: Colors.white,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 21,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    padding: 10,
    minWidth: 100,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  buttonText: {
    fontFamily: Fonts.Bold,
    color: Colors.textColor,
    fontWeight: '700',
    fontSize: 12,
  },
});

export default DetailCard;
