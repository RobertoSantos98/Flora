import { View, Text , TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

export default function TabBar() {
 return (
   <View style={styles.container} >

        <TouchableOpacity>
            <View style={styles.botaoOpcoes} >
                <Icon name='arrow-left' size={25} />
                <Text>Voltar</Text>
            </View>
        </TouchableOpacity>

        <View style={styles.botaoPerfil} >
                <TouchableOpacity>
                    <View style={{ backgroundColor: "#FFFFFF", borderRadius:70, justifyContent:'center', alignItems:'center', width:100, height:100, marginHorizontal:10, marginVertical:10 }} >
                        <View style={{ backgroundColor: "#0099C5", borderRadius:70, paddingHorizontal:10, paddingVertical:10 }} >
                            <Icon name='user' size={30} color={"#FFF"}/>
                        </View>
                        <Text>Meu Perfil</Text>
                    </View>
                </TouchableOpacity>
        </View>

        <TouchableOpacity>
            <View style={styles.botaoOpcoes} >
                <Icon name='settings' size={25} />
                <Text>Configurações</Text>
            </View>
        </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:"100%",
        height:80,
        backgroundColor:"#C7EB7A",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:24,
        bottom:0
    },
    botaoPerfil:{
        backgroundColor:'#C7EB7A',
        borderRadius:70,
        bottom:24,
        alignContent:'center'
    },
    botaoOpcoes:{
        alignItems:'center',
        width:150,

    }
})