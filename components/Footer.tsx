import React from 'react'
import { Text, View } from 'react-native'
import { Center } from '.';
import { SIZES } from '../constants';

interface FooterProps {
  txt?: string
}

const Footer: React.FC<FooterProps> = ({ txt}) => {
  return (
  <View style={{
    height: SIZES.height / 5
  }}>
    <Center>
      <Text>{txt ? txt: 'Footer'}</Text>
    </Center>
  </View>
  );
}

export default Footer