import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import BntComum from '../../utils/BntComum';
import BntAdd from '../../utils/BntAdd';
import {styles} from '../../utils/Styles';

const Surpresinha = (props) => {
    const {setScreen} = props;

    return (
        <View style={styles.container}>
            <BntAdd label="◀" onPress={()=>setScreen('menu')} color='yellow'/>
            <Text style={styles.title}>Surpresinha</Text>
            <Text style={styles.subTitle}></Text> 
            <BntComum label="MEGA SENA" onPress={()=>setScreen('mega')} color='green'/>
            <BntComum label="QUINA" onPress={()=>setScreen('quina')} color='blue'/>
            <BntComum label="LOTO-FÁCIL" onPress={()=>setScreen('facil')} color='purple'/>
            <BntComum label="LOTOMANIA" onPress={()=>setScreen('mania')} color='orange'/>
        </View>
    );
}


export default Surpresinha;
