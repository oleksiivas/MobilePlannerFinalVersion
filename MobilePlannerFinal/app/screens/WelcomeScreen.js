import React from 'react';
import colors from '../config/colors';
import AppButton from "../components/Button";
import routes from "../navigation/routes";

import { ImageBackground,
         StyleSheet,
         View,
         Image,
         Text } from 'react-native';

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground
            blurRadius={5}
            style={styles.background}
            source={require("../assets/background1.jpg")}>
        
        <View style={styles.logoContatiner}>
            <Image style={styles.logo} source={require("../assets/appLogo.png")}/>
            <Text style={styles.title}>Let's make great plans!</Text>
        </View>

        <AppButton title="Login"
            onPress={() => navigation.navigate(routes.LOGIN)} />
        <AppButton title="Register"
            onPress={() => navigation.navigate(routes.REGISTER)} color='black' />
        <AppButton title="Proceed to Home Page"
            onPress={() => navigation.navigate(routes.LISTINGS)} color='secondary' />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
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