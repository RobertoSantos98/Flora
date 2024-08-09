
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import BotomSheet from '@gorhom/bottom-sheet';
import { useForm, Controller } from 'react-hook-form'

import Header from '../../components/Header';
import TabBar from '../../components/TabBar';
import { useRef, useMemo, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



export default function Formulario() {


    const [ formulario, setFormulario] = useState ({
            local: '',
            endereco: '',
            bairro: '',
            setor: '',
            areaProtecaoAmbiental: '',
            exemplarArboreoIdentificado: [ ]
    });
    const { handleSubmit, control, reset } = useForm({
        defaultValues: {
                n: '',
                nomePopular: '',
                nomeCientifico: '',
                nativaExotica: '',
                altura: '',
                fuste: '',
                dap: '',
                condicaoFito: '',
                influenciaUrbana: '',
                observacoes: ''
        }
    });
    const onSubmit = data => {
        setFormulario(prevState => ({
            ...prevState,
            exemplarArboreoIdentificado: [...prevState.exemplarArboreoIdentificado, data]
        }));
        reset();
    }

    const handleMainSubmit = () => {

    }



     const bottomSheetref = useRef(null);
     const snapPoints = useMemo(() => ["30%", "90%"], []);


     const handleCloseAction = () => bottomSheetref.current?.close();
     const handleOpenPress = () => bottomSheetref.current?.expand();

     const handlePress = () => {
        handleSubmit(onSubmit)();
        handleCloseAction();
      };

 return (
    <GestureHandlerRootView>
   <View style={{flex:1}} >
    <Header/>

    <ScrollView>
        <View style={styles.titleUm} >
            <Text style={styles.titleTextUm} >Formulário</Text>
        </View>
        <View style={{marginHorizontal:12, marginVertical: 8}} >
            <View>
                <Text style={{fontWeight:'bold'}} >Local/Praça:</Text>
                <TextInput style={styles.input} value={formulario.local} onChangeText={text => setFormulario(prevState => ({...prevState,local: text}) ) } />
            </View>
            <View>
                <Text style={{fontWeight:'bold'}} >Endereço:</Text>
                <TextInput style={styles.input} value={formulario.endereco} />
            </View>
            <View>
                <Text style={{fontWeight:'bold'}} >Bairro:</Text>
                <TextInput style={styles.input} value={formulario.bairro} />
            </View>
            <View>
                <Text style={{fontWeight:'bold'}} >Setor:</Text>
                <TextInput style={styles.input} value={formulario.setor} />
            </View>
            <View>
                <Text style={{fontWeight:'bold'}} >Area de Proteção Ambiental:</Text>
                <TextInput style={styles.input} value={formulario.areaProtecaoAmbiental } />
            </View>
        </View>

        <View style={styles.titleDois} >
            <Text style={styles.titleTextDois} >Exemplares Arbóreos Identificados</Text>
            <TouchableOpacity onPress={handleOpenPress} >
                <View style={{backgroundColor:"#6FFC2D", width:40, height:40, alignItems:'center', justifyContent:'center', borderRadius:10, elevation:10}} >
                    <Icon name='plus' color={'#FFF'} size={30} />
                </View>
            </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center', marginHorizontal:10}} >

              {formulario.exemplarArboreoIdentificado.map((exemplar, index) => (
                <View key={index} style={styles.exemplarContainer} >
                    <Text style={{fontSize: 24, fontWeight: 'bold'}} >Exemplar {exemplar.n} </Text>
                    <TouchableOpacity>
                        <Text style={styles.exemplarEditar} >Editar</Text>
                    </TouchableOpacity>
                </View>

              ))}
            
        </View>

        <TouchableOpacity style={{alignItems:'center', marginHorizontal:18}} onPress={handleMainSubmit} >
                <View style={{backgroundColor:"#6FFC2D", width:"90%", paddingVertical:10, marginVertical:10, alignItems:'center',borderWidth:1, borderRadius:10 }}>
                    <Text style={{color: "#009929", fontSize:18}} >Salvar</Text>
                </View>
        </TouchableOpacity>

    </ScrollView>

    <TabBar/>

    <BotomSheet  ref={bottomSheetref} index={-1} snapPoints={snapPoints} enablePanDownToClose={true} backgroundStyle={{backgroundColor: "#c8c8c8"}} >
        <Text style={{fontSize:18, fontWeight: 'bold', alignSelf: 'center'}} >Adicionar Exemplar</Text>

        <ScrollView>

        <View style={{marginHorizontal:12, marginVertical: 8}}>
            <View>
                <Text style={{fontWeight:'bold'}} >N°:</Text>
                <Controller
                control={control}
                name='n'
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput style={styles.input}
                        placeholder="N° de Identificação"
                        keyboardType='numeric'
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                ) }
                />
            </View>
            <View>
                <Text style={{fontWeight:'bold'}} >Nome Popular:</Text>
                <Controller
                control={control}
                name='nomePopular'
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput style={styles.input}
                        placeholder="Nome Popular"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                ) }
                />
            </View>
            <View>
                <Text style={{fontWeight:'bold'}} >Nome Científico:</Text>
                <Controller
                control={control}
                name='nomeCientifico'
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput style={styles.input}
                        placeholder="Nome Científico"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                ) }
                />
            </View>
            <View>
                <Text style={{fontWeight:'bold'}} >Nativa ou Exótica:</Text>
                <Controller
                control={control}
                name='nativaExotica'
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput style={styles.input}
                        placeholder="Nativa ou Exótica"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                ) }
                />
            </View>
            <View>
                <Text style={{fontWeight:'bold'}} >Altura:</Text>
                <Controller
                control={control}
                name='altura'
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput style={styles.input}
                        placeholder="Altura do Exemplar"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                ) }
                />
            </View>
            <View>
                <Text style={{fontWeight:'bold'}} >Fuste:</Text>
                <Controller
                control={control}
                name='fuste'
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput style={styles.input}
                        placeholder="Fuste"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                ) }
                />
            </View>
            <View>
                <Text style={{fontWeight:'bold'}} >DAP:</Text>
                <Controller
                control={control}
                name='dap'
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput style={styles.input}
                        placeholder="DAP"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                ) }
                />
            </View>
            <View>
                <Text style={{fontWeight:'bold'}} >Condição Fitossanitária:</Text>
                <Controller
                control={control}
                name='condicaoFito'
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput style={styles.input}
                        placeholder="Condição Fitossanitária"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                ) }
                />
            </View>
            <View>
                <Text style={{fontWeight:'bold'}} >Influência Urbana:</Text>
                <Controller
                control={control}
                name='influenciaUrbana'
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput style={styles.input}
                        placeholder="Influencia Urbana"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                ) }
                />
            </View>
            <View>
                <Text style={{fontWeight:'bold'}} >Obsevações:</Text>
                <Controller
                control={control}
                name='observacoes'
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput style={styles.input}
                        placeholder="Observações"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                ) }
                />
            </View>
            <TouchableOpacity style={{alignItems:'center'}} onPress={handlePress} >
                <View style={styles.botaoSalvar}>
                    <Text style={{color: "#FFF", fontSize:18}} >Salvar</Text>
                </View>
            </TouchableOpacity>
        </View>
        
        </ScrollView>

    </BotomSheet>


   </View>
   
   </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
    titleUm:{
        backgroundColor:'#009929',
        width:'100%',
        alignItems:'center'
    },
    titleTextUm:{
        fontSize:24,
        paddingVertical:10,
        color:'white',
        fontWeight:'bold'
    },
    input:{
        backgroundColor: 'white',
        color:'black',
        fontSize:18,
        borderWidth:1,
        borderRadius:10,
        width:'100%',
        height:50,
        justifyContent:'center',
        paddingLeft:10,
    },
    titleDois:{
        backgroundColor:'#009929',
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        paddingVertical:10
    },
    titleTextDois:{
        fontSize:20,
        paddingVertical:10,
        color:'white',
        fontWeight:'bold',
    },
    botaoSalvar:{
        width:'80%',
        height:40,
        backgroundColor:"#009929",
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,

    },
    exemplarContainer:{
        width:'100%',
        height: 60,
        flexDirection: 'row',
        marginTop: 12,
        backgroundColor: "#FFF",
        borderRadius: 10,
        borderWidth:1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:10,
    },
    exemplarEditar:{
        backgroundColor: "#6FFC2D",
        color: "#FFF",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
        fontWeight: 'bold'
    }
})