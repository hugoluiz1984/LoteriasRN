import React,{useState, useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

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

const styles = StyleSheet.create({
    bntAdd: {
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
        boxSizing: "border-box",
        borderRadius: 30,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "white",
    },
    green:{
        backgroundColor: '#008000',
    },
    yellow:{
        backgroundColor: '#00FF00'
    }, 
    gray:{
        backgroundColor: '#808080',
    }, 
    blue:{
        backgroundColor: '#0000FF',
    },
    orange:{
        backgroundColor: '#f78100'
    },
    purple:{
        backgroundColor: '#930089'
    }
})

export default Balls;