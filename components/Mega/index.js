import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {Gerador} from '../../utils/Gerador';
import BntAdd from '../../utils/BntAdd';
import List from '../../utils/List';
import BntComum from '../../utils/BntComum';
import {Sorteio} from '../../utils/VerificaSorteio';
import Results from '../Results';

const Mega = (props) => {
    const {setScreen, name, numPad, numMax, color, qtdMin, qtdMax} = props;
    const [number, setNumber] = useState(numPad);
    const CAMINHO = 'https://loteriascaixa-api.herokuapp.com/api/mega-sena/latest'
    const [numSorte, setNumSort] = useState ([]);
    const [isLoading, setLoading] = useState(true);


    const Gerar = () => {
        setNumSort(Gerador(number,numMax));
        console.log(numSorte,number);
      }
    
    function soma(){
        if (number<qtdMax) setNumber(number + 1)
    }
    function sub(){
        
        if (number>qtdMin)setNumber(number - 1)
    }


    return (
        
          <View style={styles.container}>
            <Text style={styles.title}>{name}</Text> 
            <BntAdd label="◀" onPress={()=>setScreen('menu')} color='yellow'/>
            <Text style={styles.subTitle}>Surpresinha </Text>
            <View style={styles.botoes}>
                  <BntAdd label="-" onPress={()=>sub()} color={color}/>
                  <Text style={styles.textoQdt}>{number}</Text>
                  <BntAdd label="+" onPress={()=>soma()} color={color}/>
            </View>
              <BntComum label="Gerar" onPress={()=>Gerar()} color={color}/>
              <List numSorte={numSorte} color={color}/>

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

export default Mega;
