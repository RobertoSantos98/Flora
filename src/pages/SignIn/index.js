import React, { useRef, useMemo } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import BotomSheet from '@gorhom/bottom-sheet'
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {

  const navigation = useNavigation();
  const bottomSheetref = useRef(null);
  const snapPoints = useMemo(() => ["15%", "70%" ], []);

  const renderHeader = () => (
    <View style={{alignItems:'center', paddingVertical: 10}} >
      <Image source={require("../../assets/img-tela-welcome.png")} />
    </View>
  )

 return (
  <GestureHandlerRootView>

   <View style={styles.container}>

    <View style={styles.containerLogo}>
      <Animatable.Image
        style={styles.imgLogo}
        animation="fadeInUp"
        source={require('../../assets/Logo-tela-login.png')}
        resizeMode="container"
      />
    </View>

    <BotomSheet ref={bottomSheetref} index={0} snapPoints={snapPoints} backgroundStyle={{ backgroundColor: "#009929" }} handleComponent={renderHeader} >

        <View style={styles.containerForm}>
            <Text style={styles.facaLogin} >Faça o Login</Text>
          </View>
            
            <Animatable.View style={styles.circle1} delay={700} animation="fadeInLeft" >
            <Icon name="circle" size={320} color={"rgba(9, 42, 6, 0.5)"}/>
            </Animatable.View>
            <Animatable.View style={styles.circle2} delay={900} animation="fadeInRight" >
            <Icon name="circle" size={400} color={"rgba(9, 42, 6, 0.3)"} />
            </Animatable.View>

            <View  style={styles.Form} >


            <TextInput placeholder='Digite o Usuário...' style={styles.input}/>
            <TextInput placeholder='Digite a Senha...' style={styles.input}/>

            <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Menu')} >
              <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonRegister} >
              <Text style={styles.registerText}>Não possui uma conta? Fale com o seu Supervisor.</Text>
            </TouchableOpacity>

            </View>
            
    </BotomSheet>


   </View>
   
   </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
    container:{
      flex:1,

    },

    containerLogo:{
      flex:2,
      alignItems:'center',
    },

    facaLogin:{
      fontSize:24,
      color: 'white',
      fontWeight: 'bold',
      paddingBottom:20,
      paddingTop:15
    },

    containerForm:{
      backgroundColor: 'rgba(0, 153, 41, 1)',
      borderTopLeftRadius:25,
      borderTopRightRadius: 25,
      paddingStart: '5%',
      paddingEnd: '5%',
      paddingTop: 10,
      alignItems:'center',
    },
    Form:{
      paddingStart: '5%',
      paddingEnd: '5%',
      alignItems:'center',
    },

    input:{
      backgroundColor: 'white',
      color:'black',
      marginTop:24,
      fontSize:18,
      borderWidth:1,
      borderRadius:10,
      width:'100%',
      height:50,
      justifyContent:'center',
      paddingLeft:10,
    },

    button:{
      backgroundColor:'#C7EB7A',
      borderWidth:1,
      borderRadius:10,
      paddingVertical:8,
      paddingHorizontal:24,
      marginTop:36,
    },
    buttonText:{
      fontWeight:'bold',
    },
    registerText:{
      marginTop:24,
      color:'white'
    },

    circle1:{
      position:'absolute',
      top:0,
      left:-190,
  },
  
   circle2:{
    position:'absolute',
    top:100,
    right:-150,
  
  },
  textLogin:{
    fontSize:24,
    color: 'white',
    fontWeight: 'bold',
    marginTop:14,
  }

})