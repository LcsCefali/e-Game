import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;

  background: ${props => props.theme.backgroundColor};
`;

export const Header = styled.View`
  flex-direction: row;

  align-items: center;

  justify-content: space-between;

  padding: 10px 20px;
`;

export const HeaderLeftConfig = styled.View``;

export const HeaderUser = styled.View`
  /* position: absolute;
  top: 0;
  right: 0;
  left: 0; */
  flex-direction: column;

  align-items: center;
`;

export const HeaderUserImage = styled.Image`
  border-radius: 25px;

  width: 50px;
  height: 50px;
`;

export const Level = styled.Text`
  margin-bottom: -15px;
  margin-right: -30px;
  z-index: 1;

  background: red;
  color: #fff;
  text-align: center;
  font-size: 12px;
  font-weight: bold;

  padding: 1px 2px;

  width: 20px;
  height: 20px;
  border-radius: 5px;
`;

export const HeaderUserText = styled.Text`
  font-size: 16px;
  padding-top: 5px;
  color: ${props => props.theme.primary};
`;

export const HeaderRightConfig = styled.View``;

export const HomeContent = styled.ScrollView`
  flex: 1;

  /* margin-top: 35px; */

  /* background: #fff; */
`;

