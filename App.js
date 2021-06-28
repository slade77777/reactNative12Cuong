/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import {
  ScrollView,
  SectionList
} from 'react-native'
import Content from './src/components/Content'
import Title from './src/components/Title'
import Header from './src/components/Header'

const App = () => {

  const Contacts = [
    {
      title:'A',
      data:[{name:'Anna Haro',numberPhone:'(555) 555-555'}]
    },
    {
      title:'D',
      data:[{name:'Daniel',numberPhone:'(555) 444-4444',device:'home'},
            {name:'Daniel',numberPhone:'(408) 222-2222',device:'mobile'},
            {name:'David Taylor',numberPhone:'(555) 677-7777',device:''}
      ]
    },
    {
      title:'H',
      data:[{name:'Hank Zakroff',numberPhone:'(555) 761-1111',device:'work'},
            {name:'Hank Zakroff',numberPhone:'(707) 544-4444',device:'other'}
      ]
    },
    {
      title:'J',
      data:[{name:'John Appleseed',numberPhone:'1 (234) 567-889',device:'Mobile'},
            {name:'John Appleseed',numberPhone:'(987) 654-3210',device:'home'}
      ]
    },
    {
      title:'K',
      data:[{name:'Kate Bell',numberPhone:'1 (234) 567-889',device:'mobile'}]
    },
    {
      title:'A',
      data:[{name:'Anna Haro',numberPhone:'(555) 555-555'}]
    },
    {
      title:'D',
      data:[{name:'Daniel',numberPhone:'(555) 444-4444',device:'home'},
            {name:'Daniel',numberPhone:'(408) 222-2222',device:'mobile'},
            {name:'David Taylor',numberPhone:'(555) 677-7777',device:''}
      ]
    },
    {
      title:'H',
      data:[{name:'Hank Zakroff',numberPhone:'(555) 761-1111',device:'work'},
            {name:'Hank Zakroff',numberPhone:'(707) 544-4444',device:'other'}
      ]
    },
    {
      title:'J',
      data:[{name:'John Appleseed',numberPhone:'1 (234) 567-889',device:'Mobile'},
            {name:'John Appleseed',numberPhone:'(987) 654-3210',device:'home'}
      ]
    },
    {
      title:'K',
      data:[{name:'Kate Bell',numberPhone:'1 (234) 567-889',device:'mobile'}]
    },
    {
      title:'A',
      data:[{name:'Anna Haro',numberPhone:'(555) 555-555'}]
    },
    {
      title:'D',
      data:[{name:'Daniel',numberPhone:'(555) 444-4444',device:'home'},
            {name:'Daniel',numberPhone:'(408) 222-2222',device:'mobile'},
            {name:'David Taylor',numberPhone:'(555) 677-7777',device:''}
      ]
    },
    {
      title:'H',
      data:[{name:'Hank Zakroff',numberPhone:'(555) 761-1111',device:'work'},
            {name:'Hank Zakroff',numberPhone:'(707) 544-4444',device:'other'}
      ]
    },
    {
      title:'J',
      data:[{name:'John Appleseed',numberPhone:'1 (234) 567-889',device:'Mobile'},
            {name:'John Appleseed',numberPhone:'(987) 654-3210',device:'home'}
      ]
    },
    {
      title:'K',
      data:[{name:'Kate Bell',numberPhone:'1 (234) 567-889',device:'mobile'}]
    },
    {
      title:'A',
      data:[{name:'Anna Haro',numberPhone:'(555) 555-555'}]
    },
    {
      title:'D',
      data:[{name:'Daniel',numberPhone:'(555) 444-4444',device:'home'},
            {name:'Daniel',numberPhone:'(408) 222-2222',device:'mobile'},
            {name:'David Taylor',numberPhone:'(555) 677-7777',device:''}
      ]
    },
    {
      title:'H',
      data:[{name:'Hank Zakroff',numberPhone:'(555) 761-1111',device:'work'},
            {name:'Hank Zakroff',numberPhone:'(707) 544-4444',device:'other'}
      ]
    },
    {
      title:'J',
      data:[{name:'John Appleseed',numberPhone:'1 (234) 567-889',device:'Mobile'},
            {name:'John Appleseed',numberPhone:'(987) 654-3210',device:'home'}
      ]
    },
    {
      title:'K',
      data:[{name:'Kate Bell',numberPhone:'1 (234) 567-889',device:'mobile'}]
    }
  ]

  return (
    <ScrollView>
      <Header/>
      <SectionList
        sections={Contacts}
        keyExtractor={(item,index) =>index}
        renderItem={({item}) => <Content contact={item} />}
        renderSectionHeader={({section:{title}}) => <Title title={title}/>}
      />
    </ScrollView>
  )
}

export default App;
