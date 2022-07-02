import React,{useState, useEffect} from 'react';
import { TouchableOpacity, StyleSheet, Text} from 'react-native';
import {styles} from './Styles'

const BntComum = (props) => {
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
            style={[stylesLocal.bntAdd, cores]}
            onPress={onPress}
            >
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
}

const stylesLocal = StyleSheet.create({

    bntAdd: {
        height: 40,
        width: 150,
        alignItems: "center",
        justifyContent: "center",
        margin: 8,
        boxSizing: "border-box",
        borderRadius: 5,
    }
})

export default BntComum;