import { View, Text, Button } from 'react-native'
import React,{ useState} from 'react';
import Menu from './components/Menu'
import Mega from './components/Mega';
import Resultados from './components/Resultados';
import Surpresinhas from './components/Supersinhas';
import MenuResults from './components/MenuResults';


export default function App() {
  const [teste, setTeste] = useState(6);
  const [screen, setScreen] = useState('menu');
  

  function getScreenMenu(){
    return (
      <>
        <Menu setScreen={setScreen}/>
      </>
    )
  }
  function getScreenMenuSurpresa(){
    return (
      <>
        <Surpresinhas setScreen={setScreen}/>
      </>
    )
  }
  function getScreenMenuResult(){
    return (
      <>
        <MenuResults setScreen={setScreen}/>
      </>
    )
  }
  function getScreenMega(){
    return (
      <>
        <Mega setScreen={setScreen} name={'MEGA SENA'} numPad={6} numMax={60} color={'green'} qtdMin={6} qtdMax={15}/>
      </>
    )
  }
  function getScreenQuina(){
    return (
      <>
        <Mega setScreen={setScreen} name={'QUINA'} numPad={5} numMax={80} color={'blue'} qtdMin={5} qtdMax={15}/>
      </>
    )
  }
  function getScreenMania(){
    return (
      <>
        <Mega setScreen={setScreen} name={'LOTOMANIA'} numPad={50} numMax={100} color={'orange'} qtdMin={50} qtdMax={50}/>
      </>
    )
  }
  function getScreenFacil(){
    return (
      <>
        <Mega setScreen={setScreen} name={'LOTOFÁCIL'} numPad={10} numMax={25} color={'purple'} qtdMin={10} qtdMax={15}/>
      </>
    )
  }
  function getScreenResultsMega(){
    return (
      <>
        <Resultados setScreen={setScreen} 
        name={'MEGA SENA'}
        caminho={'https://loteriascaixa-api.herokuapp.com/api/mega-sena/latest'}
        color={'green'}
        />
      </>
    )
  }
  function getScreenResultsQuina(){
    return (
      <>
        <Resultados setScreen={setScreen} 
        name={'QUINA'}
        caminho={'https://loteriascaixa-api.herokuapp.com/api/quina/latest'}
        color={'blue'}
        />
      </>
    )
  }
  function getScreenResultsMania(){
    return (
      <>
        <Resultados setScreen={setScreen} 
        name={'LOTOMANIA'}
        caminho={'https://loteriascaixa-api.herokuapp.com/api/lotomania/latest'}
        color={'orange'}
        />
      </>
    )
  }
  function getScreenResultsFacil(){
    return (
      <>
        <Resultados setScreen={setScreen} 
        name={'LOTOFÁCIL'}
        caminho={'https://loteriascaixa-api.herokuapp.com/api/lotofacil/latest'}
        color={'purple'}
        />
      </>
    )
  }
  switch (screen) {
    case 'menu':
      return getScreenMenu();
    case 'mega':
      return getScreenMega();
    case 'quina':
      return getScreenQuina();
    case 'mania':
      return getScreenMania();
    case 'facil':
      return getScreenFacil();
    case 'resultMega':
      return getScreenResultsMega();
    case 'resultQuina':
      return getScreenResultsQuina();
    case 'resultMania':
      return getScreenResultsMania();
    case 'resultFacil':
      return getScreenResultsFacil();
    case 'surpresinha':
      return getScreenMenuSurpresa();
    case 'menuResult':
      return getScreenMenuResult();
    default:
      return getScreenMenu();
  }
}