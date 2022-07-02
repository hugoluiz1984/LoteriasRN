import React from 'react';
import {View, StyleSheet, Text, useColorScheme} from 'react-native';
import BntComum from '../../utils/BntComum';
import {styles} from '../../utils/Styles';

const Menu = (props) => {
    const {setScreen} = props;
    const colorScheme = useColorScheme();
    console.log(colorScheme)
    return (
        <View style={styles.container}>
            <Text style={styles.title}> LOTERIAS DA SORTE </Text>
            <Text style={styles.subTitle}> </Text> 
            <BntComum label="Resultados" onPress={()=>setScreen('menuResult')} color='green'/>
            <Text style={styles.subTitle}> </Text> 
            <BntComum label="Surpresinha" onPress={()=>setScreen('surpresinha')} color='green'/>
        </View>
    );
}



export default Menu;
