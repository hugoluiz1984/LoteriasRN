import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Balls from './Balls';
import {styles} from './Styles'

const List = (props) => {

    return (
        <View style={styles.list}>
          {props && props.numSorte.map(i=><Balls key={[i]} label={[i]} color={props.color}/>)}
        </View>
    );
}



export default List;