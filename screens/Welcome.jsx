import { View, Text, FlatList, Image, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { responsiveHeight, responsiveWidth, useResponsiveWidth } from 'react-native-responsive-dimensions';

const Welcome = () => {
  const [data, Setdata] = useState([
    { image: require('../assets/slide1.png'), title: 'Title 1', key: 1 },
    { image: require('../assets/slide2.png'), title: 'Title 2', key: 2 },
    { image: require('../assets/slide3.png'), title: 'Title 3', key: 3 },
    { image: require('../assets/slide4.png'), title: 'Title 4', key: 4 },
    { image: require('../assets/slide5.png'), title: 'Title 5', key: 5 },
  ]);

  const [selectedindex, Setselectedindex] = useState(0);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
        <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold', fontStyle: 'italic' }}>Elearning App</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <FlatList
          data={data}
          horizontal
          pagingEnabled
          onScroll={e => {
            //console.log(e.nativeEvent.contentOffset.x);
            let index = e.nativeEvent.contentOffset.x / useResponsiveWidth(100);
            Setselectedindex(index);
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (

              <View
                key={item.key}
                style={{
                  width: responsiveWidth(100),
                  height: responsiveHeight(50),
                }}>
                <Image
                  source={item.image}
                  style={{ width: '80%', height: '80%', alignSelf: 'center' }}
                />
                <Text style={{ alignSelf: 'center', marginTop: 1, fontSize: 20 }}>
                  {item.title}
                </Text>
              </View>
            );
          }}

        />

      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        {data.map((item, index) => {
          return (<View

            key={item.key}
            style={{
              height: 20, width: 20,
              borderRadius: 10,
              backgroundColor: selectedindex == index ? 'black' : 'red',
              //backgroundColor: 'red',
              marginLeft: 10
            }}>

          </View>);
        })}
      </View>

      <View style={{ position: 'absolute', bottom: 20, width: '100%', justifyContent: 'space-evenly', flexDirection: 'row', marginBottom: 10 }}>

        <TouchableOpacity style={{ width: 100, height: 40, borderRadius: 20, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontStyle: 'normal', fontSize: 20, color: 'black' }}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 40, borderRadius: 20, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontStyle: 'normal', fontSize: 20, color: 'black' }}>Next</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default Welcome;
