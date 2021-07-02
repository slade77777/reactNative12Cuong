import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, TextInput } from "react-native";

const DATA = [
  {
    title: "A",
    data: ["Anh Binh", "Anh chu nha", "Anh Gia"]
  },
  {
    title: "B",
    data: ["Ba Ngoai", "Bac Dinh", "Bac Hoan"]
  },
  {
    title: "C",
    data: ["Cau Phuong", "Co Kieu Anh", "Co Thi"]
  },
  {
    title: "D",
    data: ["Dau", "Duy Hieu", "Duong Ch"]
  }

];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <TextInput
      style={styles.search}
      placeholder="Tim kiem"
    />
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#11AC93'
  },
  item: {
    padding: 15,
    marginVertical: 8
  },
  header: {
    fontSize: 30,
    backgroundColor: "#38C3B7",
    color: 'white',
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    color: 'white',
  },
  search: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#11AC93'
  }
});

export default App;