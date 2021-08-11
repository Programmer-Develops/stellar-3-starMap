import React, {Component} from 'react';
import {Text,View,SafeAreaView,StyleSheet,TouchableOpacity,StatusBar,Platform,ImageBackground,Image} from 'react-native'

export default class HomeScreen extends Component{
    render(){
        return(
          <View>
            <SafeAreaView style = {styles.droidSafeArea}/>
            <Image source={require("../assets/main-icon.png")} style = {width = 100,height = 100,marginTop=100}></Image>
            <ImageBackground source = {require("../assets/stars.gif")}  style = {styles.backgroundImage}>
             <View style={styles.titleBar}>
                <Text style={styles.titleText}>Home Screen</Text>
             </View>
             <TouchableOpacity
            style={styles.routeCard}
            onPress={() => {
              this.props.navigation.navigate('SpaceCraft');
            }}>
            <Text style={styles.routeText}>Space Crafts</Text>

            <Image
              source={require('../space_crafts.png')}
              style={styles.routeImage}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('StarMap')}>
            <Text style={styles.routeText}>Star Map</Text>
            <Image
              source={require('../star_map.png')}
              style={styles.routeImage}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('DailyPic')}>
            <Text style={styles.routeText}>Daily Pictures</Text>
            <Image
              source={require('../daily_pictures.png')}
              style={styles.routeImage}></Image>
          </TouchableOpacity>

            </ImageBackground>
          </View>

        )
    }
}

const style = StyleSheet.create({
    droidSafeArea:{
        marginTop:Platform.OS === "android" ? StatusBar.currentHeight:0
    },

    titleBar: {
        flex:0.15,
        justifyContent:"center",
        alignItems:"center"
    },

    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white" 
       },
})