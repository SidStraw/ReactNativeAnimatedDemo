/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {Animated, Button, View} from 'react-native';

const App = () => {
  // const sidebarAnimationValue = useRef(new Animated.Value(0)).current;
  // const scaleValue = useRef(0);

  // const buttonAnimationValue = React.useRef(
  //   [...Array(10)].map(() => new Animated.Value(0)),
  // ).current;

  // const runAnimationOnClick = () => {
  //   buttonAnimationValue.forEach(animated => animated.setValue(0));
  //   scaleValue.current = +!scaleValue.current;

  //   Animated.spring(sidebarAnimationValue, {
  //     toValue: scaleValue.current,
  //     useNativeDriver: true,
  //   }).start(({finished}) => {
  //     if (finished) {
  //       const animatedConfig = {
  //         toValue: 1,
  //         useNativeDriver: true,
  //       };
  //       Animated.stagger(
  //         300,
  //         buttonAnimationValue.map(animated =>
  //           Animated.timing(animated, animatedConfig),
  //         ),
  //       ).start();
  //     }
  //   });
  // };

  return (
    <View>
      <Button title="滑入 / 滑出" onPress={() => {}} />
      {/* <Animated.View
        style={{
          height: '100%',
          width: 200,
          backgroundColor: 'gray',
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
            <Button onPress={() => {}} title={`Button ${i}`} color={'green'} />
          </Animated.View>
        ))}
      </Animated.View> */}
    </View>
  );
};
export default App;
