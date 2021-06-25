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
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Section1 from './src/components/Section';

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
        <View>
          <View style={styles.displayInline}>
            <View style={styles.product}>
              <View>
                <Text>Tai-nghe</Text>
                <Text>172K sản phẩm</Text>
              </View>
              <Image
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
                }}
                style={{width: 50, height: 50}}
              />
            </View>
            <View style={styles.product}>
              <View>
                <Text>Sandal nữ</Text>
                <Text>402k sản phẩm</Text>
              </View>
              <Image
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
                }}
                style={{width: 50, height: 50}}
              />
            </View>
          </View>
          <View style={styles.displayInline}>
            <View style={styles.product}>
              <View>
                <Text>Tai-nghe</Text>
                <Text>172K sản phẩm</Text>
              </View>
              <Image
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
                }}
                style={{width: 50, height: 50}}
              />
            </View>
            <View style={styles.product}>
              <View>
                <Text>Sandal nữ</Text>
                <Text>402k sản phẩm</Text>
              </View>
              <Image
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
                }}
                style={{width: 50, height: 50}}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  small: {
    flex: 1,
  },
  displayInline: {
    flexDirection: 'row',
    display: 'flex',
    height: 100,
  },
  product: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
