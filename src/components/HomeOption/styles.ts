import styled from 'styled-components/native';
import Animated from 'react-native-reanimated'

export const OptionContent = styled(Animated.View)`
  margin: 30px;
`;

export const OptionHeader = styled(Animated.View)`
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  border: 1px solid #7159c1;

  /* border-bottom-color: #6146ba;
  border-bottom-width: 10px; */

  background: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.backgroundColor};

  z-index: 5;
  elevation: 5;
`;

export const OptionText = styled(Animated.Text)`
  padding: 30px;

  color: ${props => props.theme.primary};
`;

export const Bottom = styled(Animated.Text)`
  background: #7159c1;

  border: 1px solid #7159c1;

  height: 30px;
  width: 99.5%;
  margin: auto;

  border-top-left-radius: -50px;
  border-top-right-radius: -50px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  align-self: stretch;
`;
