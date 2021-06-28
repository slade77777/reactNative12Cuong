/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Image, Dimensions,
} from "react-native";

import {Colors} from 'react-native/Libraries/NewAppScreen';

const data = [
  {
    name: 'tai nghe',
    content: '172k san pham',
    imageUrl:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
  },
  {
    name: 'quan ao',
    content: '50k san pham',
    imageUrl:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
  },
  {
    name: 'may tinh',
    content: '20k san pham',
    imageUrl:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
  },
  {
    name: 'giay dep',
    content: '500k san pham',
    imageUrl:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
  },
];

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#F8F8F8',
        flex: 1,
        justifyContent: 'center',
      }}>
      <View style={{backgroundColor: 'white'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <Text style={{fontSize: 20, color: 'orange', fontWeight: 'bold'}}>
            Tìm kiếm phổ biến
          </Text>
          <Text style={{color: 'orange'}}>Xem thêm</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {data.map((item, index) => {
            return (
              <View key={index} style={styles.product}>
                <View>
                  <Text>{item.name}</Text>
                  <Text>{item.content}</Text>
                </View>
                <Image
                  source={{
                    uri: item.imageUrl,
                  }}
                  style={{width: 50, height: 50}}
                />
              </View>
            );
          })}
        </View>
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={item => item.name}
          renderItem={({item}, index) => (
            <View key={index} style={styles.product}>
              <View>
                <Text>{item.name}</Text>
                <Text>{item.content}</Text>
              </View>
              <Image
                source={{
                  uri: item.imageUrl,
                }}
                style={{width: 50, height: 50}}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  product: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'yellow',
    width: Dimensions.get('window').width * 0.5,
  },
});

export default App;
