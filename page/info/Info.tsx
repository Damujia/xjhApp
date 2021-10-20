import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryPie, VictoryLabel } from 'victory-native';

const Info = () => {
  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];
  return (
    <View style={styles.container} >
      <VictoryChart width={350} height={200} domainPadding={10} theme={VictoryTheme.material}>
        <VictoryBar data={data} x="quarter" y="earnings" labelComponent={<VictoryLabel dy={30}/>} />
      </VictoryChart>
      <View style={{ flex: 1,flexDirection: 'row'}}>
        <VictoryPie width={Dimensions.get('window').width / 2} height={200} padding={60} animate={{ duration: 1000 }} colorScale={['tomato', 'orange', 'gold']}
          data={[
            { x: 'Cats1', y: 35 },
            { x: 'Dogs1', y: 40 },
            { x: 'Birds1', y: 55 },
          ]}
        />
        <VictoryPie width={Dimensions.get('window').width / 2} height={200} padding={60} animate={{ duration: 1000 }} colorScale={['#00796b', 'orange', 'gold']}
          data={[
            { x: 'Cats2', y: 65 },
            { x: 'Dogs2', y: 40 },
            { x: 'Birds2', y: 55 },
          ]}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});

export default Info;
