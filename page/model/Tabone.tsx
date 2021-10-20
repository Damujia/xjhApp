import React, { useState } from 'react';
import { View } from 'react-native';
import { Header, Icon, Input, Button } from 'react-native-elements';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import axios from 'axios';

const Leftbut = () => {
  return (
    <View>
      <Icon name="menu" color="#ffffff" onPress={() => { }} />
    </View>
  );
};
const Rightbut = ({ navigation }: any) => {
  return (
    <View>
      <Icon name="home" color="#ffffff" onPress={() => { navigation.navigate('Pushdemo'); }} />
    </View>
  );
};
const Tabone = ({ navigation }: any) => {
  const [comment, setComment] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);
  const getForm = () => {
    console.log('名称：' + comment + '密码：' + password);
    axios({
      url: 'http://192.168.0.142:8080/resource/aps/list',
      method: 'post',
      data: {
        pageNum: 1,
        pageSize: 20,
        skc: comment,
        supplierCode: password,
      },
      headers: {'Authorization': '42165987-1b81-4c3f-8e12-047e750ca398'},
    }).then(res=>{
      console.log(res.data.data);
    });
  };
  const hideDatePicker = () => {
    setShow(false);
  };
  // eslint-disable-next-line no-shadow
  const handleConfirm = (date: any) => {
    hideDatePicker();
    setDate(date);
  };
  return (
    <View>
      <Header
        leftComponent={<Leftbut />}
        centerComponent={{ text: '表单', style: { color: '#fff', fontSize: 18} }}
        rightComponent={<Rightbut navigation={navigation} />}
      />

      <Input
        inputStyle={{ fontSize: 16 }}
        inputContainerStyle={{ height: 30 }}
        labelStyle={{ color: '#007acc', fontSize: 20 }}
        leftIconContainerStyle={{ width: 24 }}
        label="名称"
        placeholder="请输入名称"
        leftIcon={{ type: 'font-awesome', name: 'user', size: 16 }}
        onChangeText={value => { setComment(value); }}
      />
      <Input
        inputStyle={{ fontSize: 16 }}
        inputContainerStyle={{ height: 30 }}
        labelStyle={{ color: '#007acc', fontSize: 20 }}
        leftIconContainerStyle={{ width: 24 }}
        label="密码"
        placeholder="请输入密码"
        leftIcon={{ type: 'font-awesome', name: 'lock', size: 16 }}
        onChangeText={value => { setPassword(value); }}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 10}}>
        <View style={{ flex: 1 }}>
          <Input
            inputStyle={{ fontSize: 16 }}
            inputContainerStyle={{ height: 30 }}
            labelStyle={{ color: '#007acc', fontSize: 20 }}
            leftIconContainerStyle={{ width: 24 }}
            label="日期"
            placeholder="请选择日期"
            leftIcon={{ type: 'font-awesome', name: 'calendar', size: 16 }}
            value={moment(date).format('YYYY-MM-DD')}
          />
        </View>
        <Icon type="ionicon" name="calendar-sharp" size={30} color="#2289dc" onPress={() => {setShow(true);}} />
      </View>
      <DateTimePickerModal
        isVisible={show}
        mode="date"
        date={new Date(date)}
        display="spinner"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <Button title="提交" onPress={getForm} />
    </View>
  );
};

export default Tabone;
