import React, {useState} from 'react';
import { ContainerMain, BtnHandlerInformation, TextBtnHandlerInformation, InputWeight } from './styles';
import Header from '../../componets/Header';
import Footer from '../../componets/Footer';
import { ScrollView,} from 'react-native';
import { api } from '../../services/api'

export default function Home() {

  const [number, setNumber] = useState("");

  const teste = () => {
    api.get('/project').then((response) => {
      console.log(response.data);
    }, (error) => {
      console.log(error);
    });
  }

  return(
    <>
      <Header/>
      <ScrollView
      keyboardShouldPersistTaps="handled">
        <ContainerMain>
          <InputWeight placeholder="Digite seu peso" keyboardType={'numeric'} value={number} onChangeText={(text : any) => setNumber(text)} />
          <BtnHandlerInformation onPress={()=> {teste()}}>
            <TextBtnHandlerInformation>Enviar</TextBtnHandlerInformation>
          </BtnHandlerInformation>
        </ContainerMain>
      </ScrollView>
      <Footer />
    </>
  );
}