import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function Header() {
 return (
   <View>
      <View style={styles.container} >
          <TouchableOpacity>
              <Icon name='menu' size={50} color={"#C7EB7A"}/>
          </TouchableOpacity>
          <Image source={require('../../assets/Logo-icon.png')} />

          <TouchableOpacity>
          <Icon name='bell' size={50} color={"black"}/>
          </TouchableOpacity>
      </View>
     
     <View style={styles.line} />

   </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 12,
      marginRight:12,
      marginVertical: 14
    },
    line:{
      height:1,
      width:"100%",
      backgroundColor:'black'
    }
})