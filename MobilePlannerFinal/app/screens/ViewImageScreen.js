import React from 'react';
import colors from '../config/colors';
import { Image,
         StyleSheet,
         View } from 'react-native';

function ViewImageScreen(props) {
    return (

        <View style={styles.container}>
            <View style={styles.closeIcon} />
            <View style={styles.deleteIcon} />
            <Image resizeMode='contain' style={styles.image} source={require("../assets/chair.jpg")} />
        </View>

    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%"
    },
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    closeIcon: {
        width: 60,
        height: 60,
        backgroundColor: colors.red,
        position: "absolute",
        top: 50,
        left: 20
    },
    deleteIcon: {
        width: 60,
        height: 60,
        backgroundColor: colors.yellow,
        position: "absolute",
        top: 50,
        right: 20
    }
})

export default ViewImageScreen;