import React from 'react';
import colors from '../config/colors';
import { ImageBackground,
         StyleSheet,
         View,
         Image,
         Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/background1.jpg")}>
        
        <View style={styles.logoContatiner}>
            <Image style={styles.logo} source={require("../assets/appLogo.png")}/>
            <Text style={styles.title}>Let's make great plans!</Text>
        </View>

        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    loginButton: {
        width: "100%",
        height: 80,
        backgroundColor: colors.blue
    },
    registerButton: {
        width: "100%",
        height: 80,
        backgroundColor: colors.black
    },
    logo : {
        width: 200,
        height: 200,
    },
    logoContatiner: {
        position: "absolute",
        top: 100,
        alignItems: "center"
    },
    title: {
        color: colors.white,
        fontSize: 25,
        fontWeight: 'bold', 
    }
})

export default WelcomeScreen;