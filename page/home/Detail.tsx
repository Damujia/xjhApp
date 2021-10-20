import React from 'react';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const Detail = ({ route }: any) => {
  const { value } = route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{value}</Text>
      <QRCode size={200} value={value} />
    </View>
  );
};

export default Detail;
