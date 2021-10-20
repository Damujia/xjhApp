import React, { useRef, useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  ScrollView,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Overlay /* Button */ } from 'react-native-elements';

export default function Qrcode() {
  const [cameraif, setCameraif] = useState(true);
  const [visible, setVisible] = useState(false);
  const moveAnim = useRef(new Animated.Value(-1)).current;
  const [codestext, setCodetext] = useState('');

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(moveAnim, {
        toValue: -301,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }
      ),
      Animated.timing(moveAnim, {
        toValue: -1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }
      ),
    ]).start(() => startAnimation());
  };
  useEffect(() => {
    startAnimation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (visible) {
      console.log('停');
      moveAnim.stopAnimation();
    } else {
      setCameraif(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);
  // 扫描事件
  const onBarCodeRead = (result: any) => {
    const { data } = result;
    setCodetext(JSON.stringify(data));
    setVisible(true);
    setCameraif(false);
  };
  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={'off'}
        onBarCodeRead={cameraif ? onBarCodeRead : undefined}>
        <View style={styles.rectangleContainer}>
          <View style={{ height: 180, width: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }} >
            <Text style={styles.rectangleText}>
              将二维码放入框内，即可自动扫描
            </Text>
          </View>
          <View style={styles.codebox}>
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }} />
            <View>
              <View style={styles.rectangle} />
              <Animated.View
                style={[
                  styles.border,
                  { transform: [{ translateY: moveAnim }] },
                ]}
              />
            </View>
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }} />
          </View>
          <View style={{ width: '100%', flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }} />
        </View>
      </RNCamera>
      {/* <Button title="打开弹窗" onPress={() => { setVisible(true); }} /> */}
      <Overlay isVisible={visible} onBackdropPress={() => { setVisible(!visible); }}>
        <View style={{ width: 200, height: 200, backgroundColor: 'rgba(0,0,0,0.7)', borderRadius: 10 }}>
          <ScrollView style={{ padding: 4 }}>
            <Text style={{ color: '#fff', fontSize: 16 }}>扫码结果：</Text>
            <View>
              <Text style={{ color: '#fff' }}>{codestext}</Text>
            </View>
          </ScrollView>
        </View>
      </Overlay>
    </View>
  );

}
const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rectangleContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
  },
  codebox: {
    flexDirection: 'row',
    height: 300,
  },
  rectangle: {
    height: 300,
    width: 300,
    borderWidth: 1,
    borderColor: '#007acc',
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  rectangleText: {
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
  border: {
    width: 300,
    height: 1,
    backgroundColor: '#00FF00',
  },
});
