import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Gerador} from '../../utils/Gerador';
import BntAdd from '../../utils/BntAdd';
import List from '../../utils/List';
import BntComum from '../../utils/BntComum';
import {Sorteio} from '../../utils/VerificaSorteio';
import Results from '../Results';
import {styles} from '../../utils/Styles';

const Mega = (props) => {
    const {setScreen, name, numPad, numMax, color, qtdMin, qtdMax} = props;
    const [number, setNumber] = useState(numPad);
    const [numSorte, setNumSort] = useState ([]);
    const [isLoading, setLoading] = useState(true);

    const imagemPath = `../../assets/images/mega.png`
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
            <View style={styles.botoes}>
              {name==='MEGA SENA'?<Image source={require('../../assets/images/mega.png')}/>:<Text></Text>}
              {name==='LOTOFÁCIL'?<Image source={require('../../assets/images/facil.png')} />:<Text></Text>}
              {name==='QUINA'?<Image source={require('../../assets/images/quina.png')}/>:<Text></Text>}
              {name==='LOTOMANIA'?<Image source={require('../../assets/images/mania.png')} />:<Text></Text>}
              <Text style={styles.title}>{name}</Text> 
            </View>
            
            <BntAdd label="◀" onPress={()=>setScreen('surpresinha')} color='yellow'/>
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



export default Mega;
