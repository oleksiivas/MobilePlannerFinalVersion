
import AppButton from "../components/Button"
import { StyleSheet,
        Text,
        Image,
        SafeAreaView,
        TouchableWithoutFeedback,
        Alert,
        View } from 'react-native';


function AppLoadingPage() {
    
  const handleTitlePress = () => console.log("Title was pressed");
  const handleSubTitlePress = () => console.log("Subtitle was pressed");
  const handleLogoPress = () => console.log("Logo was pressed");
  const handleLogoLongPress = () => console.log("THAT IS LONG LOGO PREEEESSS");
  const pressButton = () => Alert.alert("Hey, handsome", "Do you really wanna press this button?",
  [
    {text: "Yes", onPress: () => console.log("You just pressed Yes")},
    {text: "No", onPress: () => console.log("You just pressed No")},
    {text: "Maybe", onPress: () => console.log("You just pressed Maybe")}
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handleLogoPress} onLongPress={handleLogoLongPress}>
        <Image style={styles.logo} source={require("../assets/appLogo.png")}/>  
      </TouchableWithoutFeedback>
      <Text style={styles.title} onPress={handleTitlePress}>Welcome to Mobile Planner!</Text>
      <Text style={styles.subtitle} onPress={handleSubTitlePress}>Let's make great plans!</Text>
      
      <View style={{
        flexDirection: 'column',
        justifyContent: 'space-between'
        // alignItems: 'flex-end'
      }}>
        <View>
        <AppButton 
        title='Proceed to Home Page' 
        onPress={pressButton}/></View>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: 'black',
      fontSize: 25,
      fontWeight: 'bold',
    }, 
    subtitle: {
      color: 'dodgerblue',
      fontSize: 20,
      fontWeight: 'bold',
    },
    logo: {
      width: 300,
      height: 300
    },
  });

export default AppLoadingPage;