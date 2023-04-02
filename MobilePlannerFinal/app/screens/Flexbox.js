import { View, StyleSheet, SafeAreaView } from 'react-native';

export default function FlexScreen() {

    return (
        <SafeAreaView style={{
            backgroundColor: "#fff",
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={{
                backgroundColor: "dodgerblue",
                width: 100,
                height: 300
            }} />
            <View style={{
                backgroundColor: "gold",
                width: 100,
                height: 200
            }} />
            <View style={{
                backgroundColor: "tomato",
                width: 100,
                height: 100
            }} />

        </SafeAreaView>
    );
}