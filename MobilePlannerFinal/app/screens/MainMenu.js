import AppButton from "../components/AppButton";
import { View } from 'react-native';

function MainMenuPage() {

    const handlePlansButton = () => console.log("Plans Button was Pressed");
    const handleHabitsButton = () => console.log("Habbits Button was Pressed");
    const handleEncouragementLettersButton = () => console.log("Enc. Letters Button was Pressed");
    const handleExitButton = () => console.log("Exit Button was Pressed");

  return (
    
    <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft:20,
        paddingRight: 20
      }}>

        <View>
        <AppButton 
        title='Three week Plans' 
        onPress={handlePlansButton}/></View>

        <View>
        <AppButton
        title='Habbits Page' 
        onPress={handleHabitsButton}/></View>

        <View>
        <AppButton
        title='Personal Letters' 
        onPress={handleEncouragementLettersButton}/></View>

        <View>
        <AppButton
        title='Exit' 
        onPress={handleExitButton}/></View>

      </View>
  );
}


export default MainMenuPage;