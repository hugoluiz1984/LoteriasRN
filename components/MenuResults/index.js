import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import BntComum from '../../utils/BntComum';
import BntAdd from '../../utils/BntAdd';
import {styles} from '../../utils/Styles';

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



export default MenuResults;
