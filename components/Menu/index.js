import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import BntComum from '../../utils/BntComum';

const Menu = (props) => {
    const {setScreen} = props;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>LOTERIAS DA SORTE </Text>
            <Text style={styles.subTitle}> </Text> 
            <BntComum label="Resultados" onPress={()=>setScreen('menuResult')} color='green'/>
            <Text style={styles.subTitle}> </Text> 
            <BntComum label="Surpresinha" onPress={()=>setScreen('surpresinha')} color='green'/>
            
            

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

export default Menu;
