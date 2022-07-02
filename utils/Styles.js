import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex:1,
        alignItems: "center",
    },
    botoes:{
            display: 'flex',
            flexDirection: 'row',
            alignItems: "center",
            justifyContent: "center",
            margin:5,
    },
    textoQdt:{
            fontSize:20,
            width:30,
            textAlign: "center",
            alignItems: "center",
    },
    title:{
        fontFamily: "Roboto",
        fontSize:40,
        fontWeight:'bold',
        textAlign: "center",
        margin: 10,
    },
    subTitle:{
        fontFamily: "Roboto",
        fontSize:20,
        fontWeight:'bold',
        textAlign: "center",
    },    
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
    },
    yellow:{
        backgroundColor: 'transparent',
        position: 'absolute',
        left:10,
        top:7,
    },
    textColorGreen: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#008000",
    },
    textColorBlue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#0000FF",
    },
    textColorPurple: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#930089",
    },
    textColorOrange: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#f78100",
    },
    list: {
        display: "flex",
        flex:1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    textWhite: {
        fontSize: 30,
        fontWeight: 'bold',
        
    },
    results: {
        display: 'flex',
        flex: 1,
        alignItems: 'flex-end',
        alignContent:'flex-end',
      }
    
});