import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import BntComum from '../../utils/BntComum';
import BntAdd from '../../utils/BntAdd';

const MenuResults = (props) => {
    const {setScreen} = props;

    return (
        <View style={styles.container}>
            <BntAdd label="◀" onPress={()=>setScreen('menu')} color='yellow'/>
            <Text style={styles.title}>Resultados</Text>
            <Text style={styles.subTitle}> </Text> 
            <BntComum label="MEGA SENA" onPress={()=>setScreen('resultMega')} color='green'/>
            <BntComum label="QUINA" onPress={()=>setScreen('resultQuina')} color='blue'/>
            <BntComum label="LOTO-FÁCIL" onPress={()=>setScreen('resultFacil')} color='purple'/>
            <BntComum label="LOTOMANIA" onPress={()=>setScreen('resultMania')} color='orange'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex:1,
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
});

export default MenuResults;
