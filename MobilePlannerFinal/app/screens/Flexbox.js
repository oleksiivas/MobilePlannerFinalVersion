import { View, StyleSheet, SafeAreaView } from 'react-native';

export default function FlexScreen() {

    return (
        <SafeAreaView style={{
            backgroundColor: "#fff",
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center', //main axis
            alignItems: 'center', // secondary axis
            flexWrap: "wrap",
            alignContent: "center"
        }}>
            <View style={{
                backgroundColor: "dodgerblue",
                width: 100,
                height: 100
            }} />
            <View style={{
                backgroundColor: "gold",
                width: 100,
                height: 100,
                top: 20,
                left: 20,
                position: "absolute"
            }} />
            <View style={{
                backgroundColor: "tomato",
                width: 100,
                height: 100
            }} />

        </SafeAreaView>
    );
}