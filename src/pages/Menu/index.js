import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Header from '../../components/Header';
import TabBar from '../../components/TabBar';
import { useNavigation } from '@react-navigation/native';

export default function Menu() {

    const navigation = useNavigation();

 return (
   <View style={styles.container} >
        <Header/>
        <View style={styles.content1} >
            <Text style={styles.textWelcome} >Olá, Raphael!</Text>
            <View style={styles.boxWelcome} >
                <View style={styles.boxLadoEsquerdo} >
                    <Text style={{ fontSize:14, fontWeight: '900' }} >Dados Compartilhados para toda a População</Text>
                    <TouchableOpacity style={{ backgroundColor: "#009929", borderRadius:20 }} >
                        <Text style={{fontSize:16, fontWeight: 'bold', color:'white', marginHorizontal:8, marginVertical:8 }} >Acesse o Portal</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Image source={require('../../assets/boxWelcome-icon.png')} />
                </View>
            </View>
            <View>
                <View style={{flexDirection:'row', justifyContent: 'space-around'}} >
                    <TouchableOpacity style={styles.botaoMenu} onPress={ () => navigation.navigate("Formulario") } >
                        <Icon name='file-text' size={80} />
                        <Text style={styles.textMenu} >Formulário</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoMenu}>
                        <Icon name='upload-cloud' size={80}/>
                        <Text style={styles.textMenu} >Dados Enviados</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', justifyContent: 'space-around'}} >
                    <TouchableOpacity style={styles.botaoMenu} >
                        <Icon name='trello' size={80} />
                        <Text style={styles.textMenu} >DashBoard</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoMenu}>
                        <Icon name='users' size={80}/>
                        <Text style={styles.textMenu} >Social</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

        <TabBar/>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    content1:{
        marginHorizontal:20,
        marginVertical:24,
        gap:16,

    },
    textWelcome:{
        fontSize:24,
        fontWeight:'bold',
        elevation:10
    },
    boxWelcome:{
        backgroundColor:"#C7EB7A",
        width:'100%',
        height:150,
        borderRadius:20,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical:10
    },
    boxLadoEsquerdo:{
        width: 225,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
        paddingVertical: 10,
    },
    botaoMenu:{
        backgroundColor:"#EEEEEE",
        paddingVertical:10,
        paddingHorizontal:10,
        gap:10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10,
        width:180,
        height:200,
    },
    textMenu:{
        fontSize:16,
        fontWeight:'bold'
    },

})