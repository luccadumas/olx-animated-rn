import React, {useState} from 'react';
import { ContainerMain } from './styles';
import Footer from '../../componets/Footer';

import { Animated, Dimensions, FlatList, Image, Platform, ScrollView, Text, View,} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('window');

interface Item {
  id: string,
  title: string,
  description: string,
  thumbnail: string
}

export default function Home() {

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Consoles',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
      thumbnail: 'https://dicas.olx.com.br/wp-content/uploads/2021/04/PS4-na-olx-preco-ficha-tecnica.png'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Smarthphones',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
      thumbnail: 'https://dicas.olx.com.br/wp-content/uploads/2021/04/celulares-mais-vendidos-na-olx-2020-capa-925x308.png'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Tablets',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
      thumbnail: 'https://dicas.olx.com.br/wp-content/uploads/2021/05/app-da-olx-baixar-925x308.png'
    },
  ];

  const SPACING = 10;
  const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.76;
  const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
  const BACKDROP_HEIGHT = height * 0.65;

  const Backdrop = ({ scrollX }: { scrollX:any }) => {
    return (
      <View style={{ position: 'absolute', width, height: BACKDROP_HEIGHT }}>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id+ '-backdrop'}
          removeClippedSubviews={false}
          contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
          renderItem={({ item, index }) => {
            if (!item.thumbnail) {
              return null;
            }
            const translateX = scrollX.interpolate({
              inputRange: [(index - 1) * ITEM_SIZE, (index - 0) * ITEM_SIZE],
              outputRange: [0, width],
              // extrapolate:'clamp'
            });
            return (
              <Animated.View
              removeClippedSubviews={false}
              style={{
                position: 'absolute',
                width: translateX,
                height,
                overflow: 'hidden',
              }}
            >
              <Image
                source={{ uri: item.thumbnail }}
                style={{
                  width,
                  height: BACKDROP_HEIGHT,
                  position: 'absolute',
                }}
              />
            </Animated.View>
            )
          }}
        />
        <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'white']}
        style={{
          height: BACKDROP_HEIGHT,
          width,
          position: 'absolute',
          bottom: 0,
        }}
      />
      </View>
    )}

  const scrollX = React.useRef(new Animated.Value(0)).current;

  const renderItem = ({ item, index }: { item:Item, index: number }) => {
    const inputRange = [
      (index - 2) * ITEM_SIZE,
      (index - 1) * ITEM_SIZE,
      index * ITEM_SIZE,
    ];

    const translateY = scrollX.interpolate({
      inputRange,
      outputRange: [0, 50, 0],
      extrapolate: 'clamp',
    });

    const Item = ({ title, description, thumbnail }: {title:string, description: string, thumbnail: string}) => (
      <Animated.View style={{
        paddingHorizontal: 20,
        alignItems: 'center',
        padding: SPACING * 3,
        transform: [{ translateY }],
      }}>
        <Image
          style={{ width: 300, height: 300, borderRadius: 20}}
            source={{
              uri: thumbnail,
            }}
          />
        <Text style={{alignSelf: 'center', paddingVertical: 6, fontSize: 20, fontWeight: 'bold', }}>{title}</Text>
        <Text style={{width: 280, textAlign: 'justify', alignSelf: 'center', fontSize: 16}}>{description}</Text>
      </Animated.View>
    );

    return(<Item title={item.title} description={item.description} thumbnail={item.thumbnail} />);
  };

  return(
    <>
        <ContainerMain>
          <View>
            <Backdrop scrollX={scrollX} />
            <Animated.FlatList
            data={DATA}
            renderItem={renderItem}
            snapToInterval={310}
            decelerationRate={10}
            bounces={false}
            keyExtractor={item => item.id}
            horizontal
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            scrollEventThrottle={16}
            />
          </View>
        </ContainerMain>
      <Footer />
    </>
  );
}