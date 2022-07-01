import React,{useState, useEffect} from 'react';
import { TouchableOpacity, StyleSheet, Text} from 'react-native';

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
            <Text style={color==='yellow'?styles.textWhite:styles.text}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    bntAdd: {
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        margin: 8,
        boxSizing: "border-box",
        borderRadius: 30,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "white",
        position: 'absolute',
        top:-2

    },
    textWhite: {
        fontSize: 30,
        fontWeight: 'bold',
        
    },
    green:{
        backgroundColor: '#008000',
        color:'#eeeeee',
    },
    yellow:{
        backgroundColor: 'transparent',
        position: 'absolute',
        left:10,
        top:5,
        
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

export default List;