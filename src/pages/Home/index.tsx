import React, { useState } from 'react';
import {
  Container,
  Header,
  HeaderLeftConfig,
  HeaderUser,
  HeaderUserImage,
  Level,
  HeaderUserText,
  HeaderRightConfig,

  HomeContent
} from './styles';
import { Alert, TouchableOpacity } from 'react-native';

import HomeOption from '../../components/HomeOption';

import EuTest from '../../assets/eu-test-2.jpg';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Home: React.FC = ({ navigation }) => {

  return (
    <Container>
      <Header>
        <HeaderLeftConfig>
          <TouchableOpacity onPress={()=> navigation.navigate('PlayDice')}>
            <MaterialIcons name="menu" color="#fff" size={28} />
          </TouchableOpacity>
        </HeaderLeftConfig>
        <HeaderUser>
          <Level>49</Level>
          <HeaderUserImage source={EuTest} />
          <HeaderUserText>Lucas Cefali</HeaderUserText>
        </HeaderUser>
        <HeaderRightConfig>
          <MaterialIcons name="settings" color="#fff" size={28} />
        </HeaderRightConfig>
      </Header>

      <HomeContent showsVerticalScrollIndicator={false}>

        <HomeOption />
        <HomeOption />
        <HomeOption />
        <HomeOption />
        <HomeOption />

      </HomeContent>

    </Container>
  );
}

export default Home;
