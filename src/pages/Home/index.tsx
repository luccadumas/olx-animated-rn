import React, {useState} from 'react';
import { ContainerMain, } from './styles';
import Header from '../../componets/Header';
import Footer from '../../componets/Footer';
import { ScrollView,} from 'react-native';

export default function Home() {
  return(
    <>
      <Header/>
      <ScrollView
      keyboardShouldPersistTaps="handled">
        <ContainerMain> 
        </ContainerMain>
      </ScrollView>
      <Footer />
    </>
  );
}