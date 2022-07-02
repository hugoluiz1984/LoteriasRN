import React,{useState, useEffect} from 'react';
import { TouchableOpacity, StyleSheet, Text} from 'react-native';
import {styles} from './Styles'

const List = (props) => {
    const {label, onPress , color} = props;
    const [cores, setCores] = useState(null)
    
    useEffect(() => {
        switch (color) {
            case 'green':
                setCores(styles.green);
                break;
            case 'gray':
                setCores(styles.gray);
                break;
            case 'blue':
                setCores(styles.blue);
                break;
            case 'purple':
                setCores(styles.purple);
                break;
            case 'orange':
                setCores(styles.orange);
                break;
            default:
                setCores(styles.yellow);
                break;
        }
    }, []);
    

    return (
        <TouchableOpacity 
            style={[styles.bntAdd, cores]}
            onPress={onPress}
            >
            <Text style={color==='yellow'?styles.textWhite:stylesLocal.text}>{label}</Text>
        </TouchableOpacity>
    );
}

const stylesLocal = StyleSheet.create({

    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "white",
        position: 'absolute',
        top:-2

    },
})

export default List;