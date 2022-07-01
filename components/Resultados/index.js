import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Results from '../Results';
import BntAdd from '../../utils/BntAdd';

const Restultados = (props) => {
    const {setScreen, caminho, name} = props;
    const CAMINHO = 'https://loteriascaixa-api.herokuapp.com/api/mega-sena/latest'
    return (
        <View style={styles.container}>
            <BntAdd label="◀" onPress={()=>setScreen('menu')} color='yellow'/>
            <Text style={styles.title}>{name}</Text> 
            <Results caminho={caminho} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex:1,
        justifyContent: "center",
        alignItems: "center",
      },
      input: {
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
  
        },
      botoes:{
          display: 'flex',
          flexDirection: 'row',
          alignItems: "center",
          justifyContent: "center",
          margin:5,
      },
      textoQdt:{
          fontSize:20,
          width:30,
          textAlign: "center",
          alignItems: "center",
      },
      title:{
        fontFamily: "Roboto",
        fontSize:40,
        fontWeight:'bold',
        textAlign: "center",
        margin: 10,
      },
      subTitle:{
        fontFamily: "Roboto",
        fontSize:20,
        fontWeight:'bold',
        textAlign: "center",
    }
})

export default Restultados;
