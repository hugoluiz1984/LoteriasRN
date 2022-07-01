import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import List from '../../utils/List';

const Resultados = (props) => {
    const {caminho} = props;
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
                {data.dezenas&&<List numSorte={data.dezenas} color='gray'/>}
                
            </View>}
              
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-end',
    alignContent:'flex-end',
  }
})

export default Resultados;
