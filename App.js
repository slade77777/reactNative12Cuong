import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
} from 'react-native';


const DATA = [
  {
    title:"A",
    data: [
      {name:"Anh rina Haro", phoneNumber:"(+84) 2125 1256"}
    ]
  },
  {
    title:"B",
    data: [
      {name:"Ban shina", phoneNumber:"(+84)97 5892 666"},
      {name:"Binh Nguyen", phoneNumber:"(+84)98 966 8759"},
      {name:"Ban Do", phoneNumber:"(+84) 95458 653214"},
    ]
  },
  {
    title:"C",
    data: [
      {name:"Cong Pham", phoneNumber:"(+84) 987 568 6895"},
      {name:"Chinh Ngo", phoneNumber:"(+84) 975 8889 523"},
      {name:"Cam Nguyen", phoneNumber:"(+84) 895 6332 513"},
    ]
  },
  {
    title:"D",
    data: [
      {name:"Dong Pham", phoneNumber:"(+84) 987 568 6895"},
      {name:"Dinh Ngo", phoneNumber:"(+84) 975 8889 523"},

    ]
  },
]; 


const App = () => {
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
          <Text style={styles.text}>{item.name +" : " + item.phoneNumber}</Text>
      )}
      renderSectionHeader={({section})=>(
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  
  item: {
    margin: 10,
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    borderRadius: 10
  },
  text: {
    color: '#000000',
    fontSize: 25,
    fontStyle: 'italic',
    margin: 10,
    borderBottomColor: '#E1E1E1',
    borderBottomWidth: 1,
    
  },
});

export default App;