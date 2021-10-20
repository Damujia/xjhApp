import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
import JPush from 'jpush-react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  setBtnStyle: {
    width: 320,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#3e83d7',
    borderRadius: 8,
    backgroundColor: '#3e83d7',
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 25,
    color: '#ffffff',
  },
});

const Button = (props: any) => {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      underlayColor="#e4083f"
      activeOpacity={0.5}
    >
      <View
        style={styles.setBtnStyle}>
        <Text
          style={styles.textStyle}>
          {props.title}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const Pushdemo = () => {

  return (
    <View style={styles.container}>
      <Button title="setLoggerEnable"
        onPress={() => JPush.setLoggerEnable(true)
        } />

      <Button title="getRegisterID"
        onPress={() => JPush.getRegistrationID(result =>
          Alert.alert(JSON.stringify(result))
        )} />
      <Button title="setAlias"
        onPress={() => JPush.setAlias({ sequence: 6, alias: 'xxx' })} />

      {/*<Button title="addTags"
                        onPress={() => JPush.addTags({sequence: 1, tags: ["1", "2", "3"]})}/>

                <Button title="updateTags"
                        onPress={() => JPush.updateTags({sequence: 2, tags: ["4", "5", "6"]})}/>

                <Button title="deleteTag"
                        onPress={() => JPush.deleteTag({sequence: 3, tags: ["4", "5", "6"]})}/>

                <Button title="deleteTags"
                        onPress={() => JPush.deleteTags({sequence: 4})}/>

                <Button title="queryTag"
                        onPress={() => JPush.queryTag({sequence: 4, tag: "1"})}/>

                <Button title="queryTags"
                        onPress={() => JPush.queryTags({sequence: 5})}/>

                <Button title="setAlias"
                        onPress={() => JPush.setAlias({sequence: 6,alias:"xxx"})}/>

                <Button title="deleteAlias"
                        onPress={() => JPush.deleteAlias({sequence: 7})}/>

                <Button title="queryAlias"
                        onPress={() => JPush.queryAlias({sequence: 8})}/>

                <Button title="setMobileNumber"
                        onPress={() => JPush.setMobileNumber({mobileNumber: "13888888888"})}/>

                //仅ios
                <Button title="setBadge"
                        onPress={() => JPush.setBadge({"badge":1,"appBadge":1})}/>

                <Button title="initCrashHandler"
                        onPress={() => JPush.initCrashHandler()}/>

                <Button title="addLocalNotification"
                        onPress={() => JPush.addLocalNotification({
                            messageID: "123456789",
                            title: "title123",
                            content: "content123",
                            extras: {"key123": "value123"}
                        })}/>

                <Button title="removeLocalNotification"
                        onPress={() => JPush.removeLocalNotification({messageID: '123456789'})}/>*/}

    </View>
  );

};
export default Pushdemo;
