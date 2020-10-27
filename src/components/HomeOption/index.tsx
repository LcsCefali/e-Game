import React, { useState, useCallback } from 'react';

import { OptionContent, OptionHeader, OptionText, Bottom,  } from './styles';

import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';

import { PanGestureHandler, TapGestureHandler } from 'react-native-gesture-handler';


const HomeOption: React.FC = () => {
  const [showBorder, setShowBorder] = useState(true);
  const border = useSharedValue(10);

  const borderStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: border.value }
      ]
      // height: border.value
    }
  });

  const handlePressButon = useAnimatedGestureHandler({
    onStart: () => {
      border.value = withTiming(28, {
        duration: 10
      });
    },
    // onActive: (event) => {
    //   // realizar scroll aqui depois
    //   console.log(event);
    // },
    onFinish: () => {
      border.value = withTiming(10, {
        duration: 100
      });
    },
    onFail: () => {
      border.value = withTiming(10, {
        duration: 100
      });
    },
  })

  return (
    <TapGestureHandler onGestureEvent={handlePressButon}>
      <OptionContent>
        <OptionHeader style={[borderStyle]} >
          <OptionText>
            Desafio
          </OptionText>
        </OptionHeader>

        <Bottom />

      </OptionContent>
    </TapGestureHandler>
  );
}

export default HomeOption;
