import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button,Alert, ImageBackground, TouchableOpacity, TextInput, ScrollView} from 'react-native';

import { Video } from 'expo-av';
import { Colors } from 'react-native/Libraries/NewAppScreen';





class FirstApp extends Component{

  constructor(props){
    super(props)
    this.state={
      sh:'Smart House App',
      UserName:'User',
      bienvenido:'¡Bienvenido!'
    }
  }


    intro (){
      Alert.alert('Video de como usar Smart-House')
    }
    serverconect (){
      Alert.alert('Conectando al servidor')
    }
    cambiarUsuario = ()=>{

    }



  render (){
    const{sh}=this.state
    const{bienvenido}=this.state
    let {UserName}=this.state


        return(
          <ImageBackground source={require('/Users/KEVIN GUZMAN/Desktop/React-JS/React-JS/Prueba2/media/Fondo3.jpg')} style={styles.Contenedor}>
            <ScrollView>

                  <View style={styles.header}>
                        <View style={styles.headerLeft}>
                          <Image source={require('/Users/KEVIN GUZMAN/Desktop/React-JS/React-JS/Prueba2/media/User.jpg')} style={styles.img}/>
                        </View>

                        <View style={[styles.headerRight]}>
                        <Button title= "Conectar al seridor" onPress={this.serverconect}/>
                        </View>
                  </View>
          
                  <View style={styles.negrita}>
                    <Text style={{fontSize:25}} onPress={this.intro} > 
                          {sh}
                    </Text>
                  </View>
                    

                  <View style={styles.negrita}>
                    <Text style={{fontSize:15}}  > 
                          {bienvenido}, {UserName}
                    </Text>
                  </View>


                  <View>
                    <TouchableOpacity style={styles.user}>

                      <TextInput placeholder="Nombre de usuario we XDXDXDXDXD:" onChangeText={(UserName) => this.setState({UserName})} 
                      placeholderTextColor="white" maxLength={18} 
                      style={{borderWidth:2, borderColor:'white', padding:6, marginTop:20}}>
                      </TextInput>

                    </TouchableOpacity>
                  </View>

                  <View style={styles.infvid}>
                    <Text style={{fontSize:20}}>
                      Video de inicio rápido
                    </Text>
                  </View>

                  <View style={styles.video}>
                            <Video
                              source={require('/Users/KEVIN GUZMAN/Desktop/React-JS/React-JS/Prueba2/media/video.mp4')}
                              rate={1.0}
                              volume={1.0}
                              isMuted={false}
                              resizeMode="cover"
                              useNativeControls={true}
                              shouldPlay={false}
                              isLooping
                              style={{ width: 250, height: 150 }}
                            />
                  </View>


                  <View style={styles.video}>
                            <Video
                              source={require('/Users/KEVIN GUZMAN/Desktop/React-JS/React-JS/Prueba2/media/video2.mp4')}
                              rate={1.0}
                              volume={1.0}
                              isMuted={false}
                              resizeMode="cover"
                              useNativeControls={true}
                              shouldPlay={false}
                              isLooping
                              style={{ width: 250, height: 150 }}
                            />
                  </View>


            </ScrollView>
          </ImageBackground>

        )
      }


}



const styles = StyleSheet.create({
  Contenedor:{
    flex:1,
    //flexDirection:'column'
    
    
  },

  infvid:{
    alignItems:'center',
    fontSize:10,
    fontWeight:'bold',
    marginTop:20

  },

  video:{
    flex:1,
    alignItems:'center',
    marginVertical:5

  },

  user:{
    marginHorizontal:25,
    marginVertical:1,
    //alignItems: 'center',
    fontWeight:'bold'
  },

  negrita: {
    alignItems: 'center',
    fontWeight:'bold',
    marginVertical:7
    

  },

  img:{
    width: 95,
    height:95,
    borderRadius:50,
    //resizeMode:'contain'
  },

  header:{
    flex:0.3,
    flexDirection:'row',
    marginVertical:32,
    //marginTop:35,
    marginHorizontal:10
    //marginRight:10
    
  
  },

  headerLeft:{
    flex:1,
    marginVertical:8,

  },

  headerRight:{
    flex:1,
    //marginTop:20,
    marginVertical:34,
  },

  body:{
    flex:1,
    alignItems: 'center'
  }
})

export default FirstApp

/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Buenas perrys, gordo gay:V</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
