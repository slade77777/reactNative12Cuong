import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";


// const data = [
//   {
//     name: 'tai nghe',
//     content: '172k san pham',
//     imageUrl:
//       'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
//   },
//   {
//     name: 'quan ao',
//     content: '50k san pham',
//     imageUrl:
//       'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
//   },
//   {
//     name: 'may tinh',
//     content: '20k san pham',
//     imageUrl:
//       'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
//   },
//   {
//     name: 'giay dep',
//     content: '500k san pham',
//     imageUrl:
//       'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
//   },
// ];








// const DATA = [
//   {
//     title:"A",
//     data: [
//       {name:"Anh rina Haro", phoneNumber:"+84 2125 1256"}
//     ]
//   },
//   {
//     title:"B",
//     data: [
//       {name:"Ban shina", phoneNumber:"(+84)97 5892 666"},
//       {name:"Binh Nguyen", phoneNumber:"(+84)98 966 8759"},
//       {name:"Ban Do", phoneNumber:"(+84) 95458 653214"},
//     ]
//   },
//   {
//     title:"C",
//     data: [
//       {name:"Cong Pham", phoneNumber:"(+84) 987 568 6895"},
//       {name:"Chinh Ngo", phoneNumber:"(+84) 975 8889 523"},
//       {name:"Cam Nguyen", phoneNumber:"(+84) 895 6332 513"},
//     ]
//   },
// ];

// const Item = ({title}) => (
//   <View>
//     <Text>{title}</Text>
//   </View>
// )

// const App = () => (
//   <SafeAreaView>
//     <SectionList
//       sections={DATA}
//       keyExtractor={(item, index) => item + index}
//       renderItem={({ item }) => <Item title={item} />}
//       renderSectionHeader={({ section: { title } }) => (
//         <Text>{title}</Text>
//       )}
//     />
//   </SafeAreaView>
// );


const DATA = [
  {
    title: "A",
    data: [
      {name:"Anh rina Haro", phoneNumber:"+84 2125 1256"}
    ]
  },
  {
    title: "B",
    data: [
      {name:"Anh rina Haro", phoneNumber:"+84 2125 1256"}
    ]
  },
  {
    title: "C",
    data: [
      {name:"Anh rina Haro", phoneNumber:"+84 2125 1256"}
    ]
  },
  {
    title: "D",
    data: [
      {name:"Anh rina Haro", phoneNumber:"+84 2125 1256"}
    ]
  }
];

const Item = ({ item }) => {
  console.log(item)
  return (
  <View>
    <Text>{item.name}</Text>
  </View>
)};

const App = () => (
  <SafeAreaView>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item item={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text>{title}</Text>
      )}
    />
  </SafeAreaView>
);


const styles = StyleSheet.create({

});

export default App;
