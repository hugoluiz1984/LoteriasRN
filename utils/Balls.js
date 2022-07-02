import React,{useState, useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {styles} from './Styles';

const Balls = (props) => {
    const {label, color} = props;
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
            key = {label}
            >
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
}



export default Balls;