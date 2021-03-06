import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import List from '../../utils/List';
import {styles} from '../../utils/Styles';

const Resultados = (props) => {
    const {caminho, color} = props;
    const [data, setData] = useState([]);
    const Results = async () =>{
        return fetch(caminho)
          .then((response) => response.json())
          .then((json) => {
            setData(json);
            return console.log(json);
          })
          .catch((error) => {
            console.error(error);
          });
      };
    useEffect(() => {
        setData(Results());
       }, []);
    return (
        <View style={styles.container}>
            {data&&<View>
                <Text>Último concurso: {data.concurso}</Text>
                <Text>Data: {data.data}</Text>
                {data.acumuladaProxConcurso&&<Text>Valor do próximo concurso: {data.acumuladaProxConcurso}</Text>}
                {data.acumulou&&<Text>Acumulou</Text>}
                <Text>Últimas dezenas sorteadas</Text>
                {data.dezenas&&<List numSorte={data.dezenas} color={color}/>}
                
            </View>}
              
        </View>
    );
}


export default Resultados;
