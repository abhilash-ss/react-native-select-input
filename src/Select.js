import React from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';

function Select() {
  const options = ['item1', 'item2', 'item3', 'item4', 'item5'];
  // renderItem = ({ item }) => (<View key={item.key}><Text>{item.title}</Text></View>);
  const renderItem = ({ item }) => (
    <View key={item.key}>
      <Text>{item.title}</Text>
    </View>
  );
  return (
    <View>
      <Text>Select</Text>
      <TextInput />
      <FlatList data={options} renderItem={renderItem} />
    </View>
  );
}

export default Select;
