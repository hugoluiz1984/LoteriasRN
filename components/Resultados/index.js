import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Results from '../Results';
import BntAdd from '../../utils/BntAdd';
import {styles} from '../../utils/Styles';

const Restultados = (props) => {
    const {setScreen, caminho, name, color} = props;

    return (
        <View style={styles.container}>
            <BntAdd label="◀" onPress={()=>setScreen('menuResult')} color='yellow'/>
            <View style={styles.botoes}>
                {name==='MEGA SENA'?<Image source={require('../../assets/images/mega.png')} />:<Text></Text>}
                {name==='LOTOFÁCIL'?<Image source={require('../../assets/images/facil.png')} />:<Text></Text>}
                {name==='QUINA'?<Image source={require('../../assets/images/quina.png')} />:<Text></Text>}
                {name==='LOTOMANIA'?<Image source={require('../../assets/images/mania.png')} />:<Text></Text>}
            <Text style={styles.title}>{name}</Text> 
            </View>
            <Results caminho={caminho} color={color}/>
        </View>
    );
}


export default Restultados;
