import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem, Avatar, Icon } from 'react-native-elements';
import SearchBarX from '../packagedemo/SearchBarX';


const Home = ({ navigation }: any) => {
  const [search, setSearch] = useState<string>('');
  const UpdateSearch = (text?: string) => {
    setSearch(text as string);
  };
  const list: Array<any> = [];
  for (let i = 0; i < 100; i++) {
    list.push({
      name: '测试数据' + i,
      icon: 'shoppingcart',
      subtitle: 'Vice President',
    });
  }
  const keyExtractor = (item: string, index: number) => index.toString();
  const renderItem = ({ item }: any) => (
    <ListItem bottomDivider onPress={() => { navigation.navigate('Detail', { value: item.name }); }}>
      <Icon type="antdesign" name={item.icon} />
      <Avatar title={item.name[0]} />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
  return (
    <View style={{ height: '100%' }}>
      <SearchBarX placeholder="搜索"
        onChangeText={UpdateSearch}
        value={search}
        containerStyle={{ backgroundColor: '#ffffff', borderColor: '#fff' }}
        inputContainerStyle={{ backgroundColor: '#e5e4ea' }} />
      <FlatList
        keyExtractor={keyExtractor}
        data={list}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Home;
