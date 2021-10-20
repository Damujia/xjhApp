import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements';
import Home from './page/home/Home';
import Info from './page/info/Info';
import Qrcode from './page/info/Qrcode';
import Tabone from './page/model/Tabone';
import Detail from './page/home/Detail';
import Pushdemo from './page/pushdemo/Pushdemo';
import JPush from 'jpush-react-native';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Bar = ({ navigation }: any) => {
  useEffect(() => {
    JPush.init();
    //连接状态
    const connectListener = (result: any) => {
      console.log('connectListener:' + JSON.stringify(result));
    };
    //获取RegistrationID
    JPush.getRegistrationID((id) => {
      console.log(JSON.stringify(id));
    });
    JPush.addConnectEventListener(connectListener);
    //通知回调
    const notificationListener = (result: any) => {
      console.log('notificationListener:' + JSON.stringify(result));
    };
    JPush.addNotificationListener(notificationListener);
    //本地通知回调
    const localNotificationListener = (result: any) => {
      console.log('localNotificationListener:' + JSON.stringify(result));
    };
    JPush.addLocalNotificationListener(localNotificationListener);
    //自定义消息回调
    // const customMessageListener = (result: any) => {
    //   console.log('customMessageListener:' + JSON.stringify(result));
    // };
    // JPush.addCustomMessagegListener(customMessageListener);
    //tag alias事件回调
    const tagAliasListener = (result: any) => {
      console.log('tagAliasListener:' + JSON.stringify(result));
    };
    JPush.addTagAliasListener(tagAliasListener);
    //手机号码事件回调
    const mobileNumberListener = (result: any) => {
      console.log('mobileNumberListener:' + JSON.stringify(result));
    };
    JPush.addMobileNumberListener(mobileNumberListener);
  }, []);
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName = '';
        if (route.name === 'Home') {
          iconName = focused
            ? 'information-circle'
            : 'information-circle-outline';
        } else if (route.name === 'Info') {
          iconName = focused ? 'document-sharp' : 'document-outline';
        } else if (route.name === 'Tabone') {
          iconName = focused ? 'car-sport-sharp' : 'car-sport-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Home" component={Home} options={{
        title: '主页', headerRight: () => (
          <Button type="clear" icon={<Ionicons name={'scan'} size={20} />} onPress={() => { navigation.navigate('Qrcode'); }} />
        ),
      }} />
      <Tab.Screen name="Tabone" component={Tabone} options={{ title: '发现', headerShown: false }} />
      <Tab.Screen name="Info" component={Info} options={{ title: '我的' }} />
    </Tab.Navigator>
  );
};
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Bar" component={Bar} options={{ headerShown: false }} />
          <Stack.Screen name="Detail" component={Detail} options={{ title: '列表详情' }} />
          <Stack.Screen name="Qrcode" component={Qrcode} options={{ title: '扫码', headerShown: false }} />
          <Stack.Screen name="Pushdemo" component={Pushdemo} options={{ title: '通知', headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
