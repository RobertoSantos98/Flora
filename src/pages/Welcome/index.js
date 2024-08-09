import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native/'
import Icon from 'react-native-vector-icons/Feather';


export default function Welcome() {
  const navigation = useNavigation();

 return (
   <View style={styles.container}>


    <View style={styles.containerLogo}>
      <Animatable.Image
        style={styles.imgLogo}
        animation="flipInY"
        delay={200}
        source={require('../../assets/Logo.png')}
        resizeMode="container"
      />
    </View>

    <Animatable.View style={styles.circle1} delay={800} animation="fadeInLeft" >
        <Icon name="circle" size={330} color={"rgba(0, 153, 41, 0.3)"}/>
    </Animatable.View>
    <Animatable.View style={styles.circle2} delay={1000} animation="fadeInRight" >
        <Icon name="circle" size={350} color={"rgba(0, 153, 41, 0.5)"} />
    </Animatable.View>


    <Animatable.View delay={2000} animation="fadeInUp" style={styles.containerForm} onPress={animation="fadeInUp"}>
        <View>
          <Image style={styles.imgWelcome1} 
          source={require('../../assets/img-tela-welcome.png')}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('SignIn')}>
          <Text style={styles.buttonText}>Toque para continuar</Text>
        </TouchableOpacity>

    </Animatable.View>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },

  containerLogo:{
    flex:7,
    alignItems:'center',
  },

  containerForm:{
    flex:1,
    backgroundColor: 'rgba(0, 153, 41, 1)',
    borderRadius:25,
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '2%',
    alignItems:'center',

  },

  buttonText:{
    position:'absolute',
    flexDirection: 'column',
    fontWeight:'bold',
    fontSize: 24,
    alignSelf:'center',
    color:"#FFF",
    paddingTop: 25,
    
  },

  circle1:{
    position:'absolute',
    top:310,
    left:-190,
},

 circle2:{
  position:'absolute',
  top:400,
  right:-150,

},


})