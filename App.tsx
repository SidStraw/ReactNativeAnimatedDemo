/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {Animated, Button, View, SafeAreaView, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const App = () => {
  const sidebarAnimationValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(0);

  const buttonAnimationValue = React.useRef(
    [...Array(10)].map(() => new Animated.Value(0)),
  ).current;

  const runAnimationOnClick = () => {
    buttonAnimationValue.forEach(animated => animated.setValue(0));
    scaleValue.current = +!scaleValue.current;

    Animated.timing(sidebarAnimationValue, {
      toValue: scaleValue.current,
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) {
        const animatedConfig = {
          toValue: 1,
          useNativeDriver: true,
        };
        Animated.stagger(
          300,
          buttonAnimationValue.map(animated =>
            Animated.timing(animated, animatedConfig),
          ),
        ).start();
      }
    });
  };

  return (
    <SafeAreaView>
      <View style={{width, height}}>
        <Button title="滑入 / 滑出" onPress={runAnimationOnClick} />
        <Animated.View
          style={{
            flex: 1,
            width: 200,
            backgroundColor: '#427685',
            marginLeft: sidebarAnimationValue.interpolate({
              inputRange: [0, 1],
              outputRange: [-200, 0],
            }),
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
      </View>
    </SafeAreaView>
  );
};
export default App;
