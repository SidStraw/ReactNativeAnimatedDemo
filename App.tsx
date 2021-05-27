/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {
  Animated,
  Button,
  View,
  SafeAreaView,
  Dimensions,
  Text,
} from 'react-native';
const {width, height} = Dimensions.get('window');

const App = () => {
  const sidebarAnimationValue = useRef(new Animated.Value(0)).current;

  const buttonAnimationValue = React.useRef(
    [...Array(10)].map(() => new Animated.Value(0)),
  ).current;

  return (
    <SafeAreaView>
      <View style={{width, height}}>
        <Animated.View
          style={{
            flex: 1,
            width: 200,
            backgroundColor: '#427685',
            overflow: 'hidden',
            transform: [
              {
                translateX: sidebarAnimationValue.interpolate({
                  inputRange: [0, 2000],
                  outputRange: [-200, 100],
                }),
              },
            ],
          }}>
          {buttonAnimationValue.map((animated, i) => (
            <Animated.View
              key={i}
              style={{
                opacity: animated.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              }}>
              <Button
                onPress={() => {}}
                title={`Button ${i}`}
                color={'#9EBEC6'}
              />
            </Animated.View>
          ))}
        </Animated.View>
        <View style={{flex: 4}}>
          <Animated.ScrollView
            overScrollMode={'never'}
            style={{flex: 1, paddingTop: 100}}
            scrollEventThrottle={30}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {contentOffset: {y: sidebarAnimationValue}},
                },
              ],
              {
                listener: event => {
                  console.log(event);
                },
                useNativeDriver: false,
              },
            )}>
            <Animated.Text
              style={[
                {
                  position: 'absolute',
                  zIndex: 100,
                  textAlign: 'center',
                  top: sidebarAnimationValue.interpolate({
                    inputRange: [0, 300],
                    outputRange: [30, 0],
                  }),
                  left: 0,
                  right: 0,
                  padding: 30,
                  backgroundColor: '#9EBEC6',
                  opacity: sidebarAnimationValue.interpolate({
                    inputRange: [0, 150],
                    outputRange: [1, 0],
                  }),
                },
              ]}>
              <Text>DEMO Title</Text>
            </Animated.Text>

            <Animated.View
              style={{
                marginTop: 50,
                transform: [
                  {
                    translateY: sidebarAnimationValue.interpolate({
                      inputRange: [0, 250],
                      outputRange: [100, 0],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              }}>
              {[...Array(100)].map((val, i) => (
                <Text key={i} style={{textAlign: 'center', padding: 10}}>
                  DEMO {i + 1}
                </Text>
              ))}
            </Animated.View>
          </Animated.ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default App;
