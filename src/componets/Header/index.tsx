import React from 'react';
import {View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Head, Title } from './styles';

export default function Header() {
  const navigation = useNavigation();

  return(
    <Container>
      <Head>
        <View>
        </View>
      </Head>
    </Container>
  );
}