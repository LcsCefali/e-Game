import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background: #13131A;

`;

export const Text = styled(Animated.Text)`
  color: #fff;
  font-size: 32px;
`;

export const Dice = styled(Animated.View)`
  width: 100px;
  height: 100px;
  border-radius: 4px;

  background: #7159c1;
`;
