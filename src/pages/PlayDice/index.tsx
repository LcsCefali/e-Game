import React, { useEffect, useRef, RefObject } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  useAnimatedGestureHandler
 } from 'react-native-reanimated';

import { PanGestureHandler } from 'react-native-gesture-handler';

import { Container, Text, Dice } from './styles';

const PlayDice: React.FC = ({ navigation }) => {
  const title = useSharedValue(200);
  const cubeX = useSharedValue(0);
  const cubeY = useSharedValue(0);

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: title.value }
      ]
    }
  });

  const cubeStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: cubeY.value },
        { translateX: cubeX.value },
        // { rotateX: (cubeX.value / 11) },
        // { rotateY: (cubeY.value / 11) },
        // { rotateZ: (cubeY.value / 11) }
      ]
    }
  })

  const gestureHandler = useAnimatedGestureHandler({
    // onStart: ({y, x}) => {
    //   cubeY.value = y;
    //   cubeX.value = x;
    // },
    onActive: ({translationY, translationX, y, x}) => {
      cubeY.value = translationY;
      cubeX.value = translationX;
      // console.log(e)
    },
    onEnd: ({translationY, translationX}) => {
      cubeY.value = withSpring(0);
      cubeX.value = withSpring(0);
    },
  })

  useEffect(() => {
    title.value = withTiming(-20, {
      duration: 1000
    });
  }, []);

  return (
    <Container>
      <Text style={[titleStyle]}>e-Game</Text>
      <PanGestureHandler
        // style={{
        //   width: 200,
        //   height: 200
        // }}
        onGestureEvent={gestureHandler}
      >
        {/* <Text style={[cubeStyle]}>Testando</Text> */}
        <Dice style={[cubeStyle]}>
          <Text>Hi</Text>
        </Dice>
      </PanGestureHandler>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </Container>
  );
}

export default PlayDice;
