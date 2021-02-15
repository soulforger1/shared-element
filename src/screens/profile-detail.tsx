import * as React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  Animated,
} from 'react-native';
const {width} = Dimensions.get('window');

export const ProfileDetail: React.FC<any> = ({route}) => {
  const {name, jobTitle, email, profileImg, favColor, position} = route.params;
  const x = position.x - position.inX;
  const y = position.y - position.inY - 92;
  const translateX = new Animated.Value(x);
  const translateY = new Animated.Value(y);

  Animated.timing(translateX, {
    toValue: 20,
    duration: 1000,
    useNativeDriver: true,
  }).start();
  Animated.timing(translateY, {
    toValue: 10,
    duration: 1000,
    useNativeDriver: true,
  }).start();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ACF8FF'}}>
      <Animated.View
        style={[
          styles.cardContainer,
          {transform: [{translateX}, {translateY}]},
        ]}>
        <View
          style={[StyleSheet.absoluteFillObject, {backgroundColor: favColor}]}
        />
        <Text style={[styles.font, styles.name]}>{name}</Text>
        <Text style={styles.font}>{jobTitle}</Text>
        <Text style={styles.font}>{email}</Text>
        <Image
          style={styles.avatar}
          source={{uri: profileImg}}
          resizeMode={'cover'}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: width - 40,
    height: 150,
    padding: 20,
    position: 'absolute',
  },
  font: {
    color: 'white',
    fontSize: 11,
    opacity: 0.7,
  },
  name: {
    fontWeight: '700',
    fontSize: 18,
    opacity: 1,
  },
  avatar: {
    height: 150 * 0.8,
    width: 150 * 0.8,
    position: 'absolute',
    resizeMode: 'contain',
    bottom: 8,
    right: 8,
  },
});
